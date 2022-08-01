"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSizeError = exports.InvalidParams = exports.MethodNotFound = exports.InternalError = exports.InvalidRequest = exports.JSONRPCError = void 0;
class JSONRPCError extends Error {
    constructor(message, code, data) {
        super();
        this.code = code;
        this.message = message;
        this.data = data;
        this._isJSONRPCError = true;
    }
    static isJSONRPCError(obj) {
        return obj._isJSONRPCError;
    }
    json() {
        return {
            code: this.code,
            data: this.data,
            message: this.message
        };
    }
}
exports.JSONRPCError = JSONRPCError;
class InvalidRequest extends JSONRPCError {
    constructor() {
        super('invalid json request', -32600);
    }
}
exports.InvalidRequest = InvalidRequest;
class InternalError extends JSONRPCError {
    constructor() {
        super('internal error', -32603);
    }
}
exports.InternalError = InternalError;
class MethodNotFound extends JSONRPCError {
    constructor(message, data) {
        super(message, -32601, data);
    }
}
exports.MethodNotFound = MethodNotFound;
class InvalidParams extends JSONRPCError {
    constructor(message, data) {
        super(message, -32602, data);
    }
}
exports.InvalidParams = InvalidParams;
class BatchSizeError extends JSONRPCError {
    constructor(maximumSize, actualSize) {
        super('exceeded maximum batch size', -32600, `maximum batch size is ${maximumSize}, but received ${actualSize}`);
    }
}
exports.BatchSizeError = BatchSizeError;
