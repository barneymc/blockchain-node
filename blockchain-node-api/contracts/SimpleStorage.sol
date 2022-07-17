// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint256 value;
  uint public write_count=0;  //state variable
  uint public some_val;

  event MyEvent(address indexed from, string message);

  function read() public view returns (uint256) {
    //emit MyEvent(msg.sender, 'hello foo read');
    return value;
  }

constructor() public {
    emit MyEvent(msg.sender, 'Just created simple storage contract : some_val=24');
    some_val=24;
  }

  function write(uint256 newValue) public {
    write_count++;
    value = newValue;
    some_val=some_val+newValue;
    emit MyEvent(msg.sender, 'hello foo write - and updated some_val');
  }


  function updateCount() public {
    some_val++;
    emit MyEvent(msg.sender, 'Increased some_val by 1');
  }


}
