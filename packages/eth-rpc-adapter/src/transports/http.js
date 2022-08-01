"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const connect_1 = require("connect");
const cors_1 = require("cors");
const http_1 = require("http");
const server_transport_1 = require("./server-transport");
const logger_1 = require("../logger");
const middlewares_1 = require("../middlewares");
const errors_1 = require("../errors");
class HTTPServerTransport extends server_transport_1.default {
    constructor(options) {
        super();
        const app = (0, connect_1.default)();
        const corsOptions = options.cors || HTTPServerTransport.defaultCorsOptions;
        this.options = {
            ...options,
            middleware: [
                (0, cors_1.default)(corsOptions),
                (0, body_parser_1.json)({
                    limit: '1mb'
                }),
                ...options.middleware
            ]
        };
        this.options.middleware.forEach((mw) => app.use(mw));
        app.use(this.httpRouterHandler.bind(this));
        app.use(middlewares_1.errorHandler);
        this.server = http_1.default.createServer(app);
    }
    start() {
        this.server.listen(this.options.port);
    }
    stop() {
        this.server.close();
    }
    async httpRouterHandler(req, res, next) {
        logger_1.logger.debug(req.body, 'incoming request');
        let result = null;
        if (req.body instanceof Array) {
            if (req.body.length > this.options.batchSize) {
                return next(new errors_1.BatchSizeError(this.options.batchSize, req.body.length));
            }
            else {
                result = await Promise.all(req.body.map((r) => super.routerHandler(r)));
            }
        }
        else {
            try {
                result = await super.routerHandler(req.body);
            }
            catch (e) {
                return next(e);
            }
        }
        if (!result.error) {
            logger_1.logger.debug(result, 'request completed');
        }
        else {
            logger_1.logger.error(result, 'request completed');
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
    }
}
exports.default = HTTPServerTransport;
HTTPServerTransport.defaultCorsOptions = { origin: '*' };
