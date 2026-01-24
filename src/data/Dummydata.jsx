import geomatry from "../image/newimg/geomatry.png";

export const dummyDashboard = {
  nfts: [
    {
      _id: "nft1",
      Name: "GeoRunners",
      cloudUrl: geomatry,
      txHash: "0x111",
      network: "Ethereum",

      onSale: 1,
      onAuction: 1,
      auction_type: "timed",

      Price: "0.75",
      Bidprice: "0.40",

      Bidstartdate: new Date().toISOString(),
      Bidenddate: new Date(Date.now() + 86400000).toISOString(),
      BidTime: 86400,

      likes: [{ wallet_address: "0xA1" }],
      user_id: { username: "Geometry", kycstatus: 1 },
    },

    {
      _id: "nft2",
      Name: "Cyber Ape",
      cloudUrl: geomatry,
      txHash: "0x222",
      network: "Polygon",

      onSale: 1,
      onAuction: 0,

      Price: "1.20",
      Bidprice: "0",

      likes: [{ wallet_address: "0xB2" }],
      user_id: { username: "CyberLab", kycstatus: 1 },
    },

    {
      _id: "nft3",
      Name: "Meta Skull",
      cloudUrl: geomatry,
      txHash: "0x333",
      network: "Ethereum",

      onSale: 0,
      onAuction: 1,
      auction_type: "unlimited",

      Price: "0",
      Bidprice: "0.65",

      BidendTime: Date.now() + 86400000,

      likes: [],
      user_id: { username: "MetaVerse", kycstatus: 1 },
    },

    {
      _id: "nft4",
      Name: "Neon Samurai",
      cloudUrl: geomatry,
      txHash: "0x444",
      network: "Polygon",

      onSale: 1,
      onAuction: 0,

      Price: "0.95",
      Bidprice: "0",

      likes: [{ wallet_address: "0xC3" }],
      user_id: { username: "NeoTokyo", kycstatus: 1 },
    },
  ],

  collections: [],
  users: [],
  liked_nfts: ["nft1", "nft3"],
};
