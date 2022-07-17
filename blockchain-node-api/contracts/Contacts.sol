//pragma solidity ^0.8.10;
pragma solidity >=0.4.22 <=0.8.15;

//import "truffle/Console.sol";


contract Contacts {
  uint public count = 1; // state variable
  //event Log(string message, uint val);
  event MyEvent(address indexed from, string message);



  struct Contact {
    uint id;
    string name;
    string phone;
  }

  constructor() public {
    //console.log('In constructor');
    createContact('Zafar Saleem', '12A');
    //emit Log('In constructor', 23);
    emit MyEvent(msg.sender, 'Just created a contract in Constructor()');
  }


  mapping(uint => Contact) public contacts;

  function createContact(string memory _name, string memory _phone) public {
   emit MyEvent(msg.sender, 'Just created a contract in createContract()');
    count++;
    contacts[count] = Contact(count, _name, _phone);
  }

 function getCount() public view returns (uint256){
  return count;
 }

  function updateCount() public {
    count++;
    emit MyEvent(msg.sender, 'Increased count by 1');
  }
}