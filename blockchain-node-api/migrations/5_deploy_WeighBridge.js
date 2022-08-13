const WeighBridge = artifacts.require("./WeighBridge.sol");

module.exports = function(deployer) {
  deployer.deploy(WeighBridge);
};