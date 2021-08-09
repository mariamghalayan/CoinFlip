const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const account = await ethers.getSigners();             // testoviy hascener "adress0[]"==msg.sender             //????
    const TestToken = await ethers.getContractFactory("TestToken");
    const Buy = await ethers.getContractFactory("Buy");


    const token = await TestToken.deploy(accounts[0].address);   // deploy e anum
    await token.deployed();// kpnum e contractin

   
    await token.transfer(address[1],50);
    const balance = await token.balanceOf(accounts[0].address); 
    expect(await token.balanceOf(accounts[0].address)).to.equal("10000000000000000000");



    token.connect(accounts[0]).transfer(buy.address,ether.utils.parseEther("100"));

    const buy = await Buy.deploy(token.address);
   // await ????????????????........;

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
