import type { Balance } from '../runtime';
import type { Struct } from '@polkadot/types-codec';
/** @name Position */
export interface Position extends Struct {
    readonly collateral: Balance;
    readonly debit: Balance;
}
export declare type PHANTOM_LOANS = 'loans';
//# sourceMappingURL=types.d.ts.map