![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@selendra/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@selendra/api)

# @selendra

This library provides additional typing information for user to access Selendra by using [polkadot.js](https://github.com/polkadot-js/api).

# Getting Started
- For **eth-rpc-adapter** [see here](https://github.com/selendra/selendra.js/tree/development/packages-evm/eth-rpc-adapter)


## Examples
- Install dependencies

```bash
yarn add @polkadot/api @selendra/api
```
- Create API instance

```bash
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@selendra/api';

async function main() {
    const provider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // use api
}

main()
```

- Simple Connect

```bash
import { options } from "@selendra/api";
import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  const provider = new WsProvider("wss://rpc-testnet.selendra.org");
  const api = new ApiPromise(options({ provider }));
  await api.isReadyOrError;

  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);

  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
  );
}

main().then(() => process.exit(0));
```

More examples [see here](https://github.com/selendra/selendra-tutorials/tree/master/api).
