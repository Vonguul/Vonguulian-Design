import { useEffect } from 'react';
import { useLocation } from 'wouter';
import {
  saveScrollPosition,
  getScrollPosition,
  markPageAsVisited,
  hasPageBeenVisited,
} from '@/lib/scrollMemory';

/**
 * Custom hook that manages scroll position memory for pages.
 * - First visit to a page: scrolls to top
 * - Returning to a previously visited page: restores last scroll position
 */
export function useScrollMemory() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if this page was previously visited in this session
    const wasVisited = hasPageBeenVisited(location);
    const savedPosition = getScrollPosition(location);
    
    if (wasVisited && savedPosition !== null) {
      // Returning to a previously visited page - restore scroll position
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    } else {
      // First visit - scroll to top
      window.scrollTo(0, 0);
    }
    
    // Always mark as visited on mount (ensures subsequent returns work correctly)
    markPageAsVisited(location);

    // Save scroll position when scrolling
    const handleScroll = () => {
      saveScrollPosition(location, window.scrollY);
    };

    // Debounce scroll saving to avoid excessive storage writes
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', debouncedScroll);
      // Save final position on unmount
      saveScrollPosition(location, window.scrollY);
    };
  }, [location]);
}
