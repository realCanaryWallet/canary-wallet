const hre = require("hardhat");

// deploy escape wallet
async function deployEscapeWallet() {
  
  // 部署 CanarySignal
  const CanarySignal = await hre.ethers.getContractFactory("CanarySignal");
  console.log(CanarySignal);
  const canarySignal = await CanarySignal.deploy(
    hre.ethers.parseEther("0.1"), // eth threshold
    hre.ethers.parseUnits("10", 18) // erc20 threshold
  );
  await canarySignal.waitForDeployment();
  console.log("✅ CanarySignal deployed to:", canarySignal.target);

  // 部署 EscapeWallet
  const EscapeWallet = await hre.ethers.getContractFactory("EscapeWallet");
//   const escapeWallet = await EscapeWallet.deploy(
//     owner.address, //owner wallet
//     escapeTo.address, //escapeTo wallet
//     canary.address    //canary wallet
//   );
  const escapeWallet = await EscapeWallet.deploy(
    "0xCcb17C56685d3553417f49C51737DBF7CCF4cf2D", //owner wallet
    "0xF58E6f9da468935B683fD9Faaa6838005B12C86D", //escapeTo wallet
    "0x9007cf34660c26c81f43A8d73Ed1b3Ae481CF373"    //canary wallet
  );
  await escapeWallet.waitForDeployment();
  console.log("✅ EscapeWallet deployed to:", escapeWallet.target);
}

module.exports = { deployEscapeWallet };

// 关键：必须执行函数
deployEscapeWallet().catch((err) => {
  console.error("❌ Deployment failed:", err);
  process.exitCode = 1;
});