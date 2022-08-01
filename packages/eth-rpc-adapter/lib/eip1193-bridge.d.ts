/// <reference types="node" />
import { EvmRpcProvider, TX } from '@selendra/eth-providers';
import { Log, TransactionReceipt } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import EventEmitter from 'events';
import WebSocket from 'ws';
export declare class Eip1193Bridge extends EventEmitter {
    #private;
    readonly provider: EvmRpcProvider;
    constructor(provider: EvmRpcProvider, signer?: Signer);
    request(request: {
        method: string;
        params?: Array<any>;
    }): Promise<any>;
    isMethodValid(method: string): boolean;
    isMethodImplemented(method: string): method is keyof Eip1193BridgeImpl;
    send(method: string, params?: any[], ws?: WebSocket): Promise<any>;
}
declare class Eip1193BridgeImpl {
    #private;
    constructor(provider: EvmRpcProvider, signer?: Signer);
    web3_clientVersion(): Promise<string>;
    net_indexer(params: any[]): Promise<any>;
    net_cacheInfo(params: any[]): Promise<any>;
    net_isSafeMode(params: any[]): Promise<any>;
    net_health(params: any[]): Promise<any>;
    net_runtimeVersion(params: any[]): Promise<any>;
    /**
     * Returns the current network id.
     * @returns ID - The current network id.
     */
    net_version(params: any[]): Promise<any>;
    /**
     * Returns the current "latest" block number.
     * @returns BLOCK NUMBER - a hex code of an integer representing the current block number the client is on.
     */
    eth_blockNumber(params: any[]): Promise<any>;
    /**
     * Returns the currently configured chain id, a value used in replay-protected transaction signing as introduced by EIP-155.
     * @returns QUANTITY - big integer of the current chain id.
     */
    eth_chainId(params: any[]): Promise<string>;
    /**
     * Returns the number of transactions sent from an address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) to check for transaction count for
     * @param BLOCKTAG [required] - default block parameter
     * @returns TRANSACTION COUNT - a hex code of the integer representing the number of transactions sent from this address.
     */
    eth_getTransactionCount(params: any[]): Promise<string>;
    /**
     * Returns the compiled smart contract code, if any, at a given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) of the code
     * @param BLOCKTAG [required] - default block parameter
     * @returns CODE - a hex of the code at the given address
     */
    eth_getCode(params: any[]): Promise<string>;
    /**
     * Executes a new message call immediately without creating a transaction on the block chain.
     * @param TRANSACTION CALL OBJECT [required]
     * @param BLOCKTAG [required] - default block parameter
     * @returns RETURN VALUE - the return value of the executed contract method.
     */
    eth_call(params: any[]): Promise<string>;
    /**
     * Returns the balance of the account of given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) to check for balance
     * @param BLOCKTAG [required] - default block parameter
     * @returns BALANCE - integer of the current balance in wei.
     */
    eth_getBalance(params: any[]): Promise<string>;
    /**
     * Returns information about a block by hash.
     * @param BLOCKHASH [required] - a string representing the hash (32 bytes) of a block
     * @param SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.
     * @returns BLOCK - A block object, or null when no block was found
     */
    eth_getBlockByHash(params: any[]): Promise<any>;
    /**
     * Returns information about a block by hash.
     * @param BLOCKTAG [required] - default block parameter
     * @param SHOW TRANSACTION DETAILS FLAG [required] - if set to true, it returns the full transaction objects, if false only the hashes of the transactions.
     * @returns BLOCK - A block object, or null when no block was found
     */
    eth_getBlockByNumber(params: any[]): Promise<any>;
    /**
     * Returns the current gas price in wei.
     * @returns GAS PRICE - a hex code of an integer representing the current gas price in wei.
     */
    eth_gasPrice(params: any[]): Promise<string>;
    /**
     * Returns a list of addresses owned by client.
     * @returns 20 Bytes - addresses owned by the client.
     */
    eth_accounts(params: any[]): Promise<any>;
    /**
     * Returns the value from a storage position at a given address.
     * @param ADDRESS [required] - a string representing the address (20 bytes) of the storage
     * @param STORAGE POSITION [required] - a hex code of the position in the storage
     * @param BLOCKTAG [required] - default block parameter
     * @returns STORAGE VALUE - a hex code of the integer indicating the value of the storage position at the provided address
     */
    eth_getStorageAt(params: any[]): Promise<string>;
    /**
     * Returns the number of transactions in the block with the given block hash.
     * @param BLOCKHASH [required] - a string representing the hash (32 bytes) of a block
     * @returns BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of transactions in the provided block
     */
    eth_getBlockTransactionCountByHash(params: any[]): Promise<string>;
    /**
     * Returns the number of transactions in the block with the given block number.
     * @param BLOCKTAG [required] - default block parameter
     * @returns BLOCK TRANSACTION COUNT - a hex code of the integer representing the number of transactions in the provided block
     */
    eth_getBlockTransactionCountByNumber(params: any[]): Promise<string>;
    /**
     * Submits a pre-signed transaction for broadcast to the Ethereum network.
     * @param TRANSACTION DATA [required] - The signed transaction data.
     * @returns TRANSACTION HASH - 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available
     */
    eth_sendRawTransaction(params: any[]): Promise<string>;
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
     * @param TRANSACTION CALL OBJECT [required]
     * @returns GAS USED - the amount of gas used.
     */
    eth_estimateGas(params: any[]): Promise<string>;
    eth_getEthGas(params: any[]): Promise<{
        gasPrice: string;
        gasLimit: string;
    }>;
    eth_getEthResources(params: any[]): Promise<{
        gasPrice: string;
        gasLimit: string;
    }>;
    /**
     * Returns the information about a transaction requested by transaction hash.
     * @param DATA, 32 Bytes - hash of a transaction
     * @returns Transaction, A transaction object, or null when no transaction was found:
     */
    eth_getTransactionByHash(params: any[]): Promise<TX | null>;
    /**
     * Returns the receipt of a transaction by transaction hash. Note That the receipt is not available for pending transactions.
     * @param DATA, 32 Bytes - hash of a transaction
     * @returns TransactionReceipt, A transaction receipt object, or null when no receipt was found:
     */
    eth_getTransactionReceipt(params: any[]): Promise<TransactionReceipt | null>;
    /**
     * The sign method calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).
     * By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.
     * Note the address to sign with must be unlocked.
     * @param ADDRESS, 20 Bytes - address
     * @param MESSAGE, N Bytes - message to sign
     * @returns Signature
     */
    eth_sign(params: any[]): Promise<any>;
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code.
     * @param params
     * @returns TransactionHash - the transaction hash, or the zero hash if the transaction is not yet available.
     */
    eth_sendTransaction(params: any[]): Promise<any>;
    eth_getTransactionByBlockHashAndIndex(params: any[]): Promise<any>;
    eth_getTransactionByBlockNumberAndIndex(params: any[]): Promise<any>;
    eth_getUncleCountByBlockHash(params: any[]): Promise<any>;
    eth_getUncleCountByBlockNumber(params: any[]): Promise<any>;
    eth_getUncleByBlockHashAndIndex(params: any[]): Promise<any>;
    eth_getUncleByBlockNumberAndIndex(params: any[]): Promise<any>;
    eth_isBlockFinalized(params: any[]): Promise<any>;
    eth_isTransactionFinalized(params: any[]): Promise<any>;
    eth_getLogs(params: any[]): Promise<Log[]>;
    eth_subscribe(params: any[], ws?: WebSocket): Promise<any>;
    eth_unsubscribe(params: any[], ws?: WebSocket): Promise<any>;
}
export {};
//# sourceMappingURL=eip1193-bridge.d.ts.map