// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { FrameSupportPalletId, FrameSupportWeightsRuntimeDbWeight, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SelendraPrimitivesCurrencyCurrencyId, SpVersionRuntimeVersion } from '@polkadot/types/lookup';
import type { AccountId32, H160, Perbill, Percent, Permill } from '@selendra/types/interfaces/runtime';

declare module '@polkadot/api-base/types/consts' {
  export interface AugmentedConsts<ApiType extends ApiTypes> {
    aggregatedDex: {
      /**
       * The alternative swap path joint list for DEX swap
       **/
      dexSwapJointList: Vec<Vec<SelendraPrimitivesCurrencyCurrencyId>> & AugmentedConst<ApiType>;
      /**
       * The limit for length of swap path
       **/
      swapPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    auctionManager: {
      /**
       * When the total duration of the auction exceeds this soft cap, push
       * the auction to end more faster
       **/
      auctionDurationSoftCap: u32 & AugmentedConst<ApiType>;
      /**
       * The extended time for the auction to end after each successful bid
       **/
      auctionTimeToClose: u32 & AugmentedConst<ApiType>;
      /**
       * The stable currency id
       **/
      getStableCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The minimum increment size of each bid compared to the previous one
       **/
      minimumIncrementSize: u128 & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    authorship: {
      /**
       * The number of blocks back we should accept uncles.
       * This means that we will deal with uncle-parents that are
       * `UncleGenerations + 1` before `now`.
       **/
      uncleGenerations: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    babe: {
      /**
       * The amount of time, in slots, that each epoch should last.
       * NOTE: Currently it is not possible to change the epoch duration after
       * the chain has started. Attempting to do so will brick block production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: u64 & AugmentedConst<ApiType>;
      /**
       * Max number of authorities allowed
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpEngine: {
      /**
       * The default debit exchange rate for all collateral types
       **/
      defaultDebitExchangeRate: u128 & AugmentedConst<ApiType>;
      /**
       * The default liquidation penalty rate when liquidate unsafe CDP
       **/
      defaultLiquidationPenalty: u128 & AugmentedConst<ApiType>;
      /**
       * The default liquidation ratio for all collateral types of CDP
       **/
      defaultLiquidationRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Stablecoin currency id
       **/
      getStableCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * When swap with DEX, the acceptable max slippage for the price from oracle.
       **/
      maxSwapSlippageCompareToOracle: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum debit value to avoid debit dust
       **/
      minimumDebitValue: u128 & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpTreasury: {
      /**
       * Stablecoin currency id
       **/
      getStableCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The cap of lots number when create collateral auction on a
       * liquidation or to create debit/surplus auction on block end.
       * If set to 0, does not work.
       **/
      maxAuctionsCount: u32 & AugmentedConst<ApiType>;
      /**
       * The CDP treasury's module id, keep surplus and collateral assets
       * from liquidation.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencies: {
      /**
       * Used as temporary account for ERC20 token `withdraw` and `deposit`.
       **/
      erc20HoldingAccount: H160 & AugmentedConst<ApiType>;
      /**
       * The native currency id
       **/
      getNativeCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dex: {
      /**
       * The extended provisioning blocks since the `not_before` of provisioning.
       **/
      extendedProvisioningBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * Trading fee rate
       * The first item of the tuple is the numerator of the fee rate, second
       * item is the denominator, fee_rate = numerator / denominator,
       * use (u32, u32) over `Rate` type to minimize internal division
       * operation.
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * The DEX's module id, keep all assets in DEX.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    electionProviderMultiPhase: {
      /**
       * The minimum amount of improvement to the solution score that defines a solution as
       * "better" in the Signed phase.
       **/
      betterSignedThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * The minimum amount of improvement to the solution score that defines a solution as
       * "better" in the Unsigned phase.
       **/
      betterUnsignedThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * The maximum number of electable targets to put in the snapshot.
       **/
      maxElectableTargets: u16 & AugmentedConst<ApiType>;
      /**
       * The maximum number of electing voters to put in the snapshot. At the moment, snapshots
       * are only over a single block, but once multi-block elections are introduced they will
       * take place over multiple blocks.
       **/
      maxElectingVoters: u32 & AugmentedConst<ApiType>;
      /**
       * The priority of the unsigned transaction submitted in the unsigned-phase
       **/
      minerTxPriority: u64 & AugmentedConst<ApiType>;
      /**
       * The repeat threshold of the offchain worker.
       * 
       * For example, if it is 5, that means that at least 5 blocks will elapse between attempts
       * to submit the worker's solution.
       **/
      offchainRepeat: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit for a signed solution.
       **/
      signedDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Per-byte deposit for a signed solution.
       **/
      signedDepositByte: u128 & AugmentedConst<ApiType>;
      /**
       * Per-weight deposit for a signed solution.
       **/
      signedDepositWeight: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of unchecked solutions to refund the call fee for.
       **/
      signedMaxRefunds: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of signed submissions that can be queued.
       * 
       * It is best to avoid adjusting this during an election, as it impacts downstream data
       * structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
       * update this value during an election, you _must_ ensure that
       * `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
       * attempts to submit new solutions may cause a runtime panic.
       **/
      signedMaxSubmissions: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum weight of a signed solution.
       * 
       * If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
       * this pallet), then [`MinerConfig::solution_weight`] is used to compare against
       * this value.
       **/
      signedMaxWeight: u64 & AugmentedConst<ApiType>;
      /**
       * Duration of the signed phase.
       **/
      signedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * Base reward for a signed solution
       **/
      signedRewardBase: u128 & AugmentedConst<ApiType>;
      /**
       * Duration of the unsigned phase.
       **/
      unsignedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evm: {
      /**
       * Deposit for the developer.
       **/
      developerDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The EVM address for creating system contract.
       **/
      networkContractSource: H160 & AugmentedConst<ApiType>;
      /**
       * Charge extra bytes for creating a contract, would be reserved until
       * the contract deleted.
       **/
      newContractExtraBytes: u32 & AugmentedConst<ApiType>;
      /**
       * The fee for publishing the contract.
       **/
      publicationFee: u128 & AugmentedConst<ApiType>;
      /**
       * Storage required for per byte.
       **/
      storageDepositPerByte: u128 & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Tx fee required for per gas.
       * Provide to the client
       **/
      txFeePerGas: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evmAccounts: {
      /**
       * Chain ID of EVM.
       **/
      chainId: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    funan: {
      /**
       * Reserved amount per authorization.
       **/
      depositPerAuthorization: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    idleScheduler: {
      /**
       * The minimum weight that should remain before idle tasks are dispatched.
       **/
      minimumWeightRemainInBlock: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    imOnline: {
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple pallets send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    incentives: {
      /**
       * The period to accumulate rewards
       **/
      accumulatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Additional share amount from earning
       **/
      earnShareBooster: Permill & AugmentedConst<ApiType>;
      /**
       * The native currency for earning staking
       **/
      nativeCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The module id, keep DexShare LP.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The source account for native token rewards.
       **/
      rewardsSource: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The reward type for dex saving.
       **/
      stableCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    loans: {
      /**
       * The loan's module id, keep all collaterals of CDPs.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nft: {
      /**
       * The minimum balance to create class
       **/
      createClassDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum balance to create token
       **/
      createTokenDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Deposit required for per byte.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of bytes in attributes
       **/
      maxAttributesBytes: u32 & AugmentedConst<ApiType>;
      /**
       * The NFT's module id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nominationPools: {
      /**
       * The minimum pool points-to-balance ratio that must be maintained for it to be `open`.
       * This is important in the event slashing takes place and the pool's points-to-balance
       * ratio becomes disproportional.
       * For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
       * Such a scenario would also be the equivalent of the pool being 90% slashed.
       **/
      minPointsToBalance: u32 & AugmentedConst<ApiType>;
      /**
       * The nomination pool's pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phragmenElection: {
      /**
       * How much should be locked up in order to submit one's candidacy.
       **/
      candidacyBond: u128 & AugmentedConst<ApiType>;
      /**
       * Number of members to elect.
       **/
      desiredMembers: u32 & AugmentedConst<ApiType>;
      /**
       * Number of runners_up to keep.
       **/
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      /**
       * Identifier for the elections-phragmen pallet's lock
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * How long each seat is kept. This defines the next block number at which an election
       * round will happen. If set to zero, no elections are ever triggered and the module will
       * be in passive mode.
       **/
      termDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit associated with voting.
       * 
       * This should be sensibly high to economically ensure the pallet cannot be attacked by
       * creating a gigantic number of votes.
       **/
      votingBondBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of bond that need to be locked for each vote (32 bytes).
       **/
      votingBondFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    prices: {
      /**
       * The liquid currency id, it should be LSEL in Selendra.
       **/
      getLiquidCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The Native currency id, it should be SEL in Selendra.
       **/
      getNativeCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The stable currency id, it should be KUSD in Selendra.
       **/
      getStableCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The fixed prices of stable currency, it should be 1 USD in Selendra.
       **/
      stableCurrencyFixedPrice: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    recovery: {
      /**
       * The base amount of currency needed to reserve for creating a recovery configuration.
       * 
       * This is held for an additional storage item whose value size is
       * `2 + sizeof(BlockNumber, Balance)` bytes.
       **/
      configDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per additional user when creating a recovery
       * configuration.
       * 
       * This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
       * value.
       **/
      friendDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of friends allowed in a recovery configuration.
       * 
       * NOTE: The threshold programmed in this Pallet uses u16, so it does
       * not really make sense to have a limit here greater than u16::MAX.
       * But also, that is a lot more than you should probably set this value
       * to anyway...
       **/
      maxFriends: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for starting a recovery.
       * 
       * This is primarily held for deterring malicious recovery attempts, and should
       * have a value large enough that a bad actor would choose not to place this
       * deposit. It also acts to fund additional storage item whose value size is
       * `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
       * threshold.
       **/
      recoveryDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables of less
       * priority than `schedule::HARD_DEADLINE`.
       **/
      maximumWeight: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    selendraOracle: {
      /**
       * Maximum size of HasDispatched
       **/
      maxHasDispatchedSize: u32 & AugmentedConst<ApiType>;
      /**
       * The root operator account id, record all sudo feeds on this account.
       **/
      rootOperatorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stableAsset: {
      aPrecision: u128 & AugmentedConst<ApiType>;
      feePrecision: u128 & AugmentedConst<ApiType>;
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      poolAssetLimit: u32 & AugmentedConst<ApiType>;
      swapExactOverAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    staking: {
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of nominations per nominator.
       **/
      maxNominations: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators rewarded for each validator.
       * 
       * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
       * claim their reward. This used to limit the i/o cost for the nominator payout.
       **/
      maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of `unlocking` chunks a [`StakingLedger`] can have. Effectively
       * determines how many unique eras a staker may be unbonding in.
       **/
      maxUnlockingChunks: u32 & AugmentedConst<ApiType>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: u32 & AugmentedConst<ApiType>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration. Set to 0 if slashes
       * should be applied immediately, without opportunity for intervention.
       **/
      slashDeferDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>;
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * Alternative fee surplus if not payed with native asset.
       **/
      alternativeFeeSurplus: Percent & AugmentedConst<ApiType>;
      /**
       * Deposit for setting an Alternative fee swap
       **/
      alternativeFeeSwapDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Custom fee surplus if not payed with native asset.
       **/
      customFeeSurplus: Percent & AugmentedConst<ApiType>;
      /**
       * Default fee tokens used in tx fee pool.
       **/
      defaultFeeTokens: Vec<SelendraPrimitivesCurrencyCurrencyId> & AugmentedConst<ApiType>;
      /**
       * When swap with DEX, the acceptable max slippage for the price from oracle.
       **/
      maxSwapSlippageCompareToOracle: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum value of tips that affect the priority.
       * Set the maximum value of tips to prevent affecting the unsigned extrinsic.
       **/
      maxTipsOfPriority: u128 & AugmentedConst<ApiType>;
      /**
       * Native currency id, the actual received currency type as fee for
       * treasury. Should be SEL
       **/
      nativeCurrencyId: SelendraPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u64 & AugmentedConst<ApiType>;
      /**
       * PalletId used to derivate sub account.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The step amount of tips required to effect transaction priority.
       **/
      tipPerWeightStep: u128 & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      /**
       * Treasury account used to transfer balance to sub account of `PalletId`.
       **/
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    voterList: {
      /**
       * The list of thresholds separating the various bags.
       * 
       * Ids are separated into unsorted bags according to their score. This specifies the
       * thresholds separating the bags. An id's bag is the largest bag for which the id's score
       * is less than or equal to its upper threshold.
       * 
       * When ids are iterated, higher bags are iterated completely before lower bags. This means
       * that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
       * score, but peer ids within a particular bag are sorted in insertion order.
       * 
       * # Expressing the constant
       * 
       * This constant must be sorted in strictly increasing order. Duplicate items are not
       * permitted.
       * 
       * There is an implied upper limit of `Score::MAX`; that value does not need to be
       * specified within the bag. For any two threshold lists, if one ends with
       * `Score::MAX`, the other one does not, and they are otherwise equal, the two
       * lists will behave identically.
       * 
       * # Calculation
       * 
       * It is recommended to generate the set of thresholds in a geometric series, such that
       * there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
       * constant_ratio).max(threshold[k] + 1)` for all `k`.
       * 
       * The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
       * 
       * # Examples
       * 
       * - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
       * iteration is strictly in insertion order.
       * - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
       * the procedure given above, then the constant ratio is equal to 2.
       * - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
       * the procedure given above, then the constant ratio is approximately equal to 1.248.
       * - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
       * into bag 0, an id with score 2 will fall into bag 1, etc.
       * 
       * # Migration
       * 
       * In the event that this list ever changes, a copy of the old bags list must be retained.
       * With that `List::migrate` can be called, which will perform the appropriate migration.
       **/
      bagThresholds: Vec<u64> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
