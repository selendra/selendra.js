"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTransaction = exports.serializeEip712 = void 0;
const address_1 = require("@ethersproject/address");
const bignumber_1 = require("@ethersproject/bignumber");
const bytes_1 = require("@ethersproject/bytes");
const logger_1 = require("@ethersproject/logger");
const RLP = require("@ethersproject/rlp");
const transactions_1 = require("@ethersproject/transactions");
const createTransactionPayload_1 = require("./createTransactionPayload");
const logger_2 = require("./logger");
function formatAccessList(value) {
    return (0, transactions_1.accessListify)(value).map((set) => [set.address, set.storageKeys]);
}
function formatNumber(value, name) {
    const result = (0, bytes_1.stripZeros)(bignumber_1.BigNumber.from(value).toHexString());
    if (result.length > 32) {
        logger_2.logger.throwArgumentError('invalid length for ' + name, 'transaction:' + name, value);
    }
    return result;
}
// rlp([chainId, salt, nonce, gasLimit, storageLimit, to, value, data, validUntil, tip, accessList, eip712sig])
function serializeEip712(transaction, signature) {
    const fields = [
        formatNumber(transaction.chainId || 0, 'chainId'),
        transaction.salt || '0x',
        formatNumber(transaction.nonce || 0, 'nonce'),
        formatNumber(transaction.gasLimit || 0, 'gasLimit'),
        formatNumber(transaction.storageLimit || 0, 'storageLimit'),
        transaction.to === null || transaction.to === undefined ? '0x' : (0, address_1.getAddress)(transaction.to),
        formatNumber(transaction.value || 0, 'value'),
        transaction.data || '0x',
        formatNumber(transaction.validUntil || createTransactionPayload_1.MAX_UINT256, 'validUntil'),
        formatNumber(transaction.tip || 0, 'tip'),
        formatAccessList(transaction.accessList || [])
    ];
    if (signature) {
        const sig = (0, bytes_1.splitSignature)(signature);
        fields.push(formatNumber(sig.recoveryParam, 'recoveryParam'));
        fields.push((0, bytes_1.stripZeros)(sig.r));
        fields.push((0, bytes_1.stripZeros)(sig.s));
    }
    return (0, bytes_1.hexConcat)(['0x60', RLP.encode(fields)]);
}
exports.serializeEip712 = serializeEip712;
function serializeTransaction(transaction, signature) {
    // Ethereum Transactions
    if (transaction.type === null ||
        transaction.type === undefined ||
        transaction.type === 0 ||
        transaction.type === 1 ||
        transaction.type === 2) {
        return (0, transactions_1.serialize)(transaction, signature);
    }
    // eip712
    if (transaction.type === 96) {
        return serializeEip712(transaction, signature);
    }
    return logger_2.logger.throwError(`unsupported transaction type: ${transaction.type}`, logger_1.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: 'serializeTransaction',
        transactionType: transaction.type
    });
}
exports.serializeTransaction = serializeTransaction;
