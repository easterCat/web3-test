var Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/ba708250def14358adeff7f7d7131044"
);
const account1 = "0x8fe9fC74221F82E4DC66a802AF8A4fF67930efEF"; // Your account address 1
const privateKey1 = Buffer.from(
  "0xa8f731b314e0ff6621b97b65e9b501135db7ada8417918ca7d6f6f3015b72346",
  "hex"
);

const txObject = {
  nonce: web3.utils.toHex(txCount),
  gasLimit: web3.utils.toHex(1000000), // 提高Gas上限
  gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  data: data,
};
