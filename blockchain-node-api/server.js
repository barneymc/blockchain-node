const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const contract = require('@truffle/contract');
const artifacts = require('./build/contracts/Contacts.json');
const CONTACT_ABI = require('./config');
const CONTACT_ADDRESS = require('./config');

app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider); 
        console.log('In here 0');
} else {
        var web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
        console.log('In here 3');
        //var web3 = new Web3(new Web3.providers.HttpProvider('HTTP://localhost:7545'));
        console.log('In here 3.1');
        const accounts = web3.eth.getAccounts();
        
        console.log('In here 3.11' + accounts);
        console.log(accounts);
        console.log('That was the accounts');

        app.get('/', (req, res) => {
                console.log('In root route request...');
                res.send('GET root request to the homepage')
              })


        app.get('/contacts/update', async (request, response) =>{
               // const COUNTER = await contactList.methods.count().call();
                console.log('Called Contact update request for contactList so we can update..');
                await contactList.methods.updateCount().send({from:'0x3aD966438610955c1f273a7BE4B43fcff1954433'});
                console.log('updatedCount for contract');
        })

        app.get('/contacts/getcount', async (request, response) =>{
                console.log('Called Contact getCount  request for contactList so we can update..');
                const COUNTER = await contactList.methods.getCount().call();
                console.log('Checked count for contract');
        })


        app.get('/contacts', async (request, response) => {
                if (typeof window !== "undefined") {
                        // browser code
                        await window.ethereum.enable();
                }
                

                console.log('In /contacts route request...');
                let cache = [];
                const COUNTER = await contactList.methods.count().call();
                console.log('Called Contact request for contactList ');
                for (let i = 1; i <= COUNTER; i++) {
      const contact = await contactList.methods.contacts(i).call();
      cache = [...cache, contact];
    }
    
    response.json(cache);
    });

        const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);
        app.listen(process.env.PORT || 3001, () => {
                                console.log('listening on port '+ (process.env.PORT || 3001));
                });

        console.log('In here 3.0.0.0');

        // const getData = async () => {
        //         //const web3 = new Web3(Web3.givenProvider);
        //         console.log('In here 3.0.0');
        //        const network = await web3.eth.net.getNetworkType();
        //        console.log('In here 3.0.1');
        //         await window.ethereum.enable();
        //         console.log('In here 3.0.2');
        //         const accounts = await web3.eth.getAccounts();
        //         console.log('In here 3.0.3');
        //         setAccount(accounts[0]);
        //         console.log("TCL: getData -> network", network);
        //         console.log("TCL: getData -> accounts", accounts);
        //       };


}

        //Copied from inside the MongoDB.connect() piece....
        console.log('In here 1');
       

//mongodb.connect('mongodb://127.0.0.1:27017/blockchain-node-api',
//        {
//                useUnifiedTopology: true,
//        }, async (err, client) => {
//        const db =client.db('Cluster0');
//        const accounts = await web3.eth.getAccounts();
//        const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS)//;
//        routes(app, db, accounts, contactList);
//        app.listen(process.env.PORT || 3001, () => {
//                console.log('listening on port '+ (process.env.PORT || 3001));
//        });
//});

