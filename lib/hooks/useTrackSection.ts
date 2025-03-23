import { useEffect, useRef } from 'react';
import { trackEvent } from '../utils/analytics';

interface UseTrackSectionProps {
    /**
     * The name of the section being tracked
     */
    sectionName: string;

    /**
     * Additional data to track with the section view
     */
    additionalData?: Record<string, string | boolean | number>;

    /**
     * The threshold for when the section is considered visible
     * @default 0.3
     */
    threshold?: number;
}

/**
 * Hook to track when a section becomes visible in the viewport
 * @returns A ref to be attached to the section element
 */
export function useTrackSection({
    sectionName,
    additionalData = {},
    threshold = 0.3
}: UseTrackSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Track the view event when section becomes visible using our optimized function
                        trackEvent('Section viewed', {
                            section: sectionName,
                            ...additionalData
                        });
                        // Disconnect after first view to prevent multiple events
                        observer.disconnect();
                    }
                });
            },
            { threshold }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, [sectionName, additionalData, threshold]);

    return sectionRef;
} 