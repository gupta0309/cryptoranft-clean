// // import React, { useEffect } from "react";
// // import useState from 'react-usestateref';
// // import Sideber from "./Sidebar";
// // import Header from "./Headerafterlogin";
// // import Twitter from "../image/twitter.svg";
// // import Plane from "../image/plane.svg";
// // import News from "../image/new_ww.svg";
// // import NFT from "../image/nft_new.svg";
// // import games from "../image/games.svg";
// // import defi from "../image/defi.svg";
// // import { Link } from "react-router-dom";

// // import inter from "../image/internet.svg";
// // import geomatry from "../image/newimg/geomatry.png"
// // import uil_comment from "../image/newimg/uil_comment-verify.png"
// // // import matic from "../image/newimg/matic.png"
// // import matic from "../image/newimg/icon_1.png"
// // import eth from "../image/newimg/eth.png"

// // import Token1 from "../image/toker1.png";
// // import { Button } from "@material-ui/core";
// // import Listmenusec from "./Innernenu";
// // import Countdown from "react-countdown";

// // import { postMethod } from "../service/api";
// // import { getMethod } from "../service/api";
// // import apiService from "../service/serviceUrl";
// // import { toastAlert } from "../lib/toastAlert";
// // import Moment from "moment";
// // import { useNavigate } from 'react-router-dom';
// // import { env } from "../service/envConfig";
// // import { useLocation } from "react-router-dom";
// // import Pagination from "react-js-pagination";

// // const Completionist = () => <span></span>;
// // const userWallet = localStorage.getItem("walletAddress");


// // // Renderer callback with condition
// // const renderer = ({ days, hours, minutes, seconds, completed }) => {
// //   if (completed) {
// //     // Render a complete state
// //     return <Completionist />;
// //   } else {
// //     // Render a countdown
// //     return (
// //       <div className="timer-sect">
// //         <span>{days}d</span> :<span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
// //       </div>
// //     );
// //   }
// // };

// // function Home() {

// //   const navigate = useNavigate();
// //   const [userDatas, setUserDatas] = useState("");
// //   const [Nfts, setNfts, Nftsref] = useState("");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [liked_nfts, setLiked, liked_nftsref] = useState("");
// //   const [Category, setCategory, Categoryref] = useState("");
// //   const nfttype = (localStorage.getItem("nft_type") != undefined) ? localStorage.getItem("nft_type") : "";
// //   const nftnetwork = (localStorage.getItem("nft_network") != undefined) ? localStorage.getItem("nft_network") : "";
// //   const [nft_type, setnft_type, nft_typeref] = useState(nfttype.toLocaleLowerCase());
// //   const [nft_network, setnft_network, nft_networkref] = useState(nftnetwork.toLocaleLowerCase());
// //   const [fav_id, setFav_id, fav_idref] = useState("");
// //   const [fav_status, setFav_status, fav_statusref] = useState("");
// //   const [nft_limit, setLimit] = useState(12);
// //   const [nft_inc, setIncrement] = useState(0);
// //   const [nft_count, setNft_count, nft_countref] = useState(0);
// //   const [loading, setLoading, loadingrfef] = useState(false);
// //   const [total_nft, settotalnft, total_nftref] = useState(0);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [total, settotal] = useState(0);
// //   const [perpage, setperpage] = useState(12);

// //   useEffect(() => {
// //     getProfile();
// //     // getNFTS(nft_limit,nft_inc);
// //     getNFTS(1);
// //     var category = window.location.href.split("=")[1];
// //     if (category != "" && category != null) {
// //       category = category.replace("%20", " ");
// //       setCategory(category);
// //       console.log("category===", Categoryref.current);
// //     }
// //     console.log("nft_typeref", nft_typeref.current)
// //     console.log("nft_network", nft_networkref.current)
// //   }, [0]);

