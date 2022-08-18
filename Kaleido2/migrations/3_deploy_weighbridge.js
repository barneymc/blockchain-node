const WeighBridge = artifacts.require("WeighBridge");

module.exports = function(deployer) {
  deployer.deploy(WeighBridge);
};
