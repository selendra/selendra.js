import { derive as ormlDerives } from '@open-web3/orml-api-derive';
import { derive as selendraDerives } from '@selendra/api-derive';
import {
  rpc as selendraRpc,
  types as selendraTypes,
  typesAlias as selendraTypesAlias,
  typesBundle as selendraTypesBundle,
  signedExtensions as selendraSignedExtensions
} from '@selendra/types';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: selendraTypes,
  rpc: selendraRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  signedExtensions,
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...types
  },
  rpc: {
    ...selendraRpc,
    ...rpc
  },
  typesAlias: {
    ...selendraTypesAlias,
    ...typesAlias
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  derives: {
    ...ormlDerives,
    ...selendraDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      selendra: {
        ...selendraTypesBundle?.spec?.selendra,
        ...typesBundle?.spec?.selendra
      },
    }
  },
  signedExtensions: {
    ...selendraSignedExtensions,
    ...signedExtensions
  },
  ...otherOptions
});
