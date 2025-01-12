// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GeoAlphaStaking {
    IERC20 public geoAlphaToken;

    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 100; // 10% annual reward

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount, uint256 reward);

    constructor(address _geoAlphaToken) {
        geoAlphaToken = IERC20(_geoAlphaToken);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");

        geoAlphaToken.transferFrom(msg.sender, address(this), amount);

        stakes[msg.sender].amount += amount;
        stakes[msg.sender].timestamp = block.timestamp;

        emit Staked(msg.sender, amount);
    }

    function unstake() external {
        Stake memory userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No tokens staked");

        uint256 stakingDuration = block.timestamp - userStake.timestamp;
        uint256 reward = (userStake.amount * rewardRate * stakingDuration) / (365 days * 1000);

        geoAlphaToken.transfer(msg.sender, userStake.amount + reward);

        delete stakes[msg.sender];

        emit Unstaked(msg.sender, userStake.amount, reward);
    }
}
