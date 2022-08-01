"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcForward = void 0;
const events_1 = require("events");
const errors_1 = require("./errors");
const logger_1 = require("./logger");
class RpcForward extends events_1.default {
    constructor(provider) {
        super();
        this.rpcMeta = {};
        this.provider = provider;
    }
    async initRpcMethods() {
        const result = await this.provider.api.rpc.rpc.methods();
        this.methods = result.methods.toJSON();
        // rpc_methods did not include rpc_methods https://github.com/paritytech/substrate/issues/11728
        if (Array.isArray(this.methods) && !this.methods.includes('rpc_methods')) {
            this.methods = this.methods.concat('rpc_methods');
        }
        for (const section of Object.keys(this.provider.api.rpc)) {
            for (const method of Object.keys(this.provider.api.rpc[section])) {
                const meta = this.provider.api.rpc[section][method].meta;
                this.rpcMeta[meta.jsonrpc] = meta;
            }
        }
    }
    request(request) {
        // @ts-ignored ignore protected method
        return this.provider.api._rpcCore.provider.send(request.method, request.params);
    }
    async subscribe(request, ws) {
        if (!ws)
            throw new Error('HTTP endpoint does not have subscriptions, use WebSockets instead');
        const updateType = request.meta.pubsub[0];
        const unsubMethod = `${request.meta.section}_${request.meta.pubsub[2]}`;
        const subType = `${request.meta.section}_${updateType}`;
        const updateMethod = subType;
        // @ts-ignored ignore protected method
        const wsProvider = this.provider.api._rpcCore.provider;
        let subId = '';
        const callback = (error, data) => {
            if (!subId)
                throw new Error('subscription id does not exist');
            // @TODO Does the errors need to be sent to the client?
            if (error) {
                logger_1.logger.error('forward subscription error', error);
                return;
            }
            else {
                ws.send(JSON.stringify({
                    jsonrpc: '2.0',
                    method: updateMethod,
                    params: {
                        result: data,
                        subscription: subId
                    }
                }));
            }
        };
        subId = (await wsProvider.subscribe(subType, request.method, request.params || [], callback));
        ws.on('close', () => {
            return wsProvider.unsubscribe(subType, unsubMethod, subId);
        });
        ws.on('error', () => {
            return wsProvider.unsubscribe(subType, unsubMethod, subId);
        });
        return subId;
    }
    isMethodValid(method) {
        if (!this.methods) {
            throw new Error('Rpc methods not initialized');
        }
        return this.methods.includes(method);
    }
    async send(method, params = [], ws) {
        if (this.isMethodValid(method)) {
            const meta = this.rpcMeta[method];
            if (meta && meta.isSubscription && meta.pubsub) {
                return this.subscribe({ meta, method, params }, ws);
            }
            else {
                return this.request({ method, params });
            }
        }
        throw new errors_1.MethodNotFound('Method not available', `The method ${method} is not available.`);
    }
}
exports.RpcForward = RpcForward;