// //   const getProfile = async () => {
// //     try {
// //       var data = {
// //         apiUrl: apiService.getProfile,
// //       };
// //       var resp = await getMethod(data);
// //       if (resp.status) {
// //         setUserDatas(resp.Message);
// //         // console.log(resp, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
// //       } else {
// //       }
// //     } catch (error) { }
// //   };

// //   // const getNFTS = async (limit,nft_inc) => {
// //   //   try {
// //   //     setLoading(true);
// //   //     var page_limit = limit + nft_inc;
// //   //     setNft_count(page_limit);
// //   //     var data = {
// //   //       apiUrl: apiService.getNFTS,
// //   //       payload: {limit:+page_limit}
// //   //     };
// //   //     var resp = await postMethod(data);
// //   //     if (resp.status) {
// //   //       setLoading(false);
// //   //       setNfts(resp.data);
// //   //       setLiked(resp.liked_nfts);
// //   //       settotalnft(resp.countNFTS);
// //   //       if(nft_typeref.current != "" || nft_networkref.current != "")
// //   //       {
// //   //         // const filteredData =  resp.data.filter((str)=>{
// //   //         //   return str.category.toLowerCase().indexOf(Categoryref.current.toLowerCase()) >= 0;
// //   //         // });
// //   //         // setNfts(filteredData);

// //   //         if(nft_typeref.current != "")
// //   //         {
// //   //           console.log("type filter")
// //   //           const filteredData =  resp.data.filter((str)=>{
// //   //             //return str.NFTtype.toLowerCase().indexOf(nft_typeref.current.toLowerCase()) >= 0;
// //   //             return str.NFTtype.toLowerCase() == nft_typeref.current.toLowerCase()
// //   //           });
// //   //           setNfts(filteredData);
// //   //         }
// //   //         if(nft_networkref.current != "")
// //   //         {
// //   //           console.log("network filter")
// //   //           const filteredData =  resp.data.filter((str)=>{
// //   //             //return str.network.toLowerCase().indexOf(nft_networkref.current.toLowerCase()) >= 0;
// //   //             return str.network.toLowerCase() == nft_networkref.current.toLowerCase()
// //   //           });
// //   //           setNfts(filteredData);
// //   //         }
// //   //         if(nft_typeref.current != "" && nft_networkref.current != "")
// //   //         {
// //   //           console.log("type and network filter")
// //   //           const filteredData =  resp.data.filter((str)=>{
// //   //             return str.network.toLowerCase() == nft_networkref.current.toLowerCase() && str.NFTtype.toLowerCase() == nft_typeref.current.toLowerCase() });
// //   //           setNfts(filteredData);
// //   //         }

// //   //       }
// //   //       else
// //   //       {
// //   //         setNfts(resp.data);
// //   //         setLiked(resp.liked_nfts);
// //   //       }


// //   //       if(Categoryref.current != "")
// //   //       {
// //   //          const filteredData =  resp.data.filter((str)=>{
// //   //             return str.category.toLowerCase().indexOf(Categoryref.current.toLowerCase()) >= 0;
// //   //           });
// //   //           setNfts(filteredData);
// //   //       }
// //   //       console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
// //   //     } else {
// //   //     }
// //   //   } catch (error) {}
// //   // };

// //   const recordPerPage = 12;
// //   const pageRange = 3;

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //     getNFTS(pageNumber);
// //   };

// //   const getNFTS = async (page) => {
// //     try {
// //       var obj = {
// //         perpage: perpage,
// //         page: page,
// //       };
// //       var data = {
// //         apiUrl: apiService.getNFTS,
// //         payload: obj
// //       };
// //       var resp = await postMethod(data);
// //       if (resp.status) {
// //         setNfts(resp.data);
// //         setLiked(resp.liked_nfts);
// //         settotal(resp.total);
// //         if (nft_typeref.current != "" || nft_networkref.current != "") {
// //           // const filteredData =  resp.data.filter((str)=>{
// //           //   return str.category.toLowerCase().indexOf(Categoryref.current.toLowerCase()) >= 0;
// //           // });
// //           // setNfts(filteredData);

