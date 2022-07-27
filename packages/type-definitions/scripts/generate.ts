import { types, typesBundleForPolkadot, rpc } from '../lib';
import fs from 'fs';

fs.writeFileSync('/home/msi/Project/selendra.js/packages/type-definitions/src/json/types.json', JSON.stringify(types, null, 4));
fs.writeFileSync(
  '/home/msi/Project/selendra.js/packages/type-definitions/src/json/typesBundle.json',
  JSON.stringify(typesBundleForPolkadot, null, 4)
);
fs.writeFileSync('/home/msi/Project/selendra.js/packages/type-definitions/src/json/rpc.json', JSON.stringify(rpc, null, 4));