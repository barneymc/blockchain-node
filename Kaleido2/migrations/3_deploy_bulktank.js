const BulkTank = artifacts.require("BulkTank");

module.exports = function(deployer) {
  deployer.deploy(BulkTank);
};
