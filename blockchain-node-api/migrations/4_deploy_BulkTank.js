const BulkTank = artifacts.require("./BulkTank.sol");

module.exports = function(deployer) {
  deployer.deploy(BulkTank);
};