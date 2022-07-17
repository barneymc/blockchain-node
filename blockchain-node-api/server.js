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
} else {
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        
        const accounts = web3.eth.getAccounts();
        const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);             


        console.log('In here 3.11' + accounts);
        console.log(accounts);
        console.log('That was the accounts');

        app.listen(process.env.PORT || 3001, () => {
                console.log('listening on port '+ (process.env.PORT || 3001));
        });

        console.log('In here 3.0.0.0');


        app.get('/', (req, res) => {
                console.log('In root route request...');
                res.send('GET root request to the homepage')
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