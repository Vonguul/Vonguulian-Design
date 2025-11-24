const SCROLL_MEMORY_KEY = 'vonguul_scroll_memory';
const VISITED_PAGES_KEY = 'vonguul_visited_pages';

interface ScrollMemory {
  [pagePath: string]: number;
}

interface VisitedPages {
  [pagePath: string]: boolean;
}

/**
 * Get the current scroll position storage
 */
function getScrollMemory(): ScrollMemory {
  try {
    const stored = sessionStorage.getItem(SCROLL_MEMORY_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Get the visited pages tracking
 */
function getVisitedPages(): VisitedPages {
  try {
    const stored = sessionStorage.getItem(VISITED_PAGES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Save scroll position for a page
 */
export function saveScrollPosition(pagePath: string, scrollY: number): void {
  try {
    const memory = getScrollMemory();
    memory[pagePath] = scrollY;
    sessionStorage.setItem(SCROLL_MEMORY_KEY, JSON.stringify(memory));
  } catch {
    console.error('Failed to save scroll position');
  }
}

/**
 * Get saved scroll position for a page
 */
export function getScrollPosition(pagePath: string): number | null {
  const memory = getScrollMemory();
  return memory[pagePath] ?? null;
}

/**
 * Mark a page as visited
 */
export function markPageAsVisited(pagePath: string): void {
  try {
    const visited = getVisitedPages();
    visited[pagePath] = true;
    sessionStorage.setItem(VISITED_PAGES_KEY, JSON.stringify(visited));
  } catch {
    console.error('Failed to mark page as visited');
  }
}

/**
 * Check if a page has been visited before
 */
export function hasPageBeenVisited(pagePath: string): boolean {
  const visited = getVisitedPages();
  return visited[pagePath] ?? false;
}

/**
 * Clear all scroll memory (useful on new session)
 */
export function clearScrollMemory(): void {
  try {
    sessionStorage.removeItem(SCROLL_MEMORY_KEY);
    sessionStorage.removeItem(VISITED_PAGES_KEY);
  } catch {
    console.error('Failed to clear scroll memory');
  }
}