// //           if (nft_typeref.current != "") {
// //             console.log("type filter")
// //             const filteredData = resp.data.filter((str) => {
// //               //return str.NFTtype.toLowerCase().indexOf(nft_typeref.current.toLowerCase()) >= 0;
// //               return str.NFTtype.toLowerCase() == nft_typeref.current.toLowerCase()
// //             });
// //             setNfts(filteredData);
// //           }
// //           if (nft_networkref.current != "") {
// //             console.log("network filter")
// //             const filteredData = resp.data.filter((str) => {
// //               //return str.network.toLowerCase().indexOf(nft_networkref.current.toLowerCase()) >= 0;
// //               return str.network.toLowerCase() == nft_networkref.current.toLowerCase()
// //             });
// //             setNfts(filteredData);
// //           }
// //           if (nft_typeref.current != "" && nft_networkref.current != "") {
// //             console.log("type and network filter")
// //             const filteredData = resp.data.filter((str) => {
// //               return str.network.toLowerCase() == nft_networkref.current.toLowerCase() && str.NFTtype.toLowerCase() == nft_typeref.current.toLowerCase()
// //             });
// //             setNfts(filteredData);
// //           }

// //         }
// //         else {
// //           setNfts(resp.data);
// //           setLiked(resp.liked_nfts);
// //         }


// //         if (Categoryref.current != "") {
// //           const filteredData = resp.data.filter((str) => {
// //             return str.category.toLowerCase().indexOf(Categoryref.current.toLowerCase()) >= 0;
// //           });
// //           setNfts(filteredData);
// //         }
// //         console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
// //       } else {
// //       }
// //     } catch (error) { }
// //   };

// //   const findNFTS = async (filter) => {
// //     try {
// //       var data = {
// //         apiUrl: apiService.findNFTS,
// //         payload: {}
// //       };
// //       var resp = await postMethod(data);
// //       if (resp.status) {
// //         setNfts(resp.data);
// //         setLiked(resp.liked_nfts);
// //       } else {
// //       }
// //     } catch (error) { }
// //   };

// //   const copy = async (text) => {
// //     console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
// //     navigator.clipboard.writeText(text);
// //     toastAlert("success", "Address copied");
// //   };

// //   // const formatDate = (dateval) => {
// //   //   try {
// //   //     var [dateValues, timeValues] = dateval.split(' ');
// //   //     var [day, month, year] = dateValues.split('-');
// //   //     var [hours, minutes, seconds] = timeValues.split(':');
// //   //     var formatDate = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
// //   //     var time_converted = formatDate.getTime();
// //   //     return +time_converted;
// //   //   } catch (error) {
// //   //     console.log("catch formatdate====",error);
// //   //   }
// //   // }

// //   const formatDate = (dateval) => {
// //     try {
// //       var date_val = new Date(dateval);
// //       var time_converted = date_val.getTime();
// //       return +time_converted;

// //     } catch (error) {
// //       console.log("catch formatdate====", error);
// //     }
// //   }

// //   const favorite = async (nft_id, action) => {
// //     try {
// //       setFav_id(nft_id);
// //       if (action == "add") {
// //         setFav_status("active")
// //       }
// //       else {
// //         setFav_status("deactive")
// //       }
// //       var data = {
// //         apiUrl: apiService.favoriteAction,
// //         payload: { nft_id: nft_id }
// //       };
// //       var resp = await postMethod(data);
// //       console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
// //       if (resp.status) {
// //         //getNFTS();
// //         setLiked(resp.liked_nfts);
// //       } else {
// //       }
// //     } catch (error) { }
// //   };

// //   return (
// //     <div>
// //       <div id="wrapper" className="d-flex">
// //         {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
// //         <div
// //           className="border-end bg-white collapse navbar-collapse "
// //           id="sidebar-wrapper"
// //         >
// //           <Sideber />
// //         </div>
// //         <div id="page-content-wrapper">
// //           <Header />

