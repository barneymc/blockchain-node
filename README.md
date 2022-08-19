# blockchain-node

#Kaleido2 
contains the code necessary to connect to Kaleido hosted Blockchain. This code sits in Module B and runs on the dev laptop.
It is a node.js application and runs under nodemon server.js

The Blockchain libraries are called as a result of an asnych call :  app.get('/contacts/savebulktankweight',async(request, response)  - the routing is inside the node.js server.


This node.js server [BC_NodeSever] sits on the same local dev machine running the Node-Red flow in Module B.
Together these form the Module B - Application Integration layer. They facilitate data flowing from Module A to Module C( hosted Kaleido Blockchain).

#Node-red
The fnPushWeightToServer and fnPushBulkTankWeightToServer build the necessary QueryString complete with the required parameters to make a call to the locally running BC_NodeServer.

