import React, { useState } from "react";
import { ethers } from "ethers";
import GeoAlphaToken from "../artifacts/contracts/GeoAlphaToken.sol/GeoAlphaToken.json";
import GeoAlphaStaking from "../artifacts/contracts/GeoAlphaStaking.sol/GeoAlphaStaking.json";

const GeoAlphaTokenAddress = "0xYourTokenContractAddress";
const GeoAlphaStakingAddress = "0xYourStakingContractAddress";

function StakingPanel() {
    const [amount, setAmount] = useState("");

    async function handleStake() {
        if (!window.ethereum) return alert("Please install MetaMask!");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(GeoAlphaTokenAddress, GeoAlphaToken.abi, signer);
        const stakingContract = new ethers.Contract(GeoAlphaStakingAddress, GeoAlphaStaking.abi, signer);

        await tokenContract.approve(GeoAlphaStakingAddress, ethers.utils.parseEther(amount));
        await stakingContract.stake(ethers.utils.parseEther(amount));

        alert(`Staked ${amount} GAI!`);
    }

    return (
        <div>
            <h2>Stake Your GAI</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleStake}>Stake</button>
        </div>
    );
}

export default StakingPanel;
