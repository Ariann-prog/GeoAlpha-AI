// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GeoRiskData {
    struct Risk {
        string region;
        string riskType;
        uint256 severity; // 1 to 100
        uint256 timestamp;
    }

    Risk[] public risks;

    event RiskAdded(string region, string riskType, uint256 severity);

    function addRisk(string memory region, string memory riskType, uint256 severity) external {
        require(severity >= 1 && severity <= 100, "Severity must be between 1 and 100");

        risks.push(Risk(region, riskType, severity, block.timestamp));
        emit RiskAdded(region, riskType, severity);
    }

    function getRisks() external view returns (Risk[] memory) {
        return risks;
    }
}
