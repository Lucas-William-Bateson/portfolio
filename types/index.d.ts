interface UmamiTrackingParameters {
    [key: string]: string | number | boolean;
}

interface Window {
    umami?: {
        track: (eventName: string, eventData?: UmamiTrackingParameters) => void;
    };
} 