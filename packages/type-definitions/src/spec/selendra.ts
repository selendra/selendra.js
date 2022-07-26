import type { OverrideVersionedType } from '@polkadot/types/types';

const addressV0 = {
  Address: 'LookupSource',
  LookupSource: 'IndicesLookupSource'
};

const addressV1 = {
  Address: 'GenericMultiAddress',
  LookupSource: 'GenericMultiAddress'
};

const currencyV0 = {
  CurrencyId: {
    _enum: {
      Token: 'TokenSymbol',
      DEXShare: '(TokenSymbol, TokenSymbol)',
      ERC20: 'EvmAddress'
    }
  }
};

const poolIdV0 = {
  PoolId: {
    _enum: {
      Loans: 'CurrencyId',
      DexIncentive: 'CurrencyId',
      DexSaving: 'CurrencyId',
    }
  }
};

const poolIdV1 = {
  PoolId: {
    _enum: {
      LoansIncentive: 'CurrencyId',
      DexIncentive: 'CurrencyId',
      DexSaving: 'CurrencyId',
    }
  },
  // for orml-reward types
  PoolInfo: {
    totalShares: 'Compact<Share>',
    totalRewards: 'Compact<Balance>',
    totalWithdrawnRewards: 'Compact<Balance>'
  }
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [600, 699],
    types: {
      ...poolIdV0,
      ...addressV0,
      TokenSymbol: {
        _enum: ['SEL', 'KUSD', 'LSEL', 'DAI', 'RENBTC', 'KSM', 'DOT']
      }
    }
  },
  {
    minmax: [700, 719],
    types: {
      ...poolIdV0,
      ...addressV1,
      TokenSymbol: {
        _enum: ['SEL', 'KUSD', 'LSEL', 'DAI', 'RENBTC', 'KSM', 'DOT']
      }
    }
  },
  {
    minmax: [720, 722],
    types: {
      ...addressV1,
      ...poolIdV0,
      ...currencyV0,
      TokenSymbol: {
        _enum: {
          SEL: 0,
          KUSD: 1,
          LSEL: 2,
          RENBTC: 20,
          DAI: 21,
          KSM: 130,
          DOT: 131
        }
      }
    }
  },
  {
    minmax: [723, 729],
    types: {
      ...addressV1,
      ...poolIdV1,
      ...currencyV0,
      TokenSymbol: {
        _enum: {
          SEL: 0,
          KUSD: 1,
          LSEL: 2,
          RENBTC: 20,
          DAI: 21,
          KSM: 130,
          DOT: 131
        }
      }
    }
  },
  {
    minmax: [730, 1007],
    types: {
      ...addressV1,
      ...poolIdV1,
      TokenSymbol: {
        _enum: {
          SEL: 0,
          KUSD: 1,
          LSEL: 2,
          RENBTC: 20,
          DAI: 21,
          KSM: 130,
          DOT: 131
        }
      }
    }
  },
  {
    minmax: [1008, 1008],
    types: {
      ...addressV1,
      ...poolIdV1,
      TokenSymbol: {
        _enum: {
          SEL: 0,
          KUSD: 1,
          LSEL: 2,
          RENBTC: 20,
          DAI: 21,
          KSM: 130,
          DOT: 131
        }
      }
    }
  },
  {
    minmax: [1008, 1009],
    types: {
      ...addressV1,
      ...poolIdV1
    }
  },
  {
    minmax: [1010, 1013],
    types: {
      ...addressV1,
    }
  },
  {
    minmax: [1014, 1018],
    types: {
      ...addressV1,
    }
  },
  {
    minmax: [1019, undefined],
    types: {
      ...addressV1
    }
  }
];

export default versioned;
