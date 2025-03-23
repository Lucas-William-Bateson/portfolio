/**
 * Debounce function to limit how often a function can be called
 */
function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (...args: Parameters<T>) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

/**
 * Track an event with Umami with performance optimizations
 */
export function trackEvent(
    eventName: string,
    eventData?: Record<string, string | number | boolean>
): void {
    if (typeof window === 'undefined' || !window.umami) return;

    // Add timestamp to track when event occurred
    const enhancedData = {
        ...eventData,
        timestamp: new Date().toISOString()
    };

    try {
        window.umami.track(eventName, enhancedData);
    } catch (error) {
        console.error('Error tracking event:', error);
    }
}

/**
 * Debounced version of trackEvent for events that might fire frequently
 * (e.g., scroll events, mouse movements)
 */
export const debouncedTrackEvent = debounce(trackEvent, 300);

/**
 * Track when elements come into view
 */
export function createViewportTracker(
    element: HTMLElement,
    eventName: string,
    eventData?: Record<string, string | number | boolean>,
    threshold = 0.5,
    once = true
): () => void {
    if (!element || typeof IntersectionObserver === 'undefined') return () => { };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    trackEvent(eventName, eventData);
                    if (once) {
                        observer.disconnect();
                    }
                }
            });
        },
        { threshold }
    );

    observer.observe(element);

    // Return cleanup function
    return () => observer.disconnect();
} 