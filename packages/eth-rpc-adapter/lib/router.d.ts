import WebSocket from 'ws';
import { Eip1193Bridge } from './eip1193-bridge';
import { RpcForward } from './rpc-forward';
import { JSONRPCResponse } from './transports/types';
export declare class Router {
    #private;
    constructor(bridge: Eip1193Bridge, rpcForward?: RpcForward);
    call(methodName: string, params: unknown[], ws?: WebSocket): Promise<Partial<JSONRPCResponse>>;
    isMethodImplemented(methodName: string): boolean;
}
//# sourceMappingURL=router.d.ts.map