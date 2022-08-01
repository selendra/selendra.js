"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {},
    types: {
        CollateralAuctionItem: {
            refundRecipient: 'AccountId',
            currencyId: 'CurrencyId',
            initialAmount: 'Compact<Balance>',
            amount: 'Compact<Balance>',
            target: 'Compact<Balance>',
            startTime: 'BlockNumber'
        },
        DebitAuctionItem: {
            initialAmount: 'Compact<Balance>',
            amount: 'Compact<Balance>',
            fix: 'Compact<Balance>',
            startTime: 'BlockNumber'
        },
        SurplusAuctionItem: {
            amount: 'Compact<Balance>',
            startTime: 'BlockNumber'
        }
    }
};
