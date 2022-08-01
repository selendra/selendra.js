"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Eip1193Bridge_impl, _Eip1193BridgeImpl_provider, _Eip1193BridgeImpl_signer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eip1193Bridge = void 0;
const eth_providers_1 = require("@selendra/eth-providers");
const utils_1 = require("@selendra/eth-providers/lib/utils");
const address_1 = require("@ethersproject/address");
const bytes_1 = require("@ethersproject/bytes");
const events_1 = require("events");
const errors_1 = require("./errors");
const validate_1 = require("./validate");
const HEX_ZERO = '0x0';
class Eip1193Bridge extends events_1.default {
    constructor(provider, signer) {
        super();
        _Eip1193Bridge_impl.set(this, void 0);
        this.provider = provider;
        __classPrivateFieldSet(this, _Eip1193Bridge_impl, new Eip1193BridgeImpl(provider, signer), "f");
    }
    request(request) {
        return this.send(request.method, request.params || []);
    }
    isMethodValid(method) {
        return method.startsWith('eth_') || method.startsWith('net_') || method.startsWith('web3_');
    }
    isMethodImplemented(method) {
        return this.isMethodValid(method) && method in __classPrivateFieldGet(this, _Eip1193Bridge_impl, "f");
    }
    async send(method, params = [], ws) {
        if (this.isMethodImplemented(method)) {
            // isMethodImplemented ensuress this cannot be used to access other unrelated methods
            return __classPrivateFieldGet(this, _Eip1193Bridge_impl, "f")[method](params, ws);
        }
        throw new errors_1.MethodNotFound('Method not available', `The method ${method} is not available.`);
    }
}
exports.Eip1193Bridge = Eip1193Bridge;
_Eip1193Bridge_impl = new WeakMap();
class Eip1193BridgeImpl {
    constructor(provider, signer) {
        _Eip1193BridgeImpl_provider.set(this, void 0);
        _Eip1193BridgeImpl_signer.set(this, void 0);
        __classPrivateFieldSet(this, _Eip1193BridgeImpl_provider, provider, "f");
        __classPrivateFieldSet(this, _Eip1193BridgeImpl_signer, signer, "f");
    }
    async web3_clientVersion() {
        return 'Selendra/v0.0.1';
    }
    // Query the synchronization progress and version information of indexer
    async net_indexer(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getIndexerMetadata();
    }
    // query unfinalized cache info for dev debugging use
    async net_cacheInfo(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getCachInfo();
    }
    async net_isSafeMode(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").isSafeMode;
    }
    async net_health(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").healthCheck();
    }
    // TODO: maybe can encapsulate all provider info into one call `net_Info` or something
    async net_runtimeVersion(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").runtimeVersion;
    }
    /**
     * Returns the current network id.
     * @returns ID - The current network id.
     */
    async net_version(params) {
        (0, validate_1.validate)([], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").netVersion();
    }
    /**
     * Returns the current "latest" block number.
     * @returns BLOCK NUMBER - a hex code of an integer representing the current block number the client is on.
     */
    async eth_blockNumber(params) {
        (0, validate_1.validate)([], params);
        const number = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBlockNumber();
        return (0, bytes_1.hexValue)(number);
    }
    /**
     * Returns the currently configured chain id, a value used in replay-protected transaction signing as introduced by EIP-155.
     * @returns QUANTITY - big integer of the current chain id.
     */
    async eth_chainId(params) {
        (0, validate_1.validate)([], params);
        const chainId = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").chainId();
        return (0, bytes_1.hexValue)(chainId);
    }
    /**
     * Returns the number of transactions sent from an address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) to check for transaction count for
     * @param BLOCKTAG [required] - default block parameter
     * @returns TRANSACTION COUNT - a hex code of the integer representing the number of transactions sent from this address.
     */
    async eth_getTransactionCount(params) {
        (0, validate_1.validate)([{ type: 'address' }, { type: 'block' }], params);
        const count = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getTransactionCount(params[0], params[1]);
        return (0, bytes_1.hexValue)(count);
    }
    /**
     * Returns the compiled smart contract code, if any, at a given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) of the code
     * @param BLOCKTAG [required] - default block parameter
     * @returns CODE - a hex of the code at the given address
     */
    async eth_getCode(params) {
        (0, validate_1.validate)([{ type: 'address' }, { type: 'block' }], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getCode(params[0], params[1]);
    }
    /**
     * Executes a new message call immediately without creating a transaction on the block chain.
     * @param TRANSACTION CALL OBJECT [required]
     * @param BLOCKTAG [required] - default block parameter
     * @returns RETURN VALUE - the return value of the executed contract method.
     */
    async eth_call(params) {
        (0, validate_1.validate)([{ type: 'transaction' }, { type: 'block' }], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").call(params[0], params[1]);
    }
    /**
     * Returns the balance of the account of given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) to check for balance
     * @param BLOCKTAG [required] - default block parameter
     * @returns BALANCE - integer of the current balance in wei.
     */
    async eth_getBalance(params) {
        (0, validate_1.validate)([{ type: 'address' }, { type: 'block' }], params);
        const balance = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBalance(params[0], params[1]);
        return (0, eth_providers_1.hexlifyRpcResult)(balance);
    }
    /**
     * Returns information about a block by hash.
     * @param BLOCKHASH [required] - a string representing the hash (32 bytes) of a block
     * @param SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.
     * @returns BLOCK - A block object, or null when no block was found
     */
    async eth_getBlockByHash(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }, { type: 'flag' }], params);
        try {
            const block = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBlockData(params[0], params[1]);
            return (0, eth_providers_1.hexlifyRpcResult)(block);
        }
        catch (error) {
            if (typeof error === 'object' &&
                (error.code === utils_1.PROVIDER_ERRORS.HEADER_NOT_FOUND ||
                    error.toString().includes('Unable to retrieve header'))) {
                return null;
            }
            throw error;
        }
    }
    /**
     * Returns information about a block by hash.
     * @param BLOCKTAG [required] - default block parameter
     * @param SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.
     * @returns BLOCK - A block object, or null when no block was found
     */
    async eth_getBlockByNumber(params) {
        (0, validate_1.validate)([{ type: 'block' }, { type: 'flag' }], params);
        try {
            const block = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBlockData(params[0], params[1]);
            return (0, eth_providers_1.hexlifyRpcResult)(block);
        }
        catch (error) {
            if (typeof error === 'object' &&
                (error.code === utils_1.PROVIDER_ERRORS.HEADER_NOT_FOUND ||
                    error.toString().includes('Unable to retrieve header'))) {
                return null;
            }
            throw error;
        }
    }
    /**
     * Returns the current gas price in wei.
     * @returns GAS PRICE - a hex code of an integer representing the current gas price in wei.
     */
    async eth_gasPrice(params) {
        (0, validate_1.validate)([], params);
        const gasPrice = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getGasPrice();
        return (0, bytes_1.hexValue)(gasPrice);
    }
    /**
     * Returns a list of addresses owned by client.
     * @returns 20 Bytes - addresses owned by the client.
     */
    async eth_accounts(params) {
        (0, validate_1.validate)([], params);
        const result = [];
        if (__classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f")) {
            const address = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f").getAddress();
            result.push(address);
        }
        return result;
    }
    /**
     * Returns the value from a storage position at a given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) of the storage
     * @param STORAGE POSITION [required] - a hex code of the position in the storage
     * @param BLOCKTAG [required] - default block parameter
     * @returns STORAGE VALUE - a hex code of the integer indicating the value of the storage position at the provided address
     */
    async eth_getStorageAt(params) {
        (0, validate_1.validate)([{ type: 'address' }, { type: 'position' }, { type: 'block' }], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getStorageAt(params[0], params[1], params[2]);
    }
    /**
     * Returns the number of transactions in the block with the given block hash.
     * @param BLOCKHASH [required] - a string representing the hash (32 bytes) of a block
     * @returns BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of transactions in the provided block
     */
    async eth_getBlockTransactionCountByHash(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }], params);
        const result = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBlockData(params[0]);
        return (0, bytes_1.hexValue)(result.transactions.length);
    }
    /**
     * Returns the number of transactions in the block with the given block number.
     * @param BLOCKTAG [required] - default block parameter
     * @returns BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of transactions in the provided block
     */
    async eth_getBlockTransactionCountByNumber(params) {
        (0, validate_1.validate)([{ type: 'block' }], params);
        const result = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getBlockData(params[0]);
        return (0, bytes_1.hexValue)(result.transactions.length);
    }
    /**
     * Submits a pre-signed transaction for broadcast to the Ethereum network.
     * @param TRANSACTION DATA [required] - The signed transaction data.
     * @returns TRANSACTION HASH - 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available
     */
    async eth_sendRawTransaction(params) {
        (0, validate_1.validate)([{ type: 'transactionData' }], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").sendRawTransaction(params[0]);
    }
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
     * @param TRANSACTION CALL OBJECT [required]
     * @returns GAS USED - the amount of gas used.
     */
    async eth_estimateGas(params) {
        (0, validate_1.validate)([{ type: 'transaction' }], params);
        const val = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").estimateGas(params[0]);
        return (0, bytes_1.hexValue)(val);
    }
    async eth_getEthGas(params) {
        (0, validate_1.validate)([{ type: 'substrateGasParams?' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f")._getEthGas(params[0]);
        return {
            gasPrice: (0, bytes_1.hexValue)(res.gasPrice),
            gasLimit: (0, bytes_1.hexValue)(res.gasLimit)
        };
    }
    async eth_getEthResources(params) {
        (0, validate_1.validate)([{ type: 'transaction' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getEthResources(params[0]);
        return {
            gasPrice: (0, bytes_1.hexValue)(res.gasPrice),
            gasLimit: (0, bytes_1.hexValue)(res.gasLimit)
        };
    }
    /**
     * Returns the information about a transaction requested by transaction hash.
     * @param DATA, 32 Bytes - hash of a transaction
     * @returns Transaction, A transaction object, or null when no transaction was found:
     */
    async eth_getTransactionByHash(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getTransactionByHash(params[0]);
        return res ? (0, eth_providers_1.hexlifyRpcResult)(res) : null;
    }
    /**
     * Returns the receipt of a transaction by transaction hash. Note That the receipt is not available for pending transactions.
     * @param DATA, 32 Bytes - hash of a transaction
     * @returns TransactionReceipt, A transaction receipt object, or null when no receipt was found:
     */
    async eth_getTransactionReceipt(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getTXReceiptByHash(params[0]);
        if (!res)
            return null;
        // @ts-ignore
        delete res.byzantium;
        // @ts-ignore
        delete res.confirmations;
        return (0, eth_providers_1.hexlifyRpcResult)(res);
    }
    /**
     * The sign method calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).
     * By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.
     * Note the address to sign with must be unlocked.
     * @param ADDRESS, 20 Bytes - address
     * @param MESSAGE, N Bytes - message to sign
     * @returns Signature
     */
    async eth_sign(params) {
        (0, validate_1.validate)([{ type: 'address' }, { type: 'message' }], params);
        if (!__classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f")) {
            throw new Error('eth_sign requires an account');
        }
        const address = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f").getAddress();
        if (address !== (0, address_1.getAddress)(params[0])) {
            throw new errors_1.InvalidParams('account mismatch or account not found', params[0]);
        }
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f").signMessage(params[1]);
    }
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code.
     * @param params
     * @returns TransactionHash - the transaction hash, or the zero hash if the transaction is not yet available.
     */
    async eth_sendTransaction(params) {
        if (!__classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f")) {
            throw new Error('eth_sendTransaction requires an account');
        }
        const tx = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_signer, "f").sendTransaction(params[0]);
        return tx.hash;
    }
    async eth_getTransactionByBlockHashAndIndex(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }, { type: 'hexNumber' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getTransactionReceiptAtBlock(params[1], params[0]);
        return (0, eth_providers_1.hexlifyRpcResult)(res);
    }
    async eth_getTransactionByBlockNumberAndIndex(params) {
        (0, validate_1.validate)([{ type: 'block' }, { type: 'hexNumber' }], params);
        const res = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getTransactionReceiptAtBlock(params[1], params[0]);
        return (0, eth_providers_1.hexlifyRpcResult)(res);
    }
    async eth_getUncleCountByBlockHash(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }], params);
        return HEX_ZERO;
    }
    async eth_getUncleCountByBlockNumber(params) {
        (0, validate_1.validate)([{ type: 'block' }], params);
        return HEX_ZERO;
    }
    async eth_getUncleByBlockHashAndIndex(params) {
        (0, validate_1.validate)([{ type: 'blockHash' }, { type: 'hexNumber' }], params);
        return null;
    }
    async eth_getUncleByBlockNumberAndIndex(params) {
        (0, validate_1.validate)([{ type: 'block' }, { type: 'hexNumber' }], params);
        return null;
    }
    async eth_isBlockFinalized(params) {
        (0, validate_1.validate)([{ type: 'block' }], params);
        return await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f")._isBlockFinalized(params[0]);
    }
    async eth_isTransactionFinalized(params) {
        (0, validate_1.validate)([{ type: 'trasactionHash' }], params);
        return await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f")._isTransactionFinalized(params[0]);
    }
    // async eth_newFilter(params: any[]): Promise<any> {
    // }
    // async eth_newBlockFilter(params: any[]): Promise<any> {
    // }
    // async eth_newPendingTransactionFilter(params: any[]): Promise<any> {
    // }
    // async eth_uninstallFilter(params: any[]): Promise<any> {
    // }
    // async eth_getFilterChanges(params: any[]): Promise<any> {
    // }
    // async eth_getFilterLogs(params: any[]): Promise<any> {
    // }
    async eth_getLogs(params) {
        (0, validate_1.validate)([{ type: 'object' }], params);
        const result = await __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").getLogs(params[0]);
        return (0, eth_providers_1.hexlifyRpcResult)(result);
    }
    async eth_subscribe(params, ws) {
        if (!ws)
            throw new Error('HTTP endpoint does not have subscriptions, use WebSockets instead');
        (0, validate_1.validate)([{ type: 'eventName' }, { type: 'object?' }], params);
        const reply = (data) => ws.send(JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_subscription',
            params: data
        }));
        const id = __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").addEventListener(params[0], reply, params[1]);
        ws.on('close', () => {
            __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").removeEventListener(id);
        });
        ws.on('error', () => {
            __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").removeEventListener(id);
        });
        return id;
    }
    async eth_unsubscribe(params, ws) {
        if (!ws)
            throw new Error('HTTP endpoint does not have subscriptions, use WebSockets instead');
        (0, validate_1.validate)([{ type: 'address' }], params);
        return __classPrivateFieldGet(this, _Eip1193BridgeImpl_provider, "f").removeEventListener(params[0]);
    }
}
_Eip1193BridgeImpl_provider = new WeakMap(), _Eip1193BridgeImpl_signer = new WeakMap();
