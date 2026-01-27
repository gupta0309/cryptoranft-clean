// import React, {useState, useEffect} from "react";
// import Sideber from "./Sidebar";
// import Header from "./Headerafterlogin";
// import Twitter from "../image/twitter.svg";
// import Plane from "../image/plane.svg";
// import News from "../image/new_ww.svg";
// import NFT from "../image/nft_new.svg";
// import games from "../image/games.svg";
// import defi from "../image/defi.svg";
// import {Link} from "react-router-dom";

// import inter from "../image/internet.svg";

// import Token1 from "../image/toker1.png";
// import {Button} from "@material-ui/core";
// import Listmenusec from "./Innernenu";
// import Countdown from "react-countdown";

// import verifyIcon from "../image/newimg/uil_comment-verify.png";


// import {postMethod} from "../service/api";
// import {getMethod} from "../service/api";
// import apiService from "../service/serviceUrl";
// import {toastAlert} from "../lib/toastAlert";
// import Moment from "moment";
// import { useNavigate } from 'react-router-dom';
// import Pagination from "react-js-pagination";

// const Completionist = () => <span></span>;

// // Renderer callback with condition
// const renderer = ({hours, minutes, seconds, completed}) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return (
//       <div className="timer-sect">
//         <span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
//       </div>
//     );
//   }
// };

// function Home() {
//   const navigate = useNavigate();
//   const [userDatas, setUserDatas] = useState("");
//   const [allCollection, setallCollection] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [total, settotal] = useState(0);
//   const [perpage, setperpage] = useState(12);

//   useEffect(() => {
//     getProfile();
//     getallCollections(1);
//   }, [0]);

//   const getProfile = async () => {
//     try {
//       var data = {
//         apiUrl: apiService.getProfile,
//       };
//       var resp = await getMethod(data);
//       if (resp.status) {
//         setUserDatas(resp.Message);
//         // console.log(resp, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
//       } else {
//       }
//     } catch (error) {}
//   };

//   const copy = async (text) => {
//     console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
//     navigator.clipboard.writeText(text);
//     toastAlert("success", "Address copied");
//   };

//   const recordPerPage = 12;
//   const pageRange = 3;

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     getallCollections(pageNumber);
//   };

//   const getallCollections = async (page) => {
//     try {
//       var obj = {
//         perpage: perpage,
//         page: page,
//       };
//       var data = {
//         apiUrl: apiService.allCollections,
//         payload: obj
//       };
//       var resp = await postMethod(data);
//       console.log("all collection data===",resp);
//       if (resp.status) {
//         setallCollection(resp.data);
//         settotal(resp.total)
//       } else {
//       }
//     } catch (error) {}
//   };

//   return (
//     <div>
//       <div id="wrapper" className="d-flex">
//         {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
//         <div
//           className="border-end bg-white collapse navbar-collapse "
//           id="sidebar-wrapper"
//         >
//           <Sideber />
//         </div>
//         <div id="page-content-wrapper">
//           <Header />

//           <div>
//             <div>
//             <div className="container">
//                 <div className="home_header latest_header">
//                   <h1>Collections</h1>
//                   <div className="menu_sec">
//                     <Listmenusec />
//                   </div>
//                 </div>

//                 <main className="main-secton-prifieme">
//                   {/* <ul class="nav nav-tabs">
//                     <li>
//                       <a data-toggle="tab" href="#Normal" className="active">
//                         Normal
//                       </a>
//                     </li>
//                     <li>
//                       <a data-toggle="tab" href="#Premium">
//                         Premium
//                       </a>
//                     </li>
//                   </ul> */}

