import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">Conflux eSpace NFT Example</span>
          <span className="block text-4xl font-bold">How to make a simple NFT on Conflux</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/hero.png"
            width="400"
            height="231"
            alt="conflux banner"
            className="rounded-xl border-4 border-primary"
          />
          <div className="max-w-3xl">
          <hr className="border-t-2 border-gray-300 mt-6 mb-6" />
          <h2 className="text-xl font-bold mt-2">Objectives</h2>
            <p className="text-center text-lg mt-8">
              Create a simple NFT to learn basics of Conflux Scaffold. You'll use 
              {" "}<a href="https://hardhat.org/getting-started/" target="_blank" rel="noreferrer" className="underline">
                HardHat
              </a>{" "}
              to compile and deploy smart contracts. Then, you'll use a template React app full of components and hooks. Finally, you'll deploy a NFT to Conflux eSpace testnet to share with friends! 
            </p>
            <p className="text-center text-lg">
              The final deliverable is an app that lets users purchase and transfer NFTs. Deploy your contracts to Conflux
              testnet then build and upload your app to a public web server. Share the url of your app and feel free to ask any questions on Discord.
            {" "}
            <a href="https://discord.gg/confluxnetwork" target="_blank" rel="noreferrer" className="underline">
                Conflux Discord
            </a>
            {" "}
            </p>
            <hr className="border-t-2 border-gray-300 mt-6 mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
