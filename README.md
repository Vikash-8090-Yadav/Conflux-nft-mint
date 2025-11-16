# 🚩 Conflux NFT Minting Project

A complete NFT (Non-Fungible Token) implementation on Conflux Network with IPFS metadata storage. This project is adapted from ETH Scaffold 2 and provides a full-stack solution for minting, viewing, and transferring NFTs on the Conflux blockchain.


Demo Video: https://youtu.be/2oVW_LxedFo


## 📖 Overview

This project demonstrates how to build and deploy NFTs on Conflux Network by:
- Deploying ERC721 smart contracts using OpenZeppelin libraries
- Storing NFT metadata on IPFS (InterPlanetary File System)
- Building a React/Next.js frontend for minting and managing NFTs
- Integrating with Conflux ESpace (EVM-compatible network)

![Home Page](packages/nextjs/public/Home.png)

> 📹 A video tutorial for this project can be found [here](https://www.youtube.com/watch?v=sj2ph_ctQUg)

## ✨ Features

- ✅ ERC721 compliant NFT contract using OpenZeppelin
- ✅ IPFS integration for decentralized metadata storage
- ✅ Modern React frontend with Next.js
- ✅ Wallet connectivity via RainbowKit
- ✅ NFT minting interface
- ✅ NFT transfer functionality
- ✅ Event tracking and transaction history
- ✅ Support for Conflux testnet and mainnet

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.17.0
- Yarn package manager
- A Conflux wallet with testnet CFX (for testnet deployment)

### Installation

```sh
# Clone the repository
git clone https://github.com/Vikash-8090-Yadav/Conflux-nft-mint
cd Conflux-nft-mint

# Install dependencies
yarn install
```

### Project Structure

The repository consists of two main packages:

- **`packages/hardhat/`**: Smart contract development and deployment
  - Contains the `ConfluxNFT.sol` contract inheriting from OpenZeppelin's ERC721, ERC721Enumerable, and ERC721URIStorage
  - Deployment scripts and configuration
- **`packages/nextjs/`**: Frontend React application
  - NFT minting interface
  - NFT display and management
  - IPFS integration for metadata

The smart contract uses OpenZeppelin's battle-tested libraries to create a secure, standard-compliant ERC721 contract for minting NFTs.

## 🛠️ Development

### Compile Contracts

```sh
npx hardhat compile
```

This compiles the Solidity contracts and generates TypeScript type definitions.

### Deploy Contracts

#### Local Development

```sh
# Start local Hardhat network
yarn chain

# In another terminal, deploy contracts
yarn deploy
```

#### Deploy to Conflux Testnet

1. Set your `DEPLOYER_PRIVATE_KEY` in `.env` file:
```env
DEPLOYER_PRIVATE_KEY=your_private_key_here
```

2. Deploy to testnet:
```sh
npx hardhat deploy --network confluxESpaceTestnet
```

#### Deploy to Conflux Mainnet

```sh
npx hardhat deploy --network confluxESpace
```

### Verify Contract

After deployment, verify your contract on ConfluxScan:

```sh
npx hardhat verify --network confluxESpaceTestnet [CONTRACT_ADDRESS]
```

For contracts with constructor arguments:
```sh
npx hardhat verify --network confluxESpaceTestnet [CONTRACT_ADDRESS] [CONSTRUCTOR_ARGS]
```

## 🎨 Running the Frontend

1. Start the local blockchain (in one terminal):
```sh
yarn chain
```

2. Deploy contracts (if not already deployed):
```sh
yarn deploy
```

3. Start the frontend (in another terminal):
```sh
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

### Minting NFTs

1. Connect your wallet using the "Connect Wallet" button
2. Navigate to the **"My NFTs"** tab
3. Click the **"MINT NFT"** button
4. Approve the transaction in your wallet
5. Wait for confirmation - your NFT will appear in the list!

The system automatically:
- Uploads metadata to IPFS
- Mints the NFT with the IPFS hash
- Displays your new NFT

![NFT Example](packages/nextjs/public/NFTExample.png)

### Transferring NFTs

1. In the **"My NFTs"** tab, find the NFT you want to transfer
2. Enter the recipient's address in the "Transfer To" field
3. Click the **"Send"** button
4. Approve the transaction
5. The NFT will be transferred to the recipient

### Viewing Transfer History

Navigate to the **"Transfers"** tab to see all Transfer events, including:
- Token IDs
- From addresses
- To addresses

### Debug Contracts

Use the **"Debug Contracts"** tab to:
- View contract owner address
- Inspect token URIs
- Read contract state variables

## 📁 Smart Contract Details

### ConfluxNFT Contract

The `ConfluxNFT.sol` contract is located in `packages/hardhat/contracts/` and includes:

- **ERC721**: Base NFT standard implementation
- **ERC721Enumerable**: Token enumeration capabilities
- **ERC721URIStorage**: Per-token URI storage
- **Ownable**: Access control functionality

Key functions:
- `mintItem(address to, string memory uri)`: Mints a new NFT
- `tokenURI(uint256 tokenId)`: Returns the IPFS URI for a token
- Standard ERC721 transfer functions

## 🔗 Network Configuration

The project supports multiple networks configured in `hardhat.config.ts`:

- **localhost**: Local Hardhat network
- **confluxESpaceTestnet**: Conflux ESpace Testnet (Chain ID: 71)
- **confluxESpace**: Conflux ESpace Mainnet (Chain ID: 1030)

## 🔐 Security Notes

- This contract uses OpenZeppelin's audited contracts for security
- The minting function is currently public (anyone can mint)
- For production use, consider adding access controls

## 📚 Technologies Used

- **Solidity** ^0.8.2
- **OpenZeppelin Contracts** - Battle-tested smart contract libraries
- **Hardhat** - Ethereum development environment
- **Next.js** - React framework
- **Wagmi** - React Hooks for Ethereum
- **RainbowKit** - Wallet connection UI
- **IPFS** (via Infura) - Decentralized storage
- **TypeScript** - Type-safe development

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
