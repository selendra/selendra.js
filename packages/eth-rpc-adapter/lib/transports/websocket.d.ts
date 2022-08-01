/// <reference types="node" />
import { HandleFunction } from 'connect';
import cors from 'cors';
import { SecureServerOptions } from 'http2';
import ServerTransport from './server-transport';
export interface WebSocketServerTransportOptions extends SecureServerOptions {
    middleware: HandleFunction[];
    port: number;
    cors?: cors.CorsOptions;
    allowHTTP1?: boolean;
    batchSize: number;
}
export default class WebSocketServerTransport extends ServerTransport {
    private options;
    private static defaultCorsOptions;
    private server;
    private wss;
    constructor(options: WebSocketServerTransportOptions);
    start(): void;
    stop(): void;
    private praseRequest;
    private webSocketRouterHandler;
}
//# sourceMappingURL=websocket.d.ts.map