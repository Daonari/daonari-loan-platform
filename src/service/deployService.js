const fs = require('fs')
const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const contract = require('../../build/contracts/Testcontract')
module.exports = {
    deploy
}

// deploy().then((res) => console.log('res is', res))

async function deploy({ sender, receiver, amount }) {
    // async function deploy() {
    const provider = new HDWalletProvider(
        'provide brass spray dune upon zone sand put endless moral twice pulse',
        'https://ropsten.infura.io/v3/8628ff89ae754ac48e62f40402c8faa0'
    )
    const web3 = new Web3(provider)
    // var contractData = fs.readFileSync('../../build/contracts/Testcontract.json');
    // var contract = JSON.parse(contractData);
    var abi = contract['abi'];
    var bytecode = contract['bytecode'];

    var testContract = new web3.eth.Contract(abi);
    testContract.transactionConfirmationBlocks = 0;

    var account = '0x430Cf643f3c0723877a7Cf54305fAAC221CBb9ba';
    
    const res = await testContract.deploy({
        data: bytecode,
        // arguments: ['sender', 'receiver', 20]
        arguments: [sender, receiver, amount]
    })
        .send({
            from: account,
            gas: 4000000
        });

    return res.options.address
}