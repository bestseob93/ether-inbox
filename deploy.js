const dotenv = require('dotenv');
dotenv.config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.RINKBY_URL
);

const web3 = new Web3(provider);
