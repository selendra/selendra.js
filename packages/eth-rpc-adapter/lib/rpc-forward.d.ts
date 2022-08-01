/// <reference types="node" />
import { EvmRpcProvider } from '@selendra/eth-providers';
import EventEmitter from 'events';
import WebSocket from 'ws';
import type { DefinitionRpcExt } from '@polkadot/types/types';
export declare class RpcForward extends EventEmitter {
    readonly provider: EvmRpcProvider;
    readonly rpcMeta: Record<string, DefinitionRpcExt>;
    methods?: string[];
    constructor(provider: EvmRpcProvider);
    initRpcMethods(): Promise<void>;
    request(request: {
        method: string;
        params?: Array<any>;
    }): Promise<any>;
    subscribe(request: {
        meta: DefinitionRpcExt;
        method: string;
        params: Array<any>;
    }, ws?: WebSocket): Promise<any>;
    isMethodValid(method: string): boolean;
    send(method: string, params?: any[], ws?: WebSocket): Promise<any>;
}
//# sourceMappingURL=rpc-forward.d.ts.map