interface UmamiTrackingParameters {
    [key: string]: string | number | boolean;
}

interface UmamiWindow extends Window {
    umami?: {
        track: (eventName: string, eventData?: UmamiTrackingParameters) => void;
    };
}

declare global {
    interface Window extends UmamiWindow { }
}

export { }; 