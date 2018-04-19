const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor 함수는 대문자로 시작
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

const INITIAL_MESSAGE = 'Hi there!';

beforeEach(async () => {
  // Get a List of all accounts.
  accounts = await web3.eth.getAccounts();
  // use one of those accounts to deploy the contract. 

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });
});
