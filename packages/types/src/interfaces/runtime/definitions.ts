import definitions from '@polkadot/types/interfaces/runtime/definitions';
import type { Definitions } from '@polkadot/types/types';
import runtime from '@selendra/type-definitions/lib/runtime';

export default {
  rpc: {},
  types: {
    ...definitions.types,
    ...runtime.types
  }
} as Definitions;
