const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d6ba58d2d2a34172b7be530cbd936e8f";
//
// const fs = require('fs');
const mnemonic = "<mnemonic>";
// rinkeby contract: 0x316130f85eaa260c47a0d58b11d6856918e7901a9a5b3d0306e7933f5f38ebb2

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};