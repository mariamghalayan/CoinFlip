pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Buy{

IERC20  private token;
uint price;
constructor(address  _token)
{
    price = 1;
    token = IERC20(_token);
}
 function buyToken() external payable {
     require(token.balanceOf(address(this)) >= msg.value * price , " Buy:: Have not enough balance");

    token.transfer(msg.sender, msg.value * price);

 }
  function withdraw( uint256 _amounth) external
  {
      require(address(this).balance >= _amounth * price," Buy:: Have not enough balance");
      payable(msg.sender).transfer(_amounth);

  }
}