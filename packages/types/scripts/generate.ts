/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultLookup,
  generateDefaultConsts,
  generateDefaultQuery,
  generateDefaultTx,
  generateDefaultRpc
} from '@polkadot/typegen/generate';
// import generateMobx from '@open-web3/api-mobx/scripts/mobx';
import metadata from '../src/metadata/static-latest';

import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as selendraDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;


delete ormlModulesDefinations.__esModule

const definations = {
  '@polkadot/types/interfaces': substrateDefinations,
  '@open-web3/orml-types/interfaces': ormlModulesDefinations,
  '..': selendraDefinations 
} as any;

const customLookupDefinitions = {
  rpc: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  types: require('../src/interfaces/lookup.ts').default
} as Definitions;

generateTsDef(definations, '/home/msi/Project/selendra.js/packages/types/src/interfaces', '..');
generateInterfaceTypes(definations, '/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-types.ts');
generateDefaultConsts('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-consts.ts', metadata, definations, false, customLookupDefinitions);
generateDefaultLookup('/home/msi/Project/selendra.js/packages/types/src/interfaces', metadata);

generateDefaultTx('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-tx.ts', metadata, definations, false, customLookupDefinitions);
generateDefaultQuery('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-query.ts', metadata, definations, false, customLookupDefinitions);
generateDefaultRpc('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-rpc.ts', definations);
// generateMobx('/home/msi/Project/selendra.js/packages/types/src/interfaces/augment-api-mobx.ts', metaHex, definations);