//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div class="tab-content explore_section profile-page_comp">
//                         <div id="Normal" class="tab-pane fade in active show">
//                           <div className="collumn_new_s">
//                             <div className="row">
//                             {allCollection.length > 0 ? (
//                               allCollection.map((item, i) => {
//                                 return (
//                                   <div className="col-xl-2 col-lg-3 col-6 col-ac w-auto" onClick={()=> navigate(`/collection/nfts/${item.collectionId}/${item.network}`)}>
//                                     <div className="card-Trending ">
//                                       <div className="positionreel">
//                                         <Link to="" className="imgconyeea">
//                                           <img
//                                             src={item.image}
//                                             className=""
//                                             alt=""
//                                           />
//                                         </Link>
                                        
//                                       </div>
//                                       <p>
//                                         <span className="name_item">
//                                         {item.user_id.username}
//                                         {item.user_id.kycstatus == 1 ? (
//                                            <img src={verifyIcon} className="" alt="" />
//                                         )
//                                         :
//                                         ("")
//                                       }
                                          
//                                         </span>
//                                       </p>
//                                       <h5>{item.name}</h5>
//                                     </div>
//                                   </div>
//                                 )
//                               })
//                             ): (<div className="col-lg-3"><p>No Datas Found</p></div>)
//                             }
                            
                            
                          
//                             </div>

                           

//                           </div>

                         
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-12 collumn_new_s justify-content-center d-flex">
//                     {allCollection.length > 0 ? (
//                             <Pagination
//                               itemClass="page-item"
//                               linkClass="page-link"
//                               activePage={currentPage}
//                               itemsCountPerPage={recordPerPage}
//                               totalItemsCount={total}
//                               pageRangeDisplayed={pageRange}
//                               onChange={handlePageChange}
//                               className="justify-content-center"
//                             />
//                             ) : ("")}
//                     </div>
//                   </div>
//                 </main>
//               </div>
//               {/* <div className="container">
//                 <div className="home_header latest_header">
//                   <h1>Explore</h1>
//                   <div className="menu_sec">
//                     <Listmenusec />
//                   </div>
//                 </div>

//                 <main className="main-secton-prifieme">
//                   <ul class="nav nav-tabs">
//                     <li>
//                       <a data-toggle="tab" href="#Public" className="active">
//                         Public
//                       </a>
//                     </li>
//                     <li>
//                       <a data-toggle="tab" href="#Private">
//                         Private
//                       </a>
//                     </li>
//                   </ul>

//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div class="tab-content explore_section profile-page_comp collectojsdf">
//                         <div id="Public" class="tab-pane fade in active show">
//                           <div className="heading_titile_new">
//                             <h3>Fine Arts</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                           <div className="heading_titile_new">
//                             <h3>3D Arts</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                           <div className="heading_titile_new">
//                             <h3>Paintings</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                         <div id="Private" class="tab-pane fade">
//                           <div className="heading_titile_new">
//                             <h3>Fine Arts</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                           <div className="heading_titile_new">
//                             <h3>3D Arts</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                           <div className="heading_titile_new">
//                             <h3>Paintings</h3>
//                             <Link to="">View All</Link>
//                           </div>
//                           <div className="container_gidee">
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                             <Link to="" className="collecton_caesd">
//                               <img
//                                 src={
//                                   require("../image/newimg/collects.png")
//                                     .default
//                                 }
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </main>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React, { useState, useEffect } from "react";
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import Listmenusec from "./Innernenu";
import verifyIcon from "../image/newimg/uil_comment-verify.png";

/* =======================
   DUMMY COLLECTION DATA
======================= */