// //           <div>
// //             <div>
// //               <div className="container">
// //                 <div className="home_header latest_header">
// //                   <h1>Explore</h1>
// //                   <div className="menu_sec">
// //                     <Listmenusec />
// //                   </div>
// //                 </div>

// //                 <main className="main-secton-prifieme">
// //                   {/* <ul class="nav nav-tabs">
// //                     <li>
// //                       <a data-toggle="tab" href="#Normal" className="active">
// //                         Normal
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a data-toggle="tab" href="#Premium">
// //                         Premium
// //                       </a>
// //                     </li>
// //                   </ul> */}
// //                   <div className="row">
// //                     <div className="col-lg-12">
// //                       <div class="tab-content explore_section profile-page_comp">
// //                         <div id="Normal" class="tab-pane fade in active show">
// //                           <div className="collumn_new_s">
// //                             <div className="row">
// //                               {Nftsref.current.length > 0 ? (
// //                                 Nftsref.current.map((item, i) => {
// //                                   // var like_users = [];
// //                                   // for (var j = 0; j < item.likes.length; j++) {
// //                                   //   like_users.push(item.likes[j].wallet_address);
// //                                   // }
// //                                   var filetype_nft = item.cloudUrl.split(".").pop().trim();
// //                                   return (
// //                                     <>
// //                                       <div className="col-xl-2 col-lg-3 col-6 col-ac w-auto">
// //                                         <div className="card-Trending ">
// //                                           <div className="positionreel">

// //                                             {" "}
// //                                             {item.auction_type == "timed" && item.onAuction == 1 && formatDate(item.Bidenddate) >= new Date().getTime() ?
// //                                               (
// //                                                 <div className="countown">
// //                                                   <Countdown
// //                                                     date={formatDate(item.Bidstartdate) + (+item.BidTime * 1000)}
// //                                                     renderer={renderer}
// //                                                   />
// //                                                 </div>
// //                                               )
// //                                               :
// //                                               ("")
// //                                             }


// //                                             {/* <Link to={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea"> */}
// //                                             <a href={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea">
// //                                               {item &&
// //                                                 (filetype_nft == "png" || filetype_nft == "jpg" || filetype_nft == "gif" || filetype_nft == "svg" || filetype_nft == "webp" || filetype_nft == "jpeg") ? (
// //                                                 <img
// //                                                   alt=""
// //                                                   src={item.cloudUrl}
// //                                                   className=""
// //                                                 />
// //                                               ) : filetype_nft == "mp3" || filetype_nft == "ogg" ? (
// //                                                 <>
// //                                                   <div className="audio_player_new">
// //                                                     <audio width="100%" height="300" controls controlsList="nodownload">
// //                                                       <source src={item.cloudUrl} />
// //                                                     </audio>
// //                                                     <img
// //                                                       src={geomatry}
// //                                                       alt=""
// //                                                       className="" />
// //                                                   </div>


// //                                                 </>

// //                                               ) : filetype_nft == "mp4" || filetype_nft == "webm" || filetype_nft == "wav" ? (
// //                                                 <video width="100%" height="200" controls controlsList="nodownload">
// //                                                   <source src={item.cloudUrl} />
// //                                                 </video>
// //                                               ) : ("")
// //                                               }
// //                                             </a>
// //                                             {/* </Link> */}


// //                                             {item.onAuction == 1 && item.auction_type == "timed" && formatDate(item.Bidenddate) >= new Date().getTime() ?
// //                                               (
// //                                                 <div className="byebtn">
// //                                                   <button onClick={() => navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
// //                                                 </div>
// //                                               )
// //                                               :
// //                                               ("")
// //                                             }

// //                                             {item.onAuction == 1 && item.auction_type == "unlimited" && (item.BidendTime * 1000) >= new Date().getTime() ?
// //                                               (
// //                                                 <div className="byebtn">
// //                                                   <button onClick={() => navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
// //                                                 </div>
// //                                               )
// //                                               :
// //                                               ("")
// //                                             }

