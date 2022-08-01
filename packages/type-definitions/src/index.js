"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedExtensions = exports.typesBundleForPolkadot = exports.typesBundle = exports.typesAlias = exports.rpc = exports.types = void 0;
const orml_type_definitions_1 = require("@open-web3/orml-type-definitions");
const utils_1 = require("@open-web3/orml-type-definitions/utils");
const accounts_1 = require("./accounts");
const auctionManager_1 = require("./auctionManager");
const cdpEngine_1 = require("./cdpEngine");
const dex_1 = require("./dex");
const evm_1 = require("./evm");
const collatorSelection_1 = require("./collatorSelection");
const incentives_1 = require("./incentives");
const loans_1 = require("./loans");
const nft_1 = require("./nft");
const primitives_1 = require("./primitives");
// ecosystem
const renvmBridge_1 = require("./renvmBridge");
const runtime_1 = require("./runtime");
const signedExtensions_1 = require("./signedExtensions");
const stableAsset_1 = require("./stableAsset");
const support_1 = require("./support");
const selendra_1 = require("./spec/selendra");
// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = {
    Keys: 'SessionKeys1'
};
const selendraDefs = {
    primitives: primitives_1.default,
    accounts: accounts_1.default,
    auctionManager: auctionManager_1.default,
    cdpEngine: cdpEngine_1.default,
    collatorSelection: collatorSelection_1.default,
    dex: dex_1.default,
    evm: evm_1.default,
    incentives: incentives_1.default,
    loans: loans_1.default,
    nft: nft_1.default,
    runtime: runtime_1.default,
    support: support_1.default,
    // ecosystem
    renvmBridge: renvmBridge_1.default,
    stableAsset: stableAsset_1.default
};
exports.types = {
    ...orml_type_definitions_1.types,
    ...(0, utils_1.typesFromDefs)(selendraDefs),
    ...additionalOverride
};
exports.rpc = (0, utils_1.jsonrpcFromDefs)(selendraDefs, { ...orml_type_definitions_1.rpc });
exports.typesAlias = (0, utils_1.typesAliasFromDefs)(selendraDefs, { ...orml_type_definitions_1.typesAlias });
function getBundle(versioned) {
    return {
        rpc: exports.rpc,
        instances: {
            council: ['generalCouncil']
        },
        types: [...versioned].map((version) => {
            return {
                minmax: version.minmax,
                types: {
                    ...exports.types,
                    ...version.types
                }
            };
        }),
        alias: exports.typesAlias
    };
}
exports.typesBundle = {
    spec: {
        selendra: getBundle(selendra_1.default)
    }
};
// Type overrides have priority issues
exports.typesBundleForPolkadot = {
    spec: {
        selendra: getBundle(selendra_1.default)
    }
};
exports.signedExtensions = signedExtensions_1.signedExtensions;
