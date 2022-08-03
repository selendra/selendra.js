Some tools and SDKs related to Selendra EVM.

- install all dependencies
```
rush update
```

- build
```
rush build // build all
rush build -t @selendra/eth-rpc-adapter //  build all the things that @selendra/eth-rpc-adapter depends on, and also @selendra/eth-rpc-adapter itself
```

- run build when the file changes
```
rush build:watch // watch all packages
rush build:watch -t @selendra/eth-rpc-adapter //  watch all the things that @selendra/eth-rpc-adapter depends on, and also @selendra/eth-rpc-adapter itself
```