// //                                           </div>
// //                                           <p>
// //                                             <span className="name_item">
// //                                               {item.user_id.username}
// //                                               {item.user_id.kycstatus == 1 ? (


// //                                                 <img
// //                                                   src={
// //                                                     uil_comment
// //                                                   }
// //                                                   alt=""
// //                                                   className=""
// //                                                 />
// //                                               )
// //                                                 :
// //                                                 (<img
// //                                                   src={
// //                                                     uil_comment
// //                                                   }
// //                                                   alt=""
// //                                                   className=""
// //                                                 />)
// //                                               }

// //                                             </span>

// //                                             <span className="liks">{item.likes ? item.likes.length : 0} Likes</span>
// //                                           </p>
// //                                           <h5>{item.Name}</h5>
// //                                           {/* <div className="currencyc">
// //                                       <small>Current Bid</small>
// //                                       <span>
// //                                         <img
// //                                           src={
// //                                             require("../image/newimg/eth.png")
// //                                               .default
// //                                           }
// //                                           className=""
// //                                         />
// //                                         10.01<small>ETH</small>
// //                                       </span>
// //                                     </div> */}
// //                                           {item.onSale == 1 ? (
// //                                             <div className="currencyc">
// //                                               <small>Price</small>
// //                                               <span>
                                                
// //                                                 {item.network == 'Polygon' ? (
// //                                                   <img
// //                                                     src={
// //                                                       matic
// //                                                     }
// //                                                     alt=""
// //                                                     className=""
// //                                                   />

// //                                                 ) : (
// //                                                   <img
// //                                                     src={
// //                                                         eth
// //                                                     }
// //                                                       alt=""
// //                                                     className=""
// //                                                   />
// //                                                 )}
// //                                                 {item.Price}
// //                                                 {/* <small>{item.network}</small> */}
// //                                               </span>
// //                                             </div>
// //                                           ) : ("")}

// //                                           {item.onAuction == 1 ? (
// //                                             <div className="currencyc">
// //                                               <small>Bid</small>
// //                                               <span>
// //                                                 {item.network == 'Polygon' ? (
// //                                                   <img
// //                                                     src={
// //                                                       matic
// //                                                     }
// //                                                     alt=""
// //                                                     className=""
// //                                                   />

// //                                                 ) : (
// //                                                   <img
// //                                                     src={
// //                                                       eth
// //                                                     }
// //                                                       alt=""
// //                                                     className=""
// //                                                   />
// //                                                 )}
// //                                                 {item.Bidprice}
// //                                                 {/* <small>{item.network}</small> */}
// //                                               </span>
// //                                             </div>
// //                                           ) : ("")}
// //                                           <div className="share_sec d-flex">
// //                                             <div className="like-share">
// //                                               {/* <span>
// //                                         <i class="bi bi-share"></i>
// //                                       </span> */}
// //                                               <span>
// //                                                 {liked_nftsref.current.length > 0 &&
// //                                                   liked_nftsref.current.includes(
// //                                                     item._id
// //                                                   ) ? (

