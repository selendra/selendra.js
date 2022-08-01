"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHexString = exports.validate = exports.validateSubstrateGasParams = exports.validateObject = exports.validateTransactionData = exports.validatePosition = exports.validateFlag = exports.validateTrasactionHash = exports.validateBlockHash = exports.validateTransaction = exports.validateBlock = exports.validateAddress = exports.validateHexNumber = exports.validateString = exports.validateEventName = void 0;
const errors_1 = require("./errors");
const validateEventName = (value) => {
    if (!['newHeads', 'logs', 'newPendingTransactions'].includes(value)) {
        throw new Error('expected type eventName');
    }
};
exports.validateEventName = validateEventName;
const validateString = (value) => {
    if (typeof value !== 'string') {
        throw new Error('expected type String');
    }
};
exports.validateString = validateString;
const validateHexNumber = (value) => {
    validateHexString(value);
    if (value.length > 18) {
        throw new Error('hex number > 64 bits');
    }
};
exports.validateHexNumber = validateHexNumber;
const validateAddress = (data) => {
    if (typeof data !== 'string') {
        throw new Error(`invalid evm address, expected type String`);
    }
    validateHexString(data, 40);
};
exports.validateAddress = validateAddress;
const validateBlock = (data) => {
    // eip-1898
    if (typeof data === 'object') {
        if (data.blockNumber) {
            data = data.blockNumber;
        }
        else if (data.blockHash) {
            return (0, exports.validateBlockHash)(data.blockHash);
        }
        else {
            throw new Error(`invalid eip-1898 blocktag, expected to contain blockNumber or blockHash`);
        }
    }
    if (typeof data === 'number') {
        return Number.isInteger(data) && data >= 0;
    }
    if (typeof data !== 'string') {
        throw new Error(`invalid block tag, expected type string, number, or eip-1898 blocktag`);
    }
    if (!['latest', 'earliest', 'pending'].includes(data)) {
        (0, exports.validateHexNumber)(data);
    }
};
exports.validateBlock = validateBlock;
const validateTransaction = (data) => {
    // @TODO
};
exports.validateTransaction = validateTransaction;
const validateBlockHash = (data) => {
    if (typeof data !== 'string') {
        throw new Error(`invalid block hash, expected type String`);
    }
    validateHexString(data, 64);
};
exports.validateBlockHash = validateBlockHash;
const validateTrasactionHash = (data) => {
    if (typeof data !== 'string') {
        throw new Error(`invalid block hash, expected type String`);
    }
    validateHexString(data, 64);
};
exports.validateTrasactionHash = validateTrasactionHash;
const validateFlag = (data) => {
    if (typeof data !== 'boolean') {
        throw new Error(`expect a bool value`);
    }
};
exports.validateFlag = validateFlag;
const validatePosition = (data) => {
    if (typeof data !== 'string') {
        throw new Error(`invalid position, expected type String`);
    }
};
exports.validatePosition = validatePosition;
const validateTransactionData = (data) => {
    if (typeof data !== 'string') {
        throw new Error(`invalid transaction data, expected type String`);
    }
};
exports.validateTransactionData = validateTransactionData;
const validateObject = (data) => {
    if (data.constructor !== Object) {
        throw new Error(`invalid args, expected Object`);
    }
};
exports.validateObject = validateObject;
const validateSubstrateGasParams = (data) => {
    if (data.constructor !== Object) {
        throw new Error(`invalid args, expected Object`);
    }
    for (const k of Object.keys(data)) {
        if (!['storageLimit', 'gasLimit', 'validUntil'].includes(k)) {
            throw new Error(`parameter can only be 'storageLimit' | 'gasLimit' | 'validUntil'`);
        }
    }
};
exports.validateSubstrateGasParams = validateSubstrateGasParams;
const validate = (schema, data) => {
    const maxArg = schema.length;
    if (data.length > maxArg) {
        throw new errors_1.InvalidParams(`too many arguments, want at most ${maxArg}`);
    }
    for (let i = 0; i < schema.length; i++) {
        if (data[i] === undefined && !schema[i].type.endsWith('?')) {
            throw new errors_1.InvalidParams(`missing value for required argument ${i}`);
        }
        try {
            switch (schema[i].type) {
                case 'address': {
                    (0, exports.validateAddress)(data[i]);
                    break;
                }
                case 'block': {
                    (0, exports.validateBlock)(data[i]);
                    break;
                }
                case 'transaction': {
                    (0, exports.validateTransaction)(data[i]);
                    break;
                }
                case 'blockHash': {
                    (0, exports.validateBlockHash)(data[i]);
                    break;
                }
                case 'trasactionHash': {
                    (0, exports.validateTrasactionHash)(data[i]);
                    break;
                }
                case 'flag': {
                    (0, exports.validateFlag)(data[i]);
                    break;
                }
                case 'position': {
                    (0, exports.validatePosition)(data[i]);
                    break;
                }
                case 'transactionData': {
                    (0, exports.validateTransactionData)(data[i]);
                    break;
                }
                case 'object': {
                    (0, exports.validateObject)(data[i]);
                    break;
                }
                case 'object?': {
                    data[i] && (0, exports.validateObject)(data[i]);
                    break;
                }
                case 'message': {
                    (0, exports.validateString)(data[i]);
                    break;
                }
                case 'hexNumber': {
                    (0, exports.validateHexNumber)(data[i]);
                    break;
                }
                case 'eventName': {
                    (0, exports.validateEventName)(data[i]);
                    break;
                }
                case 'substrateGasParams?': {
                    data[i] && (0, exports.validateSubstrateGasParams)(data[i]);
                    break;
                }
                default:
                    break;
            }
        }
        catch (err) {
            throw new errors_1.InvalidParams(`invalid argument ${i}: ${err?.message}`);
        }
    }
};
exports.validate = validate;
function validateHexString(value, length) {
    if (typeof value !== 'string') {
        throw new Error('expect a hex string');
    }
    value = value.toLowerCase();
    if (value.indexOf('0x')) {
        throw new Error('hex string without 0x prefix');
    }
    if (value === '0x') {
        throw new Error('hex string "0x"');
    }
    if (!value.match(/^0x[0-9A-Fa-f]*$/)) {
        throw new Error('invalid hex string');
    }
    if (length && value.length !== 2 + length) {
        throw new Error(`hex string has length ${value.length - 2} but want ${length}`);
    }
}
exports.validateHexString = validateHexString;
//# sourceMappingURL=validate.js.map