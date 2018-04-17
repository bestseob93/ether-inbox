const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor 함수는 대문자로 시작
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  web3.eth.getAccounts() // get a list of all accounts
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    });
  // use one of those accounts to deploy the contract. 
});

describe('Inbox', () => {
  it('deploys a contract', () => {});
});