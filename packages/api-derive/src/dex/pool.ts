import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { u128 } from '@polkadot/types-codec';
import { ITuple } from '@polkadot/types-codec/types';
import primitivesConfig from '@selendra/type-definitions/primitives';
import { Observable } from 'rxjs';

import { memo } from '@polkadot/api-derive/util';

import { DerivedDexPool } from '../types/dex';
import { SelendraPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';

const TOKEN_SORT: Record<string, number> = primitivesConfig.types.TokenSymbol._enum;

function sortTokens(
  token1: SelendraPrimitivesCurrencyCurrencyId,
  token2: SelendraPrimitivesCurrencyCurrencyId
): SelendraPrimitivesCurrencyCurrencyId[] {
  const result = [token1, token2];

  return result.sort((a, b) => TOKEN_SORT[a.asToken.toString()] - TOKEN_SORT[b.asToken.toString()]);
}

/**
 * @name pool
 * @description get liquidity pool of the target currency id
 * @param {CurrencyId} currency target currency id
 */
export function pool(
  instanceId: string,
  api: ApiInterfaceRx
): (
  token1: SelendraPrimitivesCurrencyCurrencyId,
  token2: SelendraPrimitivesCurrencyCurrencyId
) => Observable<DerivedDexPool> {
  return memo(instanceId, (token1: SelendraPrimitivesCurrencyCurrencyId, token2: SelendraPrimitivesCurrencyCurrencyId) => {
    const params = sortTokens(token1, token2);

    return api.query.dex.liquidityPool<ITuple<[u128, u128]>>(params).pipe(
      map((result) => {
        const [token1Amount, token2Amount] = result;

        if (token1.eq(params[0]) && token2.eq(params[1])) {
          return [token1Amount, token2Amount];
        }

        return [token2Amount, token1Amount];
      })
    );
  });
}
