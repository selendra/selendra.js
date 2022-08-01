"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const connect_1 = require("connect");
const cors_1 = require("cors");
const http_1 = require("http");
const http2_1 = require("http2");
const ws_1 = require("ws");
const errors_1 = require("../errors");
const logger_1 = require("../logger");
const middlewares_1 = require("../middlewares");
const server_transport_1 = require("./server-transport");
class WebSocketServerTransport extends server_transport_1.default {
    constructor(options) {
        super();
        this.options = options;
        options.allowHTTP1 = true;
        const app = (0, connect_1.default)();
        const corsOptions = options.cors || WebSocketServerTransport.defaultCorsOptions;
        this.options = {
            ...options,
            middleware: [
                (0, cors_1.default)(corsOptions),
                (0, body_parser_1.json)({
                    limit: '1mb'
                }),
                ...options.middleware,
                middlewares_1.errorHandler
            ]
        };
        this.options.middleware.forEach((mw) => app.use(mw));
        if (!this.options.cert && !this.options.key) {
            this.server = http_1.default.createServer((req, res) => app(req, res));
        }
        else {
            this.server = http2_1.default.createSecureServer(options, (req, res) => app(req, res));
        }
        this.wss = new ws_1.default.Server({ server: this.server });
        this.wss.on('connection', (ws) => {
            // @ts-ignore
            ws.isAlive = true;
            ws.on('pong', () => {
                // @ts-ignore
                ws.isAlive = true;
            });
            ws.on('message', (message) => this.webSocketRouterHandler(message, ws));
            ws.on('close', () => {
                ws.removeAllListeners();
            });
            ws.on('error', () => {
                ws.removeAllListeners();
            });
        });
        const interval = setInterval(() => {
            for (const ws of this.wss.clients) {
                // @ts-ignore
                if (ws.isAlive === false)
                    return ws.terminate();
                // @ts-ignore
                ws.isAlive = false;
                ws.ping();
            }
        }, 30000);
        this.wss.on('close', () => {
            clearInterval(interval);
        });
    }
    start() {
        this.server.listen(this.options.port);
    }
    stop() {
        this.wss.removeAllListeners();
        this.wss.close();
        this.server.close();
    }
    praseRequest(req) {
        try {
            return JSON.parse(req);
        }
        catch (e) {
            return null;
        }
    }
    async webSocketRouterHandler(rawReq, ws) {
        const req = this.praseRequest(rawReq);
        if (req === null) {
            const result = {
                id: null,
                jsonrpc: '2.0',
                error: new errors_1.InvalidRequest().json()
            };
            ws.send(JSON.stringify(result));
            return;
        }
        let result = null;
        logger_1.logger.debug(req, 'WS incoming request');
        if (req instanceof Array) {
            if (req.length > this.options.batchSize) {
                result = {
                    jsonrpc: '2.0',
                    error: new errors_1.BatchSizeError(this.options.batchSize, req.length).json()
                };
            }
            else {
                result = await Promise.all(req.map((r) => super.routerHandler(r, ws)));
            }
        }
        else {
            result = await super.routerHandler(req, ws);
        }
        if (!result.error) {
            logger_1.logger.debug(result, 'request completed');
        }
        else {
            logger_1.logger.error(result, 'request completed');
        }
        ws.send(JSON.stringify(result));
    }
}
exports.default = WebSocketServerTransport;
WebSocketServerTransport.defaultCorsOptions = { origin: '*' };
