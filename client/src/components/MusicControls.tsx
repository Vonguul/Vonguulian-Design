import { useState } from 'react';
import { Music, Volume2, VolumeX, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { useMusic } from '@/contexts/MusicContext';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function MusicControls() {
  const { isPlaying, isMuted, volume, isLoading, currentTrack, loadingProgress, togglePlay, toggleMute, setVolume } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);

  // Don't show controls if there's no track for this page
  if (!currentTrack) {
    return null;
  }

  return (
    <div className="flex flex-col items-end gap-2">
      {/* Main control panel */}
      <div className="bg-black/90 dark:bg-black/90 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-lg">
        <div className="flex items-center gap-2">
          {/* Play/Pause button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-primary hover:text-primary/80 hover:bg-primary/10 h-9 w-9"
            data-testid="button-music-toggle"
            title={isPlaying ? "Pause music" : "Play music"}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Music className={`h-5 w-5 ${isPlaying && !isMuted ? 'fill-primary' : ''}`} />
            )}
          </Button>

          {/* Expand/Collapse button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 hover:bg-primary/10 h-9 w-9"
            data-testid="button-expand-controls"
            title={isExpanded ? "Hide controls" : "Show controls"}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Expanded controls */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-primary/20 space-y-3 min-w-[200px]">
            {/* Loading progress */}
            {isLoading && (
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-primary/80">Loading</span>
                  <span className="text-xs text-primary/80">{Math.round(loadingProgress)}%</span>
                </div>
                <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Volume control */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-primary/80">Volume</span>
                <span className="text-xs text-primary/80">
                  {Math.round(isMuted ? 0 : volume * 100)}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={(values) => {
                    const newVolume = values[0] / 100;
                    setVolume(newVolume);
                    if (newVolume > 0 && isMuted) {
                      toggleMute();
                    }
                  }}
                  max={100}
                  step={1}
                  className="flex-1"
                  data-testid="slider-volume"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 h-8 w-8"
                  data-testid="button-mute-toggle"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
