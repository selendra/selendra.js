import { Span } from 'dd-trace';
/**
 * Get the current active span with tags or undefined if [none|disabled].
 * @returns {DataDogTracerSpan} The active spanTags with span.
 */
export declare const buildTracerSpan: () => DataDogTracerSpan | undefined;
/**
 * Updates exitTime and elapsedTime of the spanTags
 * and assigns the keyValueMap spanTags to the datadog span.
 */
export declare const assignTracerSpan: (spanTags: DataDogTracerSpan | undefined, keyValueMap?: {
    [key: string]: any;
} | undefined, flattenKeyValues?: boolean) => void;
export interface DataDogTracerSpan {
    body: {
        [key: string]: any;
    };
    enterTime: number;
    exitTime: number;
    elapsedTime: number;
    spanRef: Span | undefined;
}
//# sourceMappingURL=datadog-util.d.ts.map