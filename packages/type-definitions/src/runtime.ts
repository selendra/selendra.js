export default {
  rpc: {},
  types: {
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    AsOriginId: 'AuthoritysOriginId',
    ProxyType: {
      _enum: [
        'Any',
        'CancelProxy',
        'Governance',
        'Staking',
        'IdentityJudgement',
        'Auction',
        'Swap',
        'Loan',
        'DexLiquidity',
        'StableAssetSwap',
        'StableAssetLiquidity'
      ]
    },
    AtLeast64BitUnsigned: 'u128',
    StableAssetPoolId: 'u32',
    RelayChainBlockNumberOf: 'RelayChainBlockNumber'
  }
};
