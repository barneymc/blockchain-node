pragma solidity >=0.4.21 <=0.8.16;

contract SimpleStorage {
    event StorageSet(string _message);

    uint public storedData;

    function set(uint x) public {
        storedData = x;

        emit StorageSet("Data stored successfully!!");
    }

    function getStore() public view returns (uint256){
        return storedData;
    }
}
