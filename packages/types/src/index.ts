import {
  typesBundle as selendraTypesBundle,
  types as selendraTypes,
  typesAlias as selendraTypeAlias,
  rpc as selendraRpc,
  signedExtensions as selendraSignedExtensions
} from '@selendra/type-definitions/lib';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

// export * from './interfaces/augment-api-mobx';

export const types: RegistryTypes = selendraTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = selendraRpc;

export const typesAlias: Record<string, OverrideModuleType> = selendraTypeAlias;

export const typesBundle = selendraTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = selendraSignedExtensions;
