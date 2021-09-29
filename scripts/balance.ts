import { run, ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();

  const me = accounts[0].address;

  const balance = await ethers.provider.getBalance(me);

  console.log(me, ":", ethers.utils.formatEther(balance));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