// //                                                   <i
// //                                                     className={fav_idref.current.toString() == item._id.toString() && fav_statusref.current == "deactive" ? "bi bi-suit-heart" : "bi bi-suit-heart-fill"}
// //                                                     onClick={() => favorite(`${item._id}`, 'remove')}
// //                                                   ></i>
// //                                                 ) : (
// //                                                   <i
// //                                                     className={fav_idref.current.toString() == item._id.toString() && fav_statusref.current == "active" ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"}
// //                                                     onClick={() => favorite(`${item._id}`, 'add')}
// //                                                   ></i>
// //                                                 )}
// //                                               </span>
// //                                             </div>
// //                                             <div className="like-share">
// //                                               <div class="dropdown">
// //                                                 <div
// //                                                   class="bi bi-share"
// //                                                   type="button"
// //                                                   data-toggle="dropdown"
// //                                                   onClick={() => setIsOpen(true)}
// //                                                 >
// //                                                   <span class="caret"></span>
// //                                                 </div>
// //                                                 {isOpen && (
// //                                                   <ul class="dropdown-menu">
// //                                                     <li>
// //                                                       <a
// //                                                         class="bi bi-facebook"
// //                                                         href={`https://www.facebook.com/sharer/sharer.php?u=` + env.frontUrl + 'NFTDetails/' + item.txHash}
// //                                                         target="blank"
// //                                                       >
// //                                                         Facebook
// //                                                       </a>
// //                                                     </li>
// //                                                     <li>
// //                                                       <a
// //                                                         class="bi bi-twitter"
// //                                                         href={`https://twitter.com/intent/tweet?text=Checkout this item on Fantically&url=` + env.frontUrl + 'NFTDetails/' + item.txHash}
// //                                                         target="blank"
// //                                                       >
// //                                                         Twitter
// //                                                       </a>
// //                                                     </li>
// //                                                   </ul>
// //                                                 )}
// //                                               </div>
// //                                               <span>
// //                                               </span>
// //                                             </div>
// //                                           </div>
// //                                         </div>
// //                                       </div>

// //                                     </>
// //                                   )
// //                                 })



// //                               ) : (
// //                                 <div className="col-lg-3">No Datas found</div>
// //                               )
// //                               }

// //                               {/* {total_nftref.current > nft_countref.current ? (
// //                           <div className="">
// //                             {loadingrfef.current == true ? (

// //                               <Button
// //                               className="signin-btn header_btn"
// //                               >
// //                               {" "}
// //                               <Link to="">Loading... </Link>
// //                               </Button>
// //                             ) : (

// //                               <Button
// //                               className="signin-btn header_btn"
// //                               onClick={() => getNFTS(nft_countref.current,12)}
// //                             >
// //                               {" "}
// //                               <Link to="">Load More </Link>
// //                             </Button>

// //                             )}
                            
// //                           </div>
// //                           ) : ("")} */}

// //                               {/* <div className="col-lg-3">
// //                               <div className="card-Trending ">
// //                                 <div className="positionreel">
// //                                   <div className="countown">
// //                                     {" "}
// //                                     <Countdown
// //                                       date={Date.now() + 1212122000}
// //                                       renderer={renderer}
// //                                     />
// //                                   </div>
// //                                   <Link to="" className="imgconyeea">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/geomatry.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </Link>

// //                                   <div className="byebtn">
// //                                     <button>Place Bid</button>
// //                                   </div>
// //                                 </div>
// //                                 <p>
// //                                   <span className="name_item">
// //                                     Geometry
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/uil_comment-verify.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </span>

// //                                   <span className="liks">140 Likes</span>
// //                                 </p>
// //                                 <h5>Georunners</h5>
// //                                 <div className="currencyc">
// //                                   <small>Current Bid</small>
// //                                   <span>
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/eth.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                     10.01<small>ETH</small>
// //                                   </span>
// //                                 </div>
// //                                 <div className="like-share">
// //                                   <span>
// //                                     <i class="bi bi-share"></i>
// //                                   </span>
// //                                   <span>
// //                                     <i class="bi bi-suit-heart"></i>
// //                                   </span>
// //                                 </div>
// //                               </div>
// //                             </div> */}
// //                             </div>
// //                           </div>
// //                         </div>
// //                         {/* <div id="Premium" class="tab-pane fade">
// //                         <div className="row">
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="col-lg-3">
// //                             <div className="card-Trending ">
// //                               <div className="positionreel">
// //                                 <div className="countown">
// //                                   {" "}
// //                                   <Countdown
// //                                     date={Date.now() + 1212122000}
// //                                     renderer={renderer}
// //                                   />
// //                                 </div>
// //                                 <Link to="" className="imgconyeea">
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/geomatry.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </Link>

