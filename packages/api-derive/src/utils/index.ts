import { SelendraPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function getAllCollateralCurrencyIds(api: ApiInterfaceRx): Observable<SelendraPrimitivesCurrencyCurrencyId[]> {
  return api.query.cdpEngine.collateralParams.keys().pipe(
    map((keys) => {
      return keys.map((item) => item.args[0]);
    })
  );
}
