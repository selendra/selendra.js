import { Balance } from '@selendra/types/interfaces';
import { SelendraPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';

export interface DerivedBalance {
  currency: SelendraPrimitivesCurrencyCurrencyId;
  balance: Balance;
}

export type DerivedAllBalances = DerivedBalance[];
