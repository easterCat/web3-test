const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/ba708250def14358adeff7f7d7131044";
const web3 = new Web3(rpcURL);
const account = web3.eth.accounts.create();
console.log("account :>> ", account);
