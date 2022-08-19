
### Modular Architecture for Refrigerant Traceability using Ethereum
# blockchain-node

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
The *fnPushWeightToServer* and *fnPushBulkTankWeightToServer* build the necessary QueryString complete with the required parameters to make a call to the locally running BC_NodeServer. These are the core elements in Module C that collect the data and using MQTT publish it to AWS.


**blockchain-node-api** 
This is a separate branch for the project which was concerned with getting the code to work with Ganache locally.
Smart Contracts were written for Ganache first then deployed to production Kaleido (i.e. running in the cloud - in Module C).

## Module A

This contains the node-red flows that publish the device and Siemens PLC 
Below is the circuit design for connecting the DS18B20 to the Raspberry Pi

![This is the RaspberryPi Circiut](https://github.com/barneymc/blockchain-node/blob/main/Node_Red_artifacts/RaspberryPi_Circuit.jpg)

## Module C

This contains the AWS IoT Core running in US-East1. It contains the MQTT broker that handles published messages from Module A.
By routing these through AWS we allow for data analytics to be conducted in the future. 

It also contains the **Blockchain-as-a-Service** Kaleido which is at the core of the results discussed in the paper. 
