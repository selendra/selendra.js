"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("@polkadot/types/create");
const static_latest_1 = require("../src/metadata/static-latest");
const types_1 = require("@polkadot/types");
const POLKADOT_KNOWN_ORIGINS = {
    Council: 'CollectiveOrigin',
    System: 'SystemOrigin',
    TechnicalCommittee: 'CollectiveOrigin'
};
const SELENDRA_KNOWN_ORIGINS = {
    GeneralCouncil: 'CollectiveOrigin',
    FunanCouncil: 'CollectiveOrigin',
    Authority: 'DelayedOrigin'
};
const KNOWN_ORIGINS = {
    ...POLKADOT_KNOWN_ORIGINS,
    ...SELENDRA_KNOWN_ORIGINS
};
function getOriginCallerDef() {
    const registry = new create_1.TypeRegistry();
    const metadata = new types_1.Metadata(registry, static_latest_1.default);
    const modules = metadata.asLatest.pallets;
    const isIndexed = modules.some(({ index }) => !index.eqn(255));
    const moduleIndex = modules
        .map((mod, index) => [mod.name.toString(), isIndexed ? mod.index.toNumber() : index])
        .sort((a, b) => a[1] - b[1]);
    const def = {
        OriginCaller: {
            _enum: moduleIndex.reduce((result, [name, index]) => {
                for (let i = Object.keys(result).length; i < index; i++) {
                    result[`Empty${i}`] = 'Null';
                }
                result[name] = KNOWN_ORIGINS[name] || 'Null';
                return result;
            }, {})
        }
    };
    console.log(JSON.stringify(def));
}
getOriginCallerDef();
