import { ethers } from "hardhat";
require("dotenv").config();

async function main() {
  const { OWNER, ESCAPE_TO, CANARY } = process.env;

  if (!OWNER || !ESCAPE_TO || !CANARY) {
    throw new Error("Missing OWNER, ESCAPE_TO, or CANARY in .env");
  }

  console.log("🚀 Deploying from:", OWNER);

  // CanarySignal
  const CanarySignal = await ethers.getContractFactory("CanarySignal");
  const canary = await CanarySignal.deploy(
    ethers.parseEther("0.1"),
    ethers.parseUnits("10", 18),
    OWNER
  );
  await canary.waitForDeployment();
  console.log("✅ CanarySignal deployed to:", await canary.getAddress());

  // EscapeWallet
  const EscapeWallet = await ethers.getContractFactory("EscapeWallet");
  const escapeWallet = await EscapeWallet.deploy(
    OWNER,                      // owner
    ESCAPE_TO,                  // escapeTo
    await canary.getAddress()   // canary
  );
  await escapeWallet.waitForDeployment();
  console.log("✅ EscapeWallet deployed to:", await escapeWallet.getAddress());
}

main().catch((err) => {
  console.error("❌ Deployment failed:", err);
  process.exit(1);
});
