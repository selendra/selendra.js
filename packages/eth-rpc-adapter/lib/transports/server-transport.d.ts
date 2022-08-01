import WebSocket from 'ws';
import { Router } from '../router';
import type { JSONRPCRequest, JSONRPCResponse } from './types';
export declare abstract class ServerTransport {
    routers: Router[];
    addRouter(router: Router): void;
    removeRouter(router: Router): void;
    start(): void;
    protected routerHandler({ id, method, params }: JSONRPCRequest, ws?: WebSocket): Promise<JSONRPCResponse>;
}
export default ServerTransport;
//# sourceMappingURL=server-transport.d.ts.map