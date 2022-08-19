const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      provider: () => {
        const appCred = 'clarinAppCred'; // from application credential widget
        const connectionURL = 'e1p4gwqo4b:9ibNJa9F2VCAgEgJYspZ5THWH2dv27RObSOgSphmmkc@e1rf5b2hzu-e1a0m1q1sl-rpc.eu1-azure.kaleido.io/'; // without protocol (https://)        
        //return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 200000);
        //use the AppCredDetails => RPC HTTP Endpoint
        //return new HTTPProviderRateLimitRetry(`https://e1p4gwqo4b:HQIScdIx03sOGDD1fiuKZe6vo6hmA6m_wAcfHUbEdH8@e1rf5b2hzu-e1a0m1q1sl-rpc.eu1-azure.kaleido.io/`, 100000);
        // appA on Fiddy2...n1 node. 
        //return new HTTPProviderRateLimitRetry(`https://e1up2fiq1o:b37On7ZiN_lSg6OiM8Zm0OA_3mr5sW0KrvB-MnuLe_o@e1z9s90rvr-e1mlq0f1l2-rpc.eu1-azure.kaleido.io/`, 100000);
        // appB on Fiddy2...n1 node...
        //e1z8aa4ej3 is an AppCred ID for "appB" - https://console.kaleido.io/orgs/u0i9aclrhf/consortia/e1wt4bn8hq/environments/e1z9s90rvr/security/appcreds/e1z8aa4ej3?runtime_id=e1mlq0f1l2
        return new HTTPProviderRateLimitRetry('https://e1z8aa4ej3:xhZDCQxrxCf6jYLSyW88N_qAgZzidWeXAtcdTOlB6Sk@e1z9s90rvr-e1mlq0f1l2-rpc.eu1-azure.kaleido.io/', 100000);
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
  //compilers: {
  //  solc: {
  //    version: "0.8.15",
  //    settings: {
  //      evmVersion: "constantinople"
  //    }
  //  },
  //}
};