// //                                 <div className="byebtn justify-content-between">
// //                                   <div className="prmium_img">
// //                                     <img
// //                                       src={
// //                                         require("../image/newimg/premium.png")
// //                                           .default
// //                                       }
// //                                       className=""
// //                                     />
// //                                   </div>
// //                                   <button>Place Bid</button>
// //                                 </div>
// //                               </div>
// //                               <p>
// //                                 <span className="name_item">
// //                                   Geometry
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/uil_comment-verify.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                 </span>

// //                                 <span className="liks">140 Likes</span>
// //                               </p>
// //                               <h5>Georunners</h5>
// //                               <div className="currencyc">
// //                                 <small>Current Bid</small>
// //                                 <span>
// //                                   <img
// //                                     src={
// //                                       require("../image/newimg/eth.png")
// //                                         .default
// //                                     }
// //                                     className=""
// //                                   />
// //                                   10.01<small>ETH</small>
// //                                 </span>
// //                               </div>
// //                               <div className="like-share">
// //                                 <span>
// //                                   <i class="bi bi-share"></i>
// //                                 </span>
// //                                 <span>
// //                                   <i class="bi bi-suit-heart"></i>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div> */}
// //                       </div>
// //                     </div>

// //                     <div className="col-lg-12 collumn_new_s justify-content-center d-flex">
// //                       {Nftsref.current.length > 0 ? (
// //                         <Pagination
// //                           itemClass="page-item"
// //                           linkClass="page-link"
// //                           activePage={currentPage}
// //                           itemsCountPerPage={recordPerPage}
// //                           totalItemsCount={total}
// //                           pageRangeDisplayed={pageRange}
// //                           onChange={handlePageChange}
// //                         />
// //                       ) : ("")}
// //                     </div>
// //                   </div>
// //                 </main>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;







// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import exploreDummyData from "../data/DummyExploredata";
// import nftimg1 from "../image/newimg/nft1 (1).png";


// const Explore = () => {
//   const [nfts, setNfts] = useState([]);
//   const [likedNfts, setLikedNfts] = useState([]);

//   const likedRef = useRef([]);

//   useEffect(() => {
//     likedRef.current = likedNfts;
//   }, [likedNfts]);

//   // ✅ LOAD DUMMY DATA ON PAGE LOAD
//   useEffect(() => {
//     setNfts(exploreDummyData);
//   }, []);

//   const likeNft = (item) => {
//     if (!item?.txHash) return;

//     const exists = likedRef.current.find(
//       (nft) => nft.txHash === item.txHash
//     );

//     if (exists) {
//       setLikedNfts(likedRef.current.filter(n => n.txHash !== item.txHash));
//     } else {
//       setLikedNfts([...likedRef.current, item]);
//     }
//   };

//   return (
//     <div className="explore_page">
//       <div className="container">
//         <div className="row">

//           {nfts.length === 0 && (
//             <p className="text-center">No Explore Data</p>
//           )}

//           {nfts.map((item, index) => {
//             const fileType =
//               typeof item?.cloudUrl === "string"
//                 ? item.cloudUrl.split(".").pop().toLowerCase()
//                 : "";

//             return (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
//                 <div className="nft_card">

//                   <Link
//                     to={`/NFTDetails/${item.txHash}/${item.network}`}
//                     className="imgconyeea"
//                   >
//                     <img
//                       src={nftimg1}
//                       alt={item.name}
//                       onError={(e) =>
//                         (e.target.src =
//                           "https://via.placeholder.com/300x300?text=NFT")
//                       }
//                     />
//                   </Link>

//                   <div className="nft_info">
//                     <h5>{item.name}</h5>
//                     <p>{item.description}</p>

//                     <button onClick={() => likeNft(item)}>
//                       {likedRef.current.find(
//                         nft => nft.txHash === item.txHash
//                       )
//                         ? "❤️ Liked"
//                         : "🤍 Like"}
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;


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
