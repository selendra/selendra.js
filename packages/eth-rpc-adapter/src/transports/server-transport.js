"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerTransport = void 0;
const errors_1 = require("../errors");
const logger_1 = require("../logger");
const utils_1 = require("../utils");
class ServerTransport {
    constructor() {
        this.routers = [];
    }
    addRouter(router) {
        this.routers.push(router);
    }
    removeRouter(router) {
        this.routers = this.routers.filter((r) => r !== router);
    }
    start() {
        logger_1.logger.warn('Transport must implement start()'); // tslint:disable-line
        throw new Error('Transport missing start implementation');
    }
    async routerHandler({ id, method, params }, ws) {
        let res = {
            id: id !== null && id !== void 0 ? id : null,
            jsonrpc: '2.0'
        };
        if (id === null || id === undefined || !method) {
            logger_1.logger.error(`invalid json request: id: ${id}, method: ${method}, params: ${params}`);
            return {
                ...res,
                error: new errors_1.InvalidRequest().json()
            };
        }
        if (this.routers.length === 0) {
            logger_1.logger.warn('transport method called without a router configured.'); // tslint:disable-line
            throw new Error('No router configured');
        }
        // Initialize datadog span and get spanTags from the context
        const spanTags = utils_1.DataDogUtil.buildTracerSpan();
        const routerForMethod = this.routers.find((r) => r.isMethodImplemented(method));
        if (routerForMethod === undefined) {
            res = {
                ...res,
                // method not found in any of the routers.
                error: new errors_1.MethodNotFound('Method not found', `The method ${method} does not exist / is not available.`).json()
            };
        }
        else {
            res = {
                ...res,
                ...(await routerForMethod.call(method, params, ws))
            };
        }
        // Add span tags to the datadog span
        utils_1.DataDogUtil.assignTracerSpan(spanTags, {
            id,
            method,
            ...(Array.isArray(params)
                ? params.reduce((c, v, i) => {
                    return { ...c, [`param_${i}`]: v };
                }, {})
                : params)
        });
        return res;
    }
}
exports.ServerTransport = ServerTransport;
exports.default = ServerTransport;
