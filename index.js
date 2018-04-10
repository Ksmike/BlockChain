const Web3 = require('web3');
const Eth = require('web3-eth');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if it's available before instantiating
const web3 = new Web3('http://localhost:8545');
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/LC0Bh6GYesEQnpun7WjP"));
const eth = new Eth("http://localhost:8545");
const abi = [{"constant": false,"inputs":[{"name": "hash","type": "bytes32"}],"name": "apply","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "email","type": "string"}],"name": "getApplicationID","outputs":[{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}];
// parity -d /path/to/ascii/folder
// 0x99d1668cc1d3ab19b11cbe84fc44016e3fdf6793cd26ecfcf48733a3d67b7915

const myContract = new eth.Contract(abi, "0xcbbfbafedb0eb83016d2a96a4e80d30b20fa3e30");

myContract.options.address = "0xcbbfbafedb0eb83016d2a96a4e80d30b20fa3e30";
myContract.options.jsonInterface = abi;
myContract.options.from = '0x7C37E6984F99779d43313e2265AC20c75C0FAc10'; // default from address
myContract.options.gasPrice = '0'; // default gas price in wei
myContract.options.gas = 50000;

// 0xcd5ca00e85db96df300a7270279c9dbb7692a2408d2adeb65f5ff2999a7cd270
// myContract.methods.apply(web3.utils.keccak256('michael.copeland@freakout.tech'))
// 	.send({ from:"0x7C37E6984F99779d43313e2265AC20c75C0FAc10"})
// 	.on('transactionHash', function(hash){
// 		console.log('hash: ', hash);
// 	})
// 	.on('confirmation', function(confirmationNumber, receipt){
//     	console.log('confirmationNumber, receipt: ', confirmationNumber, receipt);
// 	})
// 	.on('error', function(error){
//     	console.log('error: ', error);
// 	});
	

// // 0x31cf46500853c3e4961ebeaf54577b56c97a85460103adee75efe133c31aefa2
myContract.methods.getApplicationID("michael.copeland@freakout.tech")
.call({ from:"0x003b75a7C98818FD76Eb0318c8739E8dc749D00E"})
.then(function(result){
    console.log('result: ', result);
});