import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { memo } from '@polkadot/api-derive/util';
import { Option } from '@polkadot/types';

import { Rate, ExchangeRate, Balance, Position, Ratio } from '@selendra/types/interfaces';

import { DerivedLoanConstants, DerivedLoanType, DerivedLoanOverView } from '../types/loan';
import { getAllCollateralCurrencyIds } from '../utils';
import {
  SelendraPrimitivesCurrencyCurrencyId,
  ModuleCdpEngineRiskManagementParams
} from '@polkadot/types/lookup';

/**
 * @name loanConstants
 * @description get constants in loan module
 */
function loanConstants(api: ApiInterfaceRx): DerivedLoanConstants {
  return {
    minimumDebitValue: api.consts.cdpEngine.minimumDebitValue as Balance,
    defaultDebitExchangeRate: api.consts.cdpEngine.defaultDebitExchangeRate as ExchangeRate,
    defaultLiquidationRatio: api.consts.cdpEngine.defaultLiquidationRatio as Ratio,
    defaultLiquidationPenalty: api.consts.cdpEngine.defaultLiquidationPenalty as Rate
  };
}

/**
 * @name loanType
 * @description get loan type
 * @param {(SelendraPrimitivesCurrencyCurrencyId | string)} currency
 */
export function loanType(
  instanceId: string,
  api: ApiInterfaceRx
): (currncy: SelendraPrimitivesCurrencyCurrencyId) => Observable<DerivedLoanType> {
  return memo(instanceId, (currency: SelendraPrimitivesCurrencyCurrencyId) => {
    return combineLatest([
      api.query.cdpEngine.debitExchangeRate<Rate>(currency),
      api.query.cdpEngine.collateralParams<Option<ModuleCdpEngineRiskManagementParams>>(currency)
    ]).pipe(
      map((result) => {
        const constants = loanConstants(api);
        const [debitExchangeRate] = result;
        const collateralParams = Reflect.has(result[1], 'unwrapOrDefault')
          ? result[1].unwrapOrDefault()
          : (result[1] as any as ModuleCdpEngineRiskManagementParams);

        return {
          currency,
          debitExchangeRate: debitExchangeRate.isEmpty ? constants.defaultDebitExchangeRate : debitExchangeRate,
          liquidationPenalty: collateralParams.liquidationPenalty.isEmpty
            ? constants.defaultLiquidationPenalty
            : collateralParams.liquidationPenalty,
          liquidationRatio: collateralParams.liquidationRatio.isEmpty
            ? constants.defaultLiquidationRatio
            : collateralParams.liquidationRatio,
          requiredCollateralRatio: collateralParams.requiredCollateralRatio,
          interestRatePerSec: collateralParams.interestRatePerSec,
          maximumTotalDebitValue: collateralParams.maximumTotalDebitValue,
          minimumDebitValue: constants.minimumDebitValue
        };
      })
    );
  });
}

/**
 * @name allLoanTypes
 * @description  get loan types of all kinds of collateral
 */
export function allLoanTypes(instanceId: string, api: ApiInterfaceRx): () => Observable<DerivedLoanType[]> {
  return memo(instanceId, () => {
    const loanTypeQuery = loanType(instanceId, api);

    return getAllCollateralCurrencyIds(api).pipe(
      switchMap((collateralCurrencyIds) => {
        return combineLatest(collateralCurrencyIds.map((currencyId) => loanTypeQuery(currencyId)));
      })
    );
  });
}

/**
 * @name loanOverview
 * @description get loan overview includes total debit, total collateral
 * @param {(CurrencyId | string)} currency
 */
export function loanOverview(
  instanceId: string,
  api: ApiInterfaceRx
): (currency: SelendraPrimitivesCurrencyCurrencyId) => Observable<DerivedLoanOverView> {
  return memo(instanceId, (currency: SelendraPrimitivesCurrencyCurrencyId) =>
    api.query.loans.totalPositions<Position>(currency).pipe(
      map((result) => {
        const { collateral, debit } = result;

        return { currency, totalDebit: debit, totalCollateral: collateral };
      })
    )
  );
}

/**
 * @name allLoanOverview
 * @description get loan overviews of all kinds of collatearl
 */
export function allLoanOverviews(instanceId: string, api: ApiInterfaceRx): () => Observable<DerivedLoanOverView[]> {
  return memo(instanceId, () => {
    const loanOverViewQuery = loanOverview(instanceId, api);

    return getAllCollateralCurrencyIds(api).pipe(
      switchMap((collateralCurrencyIds) => {
        return combineLatest(collateralCurrencyIds.map((currencyId) => loanOverViewQuery(currencyId)));
      })
    );
  });
}
