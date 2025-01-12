const { expect } = require("chai");

describe("GeoAlphaStaking", function () {
    let Token, token, Staking, staking, owner, addr1;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("GeoAlphaToken");
        Staking = await ethers.getContractFactory("GeoAlphaStaking");

        [owner, addr1] = await ethers.getSigners();
        token = await Token.deploy();
        staking = await Staking.deploy(token.address);

        // Distribute tokens to addr1
        await token.transfer(addr1.address, 1000);
    });

    it("Should allow users to stake tokens", async function () {
        await token.connect(addr1).approve(staking.address, 500);
        await staking.connect(addr1).stake(500);

        const stake = await staking.stakes(addr1.address);
        expect(stake.amount).to.equal(500);
    });

    it("Should calculate rewards correctly", async function () {
        await token.connect(addr1).approve(staking.address, 100);
        await staking.connect(addr1).stake(100);

        // Simulate time passing
        await ethers.provider.send("evm_increaseTime", [365 * 24 * 60 * 60]); // 1 year
        await ethers.provider.send("evm_mine");

        await staking.connect(addr1).unstake();

        const addr1Balance = await token.balanceOf(addr1.address);
        expect(addr1Balance).to.be.closeTo(110, 1); // 10% reward
    });
});
