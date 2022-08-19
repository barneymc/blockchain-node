## Module B

# blockchain-node

![This is the Modular Architecture](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/ModularArchitecture.jpg)

**Kaleido2**
contains the code necessary to connect to Kaleido hosted Blockchain. This code sits in Module B and runs on the dev laptop.
It is a node.js application and runs under nodemon server.js

The Blockchain libraries are called as a result of an asnych call :  *app.get('/contacts/savebulktankweight',async(request, response)*  - the routing is inside the node.js server.


This node.js server [BC_NodeSever] sits on the same local dev machine running the Node-Red flow in Module B.
Together these form the Module B - Application Integration layer. They facilitate data flowing from Module A to Module C( hosted Kaleido Blockchain).

The Node-Red flow in Module B subscribes to AWS (and by doing so, picks up the messages emanating from Module A, the field device and the Siemsens PLC). 

**Node-red**
The *fnPushWeightToServer* and *fnPushBulkTankWeightToServer* build the necessary QueryString complete with the required parameters to make a call to the locally running BC_NodeServer. These are the core elements in Module A that collect the data and using MQTT publish it to AWS.


**blockchain-node-api** 
This is the initial project which was concerned with getting the code to work with Ganache locally.
Smart Contracts were written for Ganache first then deployed to production Kaleido (i.e. running in the cloud - in Module C).

## Module A

This contains the node-red flows that publish the device and Siemens PLC 
