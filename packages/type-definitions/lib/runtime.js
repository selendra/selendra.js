"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
                "Staking",
                "IdentityJudgement",
                'Auction',
                'Swap',
                'Loan',
                "DexLiquidity",
                "StableAssetSwap",
                "StableAssetLiquidity"
            ]
        },
        AtLeast64BitUnsigned: 'u128',
        StableAssetPoolId: 'u32',
    }
};
//# sourceMappingURL=runtime.js.map