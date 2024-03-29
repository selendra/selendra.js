import { Rate, OptionRatio, OptionRate, AccountId, Balance, ExchangeRate } from '@selendra/types/interfaces';
import { SelendraPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';

export interface DerivedLoanConstants {
  minimumDebitValue: Balance;
  defaultDebitExchangeRate: Rate;
  defaultLiquidationRatio: Rate;
  defaultLiquidationPenalty: Rate;
}

export interface CollateralParams {
  maximumTotalDebitValue: Balance;
  interestRatePerSec: OptionRate;
  liquidationRatio: OptionRatio;
  liquidationPenalty: OptionRate;
  requiredCollateralRatio: OptionRatio;
}

export interface DerivedLoanType extends Omit<CollateralParams, 'liquidationRatio' | 'liquidationPenalty'> {
  currency: SelendraPrimitivesCurrencyCurrencyId;
  debitExchangeRate: Rate;
  liquidationRatio: OptionRatio | ExchangeRate;
  liquidationPenalty: OptionRatio | Rate;
}

export interface DerivedUserLoan {
  currency: SelendraPrimitivesCurrencyCurrencyId;
  account: AccountId | string;
  collateral: Balance;
  debit: Balance;
}

export interface DerivedLoanOverView {
  currency: SelendraPrimitivesCurrencyCurrencyId;
  totalDebit: Balance;
  totalCollateral: Balance;
}
