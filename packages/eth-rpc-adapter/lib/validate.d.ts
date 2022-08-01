export declare type Schema = {
    type: 'address' | 'block' | 'transaction' | 'blockHash' | 'trasactionHash' | 'flag' | 'position' | 'transactionData' | 'object' | 'object?' | 'message' | 'hexNumber' | 'eventName' | 'substrateGasParams?';
}[];
export declare const validateEventName: (value: any) => void;
export declare const validateString: (value: any) => void;
export declare const validateHexNumber: (value: string) => void;
export declare const validateAddress: (data: any) => void;
export declare const validateBlock: (data: any) => boolean | void;
export declare const validateTransaction: (data: any) => void;
export declare const validateBlockHash: (data: any) => void;
export declare const validateTrasactionHash: (data: any) => void;
export declare const validateFlag: (data: any) => void;
export declare const validatePosition: (data: any) => void;
export declare const validateTransactionData: (data: any) => void;
export declare const validateObject: (data: any) => void;
export declare const validateSubstrateGasParams: (data: any) => void;
export declare const validate: (schema: Schema, data: unknown[]) => void;
export declare function validateHexString(value: string, length?: number): void;
//# sourceMappingURL=validate.d.ts.map