require("@nomicfoundation/hardhat-toolbox");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  // API key from https://etherscan.io
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: false,
    // outputFile: "gas-report.txt",
    noColors: true
    // To get currency, need API key from coinmarketcap
    // currency: "USD",
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY
  }
};
