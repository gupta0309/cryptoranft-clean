

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Headerafterlogin";
import Listmenusec from "./Innernenu";

/* ---------- DUMMY NFT DATA ---------- */
const dummyNFTs = [
  {
    id: 1,
    name: "Cyber Ape",
    creator: "0xApe",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
    price: "0.45"
  },
  {
    id: 2,
    name: "Neon Skull",
    creator: "CryptoArt",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
    price: "0.62"
  },
  {
    id: 3,
    name: "Meta Robot",
    creator: "MetaLabs",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
    price: "1.12"
  },
  {
    id: 4,
    name: "Pixel Punk",
    creator: "NFTWorld",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    price: "0.89"
  },
  {
    id: 5,
    name: "Digital Monk",
    creator: "ZenNFT",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec",
    price: "0.74"
  },
  {
    id: 6,
    name: "Future Mask",
    creator: "VisionX",
    image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf",
    price: "0.98"
  },
  {
    id: 7,
    name: "Cyber Angel",
    creator: "HeavenDAO",
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89",
    price: "1.45"
  },
  {
    id: 8,
    name: "AI Samurai",
    creator: "NeoJapan",
    image: "https://images.unsplash.com/photo-1620121684840-edffcfc4b878",
    price: "0.67"
  },
  {
    id: 9,
    name: "Space Punk",
    creator: "GalaxyNFT",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
    price: "0.92"
  },
  {
    id: 10,
    name: "Glitch Face",
    creator: "Error404",
    image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de",
    price: "0.38"
  },
  {
    id: 11,
    name: "Crypto King",
    creator: "RoyalNFT",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
    price: "2.10"
  },
  {
    id: 12,
    name: "Neural Beast",
    creator: "BrainDAO",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
    price: "1.05"
  }
];

function Favorites() {
  const [nfts, setNfts] = useState(dummyNFTs);

  const removeFavorite = (id) => {
    setNfts((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <div id="wrapper" className="d-flex">
      {/* ---------- INLINE CSS ---------- */}
      <style>{`
        .favorite-card {
          border-radius: 14px;
          transition: transform 0.3s ease;
        }

        .favorite-card:hover {
          transform: translateY(-6px);
        }

        .image-box {
          width: 100%;
          height: 260px;
          overflow: hidden;
          border-radius: 12px;
          position: relative;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .fav-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0,0,0,0.65);
          color: #f28705;
          padding: 6px 10px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
        }

        .currencyc {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 768px) {
          .image-box {
            height: 220px;
          }
        }
      `}</style>

      <div className="border-end bg-white collapse navbar-collapse" id="sidebar-wrapper">
        <Sidebar />
      </div>

      <div id="page-content-wrapper">
        <Header />

        <div className="container">
          <div className="home_header latest_header">
            <h1>Favorites</h1>
            <Listmenusec />
          </div>

          <div className="row g-4">
            {nfts.length === 0 && (
              <p className="text-center">No favorite NFTs found</p>
            )}

            {nfts.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div className="card-Trending favorite-card">
                  <div className="image-box">
                    <img src={item.image} alt={item.name} />
                    <span
                      className="fav-icon"
                      onClick={() => removeFavorite(item.id)}
                    >
                      ♥
                    </span>
                  </div>

                  <p>
                    <span className="name_item">@{item.creator}</span>
                    <span className="liks">Favorite</span>
                  </p>

                  <h5>{item.name}</h5>

                  <div className="currencyc">
                    <small>Price</small>
                    <span>{item.price} ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
