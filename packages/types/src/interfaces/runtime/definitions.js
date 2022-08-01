"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = require("@polkadot/types/interfaces/runtime/definitions");
const runtime_1 = require("@selendra/type-definitions/lib/runtime");
exports.default = {
    rpc: {},
    types: {
        ...definitions_1.default.types,
        ...runtime_1.default.types
    }
};
