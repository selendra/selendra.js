"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const eth_providers_1 = require("@selendra/eth-providers");
const http_1 = require("./transports/http");
const websocket_1 = require("./transports/websocket");
const eip1193_bridge_1 = require("./eip1193-bridge");
const rpc_forward_1 = require("./rpc-forward");
const router_1 = require("./router");
const _version_1 = require("./_version");
const utils_1 = require("./utils");
async function start() {
    console.log('starting server ...');
    const opts = (0, utils_1.parseOptions)();
    const provider = eth_providers_1.EvmRpcProvider.from(opts.endpoints.split(','), {
        safeMode: opts.safeMode,
        localMode: opts.localMode,
        richMode: opts.richMode,
        verbose: opts.verbose,
        subqlUrl: opts.subqlUrl,
        maxBlockCacheSize: opts.maxBlockCacheSize,
        storageCacheSize: opts.storageCacheSize
    });
    const bridge = new eip1193_bridge_1.Eip1193Bridge(provider);
    const rpcForward = opts.forwardMode ? new rpc_forward_1.RpcForward(provider) : undefined;
    const router = new router_1.Router(bridge, rpcForward);
    const HTTPTransport = new http_1.default({
        port: opts.httpPort,
        middleware: [],
        batchSize: opts.maxBatchSize
    });
    const WebSocketTransport = new websocket_1.default({
        port: opts.wsPort,
        middleware: [],
        batchSize: opts.maxBatchSize
    });
    HTTPTransport.addRouter(router);
    WebSocketTransport.addRouter(router);
    await provider.isReady();
    HTTPTransport.start();
    WebSocketTransport.start();
    // init rpc methods
    if (rpcForward) {
        await rpcForward.initRpcMethods();
    }
    console.log(`
  --------------------------------------------
               🚀 SERVER STARTED 🚀
  --------------------------------------------
  version         : ${_version_1.version}
  endpoint url    : ${opts.endpoints}
  subquery url    : ${opts.subqlUrl}
  listening to    : http ${opts.httpPort} | ws ${opts.wsPort}
  max blockCache  : ${opts.maxBlockCacheSize}
  max batchSize   : ${opts.maxBatchSize}
  max storageSize : ${opts.storageCacheSize}
  safe mode       : ${opts.safeMode}
  local mode      : ${opts.localMode}
  forward mode    : ${opts.forwardMode}
  rich mode       : ${opts.richMode}
  verbose         : ${opts.verbose}
  --------------------------------------------
  `);
}
exports.start = start;
