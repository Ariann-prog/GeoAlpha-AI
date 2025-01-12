const { expect } = require("chai");

describe("GeoRiskData", function () {
    let RiskData, riskData, owner;

    beforeEach(async function () {
        RiskData = await ethers.getContractFactory("GeoRiskData");
        [owner] = await ethers.getSigners();
        riskData = await RiskData.deploy();
    });

    it("Should add a new risk", async function () {
        await riskData.addRisk("Region1", "Conflict", 85);

        const risks = await riskData.getRisks();
        expect(risks.length).to.equal(1);
        expect(risks[0].region).to.equal("Region1");
        expect(risks[0].riskType).to.equal("Conflict");
        expect(risks[0].severity).to.equal(85);
    });

    it("Should retrieve all risks", async function () {
        await riskData.addRisk("Region1", "Conflict", 85);
        await riskData.addRisk("Region2", "Cyber", 70);

        const risks = await riskData.getRisks();
        expect(risks.length).to.equal(2);
        expect(risks[1].region).to.equal("Region2");
        expect(risks[1].riskType).to.equal("Cyber");
        expect(risks[1].severity).to.equal(70);
    });
});
