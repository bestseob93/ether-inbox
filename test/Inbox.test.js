const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor 함수는 대문자로 시작
const web3 = new Web3(ganache.provider());

