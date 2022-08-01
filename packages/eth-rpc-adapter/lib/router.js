"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Router_bridge, _Router_rpcForward;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const eth_providers_1 = require("@selendra/eth-providers");
const logger_1 = require("@ethersproject/logger");
const errors_1 = require("./errors");
const logger_2 = require("./logger");
class Router {
    constructor(bridge, rpcForward) {
        _Router_bridge.set(this, void 0);
        _Router_rpcForward.set(this, void 0);
        __classPrivateFieldSet(this, _Router_bridge, bridge, "f");
        __classPrivateFieldSet(this, _Router_rpcForward, rpcForward, "f");
    }
    async call(methodName, params, ws) {
        if (__classPrivateFieldGet(this, _Router_bridge, "f").isMethodImplemented(methodName)) {
            try {
                return { result: await __classPrivateFieldGet(this, _Router_bridge, "f").send(methodName, params, ws) };
            }
            catch (err) {
                if (errors_1.JSONRPCError.isJSONRPCError(err)) {
                    return { error: { code: err.code, message: err.message, data: err.data } };
                }
                if (typeof err === 'object' && err.code) {
                    let error = null;
                    if (err.code === logger_1.Logger.errors.INVALID_ARGUMENT) {
                        error = new errors_1.InvalidParams(err.message);
                    }
                    if (err.code === logger_1.Logger.errors.UNSUPPORTED_OPERATION) {
                        error = new errors_1.InvalidParams(err.message);
                    }
                    if (err.code === logger_1.Logger.errors.NOT_IMPLEMENTED) {
                        error = new errors_1.MethodNotFound(err.message);
                    }
                    if (error) {
                        return { error: error.json() };
                    }
                }
                logger_2.logger.error({ err, methodName, params }, 'request error');
                let message = err.message;
                for (const pattern of eth_providers_1.ERROR_PATTERN) {
                    const match = message.match(pattern);
                    if (match) {
                        const error = __classPrivateFieldGet(this, _Router_bridge, "f").provider.api.registry.findMetaError(new Uint8Array([match[1], match[2]]));
                        message = `${error.section}.${error.name}: ${error.docs}`;
                        break;
                    }
                }
                return { error: new errors_1.JSONRPCError(`Error: ${message}`, 6969) };
            }
        }
        else if (__classPrivateFieldGet(this, _Router_rpcForward, "f") && __classPrivateFieldGet(this, _Router_rpcForward, "f").isMethodValid(methodName)) {
            try {
                return { result: await __classPrivateFieldGet(this, _Router_rpcForward, "f").send(methodName, params, ws) };
            }
            catch (err) {
                logger_2.logger.error({ err, methodName, params }, 'forward request error');
                return { error: new errors_1.JSONRPCError(err.message, 6969) };
            }
        }
        else {
            return { error: new errors_1.MethodNotFound('Method not found', `The method ${methodName} does not exist`).json() };
        }
    }
    isMethodImplemented(methodName) {
        return __classPrivateFieldGet(this, _Router_rpcForward, "f")
            ? __classPrivateFieldGet(this, _Router_bridge, "f").isMethodImplemented(methodName) || __classPrivateFieldGet(this, _Router_rpcForward, "f").isMethodValid(methodName)
            : __classPrivateFieldGet(this, _Router_bridge, "f").isMethodImplemented(methodName);
    }
}
exports.Router = Router;
_Router_bridge = new WeakMap(), _Router_rpcForward = new WeakMap();
//# sourceMappingURL=router.js.map