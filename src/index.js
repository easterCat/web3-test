// web3文档 https://web3js.readthedocs.io/en/v1.7.5/
const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/ba708250def14358adeff7f7d7131044";
const web3 = new Web3(rpcURL);
const address = "0x03118E2c88676d31ee397E1eEf7789fECfbC40b9";

web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log("balance :>> ", balance);
});
