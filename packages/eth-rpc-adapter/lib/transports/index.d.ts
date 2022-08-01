import WebSocketTransport, { WebSocketServerTransportOptions } from './websocket';
import HTTPTransport, { HTTPServerTransportOptions } from './http';
import { ServerTransport } from './server-transport';
export { HTTPTransport, WebSocketTransport, ServerTransport };
export declare type TransportNames = 'IPCTransport' | 'HTTPTransport' | 'HTTPSTransport' | 'WebSocketTransport';
export declare type TransportClasses = WebSocketTransport | HTTPTransport | ServerTransport;
export declare type TransportOptions = WebSocketServerTransportOptions | HTTPServerTransportOptions;
export interface TransportsMapping {
    [name: string]: any;
}
declare const transports: TransportsMapping;
export default transports;
//# sourceMappingURL=index.d.ts.map