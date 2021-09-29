import { getNamedAccounts, ethers } from "hardhat";

async function main() {
  const { qubicAlan, creature: creatureAddress } = await getNamedAccounts();

  console.log("Use Creature at:", creatureAddress);

  const creature = await ethers.getContractAt("Creature", creatureAddress);
  const { hash: txHash } = await creature.mint(qubicAlan);

  console.log(`Token has been minted successfully, hash:`, txHash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
