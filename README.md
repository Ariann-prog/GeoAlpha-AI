# GeoAlpha Protocol

GeoAlpha Protocol: A Decentralized Platform for Real-Time Geopolitical Risk Management

GeoAlpha Protocol combines cutting-edge AI, blockchain technology, and decentralized finance (DeFi) principles to provide real-time insights into geopolitical risks. This repository includes the smart contracts, scripts, and tools required to deploy and manage the protocol.

---

## Features
- GeoAlpha Token (GAI): ERC-20 token with an initial supply of 1 billion (1,000,000,000) tokens.
- Staking Mechanism: Enables token holders to earn rewards and unlock premium services.
- Geopolitical Risk Data Management: Stores and retrieves real-time geopolitical risk information.
- Governance: Empowers token holders to influence protocol updates and decisions.

---

## Folder Structure
geoalpha-protocol/
├── contracts/                     # Smart contract source code
│   ├── GeoAlphaToken.sol          # ERC-20 token implementation
│   ├── GeoAlphaStaking.sol        # Staking smart contract
│   ├── GeoRiskData.sol            # Geopolitical risk data management
├── scripts/                       # Deployment scripts
│   ├── deploy.js                  # Script to deploy smart contracts
├── test/                          # Unit tests for smart contracts
│   ├── GeoAlphaToken.test.js      # Tests for GeoAlphaToken
│   ├── GeoAlphaStaking.test.js    # Tests for GeoAlphaStaking
│   ├── GeoRiskData.test.js        # Tests for GeoRiskData
├── frontend/                      # Frontend interface (optional)
│   ├── src/
│   │   ├── components/
│   │   │   ├── RiskDashboard.js  # Dashboard for risk data visualization
│   │   │   ├── StakingPanel.js   # Staking functionality UI
│   │   ├── App.js                # Main application entry point
├── .env.example                   # Example environment variables file
├── hardhat.config.js              # Hardhat configuration file
├── package.json                   # Node.js dependencies
└── README.md                      # This file

---

## Getting Started

To set up and run the GeoAlpha Protocol, follow these steps:

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (v16 or higher).
2. Set up the [Hardhat](https://hardhat.org/) development environment.
3. Have an Ethereum wallet (e.g., [MetaMask](https://metamask.io/)).
4. Obtain a Testnet or Mainnet RPC URL.

### Installation
1. Clone the repository:
   git clone https://github.com/<username>/geoalpha-protocol.git
   cd geoalpha-protocol

2. Install dependencies:
   npm install

3. Create a `.env` file in the root directory based on `.env.example`:
   PRIVATE_KEY=<your_private_key>
   RPC_URL=<your_rpc_url>

4. Compile the contracts:
   npx hardhat compile

5. Deploy the contracts:
   npx hardhat run scripts/deploy.js --network <network_name>

Example output:
Deploying contracts with account: 0xYourAccountAddress
GeoAlpha Token deployed to: 0xTokenContractAddress
GeoAlpha Staking deployed to: 0xStakingContractAddress
GeoRisk Data deployed to: 0xRiskDataContractAddress

6. Run unit tests to ensure the contracts are working as expected:
   npx hardhat test

---

## Frontend Integration

The protocol includes an optional frontend interface to interact with the smart contracts.

1. Navigate to the `frontend` folder:
   cd frontend

2. Install frontend dependencies:
   npm install

3. Start the development server:
   npm start

This will launch a local development server where you can interact with the protocol's dashboard and staking panel.

---

## Smart Contracts Overview

1. GeoAlphaToken.sol:
   - ERC-20 token for the protocol.
   - Features: Mintable, Burnable.
   - Initial Supply: 1,000,000,000 GAI .
   - Token Symbol: GAI.

2. GeoAlphaStaking.sol:
   - Staking mechanism allowing users to lock tokens and earn rewards.
   - Reward Rate: 10% per year.
   - Features: Stake, Unstake, and Reward Calculation.

3. GeoRiskData.sol:
   - Manages and retrieves geopolitical risk data.
   - Features: Add new risks, Retrieve stored risks.
   - Data Points: Region, Risk Type, Severity, Timestamp.

---

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   git checkout -b feature/your-feature
3. Commit your changes:
   git commit -m "Add your feature"
4. Push to the branch:
   git push origin feature/your-feature
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For questions or collaboration, please reach out via the repository's issue tracker or email: team@geoalpha.ai
