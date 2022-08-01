"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = exports.DataDogUtil = exports.sleep = void 0;
const minimist_1 = __importDefault(require("minimist"));
const dotenv_1 = __importDefault(require("dotenv"));
const datadog_util_1 = require("./datadog-util");
const sleep = async (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));
exports.sleep = sleep;
exports.DataDogUtil = {
    buildTracerSpan: datadog_util_1.buildTracerSpan,
    assignTracerSpan: datadog_util_1.assignTracerSpan
};
const DEFAULT_SERVER_ARGS = {
    e: undefined,
    h: undefined,
    w: undefined,
    s: undefined,
    l: undefined,
    v: undefined,
    endpoint: 'ws://0.0.0.0::9944',
    subql: undefined,
    'http-port': 8545,
    'ws-port': 3331,
    'cache-size': 200,
    'max-batch-size': 50,
    'max-storage-size': 5000,
    forward: 0,
    safe: 0,
    local: 0,
    rich: 0,
    verbose: 1
};
const parseOptions = () => {
    const argv = (0, minimist_1.default)(process.argv.slice(2), { default: DEFAULT_SERVER_ARGS });
    const { e, h, w, s, l, f, r, v, endpoint, subql, safe, local, forward, rich, verbose } = argv;
    dotenv_1.default.config();
    const { ENDPOINT_URL, SUBQL_URL, HTTP_PORT, WS_PORT, MAX_CACHE_SIZE, MAX_BATCH_SIZE, STORAGE_CACHE_SIZE, SAFE_MODE, LOCAL_MODE, FORWARD_MODE, RICH_MODE, VERBOSE } = process.env;
    return {
        endpoints: ENDPOINT_URL || e || endpoint,
        subqlUrl: SUBQL_URL || subql,
        httpPort: Number(HTTP_PORT || h || argv['http-port']),
        wsPort: Number(WS_PORT || w || argv['ws-port']),
        maxBlockCacheSize: Number(MAX_CACHE_SIZE || argv['cache-size']),
        maxBatchSize: Number(MAX_BATCH_SIZE || argv['max-batch-size']),
        storageCacheSize: Number(STORAGE_CACHE_SIZE || argv['max-storage-size']),
        safeMode: !!Number(SAFE_MODE || s || safe),
        localMode: !!Number(LOCAL_MODE || local || l),
        forwardMode: !!Number(FORWARD_MODE || f || forward),
        richMode: !!Number(RICH_MODE || r || rich),
        verbose: !!Number(VERBOSE || verbose || v)
    };
};
exports.parseOptions = parseOptions;
//# sourceMappingURL=utils.js.map