const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      provider: () => {
        const appCred = 'yourappcred'; // from application credential widget
        const connectionURL = 'e1rf5b2hzu-e1a0m1q1sl-rpc.eu1-azure.kaleido.io/'; // without protocol (https://)      
        const newLink = 'https://e1ozsv1ync:EL6f5A5M3qMYRn0OsiYeJLzfd-eJY2HS_TbI8UCyn_o@e1rf5b2hzu-e1a0m1q1sl-rpc.eu1-azure.kaleido.io/';  
//        return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 100000);
        return new HTTPProviderRateLimitRetry(newLink, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      disableConfirmationListener: true, // generates thousands of eth_getBlockByNumber calls
      timeoutBlocks: 3,
      deploymentPollingInterval: 5000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 600000
  },
  compilers: {
    solc: {
      version: "0.8.15",
      settings: {
        evmVersion: "constantinople"
      }
    },
  }
};