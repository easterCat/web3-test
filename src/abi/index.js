// web3文档 https://web3js.readthedocs.io/en/v1.7.5/
const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/ba708250def14358adeff7f7d7131044";
const web3 = new Web3(rpcURL);
const address = "0x79dAc4C6AafF683328b9d000ffD5030c8b1E9DF2";
const abi = require("./abi.js");
const contract = new web3.eth.Contract(abi, address);

contract.methods.totalSupply().call((err, result) => {
  console.log("totalSupply :>> ", result);
});
contract.methods.name().call((err, result) => {
  console.log("name :>> ", result);
});
contract.methods.symbol().call((err, result) => {
  console.log("symbol :>> ", result);
});
contract.methods
  .balanceOf("0x03118E2c88676d31ee397E1eEf7789fECfbC40b9")
  .call((err, result) => {
    console.log("balanceOf :>> ", result);
  });
