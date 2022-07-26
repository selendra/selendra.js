export default {
  rpc: {},
  types: {
    PoolId: {
      _enum: {
        Loans: 'CurrencyId',
        Dex: 'CurrencyId'
      }
    },
    PoolIdV0: {
      _enum: {
        LoansIncentive: 'CurrencyId',
        DexIncentive: 'CurrencyId',
        DexSaving: 'CurrencyId',
      }
    }
  }
};
