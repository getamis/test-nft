import { run, ethers } from "hardhat";

async function main() {
  await run("compile");

  const accounts = await ethers.getSigners();

  console.log(
    "Accounts:",
    accounts.map((a) => a.address)
  );

  const Creature = await ethers.getContractFactory("Creature");
  const creature = await Creature.deploy();

  await creature.deployed();

  console.log("Creature deployed to:", creature.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
