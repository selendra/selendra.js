require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.9',
  networks: {
    selendra: {
      url: 'https://testnet-evm.selendra.org',
      accounts: {
        mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
      },
      chainId: 204
    }
  },
  mocha: {
    timeout: 100000
  }
};
