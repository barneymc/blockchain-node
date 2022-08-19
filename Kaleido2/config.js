const BULK_TANK_ADDRESS     = '0x4DDAFDE8893fb8C28559e235F185c40bF2d19664';     //Kaleido - Aug 18
const CONTACT_ADDRESS       = '0x9b3a28b733338Df47441AcbFC538E6f9787D855a';     //Kaleido
const WEIGH_BRIDGE_ADDRESS  = '0xd5089F0Fa5242200cB4ea18F1349Cee088A6e262';     //Kaleido - Aug 18
const SIMPLESTORAGE_ADDRESS  = '0x88028991C91b5906EA6665cf10ec8F656078D578';




const BULK_TANK_ABI         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[],"name":"ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedBulkTankWeight","type":"uint256"},{"internalType":"string","name":"inputTimeStamp","type":"string"},{"internalType":"uint256","name":"inputID","type":"uint256"}],"name":"saveBulkTankWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timestamp","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const CONTACT_ABI           = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contacts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"}],"name":"createContact","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedTankWeight","type":"uint256"}],"name":"saveWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WEIGH_BRIDGE_ABI      = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"MyEvent","type":"event"},{"inputs":[],"name":"ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"recordedTankWeight","type":"uint256"},{"internalType":"string","name":"inputTimeStamp","type":"string"},{"internalType":"uint256","name":"inputID","type":"uint256"}],"name":"saveWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timestamp","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const SIMPLE_STORAGE_ABI    = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_message","type":"string"}],"name":"StorageSet","type":"event"},{"inputs":[],"name":"getStore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storedData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];



module.exports = {
  BULK_TANK_ADDRESS,
  BULK_TANK_ABI,
  CONTACT_ABI,
  CONTACT_ADDRESS,
  WEIGH_BRIDGE_ADDRESS,
  WEIGH_BRIDGE_ABI,
  SIMPLESTORAGE_ADDRESS,
  SIMPLE_STORAGE_ABI
};

