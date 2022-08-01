"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApi = exports.createApiOptions = exports.defaultOptions = void 0;
const types_1 = require("@selendra/types");
const api_1 = require("@polkadot/api");
const TYPES = {
    AtLeast64BitUnsigned: 'u128',
    EvmAccountInfo: {
        nonce: 'Index',
        contractInfo: 'Option<EvmContractInfo>',
        developerDeposit: 'Option<Balance>'
    },
    EvmContractInfo: {
        codeHash: 'H256',
        maintainer: 'H160',
        deployed: 'bool'
    },
    TransactionAction: {
        _enum: {
            Call: 'H160',
            Create: 'Null'
        }
    },
    MultiSignature: {
        _enum: {
            Ed25519: 'Ed25519Signature',
            Sr25519: 'Sr25519Signature',
            Ecdsa: 'EcdsaSignature',
            Ethereum: '[u8; 65]',
            Eip712: '[u8; 65]'
        }
    }
};
exports.defaultOptions = {
    types: types_1.types,
    rpc: types_1.rpc
};
const createApiOptions = ({ types = {}, rpc = {}, typesAlias = {}, typesBundle = {}, signedExtensions, ...otherOptions } = {}) => {
    var _a, _b;
    return ({
        types: {
            ...types
        },
        rpc: {
            ...types_1.rpc,
            ...rpc
        },
        typesAlias: {
            ...types_1.typesAlias,
            ...typesAlias
        },
        typesBundle: {
            ...typesBundle,
            spec: {
                ...typesBundle.spec,
                selendra: {
                    ...(_a = types_1.typesBundle === null || types_1.typesBundle === void 0 ? void 0 : types_1.typesBundle.spec) === null || _a === void 0 ? void 0 : _a.selendra,
                    ...(_b = typesBundle === null || typesBundle === void 0 ? void 0 : typesBundle.spec) === null || _b === void 0 ? void 0 : _b.selendra
                },
            }
        },
        signedExtensions: {
            ...types_1.signedExtensions,
            ...signedExtensions
        },
        ...otherOptions
    });
};
exports.createApiOptions = createApiOptions;
const createApi = (endpoints, apiOptions) => {
    const wsProvider = new api_1.WsProvider(endpoints);
    return new api_1.ApiPromise((0, exports.createApiOptions)({
        types: {
            ...TYPES,
            ...apiOptions === null || apiOptions === void 0 ? void 0 : apiOptions.types
        },
        provider: wsProvider,
        ...apiOptions
    }));
};
exports.createApi = createApi;
