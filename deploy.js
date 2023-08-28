const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const {interface, bytecode} = require('./compile.js') ;


const provider = new HDWalletProvider(
    'shock consider cannon raw deal live just clean unfair carpet soldier correct',
    'https://sepolia.infura.io/v3/1ca3ec615c6948ce8aef9becc65dafcb'
);

const web3 = new Web3(provider) ;

const deploy = async() => {
    const accounts = await web3.eth.getAccounts() ;

    console.log(accounts[0]) ;

    const res = await new web3.eth.Contract(JSON.parse(interface)) 
    .deploy({data : bytecode, arguments : ['Hi!']})
    .send({ gas: '1000000', from : accounts[0]}) ;

    console.log(res.options.address) ;
    provider.engine.stop() ;

} ;
deploy() ;
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
