//pragma solidity ^0.8.10;
//pragma solidity >=0.4.22 <=0.8.15;
pragma solidity >=0.4.22 <=0.8.0;

contract Contacts {
  uint public count = 0; // state variable

  event MyEvent(address indexed from, string message);


  struct Contact {
    uint id;
    string name;
    string phone;
  }

  constructor() public {
    createContact('Zafar Saleem', '123123123');
  }

  mapping(uint => Contact) public contacts;

   function getCount() public view returns (uint256){
  return count;
 }
 

  function createContact(string memory _name, string memory _phone) public {
    emit MyEvent(msg.sender, 'Just created a contract in createContract()');
    count++;
    contacts[count] = Contact(count, _name, _phone);
  }
}