


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import Sidebar from "./Sidebar";
import Header from "./Headerafterlogin";
import Listmenusec from "./Innernenu";
import verifyIcon from "../image/newimg/uil_comment-verify.png";

/* =======================
   DUMMY NFT DATA
======================= */

const dummyNFTs = [
  {
    nftId: "101",
    name: "Neon Samurai",
    image: "https://img.freepik.com/premium-photo/futuristic-samurai-warrior-neonlit-armor-with-glowing-swords_255669-24349.jpg?semt=ais_user_personalization&w=740&q=80",
    creator: {
      username: "NeoArtist",
      kycstatus: 1
    },
    price: "0.25 ETH"
  },
  {
    nftId: "102",
    name: "Cyber Panda",
    image: "https://img.freepik.com/free-photo/view-panda-bear-with-robotic-tech-parts_23-2151741313.jpg?semt=ais_hybrid&w=740&q=80",
    creator: {
      username: "PixelMaster",
      kycstatus: 0
    },
    price: "0.12 ETH"
  },
  {
    nftId: "103",
    name: "Future City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbRFjX7ZYY_ik2Vsnfz1hRGm237uQqy1HUA&s",
    creator: {
      username: "MetaVision",
      kycstatus: 1
    },
    price: "0.4 ETH"
  },
  {
    nftId: "104",
    name: "Abstract Mind",
    image: "https://wallpapers.com/images/hd/colorful-liquid-abstract-in-statue-s-mind-j4jgr7w16tgd5xht.jpg",
    creator: {
      username: "ArtVerse",
      kycstatus: 0
    },
    price: "0.18 ETH"
  },
  {
    nftId: "101",
    name: "Neon Samurai",
    image: "https://img.freepik.com/premium-photo/futuristic-samurai-warrior-neonlit-armor-with-glowing-swords_255669-24349.jpg?semt=ais_user_personalization&w=740&q=80",
    creator: {
      username: "NeoArtist",
      kycstatus: 1
    },
    price: "0.25 ETH"
  },
  {
    nftId: "102",
    name: "Cyber Panda",
    image: "https://img.freepik.com/free-photo/view-panda-bear-with-robotic-tech-parts_23-2151741313.jpg?semt=ais_hybrid&w=740&q=80",
    creator: {
      username: "PixelMaster",
      kycstatus: 0
    },
    price: "0.12 ETH"
  },
  {
    nftId: "103",
    name: "Future City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbRFjX7ZYY_ik2Vsnfz1hRGm237uQqy1HUA&s",
    creator: {
      username: "MetaVision",
      kycstatus: 1
    },
    price: "0.4 ETH"
  },
  {
    nftId: "104",
    name: "Abstract Mind",
    image: "https://wallpapers.com/images/hd/colorful-liquid-abstract-in-statue-s-mind-j4jgr7w16tgd5xht.jpg",
    creator: {
      username: "ArtVerse",
      kycstatus: 0
    },
    price: "0.18 ETH"
  },
  {
    nftId: "101",
    name: "Neon Samurai",
    image: "https://img.freepik.com/premium-photo/futuristic-samurai-warrior-neonlit-armor-with-glowing-swords_255669-24349.jpg?semt=ais_user_personalization&w=740&q=80",
    creator: {
      username: "NeoArtist",
      kycstatus: 1
    },
    price: "0.25 ETH"
  },
  {
    nftId: "102",
    name: "Cyber Panda",
    image: "https://img.freepik.com/free-photo/view-panda-bear-with-robotic-tech-parts_23-2151741313.jpg?semt=ais_hybrid&w=740&q=80",
    creator: {
      username: "PixelMaster",
      kycstatus: 0
    },
    price: "0.12 ETH"
  },
  {
    nftId: "103",
    name: "Future City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbRFjX7ZYY_ik2Vsnfz1hRGm237uQqy1HUA&s",
    creator: {
      username: "MetaVision",
      kycstatus: 1
    },
    price: "0.4 ETH"
  },
  {
    nftId: "104",
    name: "Abstract Mind",
    image: "https://wallpapers.com/images/hd/colorful-liquid-abstract-in-statue-s-mind-j4jgr7w16tgd5xht.jpg",
    creator: {
      username: "ArtVerse",
      kycstatus: 0
    },
    price: "0.18 ETH"
  }
];

function Explore() {
  const navigate = useNavigate();

  const [allNFTs, setAllNFTs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  /* =======================
     LOAD DUMMY DATA
  ======================= */
  useEffect(() => {
    setAllNFTs(dummyNFTs);
    setTotal(dummyNFTs.length);
  }, []);

  return (
    <div id="wrapper" className="d-flex">
      {/* Sidebar */}
      <div
        className="border-end bg-white collapse navbar-collapse"
        id="sidebar-wrapper"
      >
        <Sidebar />
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">
        <Header />

        <div className="container">
          <div className="home_header latest_header">
            <h1>Explore NFTs</h1>
            <div className="menu_sec">
              <Listmenusec />
            </div>
          </div>

          <main className="main-secton-prifieme">
            <div className="row">
              <div className="col-lg-12">
                <div className="explore_section profile-page_comp">
                  <div className="collumn_new_s">
                    <div className="row">
                      {allNFTs.length > 0 ? (
                        allNFTs.map((item, index) => (
                          <div
                            key={index}
                            className="col-xl-2 col-lg-3 col-6 col-ac w-auto"
                            onClick={() =>
                              navigate(`/nft/${item.nftId}`)
                            }
                          >
                            <div className="card-Trending">
                              <div className="positionreel">
                                <Link to="#" className="imgconyeea">
                                  <img src={item.image} alt={item.name} />
                                </Link>
                              </div>

                              <p>
                                <span className="name_item">
                                  {item.creator.username}
                                  {item.creator.kycstatus === 1 && (
                                    <img
                                      src={verifyIcon}
                                      alt="verified"
                                      className="ms-1"
                                    />
                                  )}
                                </span>
                              </p>

                              <h5>{item.name}</h5>
                              <span className="price_tag">{item.price}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-lg-12 text-center">
                          <p>No NFTs Found</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination (optional) */}
              {/* 
              <div className="col-lg-12 d-flex justify-content-center">
                <Pagination
                  itemClass="page-item"
                  linkClass="page-link"
                  activePage={currentPage}
                  itemsCountPerPage={12}
                  totalItemsCount={total}
                  pageRangeDisplayed={3}
                  onChange={(page) => setCurrentPage(page)}
                />
              </div>
              */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Explore;
