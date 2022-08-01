export declare const sleep: (time?: number) => Promise<void>;
export declare const DataDogUtil: {
    buildTracerSpan: () => import("./datadog-util").DataDogTracerSpan | undefined;
    assignTracerSpan: (spanTags: import("./datadog-util").DataDogTracerSpan | undefined, keyValueMap?: {
        [key: string]: any;
    } | undefined, flattenKeyValues?: boolean) => void;
};
export interface ServerArgs {
    e?: string;
    h?: number;
    w?: number;
    s?: boolean;
    l?: boolean;
    v?: boolean;
    endpoint: string;
    subql?: string;
    'http-port': number;
    'ws-port': number;
    'cache-size': number;
    'max-batch-size': number;
    'max-storage-size': number;
    safe: number | boolean;
    local: number | boolean;
    forward: number | boolean;
    rich: number | boolean;
    verbose: number | boolean;
}
export interface ServerOpts {
    endpoints: string;
    subqlUrl?: string;
    httpPort: number;
    wsPort: number;
    maxBlockCacheSize: number;
    maxBatchSize: number;
    storageCacheSize: number;
    safeMode: boolean;
    localMode: boolean;
    forwardMode: boolean;
    richMode: boolean;
    verbose: boolean;
}
export declare const parseOptions: () => ServerOpts;
//# sourceMappingURL=utils.d.ts.map