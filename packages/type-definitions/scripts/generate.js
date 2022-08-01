"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dist_1 = require("../dist");
const fs_1 = require("fs");
fs_1.default.writeFileSync('/home/msi/Project/selendra.js/packages/type-definitions/src/json/types.json', JSON.stringify(dist_1.types, null, 4));
fs_1.default.writeFileSync('/home/msi/Project/selendra.js/packages/type-definitions/src/json/typesBundle.json', JSON.stringify(dist_1.typesBundleForPolkadot, null, 4));
fs_1.default.writeFileSync('/home/msi/Project/selendra.js/packages/type-definitions/src/json/rpc.json', JSON.stringify(dist_1.rpc, null, 4));
