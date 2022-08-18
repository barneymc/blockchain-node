//pragma solidity ^0.8.10;
//pragma solidity >=0.4.22 <=0.8.15;
pragma solidity >=0.4.22 <=0.8.16;
contract WeighBridge {
  uint      public count = 0; // state variable
  uint      public weight =0; //state variable
  uint      public ID=0;      //helps us track the calls from data source
  string    public timestamp   ="";
  uint      CRITICAL_LEVEL = 5000;

  event MyEvent(address indexed from, string message);

// Added comment for WeighBridge



  constructor() public {
    //createWeighBridge('WeightBridge COLAS', '123123123');
    emit MyEvent(msg.sender, 'Just created WeighBridge storage contract :');
    count     = 0;
    weight    = 0;
    ID        = 0;
    timestamp = "now!";
  }


  //Save Tank Weight on Blockchain
  function saveWeight(uint recordedTankWeight, string memory inputTimeStamp, uint inputID) public {
    emit MyEvent(msg.sender, 'Just recorded tank Weight in saveWeight()');
      weight    = recordedTankWeight;
      timestamp = inputTimeStamp;
      ID        = inputID;

    if (recordedTankWeight < CRITICAL_LEVEL){
      //Send Purchase Order Request via Kaleido platform
    }
  }
}