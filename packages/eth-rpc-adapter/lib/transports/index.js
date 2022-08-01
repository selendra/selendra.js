"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerTransport = exports.WebSocketTransport = exports.HTTPTransport = void 0;
const websocket_1 = __importDefault(require("./websocket"));
exports.WebSocketTransport = websocket_1.default;
const http_1 = __importDefault(require("./http"));
exports.HTTPTransport = http_1.default;
const server_transport_1 = require("./server-transport");
Object.defineProperty(exports, "ServerTransport", { enumerable: true, get: function () { return server_transport_1.ServerTransport; } });
const transports = {
    HTTPTransport: http_1.default,
    WebSocketTransport: websocket_1.default
};
exports.default = transports;
//# sourceMappingURL=index.js.map