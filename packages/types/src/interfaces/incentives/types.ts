// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';
import type { CurrencyId } from '@selendra/types/interfaces/primitives';
import type { AccountId } from '@selendra/types/interfaces/runtime';

/** @name PoolId */
export interface PoolId extends Enum {
  readonly isLoans: boolean;
  readonly asLoans: CurrencyId;
  readonly isDex: boolean;
  readonly asDex: CurrencyId;
  readonly type: 'Loans' | 'Dex';
}

/** @name PoolIdV0 */
export interface PoolIdV0 extends Enum {
  readonly isLoansIncentive: boolean;
  readonly asLoansIncentive: CurrencyId;
  readonly isDexIncentive: boolean;
  readonly asDexIncentive: CurrencyId;
  readonly isHomaIncentive: boolean;
  readonly isDexSaving: boolean;
  readonly asDexSaving: CurrencyId;
  readonly isHomaValidatorAllowance: boolean;
  readonly asHomaValidatorAllowance: AccountId;
  readonly type: 'LoansIncentive' | 'DexIncentive' | 'HomaIncentive' | 'DexSaving' | 'HomaValidatorAllowance';
}

export type PHANTOM_INCENTIVES = 'incentives';
