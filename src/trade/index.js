// web3文档 https://web3js.readthedocs.io/en/v1.7.5/
const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const rpcURL = "https://ropsten.infura.io/v3/ba708250def14358adeff7f7d7131044";
const web3 = new Web3(rpcURL);

const account1 = "0x8fe9fC74221F82E4DC66a802AF8A4fF67930efEF"; // Your account address 1
const account2 = "0xd010dD4b7D18F517C13Cb3ad10E74c2C9e3976f7"; // Your account address 2

const pk1 = "a8f731b314e0ff6621b97b65e9b501135db7ada8417918ca7d6f6f3015b72346"; // 实际项目中应该从process.env.PRIVATE_KEY_1中读取
const pk2 = "95a071b1e21075f438c08c5aac6cc41037ef42ea2033753d05db41a4746ee451"; // 实际项目中应该从process.env.PRIVATE_KEY_2中读取

const privateKey1 = Buffer.from(pk1, "hex");
const privateKey2 = Buffer.from(pk2, "hex");

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // 创建交易对象
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  // 签署交易
  const tx = new Tx(txObject, { chain: "ropsten", hardfork: "petersburg" });
  tx.sign(privateKey2);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // 广播交易
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
    // 可以去ropsten.etherscan.io查看交易详情
  });
});
