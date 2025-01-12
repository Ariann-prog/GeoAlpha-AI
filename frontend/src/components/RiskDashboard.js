import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import GeoRiskData from "../artifacts/contracts/GeoRiskData.sol/GeoRiskData.json";

const GeoRiskDataAddress = "0xYourRiskDataContractAddress";

function RiskDashboard() {
    const [risks, setRisks] = useState([]);

    useEffect(() => {
        async function fetchRisks() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(GeoRiskDataAddress, GeoRiskData.abi, provider);
            const risksData = await contract.getRisks();
            setRisks(risksData);
        }

        fetchRisks();
    }, []);

    return (
        <div>
            <h2>Geopolitical Risks</h2>
            <ul>
                {risks.map((risk, index) => (
                    <li key={index}>
                        <strong>Region:</strong> {risk.region} | <strong>Type:</strong> {risk.riskType} |{" "}
                        <strong>Severity:</strong> {risk.severity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RiskDashboard;