const dummyCollections = [
  {
    collectionId: "1",
    network: "ethereum",
    name: "Crypto Art Club",
    image: "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png",
    user_id: {
      username: "ArtistOne",
      kycstatus: 1
    }
  },
  {
    collectionId: "2",
    network: "polygon",
    name: "Meta Pixels",
    image: "https://fivmagazine.com/wp-content/uploads/2022/04/nft-non-fungible-token-token-collection-bored-ape-yacht-club-example-army-monkey.jpg",
    user_id: {
      username: "PixelKing",
      kycstatus: 0
    }
  },
  {
    collectionId: "3",
    network: "bsc",
    name: "Future Worlds",
    image: "https://www.thedigitalspeaker.com/content/images/2022/07/Five-NFT-Challenges.webp",
    user_id: {
      username: "FutureDAO",
      kycstatus: 1
    }
  },
  {
    collectionId: "4",
    network: "ethereum",
    name: "Digital Legends",
    image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?semt=ais_hybrid&w=740&q=80",
    user_id: {
      username: "LegendNFT",
      kycstatus: 0
    }
  },
    {
    collectionId: "1",
    network: "ethereum",
    name: "Crypto Art Club",
    image: "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png",
    user_id: {
      username: "ArtistOne",
      kycstatus: 1
    }
  },
  {
    collectionId: "2",
    network: "polygon",
    name: "Meta Pixels",
    image: "https://fivmagazine.com/wp-content/uploads/2022/04/nft-non-fungible-token-token-collection-bored-ape-yacht-club-example-army-monkey.jpg",
    user_id: {
      username: "PixelKing",
      kycstatus: 0
    }
  },
  {
    collectionId: "3",
    network: "bsc",
    name: "Future Worlds",
    image: "https://www.thedigitalspeaker.com/content/images/2022/07/Five-NFT-Challenges.webp",
    user_id: {
      username: "FutureDAO",
      kycstatus: 1
    }
  },
  {
    collectionId: "4",
    network: "ethereum",
    name: "Digital Legends",
    image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?semt=ais_hybrid&w=740&q=80",
    user_id: {
      username: "LegendNFT",
      kycstatus: 0
    }
  },
    {
    collectionId: "1",
    network: "ethereum",
    name: "Crypto Art Club",
    image: "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png",
    user_id: {
      username: "ArtistOne",
      kycstatus: 1
    }
  },
  {
    collectionId: "2",
    network: "polygon",
    name: "Meta Pixels",
    image: "https://fivmagazine.com/wp-content/uploads/2022/04/nft-non-fungible-token-token-collection-bored-ape-yacht-club-example-army-monkey.jpg",
    user_id: {
      username: "PixelKing",
      kycstatus: 0
    }
  },
  {
    collectionId: "3",
    network: "bsc",
    name: "Future Worlds",
    image: "https://www.thedigitalspeaker.com/content/images/2022/07/Five-NFT-Challenges.webp",
    user_id: {
      username: "FutureDAO",
      kycstatus: 1
    }
  },
  {
    collectionId: "4",
    network: "ethereum",
    name: "Digital Legends",
    image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?semt=ais_hybrid&w=740&q=80",
    user_id: {
      username: "LegendNFT",
      kycstatus: 0
    }
  }
];

function Home() {
  const navigate = useNavigate();

  const [allCollection, setallCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, settotal] = useState(0);

  /* =======================
     LOAD DUMMY DATA
  ======================= */
  useEffect(() => {
    setallCollection(dummyCollections);
    settotal(dummyCollections.length);
  }, []);

  return (
    <div id="wrapper" className="d-flex">
      <div
        className="border-end bg-white collapse navbar-collapse"
        id="sidebar-wrapper"
      >
        <Sideber />
      </div>

      <div id="page-content-wrapper">
        <Header />

        <div className="container">
          <div className="home_header latest_header">
            <h1>Collections</h1>
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
                      {allCollection.length > 0 ? (
                        allCollection.map((item, i) => (
                          <div
                            key={i}
                            className="col-xl-2 col-lg-3 col-6 col-ac w-auto"
                            onClick={() =>
                              navigate(
                                `/collection/nfts/${item.collectionId}/${item.network}`
                              )
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
                                  {item.user_id.username}
                                  {item.user_id.kycstatus === 1 && (
                                    <img
                                      src={verifyIcon}
                                      alt="verified"
                                      className="ms-1"
                                    />
                                  )}
                                </span>
                              </p>

                              <h5>{item.name}</h5>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-lg-12 text-center">
                          <p>No Data Found</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination disabled for dummy data */}
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

export default Home;
