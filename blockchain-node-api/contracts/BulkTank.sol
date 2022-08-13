//pragma solidity ^0.8.10;
//pragma solidity >=0.4.22 <=0.8.15;
pragma solidity >=0.4.22 <=0.8.15;

contract BulkTank {
  uint public count = 0; // state variable
  uint public weight =0; //state variable

  event MyEvent(address indexed from, string message);


  constructor() public {
    //createBulkTank('BULK Tank TK', '123123123');      //there is no complex constructor()
    emit MyEvent(msg.sender, 'Just created simple storage contract : some_val=24');
    weight=999;       //flagged value for BulkTank
  }



  //Added ability to save Tank Weight
  function saveWeight(uint recordedTankWeight) public {
    emit MyEvent(msg.sender, 'Just recorded bulk tank Weight in saveWeight()');
    weight=recordedTankWeight;
  }
}