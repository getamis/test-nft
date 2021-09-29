import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      accounts: [
        process.env.PRIVATE_KEY,
      ],
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    mumbai: {
      accounts: [
        process.env.PRIVATE_KEY,
      ],
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
  },
  namedAccounts: {
    creature: {
      rinkeby: "0xC730b891F4FF8b659ab4Fc8D362239907cb99c17",
      mumbai: "0x8C457b37013369D130a7Ef293979cD48869dEe5E",
    },
    qubicAlan: {
      rinkeby: "0x496Bc91e961Ce9eA239994C483FEE30184dB874A",
      mumbai: "0x496Bc91e961Ce9eA239994C483FEE30184dB874A",
    },
  },
};
