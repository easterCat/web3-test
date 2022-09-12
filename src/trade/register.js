const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/ba708250def14358adeff7f7d7131044";
const web3 = new Web3(rpcURL);
const fs = require("fs-extra");
let accounts = [];

setInterval(() => {
  create100();
}, 3000);

function create100() {
  for (let index = 0; index < 10; index++) {
    const account = web3.eth.accounts.create();
    const address = account.address + "";
    if (address.endsWith("66666")) {
      console.log("account.publicKey :>> ", account.address);
      accounts.push(account);
    }
    if (address.endsWith("666666")) {
      console.log("account.publicKey :>> ", account.address);
      accounts.push(account);
    }
    if (address.endsWith("88888")) {
      console.log("account.publicKey :>> ", account.address);
      accounts.push(account);
    }
    if (address.endsWith("888888")) {
      console.log("account.publicKey :>> ", account.address);
      accounts.push(account);
    }
    accounts.push(account);
  }
  console.log("account :>> ", accounts);
  if (accounts.length > 0) {
    let data = fs.readFileSync("./accounts.txt", "utf-8");
    data = (data ? data + "\r\n" : "") + JSON.stringify(accounts);
    fs.writeFileSync("./accounts.txt", data);
  }
  accounts = [];
}
