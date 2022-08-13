//pragma solidity ^0.8.10;
//pragma solidity >=0.4.22 <=0.8.15;
pragma solidity >=0.4.22 <=0.8.15;

contract WeighBridge {
  uint      public count = 0; // state variable
  uint      public weight =0; //state variable
  string    public timestamp   ="";

  event MyEvent(address indexed from, string message);





  constructor() public {
    //createWeighBridge('WeightBridge COLAS', '123123123');
    emit MyEvent(msg.sender, 'Just created WeighBridge storage contract :');
    count=0;
    weight=0;
    timestamp="now!";
  }


  //Added ability to save Tank Weight
  function saveWeight(uint recordedTankWeight) public {
    emit MyEvent(msg.sender, 'Just recorded tank Weight in saveWeight()');
    weight=recordedTankWeight;
  }
}