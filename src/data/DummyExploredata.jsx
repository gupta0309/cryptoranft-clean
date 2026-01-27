import geomatry from "../image/newimg/geomatry.png";

const exploreDummyData = [
  {
    id: "exp1",
    title: "Neon Geometry",
    image: geomatry,
    txHash: "0xAAA1",
    chain: "Ethereum",

    saleType: "auction", // "sale" | "auction"
    price: "0.80",
    currentBid: "0.45",

    auctionEndsAt: Date.now() + 1000 * 60 * 60 * 24,

    likesCount: 12,
    creator: {
      name: "GeoLab",
      verified: true,
    },
  },
  {
    id: "exp2",
    title: "Cyber Grid",
    image: geomatry,
    txHash: "0xAAA2",
    chain: "Polygon",

    saleType: "sale",
    price: "1.10",
    currentBid: null,

    likesCount: 5,
    creator: {
      name: "CyberWorks",
      verified: true,
    },
  },
  {
    id: "exp3",
    title: "Meta Pulse",
    image: geomatry,
    txHash: "0xAAA3",
    chain: "Ethereum",

    saleType: "auction",
    price: null,
    currentBid: "0.62",

    auctionEndsAt: Date.now() + 1000 * 60 * 60 * 12,

    likesCount: 0,
    creator: {
      name: "MetaForge",
      verified: false,
    },
  },
];

export default exploreDummyData;
