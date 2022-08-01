"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const websocket_1 = require("websocket");
const main = () => {
    const endpoint = 'ws://127.0.0.1:9944';
    console.log('Connecting to ', endpoint);
    const ws = new websocket_1.w3cwebsocket(endpoint);
    ws.onopen = () => {
        ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
    };
    ws.onmessage = (msg) => {
        const metadata = JSON.parse(msg.data).result;
        fs_1.default.writeFileSync('/home/msi/Project/selendra.js/packages/types/src/metadata/static-latest.ts', `export default '${metadata}'`);
        console.log('Done');
        process.exit(0);
    };
};
main();
