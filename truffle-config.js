require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider')
module.exports = {
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider("provide brass spray dune upon zone sand put endless moral twice pulse", "https://ropsten.infura.io/v3/8628ff89ae754ac48e62f40402c8faa0")
            },
            network_id: 3,
            gas: 4000000
        },
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        }
    },
    // migrations_directory: './src/migrations/',
    // contracts_directory: './src/contracts/',
    // contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}