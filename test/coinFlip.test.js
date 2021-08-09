const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const { except}= require("chai")

describe("CoinFlip contract: ",function()
{
    let coinFlip, accounts; // pop, vori mej contracti instancn e, fake accounts
    before("Before : ", async() => {
        accounts = await getNamedAccounts(); //???
        await deployments.deploy("CoinFlip:",{
            from: accounts.deployer,
            log: true,
        });
        coinFlip = await getContract("CoinFlip");
        
    })
    describe("Initializatione",  async() => {
        it("Shoul initializatione ", async() =>
        {
            
        })

    })
})