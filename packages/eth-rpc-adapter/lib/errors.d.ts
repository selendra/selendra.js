export declare class JSONRPCError extends Error {
    code: number;
    message: string;
    data?: any;
    readonly _isJSONRPCError: true;
    constructor(message: string, code: number, data?: any);
    static isJSONRPCError(obj: any): obj is JSONRPCError;
    json(): {
        code: number;
        data: any;
        message: string;
    };
}
export declare class InvalidRequest extends JSONRPCError {
    constructor();
}
export declare class InternalError extends JSONRPCError {
    constructor();
}
export declare class MethodNotFound extends JSONRPCError {
    constructor(message: string, data?: any);
}
export declare class InvalidParams extends JSONRPCError {
    constructor(message: string, data?: any);
}
export declare class BatchSizeError extends JSONRPCError {
    constructor(maximumSize: number, actualSize: number);
}
//# sourceMappingURL=errors.d.ts.map