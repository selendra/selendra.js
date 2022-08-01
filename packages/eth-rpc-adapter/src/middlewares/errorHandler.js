"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../errors");
const errorHandler = (err, req, res, next) => {
    if (err) {
        let error;
        if (errors_1.JSONRPCError.isJSONRPCError(err)) {
            error = err;
        }
        else if (err.type === 'entity.parse.failed') {
            error = new errors_1.InvalidRequest();
        }
        else {
            error = new errors_1.InternalError();
        }
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: null,
            jsonrpc: '2.0',
            error: error.json()
        }));
    }
};
exports.errorHandler = errorHandler;
