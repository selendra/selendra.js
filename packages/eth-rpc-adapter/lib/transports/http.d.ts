/// <reference types="node" />
import { HandleFunction } from 'connect';
import cors from 'cors';
import { ServerOptions } from 'http';
import ServerTransport from './server-transport';
export interface HTTPServerTransportOptions extends ServerOptions {
    middleware: HandleFunction[];
    port: number;
    cors?: cors.CorsOptions;
    batchSize: number;
}
export default class HTTPServerTransport extends ServerTransport {
    private static defaultCorsOptions;
    private server;
    private options;
    constructor(options: HTTPServerTransportOptions);
    start(): void;
    stop(): void;
    private httpRouterHandler;
}
//# sourceMappingURL=http.d.ts.map