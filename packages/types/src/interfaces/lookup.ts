// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<selendra_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup27: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallLookupFailed: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        error: 'FrameSupportScheduleLookupError'
      }
    }
  },
  /**
   * Lookup32: frame_support::traits::schedule::LookupError
   **/
  FrameSupportScheduleLookupError: {
    _enum: ['Unknown', 'BadFormat']
  },
  /**
   * Lookup33: module_transaction_pause::module::Event<T>
   **/
  ModuleTransactionPauseModuleEvent: {
    _enum: {
      TransactionPaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes',
      },
      TransactionUnpaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes'
      }
    }
  },
  /**
   * Lookup34: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup35: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup36: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup37: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup38: selendra_primitives::currency::CurrencyId
   **/
  SelendraPrimitivesCurrencyCurrencyId: {
    _enum: {
      Token: 'SelendraPrimitivesCurrencyTokenSymbol',
      DexShare: '(SelendraPrimitivesCurrencyDexShare,SelendraPrimitivesCurrencyDexShare)',
      Erc20: 'H160',
      StableAssetPoolToken: 'u32',
      ForeignAsset: 'u16'
    }
  },
  /**
   * Lookup39: selendra_primitives::currency::TokenSymbol
   **/
  SelendraPrimitivesCurrencyTokenSymbol: {
    _enum: ['SEL', 'KUSD', 'LSEL', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', 'RENBTC', 'DAI', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', '__Unused32', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', '__Unused64', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', '__Unused128', '__Unused129', 'KSM', 'DOT']
  },
  /**
   * Lookup40: selendra_primitives::currency::DexShare
   **/
  SelendraPrimitivesCurrencyDexShare: {
    _enum: {
      Token: 'SelendraPrimitivesCurrencyTokenSymbol',
      Erc20: 'H160',
      ForeignAsset: 'u16',
      StableAssetPoolToken: 'u32'
    }
  },
  /**
   * Lookup45: module_currencies::module::Event<T>
   **/
  ModuleCurrenciesModuleEvent: {
    _enum: {
      Transferred: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Deposited: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustSwept: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup46: module_transaction_payment::module::Event<T>
   **/
  ModuleTransactionPaymentModuleEvent: {
    _enum: {
      ChargeFeePoolEnabled: {
        subAccount: 'AccountId32',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        feeSwapPath: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        exchangeRate: 'u128',
        poolSize: 'u128',
        swapThreshold: 'u128',
      },
      ChargeFeePoolSwapped: {
        subAccount: 'AccountId32',
        supplyCurrencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        oldExchangeRate: 'u128',
        swapExchangeRate: 'u128',
        newExchangeRate: 'u128',
        newPoolSize: 'u128',
      },
      ChargeFeePoolDisabled: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        foreignAmount: 'u128',
        nativeAmount: 'u128',
      },
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        actualTip: 'u128',
        actualSurplus: 'u128'
      }
    }
  },
  /**
   * Lookup49: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128'
      }
    }
  },
  /**
   * Lookup50: pallet_bounties::pallet::Event<T>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup51: pallet_tips::pallet::Event<T>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup52: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup53: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup54: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup55: pallet_recovery::pallet::Event<T>
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'AccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
        sender: 'AccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      AccountRecovered: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup56: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      AnonymousCreated: {
        anonymous: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup57: runtime_common::ProxyType
   **/
  RuntimeCommonProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Staking', 'IdentityJudgement', 'Auction', 'Swap', 'Loan', 'DexLiquidity', 'StableAssetSwap', 'StableAssetLiquidity']
  },
  /**
   * Lookup58: module_idle_scheduler::module::Event<T>
   **/
  ModuleIdleSchedulerModuleEvent: {
    _enum: {
      TaskDispatched: {
        taskId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      TaskAdded: {
        taskId: 'u32',
        task: 'SelendraRuntimeConfigUtilityConfigScheduledTasks'
      }
    }
  },
  /**
   * Lookup59: selendra_runtime::config::utility_config::ScheduledTasks
   **/
  SelendraRuntimeConfigUtilityConfigScheduledTasks: {
    _enum: {
      EvmTask: 'ModuleEvmEvmTask'
    }
  },
  /**
   * Lookup60: module_evm::EvmTask<selendra_runtime::Runtime>
   **/
  ModuleEvmEvmTask: {
    _enum: {
      Schedule: {
        from: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'u128',
        gasLimit: 'u64',
        storageLimit: 'u32',
      },
      Remove: {
        caller: 'H160',
        contract: 'H160',
        maintainer: 'H160'
      }
    }
  },
  /**
   * Lookup61: selendra_runtime::Runtime
   **/
  SelendraRuntimeRuntime: 'Null',
  /**
   * Lookup62: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup63: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup64: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: '(u32,u128,u128)',
      Rewarded: '(AccountId32,u128)',
      Slashed: '(AccountId32,u128)',
      OldSlashingReportDiscarded: 'u32',
      StakersElected: 'Null',
      Bonded: '(AccountId32,u128)',
      Unbonded: '(AccountId32,u128)',
      Withdrawn: '(AccountId32,u128)',
      Kicked: '(AccountId32,AccountId32)',
      StakingElectionFailed: 'Null',
      Chilled: 'AccountId32',
      PayoutStarted: '(u32,AccountId32)',
      ValidatorPrefsSet: '(AccountId32,PalletStakingValidatorPrefs)'
    }
  },
  /**
   * Lookup65: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup69: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup71: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup72: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup75: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup76: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup77: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,PalletStakingExposure)>'
      }
    }
  },
  /**
   * Lookup78: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup79: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup82: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup85: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup86: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        electionCompute: 'PalletElectionProviderMultiPhaseElectionCompute',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        electionCompute: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
      },
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      SignedPhaseStarted: {
        round: 'u32',
      },
      UnsignedPhaseStarted: {
        round: 'u32'
      }
    }
  },
  /**
   * Lookup87: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup89: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup90: pallet_nomination_pools::pallet::Event<T>
   **/
  PalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'AccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'AccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'AccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'AccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      Withdrawn: {
        member: 'AccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'AccountId32',
      },
      RolesUpdated: {
        root: 'Option<AccountId32>',
        stateToggler: 'Option<AccountId32>',
        nominator: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup91: pallet_nomination_pools::PoolState
   **/
  PalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup93: orml_authority::module::Event<T>
   **/
  OrmlAuthorityModuleEvent: {
    _enum: {
      Dispatched: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Scheduled: {
        origin: 'SelendraRuntimeOriginCaller',
        index: 'u32',
      },
      FastTracked: {
        origin: 'SelendraRuntimeOriginCaller',
        index: 'u32',
        when: 'u32',
      },
      Delayed: {
        origin: 'SelendraRuntimeOriginCaller',
        index: 'u32',
        when: 'u32',
      },
      Cancelled: {
        origin: 'SelendraRuntimeOriginCaller',
        index: 'u32',
      },
      AuthorizedCall: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        caller: 'Option<AccountId32>',
      },
      RemovedAuthorizedCall: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      TriggeredCallBy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        caller: 'AccountId32'
      }
    }
  },
  /**
   * Lookup94: selendra_runtime::OriginCaller
   **/
  SelendraRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Void: 'SpCoreVoid',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Authority: 'OrmlAuthorityDelayedOrigin',
      Council: 'PalletCollectiveRawOrigin',
      __Unused62: 'Null',
      FinancialCouncil: 'PalletCollectiveRawOrigin',
      __Unused64: 'Null',
      TechnicalCommittee: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup95: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup96: orml_authority::DelayedOrigin<BlockNumber, selendra_runtime::OriginCaller>
   **/
  OrmlAuthorityDelayedOrigin: {
    delay: 'u32',
    origin: 'SelendraRuntimeOriginCaller'
  },
  /**
   * Lookup97: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup100: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup101: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup102: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup107: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup110: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
        depositors: 'Vec<AccountId32>',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Executed: {
        refIndex: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      PreimageNoted: {
        proposalHash: 'H256',
        who: 'AccountId32',
        deposit: 'u128',
      },
      PreimageUsed: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
      },
      PreimageInvalid: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageMissing: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageReaped: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
        reaper: 'AccountId32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup112: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup113: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup115: orml_oracle::module::Event<T, I>
   **/
  OrmlOracleModuleEvent: {
    _enum: {
      NewFeedData: {
        sender: 'AccountId32',
        values: 'Vec<(SelendraPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup119: orml_auction::module::Event<T>
   **/
  OrmlAuctionModuleEvent: {
    _enum: {
      Bid: {
        auctionId: 'u32',
        bidder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup120: module_prices::module::Event<T>
   **/
  ModulePricesModuleEvent: {
    _enum: {
      LockPrice: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        lockedPrice: 'u128',
      },
      UnlockPrice: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup121: module_dex::module::Event<T>
   **/
  ModuleDexModuleEvent: {
    _enum: {
      AddProvision: {
        who: 'AccountId32',
        currency0: 'SelendraPrimitivesCurrencyCurrencyId',
        contribution0: 'u128',
        currency1: 'SelendraPrimitivesCurrencyCurrencyId',
        contribution1: 'u128',
      },
      AddLiquidity: {
        who: 'AccountId32',
        currency0: 'SelendraPrimitivesCurrencyCurrencyId',
        pool0: 'u128',
        currency1: 'SelendraPrimitivesCurrencyCurrencyId',
        pool1: 'u128',
        shareIncrement: 'u128',
      },
      RemoveLiquidity: {
        who: 'AccountId32',
        currency0: 'SelendraPrimitivesCurrencyCurrencyId',
        pool0: 'u128',
        currency1: 'SelendraPrimitivesCurrencyCurrencyId',
        pool1: 'u128',
        shareDecrement: 'u128',
      },
      Swap: {
        trader: 'AccountId32',
        path: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        liquidityChanges: 'Vec<u128>',
      },
      EnableTradingPair: {
        tradingPair: 'SelendraPrimitivesTradingPair',
      },
      ListProvisioning: {
        tradingPair: 'SelendraPrimitivesTradingPair',
      },
      DisableTradingPair: {
        tradingPair: 'SelendraPrimitivesTradingPair',
      },
      ProvisioningToEnabled: {
        tradingPair: 'SelendraPrimitivesTradingPair',
        pool0: 'u128',
        pool1: 'u128',
        shareAmount: 'u128',
      },
      RefundProvision: {
        who: 'AccountId32',
        currency0: 'SelendraPrimitivesCurrencyCurrencyId',
        contribution0: 'u128',
        currency1: 'SelendraPrimitivesCurrencyCurrencyId',
        contribution1: 'u128',
      },
      ProvisioningAborted: {
        tradingPair: 'SelendraPrimitivesTradingPair',
        accumulatedProvision0: 'u128',
        accumulatedProvision1: 'u128'
      }
    }
  },
  /**
   * Lookup123: selendra_primitives::TradingPair
   **/
  SelendraPrimitivesTradingPair: '(SelendraPrimitivesCurrencyCurrencyId,SelendraPrimitivesCurrencyCurrencyId)',
  /**
   * Lookup124: module_auction_manager::module::Event<T>
   **/
  ModuleAuctionManagerModuleEvent: {
    _enum: {
      NewCollateralAuction: {
        auctionId: 'u32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        targetBidPrice: 'u128',
      },
      CancelAuction: {
        auctionId: 'u32',
      },
      CollateralAuctionDealt: {
        auctionId: 'u32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        winner: 'AccountId32',
        paymentAmount: 'u128',
      },
      DEXTakeCollateralAuction: {
        auctionId: 'u32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        supplyCollateralAmount: 'u128',
        targetStableAmount: 'u128',
      },
      CollateralAuctionAborted: {
        auctionId: 'u32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        targetStableAmount: 'u128',
        refundRecipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup125: module_loans::module::Event<T>
   **/
  ModuleLoansModuleEvent: {
    _enum: {
      PositionUpdated: {
        owner: 'AccountId32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitAdjustment: 'i128',
      },
      ConfiscateCollateralAndDebit: {
        owner: 'AccountId32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        confiscatedCollateralAmount: 'u128',
        deductDebitAmount: 'u128',
      },
      TransferLoan: {
        from: 'AccountId32',
        to: 'AccountId32',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup127: module_funan::module::Event<T>
   **/
  ModuleFunanModuleEvent: {
    _enum: {
      Authorization: {
        authorizer: 'AccountId32',
        authorizee: 'AccountId32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      UnAuthorization: {
        authorizer: 'AccountId32',
        authorizee: 'AccountId32',
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      UnAuthorizationAll: {
        authorizer: 'AccountId32',
      },
      TransferDebit: {
        fromCurrency: 'SelendraPrimitivesCurrencyCurrencyId',
        toCurrency: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup128: module_cdp_treasury::module::Event<T>
   **/
  ModuleCdpTreasuryModuleEvent: {
    _enum: {
      ExpectedCollateralAuctionSizeUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newSize: 'u128'
      }
    }
  },
  /**
   * Lookup129: module_cdp_engine::module::Event<T>
   **/
  ModuleCdpEngineModuleEvent: {
    _enum: {
      LiquidateUnsafeCDP: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
        collateralAmount: 'u128',
        badDebtValue: 'u128',
        targetAmount: 'u128',
      },
      SettleCDPInDebit: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
      },
      CloseCDPInDebitByDEX: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
        soldCollateralAmount: 'u128',
        refundCollateralAmount: 'u128',
        debitValue: 'u128',
      },
      InterestRatePerSecUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newInterestRatePerSec: 'Option<u128>',
      },
      LiquidationRatioUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newLiquidationRatio: 'Option<u128>',
      },
      LiquidationPenaltyUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newLiquidationPenalty: 'Option<u128>',
      },
      RequiredCollateralRatioUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newRequiredCollateralRatio: 'Option<u128>',
      },
      MaximumTotalDebitValueUpdated: {
        collateralType: 'SelendraPrimitivesCurrencyCurrencyId',
        newTotalDebitValue: 'u128'
      }
    }
  },
  /**
   * Lookup131: module_emergency_shutdown::module::Event<T>
   **/
  ModuleEmergencyShutdownModuleEvent: {
    _enum: {
      Shutdown: {
        blockNumber: 'u32',
      },
      OpenRefund: {
        blockNumber: 'u32',
      },
      Refund: {
        who: 'AccountId32',
        stableCoinAmount: 'u128',
        refundList: 'Vec<(SelendraPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup134: module_incentives::module::Event<T>
   **/
  ModuleIncentivesModuleEvent: {
    _enum: {
      DepositDexShare: {
        who: 'AccountId32',
        dexShareType: 'SelendraPrimitivesCurrencyCurrencyId',
        deposit: 'u128',
      },
      WithdrawDexShare: {
        who: 'AccountId32',
        dexShareType: 'SelendraPrimitivesCurrencyCurrencyId',
        withdraw: 'u128',
      },
      ClaimRewards: {
        who: 'AccountId32',
        pool: 'ModuleSupportIncentivesPoolId',
        rewardCurrencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        actualAmount: 'u128',
        deductionAmount: 'u128',
      },
      IncentiveRewardAmountUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        rewardCurrencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        rewardAmountPerPeriod: 'u128',
      },
      SavingRewardRateUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        rewardRatePerPeriod: 'u128',
      },
      ClaimRewardDeductionRateUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        deductionRate: 'u128'
      }
    }
  },
  /**
   * Lookup135: module_support::incentives::PoolId
   **/
  ModuleSupportIncentivesPoolId: {
    _enum: {
      Loans: 'SelendraPrimitivesCurrencyCurrencyId',
      Dex: 'SelendraPrimitivesCurrencyCurrencyId'
    }
  },
  /**
   * Lookup136: module_nft::module::Event<T>
   **/
  ModuleNftModuleEvent: {
    _enum: {
      CreatedClass: {
        owner: 'AccountId32',
        classId: 'u32',
      },
      MintedToken: {
        from: 'AccountId32',
        to: 'AccountId32',
        classId: 'u32',
        quantity: 'u32',
      },
      TransferredToken: {
        from: 'AccountId32',
        to: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
      },
      BurnedToken: {
        owner: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
      },
      BurnedTokenWithRemark: {
        owner: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
        remarkHash: 'H256',
      },
      DestroyedClass: {
        owner: 'AccountId32',
        classId: 'u32'
      }
    }
  },
  /**
   * Lookup137: module_asset_registry::module::Event<T>
   **/
  ModuleAssetRegistryModuleEvent: {
    _enum: {
      AssetRegistered: {
        assetId: 'SelendraPrimitivesCurrencyAssetIds',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata',
      },
      AssetUpdated: {
        assetId: 'SelendraPrimitivesCurrencyAssetIds',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata'
      }
    }
  },
  /**
   * Lookup138: selendra_primitives::currency::AssetIds
   **/
  SelendraPrimitivesCurrencyAssetIds: {
    _enum: {
      Erc20: 'H160',
      StableAssetId: 'u32',
      ForeignAssetId: 'u16',
      NativeAssetId: 'SelendraPrimitivesCurrencyCurrencyId'
    }
  },
  /**
   * Lookup139: selendra_primitives::currency::AssetMetadata<Balance>
   **/
  SelendraPrimitivesCurrencyAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    minimalBalance: 'u128'
  },
  /**
   * Lookup140: module_evm::module::Event<T>
   **/
  ModuleEvmModuleEvent: {
    _enum: {
      Created: {
        from: 'H160',
        contract: 'H160',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      CreatedFailed: {
        from: 'H160',
        contract: 'H160',
        exitReason: 'EvmCoreErrorExitReason',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      Executed: {
        from: 'H160',
        contract: 'H160',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      ExecutedFailed: {
        from: 'H160',
        contract: 'H160',
        exitReason: 'EvmCoreErrorExitReason',
        output: 'Bytes',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      TransferredMaintainer: {
        contract: 'H160',
        newMaintainer: 'H160',
      },
      ContractDevelopmentEnabled: {
        who: 'AccountId32',
      },
      ContractDevelopmentDisabled: {
        who: 'AccountId32',
      },
      ContractPublished: {
        contract: 'H160',
      },
      ContractSetCode: {
        contract: 'H160',
      },
      ContractSelfdestructed: {
        contract: 'H160'
      }
    }
  },
  /**
   * Lookup142: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup145: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup146: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup147: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      InvalidCode: 'Null'
    }
  },
  /**
   * Lookup150: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup151: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup152: module_evm_accounts::module::Event<T>
   **/
  ModuleEvmAccountsModuleEvent: {
    _enum: {
      ClaimAccount: {
        accountId: 'AccountId32',
        evmAddress: 'H160'
      }
    }
  },
  /**
   * Lookup153: module_stable_asset::pallet::Event<T>
   **/
  ModuleStableAssetEvent: {
    _enum: {
      CreatePool: {
        poolId: 'u32',
        a: 'u128',
        swapId: 'AccountId32',
        palletId: 'AccountId32',
      },
      Minted: {
        minter: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmounts: 'Vec<u128>',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmount: 'u128',
      },
      TokenSwapped: {
        swapper: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAsset: 'SelendraPrimitivesCurrencyCurrencyId',
        outputAsset: 'SelendraPrimitivesCurrencyCurrencyId',
        inputAmount: 'u128',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        outputAmount: 'u128',
      },
      RedeemedProportion: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmount: 'u128',
        minOutputAmounts: 'Vec<u128>',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmounts: 'Vec<u128>',
      },
      RedeemedSingle: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmount: 'u128',
        outputAsset: 'SelendraPrimitivesCurrencyCurrencyId',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmount: 'u128',
      },
      RedeemedMulti: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        outputAmounts: 'Vec<u128>',
        maxInputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        inputAmount: 'u128',
      },
      BalanceUpdated: {
        poolId: 'u32',
        oldBalances: 'Vec<u128>',
        newBalances: 'Vec<u128>',
      },
      YieldCollected: {
        poolId: 'u32',
        a: 'u128',
        oldTotalSupply: 'u128',
        newTotalSupply: 'u128',
        who: 'AccountId32',
        amount: 'u128',
      },
      FeeCollected: {
        poolId: 'u32',
        a: 'u128',
        oldBalances: 'Vec<u128>',
        newBalances: 'Vec<u128>',
        oldTotalSupply: 'u128',
        newTotalSupply: 'u128',
        who: 'AccountId32',
        amount: 'u128',
      },
      AModified: {
        poolId: 'u32',
        value: 'u128',
        time: 'u32'
      }
    }
  },
  /**
   * Lookup154: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup155: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup157: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup159: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup163: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup164: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup165: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup167: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup168: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup169: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup170: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup174: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup175: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup179: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<selendra_runtime::Call, primitive_types::H256>, BlockNumber, selendra_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV3: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'FrameSupportScheduleMaybeHashed',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'SelendraRuntimeOriginCaller'
  },
  /**
   * Lookup180: frame_support::traits::schedule::MaybeHashed<selendra_runtime::Call, primitive_types::H256>
   **/
  FrameSupportScheduleMaybeHashed: {
    _enum: {
      Value: 'Call',
      Hash: 'H256'
    }
  },
  /**
   * Lookup182: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed'
      }
    }
  },
  /**
   * Lookup184: module_transaction_pause::module::Call<T>
   **/
  ModuleTransactionPauseModuleCall: {
    _enum: {
      pause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      unpause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes'
      }
    }
  },
  /**
   * Lookup185: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup186: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup188: module_currencies::module::Call<T>
   **/
  ModuleCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'i128',
      },
      sweep_dust: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        accounts: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup189: module_transaction_payment::module::Call<T>
   **/
  ModuleTransactionPaymentModuleCall: {
    _enum: {
      set_alternative_fee_swap_path: {
        feeSwapPath: 'Option<Vec<SelendraPrimitivesCurrencyCurrencyId>>',
      },
      enable_charge_fee_pool: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        swapPath: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        poolSize: 'u128',
        swapThreshold: 'u128',
      },
      disable_charge_fee_pool: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      with_fee_path: {
        feeSwapPath: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        call: 'Call',
      },
      with_fee_currency: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        call: 'Call',
      },
      with_fee_paid_by: {
        call: 'Call',
        payerAddr: 'AccountId32',
        payerSig: 'SpRuntimeMultiSignature'
      }
    }
  },
  /**
   * Lookup191: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup192: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup194: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup195: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup197: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup198: pallet_bounties::pallet::Call<T>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup199: pallet_tips::pallet::Call<T>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'AccountId32',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'AccountId32',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup200: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'SelendraRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
   * Lookup202: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'WrapperKeepOpaque<Call>',
        storeCall: 'bool',
        maxWeight: 'u64',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'u64',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup205: pallet_recovery::pallet::Call<T>
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'AccountId32',
        call: 'Call',
      },
      set_recovered: {
        lost: 'AccountId32',
        rescuer: 'AccountId32',
      },
      create_recovery: {
        friends: 'Vec<AccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'AccountId32',
      },
      vouch_recovery: {
        lost: 'AccountId32',
        rescuer: 'AccountId32',
      },
      claim_recovery: {
        account: 'AccountId32',
      },
      close_recovery: {
        rescuer: 'AccountId32',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup206: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'AccountId32',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      anonymous: {
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_anonymous: {
        spawner: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'AccountId32',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'AccountId32',
        real: 'AccountId32',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup208: module_idle_scheduler::module::Call<T>
   **/
  ModuleIdleSchedulerModuleCall: {
    _enum: {
      schedule_task: {
        task: 'SelendraRuntimeConfigUtilityConfigScheduledTasks'
      }
    }
  },
  /**
   * Lookup209: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup210: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'AccountId32',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'AccountId32',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup211: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup247: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup248: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup249: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup250: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup252: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup253: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup254: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup255: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup256: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup258: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup259: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup261: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup262: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      set_history_depth: {
        newHistoryDepth: 'Compact<u32>',
        eraItemsDeleted: 'Compact<u32>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32'
      }
    }
  },
  /**
   * Lookup263: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup267: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup268: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup269: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup270: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup271: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'SelendraRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup272: selendra_runtime::SessionKeys
   **/
  SelendraRuntimeSessionKeys: {
    babe: 'SpConsensusBabeAppPublic',
    grandpa: 'SpFinalityGrandpaAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup273: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup274: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup275: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup276: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup277: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup278: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup279: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup281: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup282: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup284: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup285: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup286: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup290: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup291: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup292: pallet_election_provider_multi_phase::RawSolution<selendra_runtime::config::consensus_config::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'SelendraRuntimeConfigConsensusConfigNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup293: selendra_runtime::config::consensus_config::NposSolution16
   **/
  SelendraRuntimeConfigConsensusConfigNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup344: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup345: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup349: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup351: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'AccountId32',
      },
      put_in_front_of: {
        lighter: 'AccountId32'
      }
    }
  },
  /**
   * Lookup352: pallet_nomination_pools::pallet::Call<T>
   **/
  PalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'AccountId32',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'AccountId32',
        nominator: 'AccountId32',
        stateToggler: 'AccountId32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<AccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PalletNominationPoolsConfigOpU128',
        minCreateBond: 'PalletNominationPoolsConfigOpU128',
        maxPools: 'PalletNominationPoolsConfigOpU32',
        maxMembers: 'PalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PalletNominationPoolsConfigOpU32',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PalletNominationPoolsConfigOpAccountId32',
        newStateToggler: 'PalletNominationPoolsConfigOpAccountId32'
      }
    }
  },
  /**
   * Lookup353: pallet_nomination_pools::BondExtra<Balance>
   **/
  PalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup354: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup355: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup356: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'AccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup357: orml_authority::module::Call<T>
   **/
  OrmlAuthorityModuleCall: {
    _enum: {
      dispatch_as: {
        asOrigin: 'SelendraPrimitivesAuthoritysOriginId',
        call: 'Call',
      },
      schedule_dispatch: {
        when: 'FrameSupportScheduleDispatchTime',
        priority: 'u8',
        withDelayedOrigin: 'bool',
        call: 'Call',
      },
      fast_track_scheduled_dispatch: {
        initialOrigin: 'SelendraRuntimeOriginCaller',
        taskId: 'u32',
        when: 'FrameSupportScheduleDispatchTime',
      },
      delay_scheduled_dispatch: {
        initialOrigin: 'SelendraRuntimeOriginCaller',
        taskId: 'u32',
        additionalDelay: 'u32',
      },
      cancel_scheduled_dispatch: {
        initialOrigin: 'SelendraRuntimeOriginCaller',
        taskId: 'u32',
      },
      authorize_call: {
        call: 'Call',
        caller: 'Option<AccountId32>',
      },
      remove_authorized_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      trigger_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        callWeightBound: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup358: selendra_primitives::AuthoritysOriginId
   **/
  SelendraPrimitivesAuthoritysOriginId: {
    _enum: ['Root', 'Treasury', 'FunanTreasury', 'TreasuryReserve']
  },
  /**
   * Lookup359: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup360: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup361: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId32',
      },
      remove_member: {
        who: 'AccountId32',
      },
      swap_member: {
        remove: 'AccountId32',
        add: 'AccountId32',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
      },
      set_prime: {
        who: 'AccountId32',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup366: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        hasReplacement: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup367: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup368: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposalHash: 'H256',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
        secondsUpperBound: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposalHash: 'H256',
      },
      external_propose_majority: {
        proposalHash: 'H256',
      },
      external_propose_default: {
        proposalHash: 'H256',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      cancel_queued: {
        which: 'u32',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      note_preimage: {
        encodedProposal: 'Bytes',
      },
      note_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      reap_preimage: {
        proposalHash: 'H256',
        proposalLenUpperBound: 'Compact<u32>',
      },
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      enact_proposal: {
        proposalHash: 'H256',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup369: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup370: orml_oracle::module::Call<T, I>
   **/
  OrmlOracleModuleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(SelendraPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup372: orml_auction::module::Call<T>
   **/
  OrmlAuctionModuleCall: {
    _enum: {
      bid: {
        id: 'u32',
        value: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup373: orml_rewards::module::Call<T>
   **/
  OrmlRewardsModuleCall: 'Null',
  /**
   * Lookup374: module_prices::module::Call<T>
   **/
  ModulePricesModuleCall: {
    _enum: {
      lock_price: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      unlock_price: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup375: module_dex::module::Call<T>
   **/
  ModuleDexModuleCall: {
    _enum: {
      swap_with_exact_supply: {
        path: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        supplyAmount: 'Compact<u128>',
        minTargetAmount: 'Compact<u128>',
      },
      swap_with_exact_target: {
        path: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        targetAmount: 'Compact<u128>',
        maxSupplyAmount: 'Compact<u128>',
      },
      add_liquidity: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        maxAmountA: 'Compact<u128>',
        maxAmountB: 'Compact<u128>',
        minShareIncrement: 'Compact<u128>',
        stakeIncrementShare: 'bool',
      },
      add_provision: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        amountA: 'Compact<u128>',
        amountB: 'Compact<u128>',
      },
      claim_dex_share: {
        owner: 'AccountId32',
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      remove_liquidity: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        removeShare: 'Compact<u128>',
        minWithdrawnA: 'Compact<u128>',
        minWithdrawnB: 'Compact<u128>',
        byUnstake: 'bool',
      },
      list_provisioning: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        minContributionA: 'Compact<u128>',
        minContributionB: 'Compact<u128>',
        targetProvisionA: 'Compact<u128>',
        targetProvisionB: 'Compact<u128>',
        notBefore: 'Compact<u32>',
      },
      update_provisioning_parameters: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        minContributionA: 'Compact<u128>',
        minContributionB: 'Compact<u128>',
        targetProvisionA: 'Compact<u128>',
        targetProvisionB: 'Compact<u128>',
        notBefore: 'Compact<u32>',
      },
      end_provisioning: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      enable_trading_pair: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      disable_trading_pair: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      refund_provision: {
        owner: 'AccountId32',
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      abort_provisioning: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup376: module_dex_oracle::module::Call<T>
   **/
  ModuleDexOracleModuleCall: {
    _enum: {
      enable_average_price: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        interval: 'u64',
      },
      disable_average_price: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
      },
      update_average_price_interval: {
        currencyIdA: 'SelendraPrimitivesCurrencyCurrencyId',
        currencyIdB: 'SelendraPrimitivesCurrencyCurrencyId',
        newInterval: 'u64'
      }
    }
  },
  /**
   * Lookup377: module_aggregated_dex::module::Call<T>
   **/
  ModuleAggregatedDexModuleCall: {
    _enum: {
      swap_with_exact_supply: {
        paths: 'Vec<ModuleAggregatedDexSwapPath>',
        supplyAmount: 'Compact<u128>',
        minTargetAmount: 'Compact<u128>',
      },
      swap_with_exact_target: {
        paths: 'Vec<ModuleAggregatedDexSwapPath>',
        targetAmount: 'Compact<u128>',
        maxSupplyAmount: 'Compact<u128>',
      },
      update_aggregated_swap_paths: {
        updates: 'Vec<((SelendraPrimitivesCurrencyCurrencyId,SelendraPrimitivesCurrencyCurrencyId),Option<Vec<ModuleAggregatedDexSwapPath>>)>'
      }
    }
  },
  /**
   * Lookup379: module_aggregated_dex::SwapPath
   **/
  ModuleAggregatedDexSwapPath: {
    _enum: {
      Dex: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
      Taiga: '(u32,u32,u32)'
    }
  },
  /**
   * Lookup384: module_auction_manager::module::Call<T>
   **/
  ModuleAuctionManagerModuleCall: {
    _enum: {
      cancel: {
        id: 'u32'
      }
    }
  },
  /**
   * Lookup385: module_loans::module::Call<T>
   **/
  ModuleLoansModuleCall: 'Null',
  /**
   * Lookup386: module_funan::module::Call<T>
   **/
  ModuleFunanModuleCall: {
    _enum: {
      adjust_loan: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitAdjustment: 'i128',
      },
      close_loan_has_debit_by_dex: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        maxCollateralAmount: 'Compact<u128>',
      },
      transfer_loan_from: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        from: 'MultiAddress',
      },
      authorize: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        to: 'MultiAddress',
      },
      unauthorize: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        to: 'MultiAddress',
      },
      unauthorize_all: 'Null',
      expand_position_collateral: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        increaseDebitValue: 'u128',
        minIncreaseCollateral: 'u128',
      },
      shrink_position_debit: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        decreaseCollateral: 'u128',
        minDecreaseDebitValue: 'u128',
      },
      adjust_loan_by_debit_value: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitValueAdjustment: 'i128',
      },
      transfer_debit: {
        fromCurrency: 'SelendraPrimitivesCurrencyCurrencyId',
        toCurrency: 'SelendraPrimitivesCurrencyCurrencyId',
        debitTransfer: 'u128'
      }
    }
  },
  /**
   * Lookup387: module_cdp_treasury::module::Call<T>
   **/
  ModuleCdpTreasuryModuleCall: {
    _enum: {
      extract_surplus_to_treasury: {
        amount: 'Compact<u128>',
      },
      auction_collateral: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
        target: 'Compact<u128>',
        splited: 'bool',
      },
      exchange_collateral_to_stable: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        swapLimit: 'ModuleSupportDexSwapLimit',
      },
      set_expected_collateral_auction_size: {
        _alias: {
          size_: 'size',
        },
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        size_: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup388: module_support::dex::SwapLimit<Balance>
   **/
  ModuleSupportDexSwapLimit: {
    _enum: {
      ExactSupply: '(u128,u128)',
      ExactTarget: '(u128,u128)'
    }
  },
  /**
   * Lookup389: module_cdp_engine::module::Call<T>
   **/
  ModuleCdpEngineModuleCall: {
    _enum: {
      liquidate: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'MultiAddress',
      },
      settle: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        who: 'MultiAddress',
      },
      set_collateral_params: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        interestRatePerSec: 'OrmlTraitsChangeOption',
        liquidationRatio: 'OrmlTraitsChangeOption',
        liquidationPenalty: 'OrmlTraitsChangeOption',
        requiredCollateralRatio: 'OrmlTraitsChangeOption',
        maximumTotalDebitValue: 'OrmlTraitsChangeU128'
      }
    }
  },
  /**
   * Lookup390: orml_traits::Change<Option<sp_arithmetic::fixed_point::FixedU128>>
   **/
  OrmlTraitsChangeOption: {
    _enum: {
      NoChange: 'Null',
      NewValue: 'Option<u128>'
    }
  },
  /**
   * Lookup391: orml_traits::Change<Value>
   **/
  OrmlTraitsChangeU128: {
    _enum: {
      NoChange: 'Null',
      NewValue: 'u128'
    }
  },
  /**
   * Lookup392: module_emergency_shutdown::module::Call<T>
   **/
  ModuleEmergencyShutdownModuleCall: {
    _enum: {
      emergency_shutdown: 'Null',
      open_collateral_refund: 'Null',
      refund_collaterals: {
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup393: module_incentives::module::Call<T>
   **/
  ModuleIncentivesModuleCall: {
    _enum: {
      deposit_dex_share: {
        lpCurrencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      withdraw_dex_share: {
        lpCurrencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      claim_rewards: {
        poolId: 'ModuleSupportIncentivesPoolId',
      },
      update_incentive_rewards: {
        updates: 'Vec<(ModuleSupportIncentivesPoolId,Vec<(SelendraPrimitivesCurrencyCurrencyId,u128)>)>',
      },
      update_dex_saving_rewards: {
        updates: 'Vec<(ModuleSupportIncentivesPoolId,u128)>',
      },
      update_claim_reward_deduction_rates: {
        updates: 'Vec<(ModuleSupportIncentivesPoolId,u128)>'
      }
    }
  },
  /**
   * Lookup398: module_nft::module::Call<T>
   **/
  ModuleNftModuleCall: {
    _enum: {
      create_class: {
        metadata: 'Bytes',
        properties: 'u8',
        attributes: 'BTreeMap<Bytes, Bytes>',
      },
      mint: {
        to: 'MultiAddress',
        classId: 'u32',
        metadata: 'Bytes',
        attributes: 'BTreeMap<Bytes, Bytes>',
        quantity: 'Compact<u32>',
      },
      transfer: {
        to: 'MultiAddress',
        token: '(u32,u64)',
      },
      burn: {
        token: '(u32,u64)',
      },
      burn_with_remark: {
        token: '(u32,u64)',
        remark: 'Bytes',
      },
      destroy_class: {
        classId: 'u32',
        dest: 'MultiAddress',
      },
      update_class_properties: {
        classId: 'u32',
        properties: 'u8'
      }
    }
  },
  /**
   * Lookup400: selendra_primitives::nft::ClassProperty
   **/
  SelendraPrimitivesNftClassProperty: {
    _enum: ['__Unused0', 'Transferable', 'Burnable', '__Unused3', 'Mintable', '__Unused5', '__Unused6', '__Unused7', 'ClassPropertiesMutable']
  },
  /**
   * Lookup403: module_asset_registry::module::Call<T>
   **/
  ModuleAssetRegistryModuleCall: {
    _enum: {
      register_stable_asset: {
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata',
      },
      update_stable_asset: {
        stableAssetId: 'u32',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata',
      },
      register_erc20_asset: {
        contract: 'H160',
        minimalBalance: 'u128',
      },
      update_erc20_asset: {
        contract: 'H160',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata',
      },
      register_native_asset: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata',
      },
      update_native_asset: {
        currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
        metadata: 'SelendraPrimitivesCurrencyAssetMetadata'
      }
    }
  },
  /**
   * Lookup404: module_evm::module::Call<T>
   **/
  ModuleEvmModuleCall: {
    _enum: {
      eth_call: {
        action: 'EthereumTransactionTransactionAction',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
        validUntil: 'Compact<u32>',
      },
      call: {
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      scheduled_call: {
        from: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      create: {
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      create2: {
        input: 'Bytes',
        salt: 'H256',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      create_nft_contract: {
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      create_predeploy_contract: {
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionAccessListItem>',
      },
      transfer_maintainer: {
        contract: 'H160',
        newMaintainer: 'H160',
      },
      publish_contract: {
        contract: 'H160',
      },
      publish_free: {
        contract: 'H160',
      },
      enable_contract_development: 'Null',
      disable_contract_development: 'Null',
      set_code: {
        contract: 'H160',
        code: 'Bytes',
      },
      selfdestruct: {
        contract: 'H160'
      }
    }
  },
  /**
   * Lookup405: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup407: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup408: module_evm_accounts::module::Call<T>
   **/
  ModuleEvmAccountsModuleCall: {
    _enum: {
      claim_account: {
        ethAddress: 'H160',
        ethSignature: '[u8;65]',
      },
      claim_default_account: 'Null'
    }
  },
  /**
   * Lookup409: module_stable_asset::pallet::Call<T>
   **/
  ModuleStableAssetCall: {
    _enum: {
      create_pool: {
        poolAsset: 'SelendraPrimitivesCurrencyCurrencyId',
        assets: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
        precisions: 'Vec<u128>',
        mintFee: 'u128',
        swapFee: 'u128',
        redeemFee: 'u128',
        initialA: 'u128',
        feeRecipient: 'AccountId32',
        yieldRecipient: 'AccountId32',
        precision: 'u128',
      },
      mint: {
        poolId: 'u32',
        amounts: 'Vec<u128>',
        minMintAmount: 'u128',
      },
      swap: {
        poolId: 'u32',
        i: 'u32',
        j: 'u32',
        dx: 'u128',
        minDy: 'u128',
        assetLength: 'u32',
      },
      redeem_proportion: {
        poolId: 'u32',
        amount: 'u128',
        minRedeemAmounts: 'Vec<u128>',
      },
      redeem_single: {
        poolId: 'u32',
        amount: 'u128',
        i: 'u32',
        minRedeemAmount: 'u128',
        assetLength: 'u32',
      },
      redeem_multi: {
        poolId: 'u32',
        amounts: 'Vec<u128>',
        maxRedeemAmount: 'u128',
      },
      modify_a: {
        poolId: 'u32',
        a: 'u128',
        futureABlock: 'u32'
      }
    }
  },
  /**
   * Lookup410: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup411: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup412: module_transaction_pause::module::Error<T>
   **/
  ModuleTransactionPauseModuleError: {
    _enum: ['CannotPause', 'InvalidCharacter']
  },
  /**
   * Lookup413: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: 'Option<(AccountId32,u128)>',
      Requested: 'u32'
    }
  },
  /**
   * Lookup416: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooLarge', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup418: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup419: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup422: pallet_balances::ReserveData<selendra_primitives::ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: 'SelendraPrimitivesReserveIdentifier',
    amount: 'u128'
  },
  /**
   * Lookup423: selendra_primitives::ReserveIdentifier
   **/
  SelendraPrimitivesReserveIdentifier: {
    _enum: ['CollatorSelection', 'EvmStorageDeposit', 'EvmDeveloperDeposit', 'Funan', 'Nft', 'TransactionPayment', 'TransactionPaymentDeposit', 'Count']
  },
  /**
   * Lookup425: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup426: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup429: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup431: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup433: orml_tokens::ReserveData<selendra_primitives::ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: 'SelendraPrimitivesReserveIdentifier',
    amount: 'u128'
  },
  /**
   * Lookup435: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup436: module_currencies::module::Error<T>
   **/
  ModuleCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'Erc20InvalidOperation', 'EvmAccountNotFound', 'RealOriginNotFound', 'DepositFailed']
  },
  /**
   * Lookup438: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup439: module_transaction_payment::module::Error<T>
   **/
  ModuleTransactionPaymentModuleError: {
    _enum: ['InvalidSwapPath', 'InvalidBalance', 'InvalidRate', 'InvalidToken', 'DexNotAvailable', 'ChargeFeePoolAlreadyExisted']
  },
  /**
   * Lookup440: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup444: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'ProposalNotApproved']
  },
  /**
   * Lookup445: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup446: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup448: pallet_bounties::pallet::Error<T>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup449: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup450: pallet_tips::pallet::Error<T>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup451: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup453: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup455: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup456: pallet_recovery::RecoveryConfig<BlockNumber, Balance, frame_support::storage::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup459: pallet_recovery::ActiveRecovery<BlockNumber, Balance, frame_support::storage::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup460: pallet_recovery::pallet::Error<T>
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup463: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, runtime_common::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'RuntimeCommonProxyType',
    delay: 'u32'
  },
  /**
   * Lookup467: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup469: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup471: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup472: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup480: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup482: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned']
  },
  /**
   * Lookup484: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup485: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup492: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup493: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfOutput: '[u8;32]',
    vrfProof: '[u8;64]'
  },
  /**
   * Lookup494: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup495: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfOutput: '[u8;32]',
    vrfProof: '[u8;64]'
  },
  /**
   * Lookup497: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup498: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup499: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup501: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup503: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup505: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup507: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup511: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup513: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup515: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup516: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup519: pallet_staking::Releases
   **/
  PalletStakingReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0', 'V8_0_0', 'V9_0_0']
  },
  /**
   * Lookup520: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow']
  },
  /**
   * Lookup521: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup526: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup527: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup528: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup529: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup531: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup535: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup539: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup542: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup544: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup545: pallet_election_provider_multi_phase::RoundSnapshot<T>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup552: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, selendra_runtime::config::consensus_config::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup553: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed']
  },
  /**
   * Lookup554: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup555: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup557: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup558: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup559: pallet_nomination_pools::PoolMember<T>
   **/
  PalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    rewardPoolTotalEarnings: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup564: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PalletNominationPoolsBondedPoolInner: {
    points: 'u128',
    state: 'PalletNominationPoolsPoolState',
    memberCounter: 'u32',
    roles: 'PalletNominationPoolsPoolRoles'
  },
  /**
   * Lookup565: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsPoolRoles: {
    depositor: 'AccountId32',
    root: 'Option<AccountId32>',
    nominator: 'Option<AccountId32>',
    stateToggler: 'Option<AccountId32>'
  },
  /**
   * Lookup566: pallet_nomination_pools::RewardPool<T>
   **/
  PalletNominationPoolsRewardPool: {
    balance: 'u128',
    totalEarnings: 'u128',
    points: 'U256'
  },
  /**
   * Lookup569: pallet_nomination_pools::SubPools<T>
   **/
  PalletNominationPoolsSubPools: {
    noEra: 'PalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup570: pallet_nomination_pools::UnbondPool<T>
   **/
  PalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup576: pallet_nomination_pools::pallet::Error<T>
   **/
  PalletNominationPoolsError: {
    _enum: ['PoolNotFound', 'PoolMemberNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'AccountBelongsToOtherPool', 'InsufficientBond', 'AlreadyUnbonding', 'FullyUnbonding', 'MaxUnbondingLimit', 'CannotWithdrawAny', 'MinimumBondNotMet', 'OverflowRisk', 'NotDestroying', 'NotOnlyPoolMember', 'NotNominator', 'NotKickerOrDestroying', 'NotOpen', 'MaxPools', 'MaxPoolMembers', 'CanNotChangeState', 'DoesNotHavePermission', 'MetadataExceedsMaxLen', 'DefensiveError', 'NotEnoughPointsToUnbond', 'PartialUnbondNotAllowedPermissionlessly']
  },
  /**
   * Lookup578: orml_authority::module::Error<T>
   **/
  OrmlAuthorityModuleError: {
    _enum: ['FailedToSchedule', 'FailedToCancel', 'FailedToFastTrack', 'FailedToDelay', 'CallNotAuthorized', 'TriggerCallNotPermitted', 'WrongCallWeightBound']
  },
  /**
   * Lookup580: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup581: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup582: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup588: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup589: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup590: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'ReportSelf', 'DuplicatedCandidate', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup594: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u32',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u32',
        expiry: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup595: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup596: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup597: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup598: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup601: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup602: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup605: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup606: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals']
  },
  /**
   * Lookup607: orml_oracle::module::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
   **/
  OrmlOracleModuleTimestampedValue: {
    value: 'u128',
    timestamp: 'u64'
  },
  /**
   * Lookup608: orml_utilities::ordered_set::OrderedSet<sp_core::crypto::AccountId32, S>
   **/
  OrmlUtilitiesOrderedSet: 'Vec<AccountId32>',
  /**
   * Lookup610: orml_oracle::module::Error<T, I>
   **/
  OrmlOracleModuleError: {
    _enum: ['NoPermission', 'AlreadyFeeded']
  },
  /**
   * Lookup612: orml_traits::auction::AuctionInfo<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  OrmlTraitsAuctionAuctionInfo: {
    bid: 'Option<(AccountId32,u128)>',
    start: 'u32',
    end: 'Option<u32>'
  },
  /**
   * Lookup613: orml_auction::module::Error<T>
   **/
  OrmlAuctionModuleError: {
    _enum: ['AuctionNotExist', 'AuctionNotStarted', 'BidNotAccepted', 'InvalidBidPrice', 'NoAvailableAuctionId']
  },
  /**
   * Lookup614: orml_rewards::PoolInfo<Share, Balance, selendra_primitives::currency::CurrencyId>
   **/
  OrmlRewardsPoolInfo: {
    totalShares: 'u128',
    rewards: 'BTreeMap<SelendraPrimitivesCurrencyCurrencyId, (u128,u128)>'
  },
  /**
   * Lookup622: orml_rewards::module::Error<T>
   **/
  OrmlRewardsModuleError: {
    _enum: ['PoolDoesNotExist', 'ShareDoesNotExist', 'CanSplitOnlyLessThanShare']
  },
  /**
   * Lookup623: orml_nft::ClassInfo<TokenId, sp_core::crypto::AccountId32, module_nft::ClassData<Balance>, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  OrmlNftClassInfo: {
    metadata: 'Bytes',
    totalIssuance: 'u64',
    owner: 'AccountId32',
    data: 'ModuleNftClassData'
  },
  /**
   * Lookup624: module_nft::ClassData<Balance>
   **/
  ModuleNftClassData: {
    deposit: 'u128',
    properties: 'u8',
    attributes: 'BTreeMap<Bytes, Bytes>'
  },
  /**
   * Lookup626: orml_nft::TokenInfo<sp_core::crypto::AccountId32, module_nft::TokenData<Balance>, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  OrmlNftTokenInfo: {
    metadata: 'Bytes',
    owner: 'AccountId32',
    data: 'ModuleNftTokenData'
  },
  /**
   * Lookup627: module_nft::TokenData<Balance>
   **/
  ModuleNftTokenData: {
    deposit: 'u128',
    attributes: 'BTreeMap<Bytes, Bytes>'
  },
  /**
   * Lookup629: orml_nft::module::Error<T>
   **/
  OrmlNftModuleError: {
    _enum: ['NoAvailableClassId', 'NoAvailableTokenId', 'TokenNotFound', 'ClassNotFound', 'NoPermission', 'CannotDestroyClass', 'MaxMetadataExceeded']
  },
  /**
   * Lookup630: module_prices::module::Error<T>
   **/
  ModulePricesModuleError: {
    _enum: ['AccessPriceFailed', 'NoLockedPrice']
  },
  /**
   * Lookup631: module_dex::TradingPairStatus<Balance, BlockNumber>
   **/
  ModuleDexTradingPairStatus: {
    _enum: {
      Disabled: 'Null',
      Provisioning: 'ModuleDexProvisioningParameters',
      Enabled: 'Null'
    }
  },
  /**
   * Lookup632: module_dex::ProvisioningParameters<Balance, BlockNumber>
   **/
  ModuleDexProvisioningParameters: {
    minContribution: '(u128,u128)',
    targetProvision: '(u128,u128)',
    accumulatedProvision: '(u128,u128)',
    notBefore: 'u32'
  },
  /**
   * Lookup635: module_dex::module::Error<T>
   **/
  ModuleDexModuleError: {
    _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'AssetUnregistered', 'InvalidTradingPath', 'NotAllowedRefund', 'CannotSwap']
  },
  /**
   * Lookup638: module_dex_oracle::module::Error<T>
   **/
  ModuleDexOracleModuleError: {
    _enum: ['AveragePriceAlreadyEnabled', 'AveragePriceMustBeEnabled', 'InvalidPool', 'InvalidCurrencyId', 'IntervalIsZero']
  },
  /**
   * Lookup641: module_aggregated_dex::module::Error<T>
   **/
  ModuleAggregatedDexModuleError: {
    _enum: ['CannotSwap', 'InvalidPoolId', 'InvalidTokenIndex', 'InvalidSwapPath']
  },
  /**
   * Lookup642: module_auction_manager::CollateralAuctionItem<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ModuleAuctionManagerCollateralAuctionItem: {
    refundRecipient: 'AccountId32',
    currencyId: 'SelendraPrimitivesCurrencyCurrencyId',
    initialAmount: 'Compact<u128>',
    amount: 'Compact<u128>',
    target: 'Compact<u128>',
    startTime: 'u32'
  },
  /**
   * Lookup643: module_auction_manager::module::Error<T>
   **/
  ModuleAuctionManagerModuleError: {
    _enum: ['AuctionNotExists', 'InReverseStage', 'InvalidFeedPrice', 'MustAfterShutdown', 'InvalidBidPrice', 'InvalidAmount']
  },
  /**
   * Lookup645: selendra_primitives::Position
   **/
  SelendraPrimitivesPosition: {
    collateral: 'u128',
    debit: 'u128'
  },
  /**
   * Lookup646: module_loans::module::Error<T>
   **/
  ModuleLoansModuleError: {
    _enum: ['AmountConvertFailed']
  },
  /**
   * Lookup648: module_funan::module::Error<T>
   **/
  ModuleFunanModuleError: {
    _enum: ['NoPermission', 'AlreadyShutdown', 'AuthorizationNotExists', 'AlreadyAuthorized']
  },
  /**
   * Lookup649: module_cdp_treasury::module::Error<T>
   **/
  ModuleCdpTreasuryModuleError: {
    _enum: ['CollateralNotEnough', 'SurplusPoolNotEnough', 'DebitPoolNotEnough', 'CannotSwap', 'NotDexShare']
  },
  /**
   * Lookup650: module_cdp_engine::RiskManagementParams
   **/
  ModuleCdpEngineRiskManagementParams: {
    maximumTotalDebitValue: 'u128',
    interestRatePerSec: 'Option<u128>',
    liquidationRatio: 'Option<u128>',
    liquidationPenalty: 'Option<u128>',
    requiredCollateralRatio: 'Option<u128>'
  },
  /**
   * Lookup651: module_cdp_engine::module::Error<T>
   **/
  ModuleCdpEngineModuleError: {
    _enum: ['ExceedDebitValueHardCap', 'BelowRequiredCollateralRatio', 'BelowLiquidationRatio', 'MustBeUnsafe', 'MustBeSafe', 'InvalidCollateralType', 'RemainDebitValueTooSmall', 'CollateralAmountBelowMinimum', 'InvalidFeedPrice', 'NoDebitValue', 'AlreadyShutdown', 'MustAfterShutdown', 'CollateralNotEnough', 'NotEnoughDebitDecrement', 'ConvertDebitBalanceFailed']
  },
  /**
   * Lookup652: module_emergency_shutdown::module::Error<T>
   **/
  ModuleEmergencyShutdownModuleError: {
    _enum: ['AlreadyShutdown', 'MustAfterShutdown', 'CanNotRefund', 'ExistPotentialSurplus', 'ExistUnhandledDebit']
  },
  /**
   * Lookup654: module_incentives::module::Error<T>
   **/
  ModuleIncentivesModuleError: {
    _enum: ['NotEnough', 'InvalidCurrencyId', 'InvalidPoolId', 'InvalidRate']
  },
  /**
   * Lookup655: module_nft::module::Error<T>
   **/
  ModuleNftModuleError: {
    _enum: ['ClassIdNotFound', 'TokenIdNotFound', 'NoPermission', 'InvalidQuantity', 'NonTransferable', 'NonBurnable', 'NonMintable', 'CannotDestroyClass', 'Immutable', 'AttributesTooLarge', 'IncorrectTokenId']
  },
  /**
   * Lookup656: module_asset_registry::module::Error<T>
   **/
  ModuleAssetRegistryModuleError: {
    _enum: ['BadLocation', 'AssetIdNotExists', 'AssetIdExisted']
  },
  /**
   * Lookup657: module_evm::module::AccountInfo<Index>
   **/
  ModuleEvmModuleAccountInfo: {
    nonce: 'u32',
    contractInfo: 'Option<ModuleEvmModuleContractInfo>'
  },
  /**
   * Lookup659: module_evm::module::ContractInfo
   **/
  ModuleEvmModuleContractInfo: {
    codeHash: 'H256',
    maintainer: 'H160',
    published: 'bool'
  },
  /**
   * Lookup662: module_evm::module::CodeInfo
   **/
  ModuleEvmModuleCodeInfo: {
    codeSize: 'u32',
    refCount: 'u32'
  },
  /**
   * Lookup663: module_evm::module::Error<T>
   **/
  ModuleEvmModuleError: {
    _enum: ['AddressNotMapped', 'ContractNotFound', 'NoPermission', 'ContractDevelopmentNotEnabled', 'ContractDevelopmentAlreadyEnabled', 'ContractAlreadyPublished', 'ContractExceedsMaxCodeSize', 'ContractAlreadyExisted', 'OutOfStorage', 'ChargeFeeFailed', 'CannotKillContract', 'ReserveStorageFailed', 'UnreserveStorageFailed', 'ChargeStorageFailed', 'InvalidDecimals']
  },
  /**
   * Lookup664: module_evm_bridge::module::Error<T>
   **/
  ModuleEvmBridgeModuleError: {
    _enum: ['ExecutionFail', 'ExecutionRevert', 'ExecutionFatal', 'ExecutionError', 'InvalidReturnValue']
  },
  /**
   * Lookup665: module_evm_accounts::module::Error<T>
   **/
  ModuleEvmAccountsModuleError: {
    _enum: ['AccountIdHasMapped', 'EthAddressHasMapped', 'BadSignature', 'InvalidSignature', 'NonZeroRefCount']
  },
  /**
   * Lookup666: module_stable_asset::StableAssetPoolInfo<selendra_primitives::currency::CurrencyId, AtLeast64BitUnsigned, Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  ModuleStableAssetStableAssetPoolInfo: {
    poolAsset: 'SelendraPrimitivesCurrencyCurrencyId',
    assets: 'Vec<SelendraPrimitivesCurrencyCurrencyId>',
    precisions: 'Vec<u128>',
    mintFee: 'u128',
    swapFee: 'u128',
    redeemFee: 'u128',
    totalSupply: 'u128',
    a: 'u128',
    aBlock: 'u32',
    futureA: 'u128',
    futureABlock: 'u32',
    balances: 'Vec<u128>',
    feeRecipient: 'AccountId32',
    accountId: 'AccountId32',
    yieldRecipient: 'AccountId32',
    precision: 'u128'
  },
  /**
   * Lookup667: module_stable_asset::pallet::Error<T>
   **/
  ModuleStableAssetError: {
    _enum: ['InconsistentStorage', 'InvalidPoolAsset', 'ArgumentsMismatch', 'ArgumentsError', 'PoolNotFound', 'Math', 'InvalidPoolValue', 'MintUnderMin', 'SwapUnderMin', 'RedeemUnderMin', 'RedeemOverMax']
  },
  /**
   * Lookup668: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup671: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup672: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup673: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup674: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup677: runtime_common::check_nonce::CheckNonce<T>
   **/
  RuntimeCommonCheckNonce: {
    nonce: 'Compact<u32>'
  },
  /**
   * Lookup678: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup679: module_transaction_payment::ChargeTransactionPayment<T>
   **/
  ModuleTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup680: module_evm::SetEvmOrigin<T>
   **/
  ModuleEvmSetEvmOrigin: 'Null',
  /**
   * Lookup681: selendra_runtime::config::evm_config::StorageDepositPerByte
   **/
  SelendraRuntimeConfigEvmConfigStorageDepositPerByte: 'Null',
  /**
   * Lookup682: selendra_runtime::config::evm_config::TxFeePerGas
   **/
  SelendraRuntimeConfigEvmConfigTxFeePerGas: 'Null',
  /**
   * Lookup684: selendra_primitives::signature::SelendraMultiSignature
   **/
  SelendraPrimitivesSignatureSelendraMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature',
      Ethereum: '[u8;65]',
      Eip1559: '[u8;65]',
      SelendraEip712: '[u8;65]'
    }
  }
};
