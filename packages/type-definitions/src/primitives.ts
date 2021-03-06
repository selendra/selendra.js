export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    TokenSymbol: {
      _enum: {
        SEL: 0,
        KUSD: 1,
        LSEL: 2,
        // 20 - 39: External tokens (e.g. bridged)
        RENBTC: 20,
        DAI: 21,

        // 128 - 147: Karura & Kusama native tokens
        KSM: 130,
        DOT: 131
      }
    },
    DexShare: {
      _enum: {
        Token: 'TokenSymbol',
        Erc20: 'EvmAddress'
      }
    },
    CurrencyId: {
      _enum: {
        Token: 'TokenSymbol',
        DEXShare: '(DexShare, DexShare)',
        ERC20: 'EvmAddress',
        StableAssetPoolToken: 'u32',
        ForeignAsset: 'u32'
      }
    },
    CurrencyIdOf: 'CurrencyId',
    AuthoritysOriginId: {
      _enum: ['Root', 'Treasury', 'FunanTreasury', 'TreasuryReserve']
    },
    SelendraDataProviderId: {
      _enum: ['Aggregated', 'Selendra', 'Band']
    },
    TradingPair: '(CurrencyId,  CurrencyId)',
    OrmlCurrencyId: 'CurrencyId',
    ChainBridgeChainId: 'u8',
    SelendraAssetMetadata: {
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      minimalBalance: 'Balance'
    },
    NumberOrHex: 'u128'
  },
  typesAlias: {
    rewards: {
      OrmlCurrencyId: 'CurrencyId'
    },
    oracle: {
      DataProviderId: 'SelendraDataProviderId'
    },
    chainBridge: {
      ChainId: 'ChainBridgeChainId'
    }
  }
};
