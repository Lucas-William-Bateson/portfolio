import { useEffect, useRef } from 'react';

interface UseTrackElementProps {
    /**
     * The name of the event to track
     */
    eventName: string;

    /**
     * Data to pass with the tracking event
     */
    eventData?: Record<string, string | boolean | number>;

    /**
     * The threshold for when the element is considered visible
     * @default 0.6
     */
    threshold?: number;
}

/**
 * Hook to track when an element becomes visible in the viewport
 * @returns A ref to be attached to the element
 */
export function useTrackElement<T extends HTMLElement>({
    eventName,
    eventData = {},
    threshold = 0.6
}: UseTrackElementProps) {
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Track the view event when element becomes visible
                        if (typeof window !== 'undefined' && window.umami) {
                            window.umami.track(eventName, eventData);
                        }
                        // Disconnect after first view to prevent multiple events
                        observer.disconnect();
                    }
                });
            },
            { threshold }
        );

        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        };
    }, [eventName, eventData, threshold]);

    return elementRef;
} 