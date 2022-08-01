"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dd-trace/init");
const server_1 = require("./server");
(0, server_1.start)().catch((e) => {
    console.log(e);
    process.exit(1);
});
