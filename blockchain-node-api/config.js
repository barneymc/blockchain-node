const BULK_TANK_ADDRESS     = '0xD213c396fe96b119100944e3d3b8c2BB2019Fa4A';
const CONTACT_ADDRESS       = '0xCDDd583265D32b156DA98080d6EeB5Ca70da1ED3';
const WEIGH_BRIDGE_ADDRESS  = '0x4B6bDBb541d3984F9AdC54aC9B653565Fdab578a';


const BULK_TANK_ABI         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedTankWeight","type":"uint256"}],"name":"saveWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const CONTACT_ABI           = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contacts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"}],"name":"createContact","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedTankWeight","type":"uint256"}],"name":"saveWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WEIGH_BRIDGE_ABI      = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedTankWeight","type":"uint256"}],"name":"saveWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timestamp","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];


module.exports = {
  BULK_TANK_ADDRESS,
  BULK_TANK_ABI,
  CONTACT_ABI,
  CONTACT_ADDRESS,
  WEIGH_BRIDGE_ADDRESS,
  WEIGH_BRIDGE_ABI
};


