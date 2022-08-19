const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
//const mongodb = require('mongodb').MongoClient;

//const contract = require('@truffle/contract');
//const artifacts = require('./build/contracts/Contacts.json');

const CONTACT_ABI = require('./config');
const CONTACT_ADDRESS = require('./config');
const { response } = require('express');

//const ipfsClient = import('ipfs-http-client');                  //https://github.com/ipfs/js-ipfs/issues/4139
//const j1=ipfsClient();

//import { create } from 'ipfs-http-client';                              //doesnt work....cannot import outside module.

//const ipfs = ipfsClient.Create('http://localhost:5001');

//import ipfsClient from 'ipfs-http-client'
//const ipfs1 = ipfsClient.create('localhost', '5001', { protocol: 'http' });

//const ipfs = ipfsClient.Create('localhost', '5001', { protocol: 'http' })
//

//const { create } = require('ipfs-http-client')
//const ipfsClient = create("https://ipfs.infura.io:5001/api/v0")



app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider); 
} else {
        var web3 = new Web3(new Web3.providers.HttpProvider('https://e1z8aa4ej3:xhZDCQxrxCf6jYLSyW88N_qAgZzidWeXAtcdTOlB6Sk@e1z9s90rvr-e1mlq0f1l2-rpc.eu1-azure.kaleido.io'));
        
        const accounts = web3.eth.getAccounts();

        const contactList       = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);        
        const weighbridgeList   = new web3.eth.Contract(CONTACT_ABI.WEIGH_BRIDGE_ABI, CONTACT_ABI.WEIGH_BRIDGE_ADDRESS);
        const bulkTankList      = new web3.eth.Contract(CONTACT_ABI.BULK_TANK_ABI, CONTACT_ABI.BULK_TANK_ADDRESS);
        const simpleStorageList = new web3.eth.Contract(CONTACT_ABI.SIMPLE_STORAGE_ABI, CONTACT_ABI.SIMPLESTORAGE_ADDRESS);

        const accountAddress    = '0xa009c2db641acea109a5e650e63b75c80c5e6e77';   //kaleido Fiddy2 signing account - must be a string
        
        


        console.log('In here 3.11' + accounts);
        console.log(accounts);
        console.log('That was the accounts');

        app.listen(process.env.PORT || 3001, () => {
                console.log('listening on port '+ (process.env.PORT || 3001));
        });

        console.log('In here 3.0.0.0');


        //******************* IPFS  ***************************** */
        app.post('/upload', async (req, res) => {
                const data = req.body;
                console.log(data);
                const fileHash = await addFile(data);
                return res.send(`https://gateway.ipfs.io/ipfs/${ fileHash }`);
            });
            
        const addFile = async ({ path, content }) => {
        const file = { path: path, content: Buffer.from(content) };
        const filesAdded = await ipfs.add(file);
        return filesAdded[0].hash;
        }

        app.get('/getContract',async (request, response) =>{
                console.log('Getting contract details.');

                const queryStringParams = request.query;                                                        
                const qparamsParsed     = new URLSearchParams(queryStringParams);
                const theSlot         = qparamsParsed.get("_slot");


                const slotNum=theSlot;
                const contents = await web3.eth.getStorageAt('0xda5a6C3079449322a7F4Aa9F6648e6a1B9a52681',slotNum);
                response.json(contents);

        })

        app.get('/', (req, res) => {
                console.log('In root route request...');
                res.send('GET root request to the homepage')
              })


        app.get('/contacts/getcount', async (request, response) => {
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                const testCOUNTER = await contactList.methods.getCount().call();
                console.log('Counter now is ' + testCOUNTER);
                response.json(testCOUNTER);

        })


        app.get('/contacts/sendEmail', async(request, response) =>{

                const SENDGRID_API_KEY='*****';
                const sgMail = require('@sendgrid/mail');
                console.log('Sending email via API');
                                sgMail.setApiKey(SENDGRID_API_KEY);
                                const msg = {
                                        to: 'jlallyboy@gmail.com',
                                        from: 'brendan.mcardle@gmail.com', // Use the email address or domain you verified above
                                        subject: 'Bulk Tank Level Low',
                                        text: 'Order Request for Delivery of Refrigerant',
                                        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                                };
                                //ES6
                                sgMail
                                .send(msg)
                                .then(() => {}, error => {
                                                console.error(error);

                                                                if (error.response) {
                                                                console.error(error.response.body)
                                                                }
                                                });
                                //ES8
                                (async () => {
                                        try {
                                                await sgMail.send(msg);
                                        } catch (error) {
                                                
                                                        console.error(error);

                                                if (error.response) {
                                                        console.error(error.response.body)
                                                }
                                         }
                                })();
        })


        app.get('/contacts/getStorage', async (request, response) => {
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                const testStore = await simpleStorageList.methods.getStore().call();
                console.log('Store now is ' + testStore);
                response.json(testStore);

        })

        app.get('/contacts/simpleStorage',async(request, response) =>{
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                console.log('Create with params');
                https://stackoverflow.com/a/9870540

                // console.log(request.query);   
                // const queryStringParams = request.query;                                                        //passed in QueryString of Request object (maybe try Body also?)
                // const qparamsParsed     = new URLSearchParams(queryStringParams);
                // const theWeight        = qparamsParsed.get("_weight");
                console.log("SimpleStorage settings ");
                

                // console.log(qparamsParsed);


                //FIddy2 Signing account : 0xa009c2db641acea109a5e650e63b75c80c5e6e77
                //Calling update function on contract : https://besu.hyperledger.org/en/stable/Tutorials/Contracts/Calling-Contract-Functions/ 
                const stuff=await simpleStorageList.methods.set(5).send({from:'0xa009c2db641acea109a5e650e63b75c80c5e6e77',gasPrice: '0xFF', gasLimit: '0x24A22'});
                console.log("Updated SimpleStorage");
                response.json("Creation of new contract completed. ");
                
        })


        //https://stackoverflow.com/a/9870540

        //passed in QueryString of Request object (maybe try Body also?)
        //Calling update function on contract : https://besu.hyperledger.org/en/stable/Tutorials/Contracts/Calling-Contract-Functions/ 
       

        app.get('/contacts/savebulktankweight',async(request, response) =>{
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                console.log('Create with params ' + request.query);
                const queryStringParams = request.query;                                                        
                const qparamsParsed     = new URLSearchParams(queryStringParams);

                const theWeight         = qparamsParsed.get("_weight");
                const thetimeStamp     =  qparamsParsed.get("_timeStamp");
                const theID            =  qparamsParsed.get("_ID");
                
                const doUpdate          = await bulkTankList.methods.saveBulkTankWeight(theWeight,thetimeStamp, theID).send({from:'accountAddress',gasPrice: '0xFF', gasLimit: '0x24A22'});
                console.log("Added BulkTank weight" + theWeight);
                console.log("The weight is " + theWeight);
                console.log(qparamsParsed);
                response.json("Update of  Bulktank contract completed. " + theWeight);
                
        })

        app.get('/contacts/saveweighbridgeweight',async(request, response) =>{
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                console.log('\nCreate weighbridgeweight with params');
                https://stackoverflow.com/a/9870540

                console.log(request.query);   
                const queryStringParams = request.query;                                                        //passed in QueryString of Request object (maybe try Body also?)
                const qparamsParsed     = new URLSearchParams(queryStringParams);
                
                const theWeight        = qparamsParsed.get("_weight");
                const thetimeStamp     = qparamsParsed.get("_timeStamp");
                const theID            = qparamsParsed.get("_ID");


                console.log("The weight is " + theWeight);
                

                console.log(qparamsParsed);

                //Calling update function on contract : https://besu.hyperledger.org/en/stable/Tutorials/Contracts/Calling-Contract-Functions/ 
                const stuff=await weighbridgeList.methods.saveWeight(theWeight,thetimeStamp, theID).send({from:accountAddress,gasPrice: '0xFF', gasLimit: '0x24A22'});
                console.log("Added " + theWeight);
                response.json("Update of  contract completed. " + theWeight);
                
        })


        app.get('/contacts/create',async(request, response) =>{
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                console.log('Create with params');
                https://stackoverflow.com/a/9870540

                console.log(request.query);   
                const queryStringParams = request.query;                                                        //passed in QueryString of Request object (maybe try Body also?)
                const qparamsParsed     = new URLSearchParams(queryStringParams);
                const theNewName        = qparamsParsed.get("_name");
                const theNewPhone       = qparamsParsed.get("_phone");
                console.log("The name name is " + theNewName + '. The new phone is ' + theNewPhone);
                

                console.log(qparamsParsed);

                //Calling update function on contract : https://besu.hyperledger.org/en/stable/Tutorials/Contracts/Calling-Contract-Functions/ 
                const stuff=await contactList.methods.createContact(theNewName,theNewPhone).send({from:'0x29a9C3798Ab579CA7A6F24e2482b3f395F676f9a',gasPrice: '0xFF', gasLimit: '0x24A22'});
                console.log("Added " + theNewName);
                response.json("Creation of new contract completed. " + theNewName);
                
        })

        app.get('/contacts', async (request, response) => {
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }

                let cache = [];
                const COUNTER = await contactList.methods.count().call();
                console.log('In here 2 ');
                for (let i = 1; i <= COUNTER; i++) {
                const contact = await contactList.methods.contacts(i).call();
                cache = [...cache, contact];
              
        }
        
        response.json(cache);
        });
}