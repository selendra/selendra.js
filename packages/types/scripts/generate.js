"use strict";
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
const interfaceRegistry_1 = require("@polkadot/typegen/generate/interfaceRegistry");
const tsDef_1 = require("@polkadot/typegen/generate/tsDef");
const generate_1 = require("@polkadot/typegen/generate");
// import generateMobx from '@open-web3/api-mobx/scripts/mobx';
const static_latest_1 = require("../src/metadata/static-latest");
const defaultDefinations = require("@polkadot/types/interfaces/definitions");
const ormlDefinations = require("@open-web3/orml-types/interfaces/definitions");
const selendraDefinations = require("../src/interfaces/definitions");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;
delete ormlModulesDefinations.__esModule;
const definations = {
    '@polkadot/types/interfaces': substrateDefinations,
    '@open-web3/orml-types/interfaces': ormlModulesDefinations,
    '..': selendraDefinations
};
const customLookupDefinitions = {
    rpc: {},
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    types: require('../src/interfaces/lookup.ts').default
};
(0, tsDef_1.generateTsDef)(definations, '/home/msi/Project/selendra.js/packages/types/src/interfaces', '..');
(0, interfaceRegistry_1.generateInterfaceTypes)(definations, '/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-types.ts');
(0, generate_1.generateDefaultConsts)('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-consts.ts', static_latest_1.default, definations, false, customLookupDefinitions);
(0, generate_1.generateDefaultLookup)('/home/msi/Project/selendra.js/packages/types/src/interfaces', static_latest_1.default);
(0, generate_1.generateDefaultTx)('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-tx.ts', static_latest_1.default, definations, false, customLookupDefinitions);
(0, generate_1.generateDefaultQuery)('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-query.ts', static_latest_1.default, definations, false, customLookupDefinitions);
(0, generate_1.generateDefaultRpc)('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-rpc.ts', definations);
// generateMobx('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-mobx.ts', metaHex, definations);
