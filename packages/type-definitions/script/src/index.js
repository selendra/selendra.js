const { types, typesBundleForPolkadot, rpc } = require('@selendra/type-definitions');
const fs = require('fs');

fs.writeFileSync('packages/type-definitions/src/json/types.json', JSON.stringify(types, null, 4));
fs.writeFileSync(
  'packages/type-definitions/src/json/typesBundle.json',
  JSON.stringify(typesBundleForPolkadot, null, 4)
);
fs.writeFileSync('packages/type-definitions/src/json/rpc.json', JSON.stringify(rpc, null, 4));