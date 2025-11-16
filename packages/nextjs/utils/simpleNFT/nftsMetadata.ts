const nftsMetadata = [
  {
    description: "I am ConFi! I love Conflux!",
    external_url: "https://github.com/Conflux-Chain/conflux-design-assets/tree/main/ConFi_Mascot/PNG", // <-- this can link to a page for the specific file too
    image: "https://raw.githubusercontent.com/Conflux-Chain/conflux-design-assets/main/ConFi_Mascot/PNG/Conflux_Maskot_T-Shirt.png",
    name: "ConFi Mascot with T-Shirt",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "white",
      },
      {
        trait_type: "T-Shirt",
        value: "black",
      },
      {
        trait_type: "Stamina",
        value: 80,
      },
    ],
  },
  {
    description: "Too hot for a T-Shirt!",
    external_url: "https://github.com/Conflux-Chain/conflux-design-assets/tree/main/ConFi_Mascot/PNG", // <-- this can link to a page for the specific file too
    image: "https://raw.githubusercontent.com/Conflux-Chain/conflux-design-assets/main/ConFi_Mascot/PNG/Conflux_Maskot.png",
    name: "ConFi Mascot without T-Shirt",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "white",
      },
      {
        trait_type: "T-Shirt",
        value: "none",
      },
      {
        trait_type: "Stamina",
        value: 60,
      },
    ],
  },
  {
    description: "Eyes on the prize!",
    external_url: "https://github.com/Conflux-Chain/conflux-design-assets/tree/main/ConFi_Mascot/PNG", // <-- this can link to a page for the specific file too
    image: "https://raw.githubusercontent.com/Conflux-Chain/conflux-design-assets/main/ConFi_Mascot/PNG/Conflux_Maskot_Head.png",
    name: "ConFi Mascot Head",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "white",
      },
      {
        trait_type: "head",
        value: "only",
      },
      {
        trait_type: "Stamina",
        value: 40,
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
