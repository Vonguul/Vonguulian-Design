import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { useLocation } from 'wouter';

interface MusicContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  isLoading: boolean;
  currentTrack: string | null;
  loadingProgress: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

const TRACK_MAP: Record<string, string> = {
  '/about': '/assets/music/birthwrit.wav',
  '/history': '/assets/music/war_of_the_profits.wav',
  '/health': '/assets/music/demons.wav',
  '/future': '/assets/music/remember_me.wav',
  '/catalog': '/assets/music/intuition.wav',
};

const DEFAULT_VOLUME = 0.1; // 10%
const FADE_DURATION = 2000; // 2 seconds for smooth transition

export function MusicProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('vonguul-music-muted');
    return saved === 'true';
  });
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  
  // Dual audio elements for crossfading
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const currentAudioRef = useRef<'audio1' | 'audio2'>('audio1');
  
  // Independent fade intervals per audio element to prevent interference
  const fadeIntervalsMap = useRef<Map<HTMLAudioElement, NodeJS.Timeout>>(new Map());
  const hasInteracted = useRef(false);
  
  // Store current volume/mute state in refs so interval callbacks can read latest values
  const volumeRef = useRef(volume);
  const isMutedRef = useRef(isMuted);
  
  // Store preloaded audio objects to prevent garbage collection
  const preloadedAudio = useRef<Map<string, HTMLAudioElement>>(new Map());
  const preloadingInProgress = useRef<Set<string>>(new Set());
  
  // Update refs whenever state changes so interval callbacks see latest values
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);
  
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Initialize dual audio elements
  useEffect(() => {
    const audio1 = new Audio();
    const audio2 = new Audio();
    
    audio1.loop = true;
    audio2.loop = true;
    audio1.volume = 0;
    audio2.volume = 0;
    
    audioRef1.current = audio1;
    audioRef2.current = audio2;

    // Handle user interaction requirement for autoplay
    const handleFirstInteraction = () => {
      hasInteracted.current = true;
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      audio1.pause();
      audio2.pause();
      audio1.src = '';
      audio2.src = '';
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      // Clear all fade intervals
      fadeIntervalsMap.current.forEach(interval => clearInterval(interval));
      fadeIntervalsMap.current.clear();
      // Clean up preloaded audio
      preloadedAudio.current.forEach(audio => {
        audio.src = '';
      });
      preloadedAudio.current.clear();
    };
  }, []);

  // Preload current track and adjacent tracks intelligently
  useEffect(() => {
    const currentTrackUrl = TRACK_MAP[location];
    if (!currentTrackUrl) return;

    // Preload current track immediately
    preloadTrack(currentTrackUrl);

    // Get all routes
    const routes = Object.keys(TRACK_MAP);
    const currentIndex = routes.indexOf(location);
    
    // Preload adjacent routes (likely to be visited next) with delay
    const preloadAdjacentTracks = setTimeout(() => {
      if (currentIndex > 0) {
        const prevRoute = routes[currentIndex - 1];
        preloadTrack(TRACK_MAP[prevRoute]);
      }
      if (currentIndex < routes.length - 1) {
        const nextRoute = routes[currentIndex + 1];
        preloadTrack(TRACK_MAP[nextRoute]);
      }
    }, 3000); // Wait 3 seconds before preloading adjacent tracks

    return () => clearTimeout(preloadAdjacentTracks);
  }, [location]);

  const preloadTrack = (trackUrl: string) => {
    // Skip if already preloaded or currently preloading
    if (preloadedAudio.current.has(trackUrl) || preloadingInProgress.current.has(trackUrl)) {
      return;
    }

    preloadingInProgress.current.add(trackUrl);
    const preloadAudio = new Audio();
    preloadAudio.preload = 'auto';
    preloadAudio.src = trackUrl;
    
    const handleCanPlay = () => {
      preloadedAudio.current.set(trackUrl, preloadAudio);
      preloadingInProgress.current.delete(trackUrl);
    };

    const handleError = () => {
      preloadingInProgress.current.delete(trackUrl);
    };

    preloadAudio.addEventListener('canplaythrough', handleCanPlay, { once: true });
    preloadAudio.addEventListener('error', handleError, { once: true });
    preloadAudio.load();
  };

  // Handle route changes and track switching
  useEffect(() => {
    const newTrack = TRACK_MAP[location];
    
    if (newTrack !== currentTrack) {
      if (newTrack) {
        loadAndPlayTrack(newTrack);
      } else {
        // No track for this route, fade out current
        const currentAudio = currentAudioRef.current === 'audio1' ? audioRef1.current : audioRef2.current;
        if (currentAudio && isPlaying) {
          fadeOut(currentAudio, () => {
            currentAudio.pause();
            setIsPlaying(false);
          });
        }
        setCurrentTrack(null);
      }
    }
  }, [location]);

  // Handle mute toggle - directly set volume on active audio and clear all fades
  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    
    // Clear all active fade intervals to prevent them from overwriting mute state
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;
    
    if (audio1) {
      const interval1 = fadeIntervalsMap.current.get(audio1);
      if (interval1) {
        clearInterval(interval1);
        fadeIntervalsMap.current.delete(audio1);
      }
      // If this audio was fading out during crossfade, pause it now
      if (!audio1.paused && audio1.volume < 0.01) {
        audio1.pause();
        audio1.volume = 0;
      }
    }
    
    if (audio2) {
      const interval2 = fadeIntervalsMap.current.get(audio2);
      if (interval2) {
        clearInterval(interval2);
        fadeIntervalsMap.current.delete(audio2);
      }
      // If this audio was fading out during crossfade, pause it now
      if (!audio2.paused && audio2.volume < 0.01) {
        audio2.pause();
        audio2.volume = 0;
      }
    }
    
    // Set volume on both elements to respect mute state
    const currentAudio = currentAudioRef.current === 'audio1' ? audio1 : audio2;
    const otherAudio = currentAudioRef.current === 'audio1' ? audio2 : audio1;
    
    if (newMuted) {
      // Mute: set both to 0 immediately
      if (audio1) audio1.volume = 0;
      if (audio2) audio2.volume = 0;
    } else {
      // Unmute: restore volume with fade-in on active audio
      if (currentAudio && !currentAudio.paused) {
        fadeIn(currentAudio);
      }
      // Ensure other audio stays at 0
      if (otherAudio) {
        otherAudio.volume = 0;
      }
    }
    
    localStorage.setItem('vonguul-music-muted', String(newMuted));
  };

  const loadAndPlayTrack = async (trackUrl: string) => {
    // If same track is already playing, do nothing
    if (currentTrack === trackUrl && isPlaying) {
      return;
    }

    setIsLoading(true);
    setLoadingProgress(0);
    setCurrentTrack(trackUrl);

    // Get the inactive audio element for crossfade
    const nextAudio = currentAudioRef.current === 'audio1' ? audioRef2.current : audioRef1.current;
    const currentAudio = currentAudioRef.current === 'audio1' ? audioRef1.current : audioRef2.current;

    if (!nextAudio) return;

    // Load new track into inactive audio element
    nextAudio.src = trackUrl;
    nextAudio.volume = 0;
    
    // Track loading progress
    let progressHandler: (() => void) | null = null;
    progressHandler = () => {
      if (nextAudio.buffered.length > 0) {
        const bufferedEnd = nextAudio.buffered.end(nextAudio.buffered.length - 1);
        const duration = nextAudio.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(progress);
        }
      }
    };
    
    // Wait for enough data to be loaded
    const handleCanPlayThrough = async () => {
      setIsLoading(false);
      setLoadingProgress(100);
      
      // Clean up progress listener
      if (progressHandler) {
        nextAudio.removeEventListener('progress', progressHandler);
      }
      
      // Only auto-play if user has interacted
      if (hasInteracted.current) {
        try {
          // Start playing new track
          await nextAudio.play();
          
          // Crossfade: fade in new track while fading out old track
          if (currentAudio && !currentAudio.paused) {
            crossfade(currentAudio, nextAudio);
          } else {
            // No current track playing, just fade in
            if (!isMuted) {
              fadeIn(nextAudio);
            } else {
              nextAudio.volume = 0; // Keep muted
            }
          }
          
          // Switch current audio reference
          currentAudioRef.current = currentAudioRef.current === 'audio1' ? 'audio2' : 'audio1';
          setIsPlaying(true);
        } catch (error) {
          console.log('Playback prevented:', error);
          setIsPlaying(false);
        }
      }
    };

    nextAudio.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });
    if (progressHandler) {
      nextAudio.addEventListener('progress', progressHandler);
    }
    nextAudio.load();
  };

  const crossfade = (oldAudio: HTMLAudioElement, newAudio: HTMLAudioElement) => {
    // Clear any existing fade intervals for both audio elements
    const oldInterval = fadeIntervalsMap.current.get(oldAudio);
    if (oldInterval) {
      clearInterval(oldInterval);
      fadeIntervalsMap.current.delete(oldAudio);
    }
    const newInterval = fadeIntervalsMap.current.get(newAudio);
    if (newInterval) {
      clearInterval(newInterval);
      fadeIntervalsMap.current.delete(newAudio);
    }

    const steps = 40; // More steps for smoother crossfade
    const stepDuration = FADE_DURATION / steps;
    const oldStartVolume = oldAudio.volume;
    
    newAudio.volume = 0;

    // Independent fade out for old audio
    let oldStep = 0;
    const oldInterval1 = setInterval(() => {
      oldStep++;
      const progress = oldStep / steps;
      oldAudio.volume = Math.max(oldStartVolume * (1 - progress), 0);

      if (oldStep >= steps) {
        clearInterval(oldInterval1);
        fadeIntervalsMap.current.delete(oldAudio);
        oldAudio.pause();
        oldAudio.volume = 0;
      }
    }, stepDuration);

    // Independent fade in for new audio - reads latest volume/mute state from refs each tick
    let newStep = 0;
    const newInterval1 = setInterval(() => {
      newStep++;
      const progress = newStep / steps;
      // Read latest mute and volume state from refs each tick
      const currentTargetVolume = isMutedRef.current ? 0 : volumeRef.current;
      newAudio.volume = Math.min(currentTargetVolume * progress, currentTargetVolume);

      if (newStep >= steps) {
        clearInterval(newInterval1);
        fadeIntervalsMap.current.delete(newAudio);
        // Set final volume based on current state from refs
        newAudio.volume = isMutedRef.current ? 0 : volumeRef.current;
      }
    }, stepDuration);
    
    // Store independent intervals for each audio element
    fadeIntervalsMap.current.set(oldAudio, oldInterval1);
    fadeIntervalsMap.current.set(newAudio, newInterval1);
  };

  const fadeIn = (audio: HTMLAudioElement) => {
    // Clear any existing fade interval for this audio element
    const existingInterval = fadeIntervalsMap.current.get(audio);
    if (existingInterval) {
      clearInterval(existingInterval);
      fadeIntervalsMap.current.delete(audio);
    }

    const steps = 40;
    const stepDuration = FADE_DURATION / steps;
    let currentStep = 0;

    audio.volume = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Read latest volume state from ref each tick (mute state should be false if fadeIn is called)
      const currentTargetVolume = volumeRef.current;
      const newVolume = (currentTargetVolume / steps) * currentStep;
      
      audio.volume = Math.min(newVolume, currentTargetVolume);

      if (currentStep >= steps) {
        clearInterval(interval);
        fadeIntervalsMap.current.delete(audio);
        audio.volume = volumeRef.current; // Set final volume based on current state from ref
      }
    }, stepDuration);
    
    fadeIntervalsMap.current.set(audio, interval);
  };

  const fadeOut = (audio: HTMLAudioElement, callback?: () => void) => {
    // Clear any existing fade interval for this audio element
    const existingInterval = fadeIntervalsMap.current.get(audio);
    if (existingInterval) {
      clearInterval(existingInterval);
      fadeIntervalsMap.current.delete(audio);
    }

    const startVolume = audio.volume;
    const steps = 40;
    const stepDuration = FADE_DURATION / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newVolume = startVolume - (startVolume / steps) * currentStep;
      
      audio.volume = Math.max(newVolume, 0);

      if (currentStep >= steps) {
        clearInterval(interval);
        fadeIntervalsMap.current.delete(audio);
        if (callback) callback();
      }
    }, stepDuration);
    
    fadeIntervalsMap.current.set(audio, interval);
  };

  const togglePlay = async () => {
    if (!currentTrack) return;

    hasInteracted.current = true;
    
    const currentAudio = currentAudioRef.current === 'audio1' ? audioRef1.current : audioRef2.current;
    if (!currentAudio) return;

    if (isPlaying) {
      fadeOut(currentAudio, () => {
        currentAudio.pause();
        setIsPlaying(false);
      });
    } else {
      try {
        await currentAudio.play();
        setIsPlaying(true);
        if (!isMuted) {
          fadeIn(currentAudio);
        }
      } catch (error) {
        console.log('Playback failed:', error);
      }
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    
    // Update volume of currently playing audio immediately if not muted
    if (!isMuted) {
      const currentAudio = currentAudioRef.current === 'audio1' ? audioRef1.current : audioRef2.current;
      if (currentAudio && !currentAudio.paused) {
        currentAudio.volume = newVolume;
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        volume,
        isLoading,
        currentTrack,
        loadingProgress,
        togglePlay,
        toggleMute,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
