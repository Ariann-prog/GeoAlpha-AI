const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    // Deploy GeoAlphaToken
    const GeoAlphaToken = await hre.ethers.getContractFactory("GeoAlphaToken");
    const token = await GeoAlphaToken.deploy();
    console.log("GeoAlpha Token deployed to:", token.address);

    // Deploy GeoAlphaStaking
    const GeoAlphaStaking = await hre.ethers.getContractFactory("GeoAlphaStaking");
    const staking = await GeoAlphaStaking.deploy(token.address);
    console.log("GeoAlpha Staking deployed to:", staking.address);

    // Deploy GeoRiskData
    const GeoRiskData = await hre.ethers.getContractFactory("GeoRiskData");
    const riskData = await GeoRiskData.deploy();
    console.log("GeoRisk Data deployed to:", riskData.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
