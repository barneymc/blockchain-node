
### Modular Architecture for Refrigerant Traceability using Ethereum
# blockchain-node

Below is a brief description of the modules created. A more thorough description of the modules and overall architecture can be found in the paper itself. ![Link to paper](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/BrendanMcArdle_20211242_EE5003.pdf)

![This is the Modular Architecture](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/ModularArchitecture.jpg)

## Module B

**Kaleido2**
contains the code necessary to connect to Kaleido hosted Blockchain. This code sits in Module B and runs on the dev laptop.
It is a node.js application and runs under *nodemon server.js*

The Blockchain libraries are called as a result of an asnych call :  *app.get('/contacts/savebulktankweight',async(request, response)*  - the routing is inside the node.js server.


This node.js server [BC_NodeSever] sits on the same local dev machine running the Node-Red flow in Module B.
Together these form the Module B - Application Integration layer. They facilitate data flowing from Module A to Module C( hosted Kaleido Blockchain).

The Node-Red flow in Module B subscribes to AWS (and by doing so, picks up the messages emanating from Module A, the field device and the Siemsens PLC). 

**Node-red**
The *fnPushWeightToServer* and *fnPushBulkTankWeightToServer* build the necessary QueryString complete with the required parameters to make a call to the locally running BC_NodeServer. 


**blockchain-node-api** 
This is a separate branch for the project which was concerned with getting the code to work with Ganache locally.
Smart Contracts were written for Ganache first then deployed to production Kaleido (i.e. running in the cloud - in Module C).

## Module A

This contains the node-red flows that publish the device and Siemens PLC data to AWS.
Below is the circuit design for connecting the DS18B20 to the Raspberry Pi

![This is the RaspberryPi Circiut](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/RaspberryPi_Circuit.jpg)

## Module C

This contains the AWS IoT Core running in US-East1. It contains the MQTT broker that handles published messages from Module A.
By routing these through AWS we allow for data analytics to be conducted in the future. 

It also contains the **Blockchain-as-a-Service** Kaleido which is at the core of the results discussed in the paper. 

## Ganache 

This runs on the local dev PC and is used to test the contracts before deploying the production (Kaleido in Module C). The contracts are identical.

To test the code properly requires an account on Kaleido and a network of nodes to contain the contracts. 

## Smart Contract

This is an example of a smart contract defined on Ganache and deployed to production.

![Smart Contract](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/ContractExample.jpg)

It was developed in Microsoft VSCode using the TruffleSuite Plugin. 

## Results

This folder contains the results file.
