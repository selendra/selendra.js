// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, i128, u128, u32, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EvmAddress } from '@selendra/types/interfaces/evm';
import type { Balance } from '@selendra/types/interfaces/runtime';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AuctionId */
export interface AuctionId extends u32 {}

/** @name AuctionIdOf */
export interface AuctionIdOf extends AuctionId {}

/** @name AuthoritysOriginId */
export interface AuthoritysOriginId extends Enum {
  readonly isRoot: boolean;
  readonly isTreasury: boolean;
  readonly isFunanTreasury: boolean;
  readonly isTreasuryReserve: boolean;
  readonly type: 'Root' | 'Treasury' | 'FunanTreasury' | 'TreasuryReserve';
}

/** @name ChainBridgeChainId */
export interface ChainBridgeChainId extends u8 {}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
  readonly isStableAssetPoolToken: boolean;
  readonly asStableAssetPoolToken: u32;
  readonly isForeignAsset: boolean;
  readonly asForeignAsset: u32;
  readonly type: 'Token' | 'DexShare' | 'Erc20' | 'StableAssetPoolToken' | 'ForeignAsset';
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
  readonly type: 'Token' | 'Erc20';
}

/** @name NumberOrHex */
export interface NumberOrHex extends u128 {}

/** @name OrmlCurrencyId */
export interface OrmlCurrencyId extends CurrencyId {}

/** @name SelendraAssetMetadata */
export interface SelendraAssetMetadata extends Struct {
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly minimalBalance: Balance;
}

/** @name SelendraDataProviderId */
export interface SelendraDataProviderId extends Enum {
  readonly isAggregated: boolean;
  readonly isSelendra: boolean;
  readonly isBand: boolean;
  readonly type: 'Aggregated' | 'Selendra' | 'Band';
}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isSel: boolean;
  readonly isKusd: boolean;
  readonly isLsel: boolean;
  readonly isRenbtc: boolean;
  readonly isDai: boolean;
  readonly isKsm: boolean;
  readonly isDot: boolean;
  readonly type: 'Sel' | 'Kusd' | 'Lsel' | 'Renbtc' | 'Dai' | 'Ksm' | 'Dot';
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
