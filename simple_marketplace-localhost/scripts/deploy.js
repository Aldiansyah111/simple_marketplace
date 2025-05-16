// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const Marketplace = await hre.ethers.getContractFactory("SimpleMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.waitForDeployment(); // ethers v6 style
  console.log("SimpleMarketplace deployed to:", await marketplace.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
