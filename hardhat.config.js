require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {},
        ropsten: {
            url: process.env.RPC_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
};
