// web3文档 https://web3js.readthedocs.io/en/v1.7.5/
const Web3 = require("web3");
// const rpcURL = "https://mainnet.infura.io/v3/ba708250def14358adeff7f7d7131044";

// 本地私有链接
const rpcURL = "http://localhost:8545";
const web3 = new Web3(rpcURL);
const { eth } = web3;
const address = "0xbc764fb2b2492ea69242bc4c8f3f5d2a795e357d";
// ["0xbc764fb2b2492ea69242bc4c8f3f5d2a795e357d", "0x3d3ab8d67b73e092cd0097809fb696d9b39aa437", "0x97b3ef312ffcf60dd79fc41bf49ba1cc4a5c487a", "0x4a2bf85efe7cdf03ba37e0d9474a0da4ca4d601c"]

eth.getBalance(address, (err, wei) => {
  console.log("balance :>> ", wei);
  balance = web3.utils.fromWei(wei, "ether");
  console.log("balance :>> ", balance);
});

eth.sendTransaction({
  from: "0xbc764fb2b2492ea69242bc4c8f3f5d2a795e357d",
  to: "0x3d3ab8d67b73e092cd0097809fb696d9b39aa437",
  10^18,
});
