import React, { useEffect } from "react";
import useState from 'react-usestateref';
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import Twitter from "../image/twitter.svg";
import Plane from "../image/plane.svg";
import News from "../image/new_ww.svg";
import NFT from "../image/nft_new.svg";
import games from "../image/games.svg";
import defi from "../image/defi.svg";
import { Link } from "react-router-dom";

import inter from "../image/internet.svg";
import geometryImage from "../image/newimg/geomatry.png";
import imaeg from "../image/newimg/uil_comment-verify.png";
import maticImage from "../image/newimg/matic.png";
import eth from "../image/newimg/eth.png"

import Token1 from "../image/toker1.png";
import { Button } from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { toastAlert } from "../lib/toastAlert";
import Moment from "moment";
import { useNavigate } from 'react-router-dom';
import { env } from "../service/envConfig";
import Pagination from "react-js-pagination";

const Completionist = () => <span></span>;


// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="timer-sect">
        <span>{days}d</span> :<span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
      </div>
    );
  }
};

function Home() {
  const navigate = useNavigate();
  const [userDatas, setUserDatas] = useState("");
  const [Nfts, setNfts, Nftsref] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const userWallet = localStorage.getItem("walletAddress");
  const [liked_nfts, setLiked, liked_nftsref] = useState("");
  const [collection_info, setCollection, collection_inforef] = useState("");
  const [fav_id, setFav_id, fav_idref] = useState("");
  const [fav_status, setFav_status, fav_statusref] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [total, settotal] = useState(0);
  const [perpage, setperpage] = useState(12);
  const [collection_id, setcollection_id, collection_idref] = useState("");

  useEffect(() => {
    var collectionID = window.location.href.split("/")[5];
    console.log("collectionID===", collectionID);
    setcollection_id(collectionID);
    getProfile();
    getNFTS(collectionID, 1);
  }, [0]);

  const getProfile = async () => {
    try {
      var data = {
        apiUrl: apiService.getProfile,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        setUserDatas(resp.Message);
        // console.log(resp, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      } else {
      }
    } catch (error) { }
  };

  const recordPerPage = 12;
  const pageRange = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getNFTS(collection_idref.current, pageNumber);
  };

  const getNFTS = async (collectionId, page) => {
    try {
      var data = {
        apiUrl: apiService.getcollectionNFTS,
        payload: {
          collectionId: collectionId, perpage: perpage,
          page: page
        }
      };
      var resp = await postMethod(data);
      if (resp.status) {
        setNfts(resp.data);
        setLiked(resp.liked_nfts);
        setCollection(resp.collection_info);
        settotal(resp.total);
        //console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      } else {
      }
    } catch (error) { }
  };

  const copy = async (text) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    navigator.clipboard.writeText(text);
    toastAlert("success", "Address copied");
  };

  // const formatDate = (dateval) => {
  //   try {
  //     var [dateValues, timeValues] = dateval.split(' ');
  //     var [day, month, year] = dateValues.split('-');
  //     var [hours, minutes, seconds] = timeValues.split(':');
  //     var formatDate = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
  //     var time_converted = formatDate.getTime();
  //     return +time_converted;
  //   } catch (error) {
  //     console.log("catch formatdate====",error);
  //   }
  // }

  const formatDate = (dateval) => {
    try {
      var date_val = new Date(dateval);
      var time_converted = date_val.getTime();
      return +time_converted;

    } catch (error) {
      console.log("catch formatdate====", error);
    }
  }

  const favorite = async (nft_id, action) => {
    try {
      setFav_id(nft_id);
      if (action == "add") {
        setFav_status("active")
      }
      else {
        setFav_status("deactive")
      }
      var data = {
        apiUrl: apiService.favoriteAction,
        payload: { nft_id: nft_id }
      };
      var resp = await postMethod(data);
      console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      if (resp.status) {
        //getNFTS();
        setLiked(resp.liked_nfts);
      } else {
      }
    } catch (error) { }
  };

  return (
    <div>
      <div id="wrapper" className="d-flex">
        {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
        <div
          className="border-end bg-white collapse navbar-collapse "
          id="sidebar-wrapper"
        >
          <Sideber />
        </div>
        <div id="page-content-wrapper">
          <Header />

          <div>
            <div>
              <div className="container">
                <div className="home_header latest_header">
                  <h1>Explore</h1>
                  <div className="menu_sec">
                    <Listmenusec />
                  </div>
                </div>

                <main className="main-secton-prifieme">
                  {collection_inforef.current && collection_inforef.current != "" ? (
                    <div className="collectilo_name">
                      {/* <img
                    src={
                      require("../image/newimg/geomatry.png")
                        .default
                    }
                    className=""
                  /> */}
                      <img
                        src={collection_inforef.current.image}
                        className=""
                        alt=""
                      />
                      <h2>{collection_inforef.current.name}</h2>
                      <p>{collection_inforef.current.description}</p>
                      <a href="">{collection_inforef.current.short_url}</a>
                      <span>Share:
                        {/* <i
                              class="bi bi-share"
                              
                            ></i> */}
                        <div className="like-share">
                          <div class="dropdown share_posyiirre">
                            <div
                              class="bi bi-share"
                              type="button"
                              data-toggle="dropdown"
                              onClick={() => setIsOpen(true)}
                            >
                              <span class="caret"></span>
                            </div>
                            {isOpen && (
                              <ul class="dropdown-menu">
                                <li>
                                  <a
                                    class="bi bi-facebook"
                                    href={`https://www.facebook.com/sharer/sharer.php?u=` + env.frontUrl + 'collection/nfts/' + window.location.href.split("/")[5] + '/' + collection_inforef.current.network + '?img=' + collection_inforef.current.image}
                                    target="_blank"
                                  >
                                    Facebook
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="bi bi-twitter"
                                    href={`https://twitter.com/intent/tweet?text=Checkout this item on Fantically&url=` + env.frontUrl + 'collection/nfts/' + window.location.href.split("/")[5] + '/' + collection_inforef.current.network}
                                    target="_blank"
                                  >
                                    Twitter
                                  </a>
                                </li>
                              </ul>
                            )}
                          </div>
                          <span>
                          </span>
                        </div>
                      </span>
                    </div>
                  ) : ("")}

                  {/* <ul class="nav nav-tabs">
                    <li>
                      <a data-toggle="tab" href="#Normal" className="active">
                        Normal
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Premium">
                        Premium
                      </a>
                    </li>
                  </ul> */}

                  <div className="row">
                    <div className="col-lg-12">
                      <div class="tab-content explore_section profile-page_comp">
                        <div id="Normal" class="tab-pane fade in active show">
                          <div className="collumn_new_s">
                            <div className="row">
                              {Nftsref.current.length > 0 ? (
                                Nftsref.current.map((item, i) => {
                                  // var like_users = [];
                                  // for (var j = 0; j < item.likes.length; j++) {
                                  //   like_users.push(
                                  //     item.likes[j].wallet_address
                                  //   );
                                  // }
                                  var filetype_nft = item.cloudUrl.split(".").pop().trim();
                                  return (
                                    <div className="col-lg-3">
                                      <div className="card-Trending ">
                                        <div className="positionreel">

                                          {" "}
                                          {item.auction_type == "timed" && item.onAuction == 1 && formatDate(item.Bidenddate) >= new Date().getTime() ?
                                            (
                                              <div className="countown">
                                                <Countdown
                                                  date={formatDate(item.Bidstartdate) + (+item.BidTime * 1000)}
                                                  //date={Date.now() + +item.BidTime}
                                                  renderer={renderer}
                                                />
                                              </div>
                                            )
                                            :
                                            ("")
                                          }


                                          {/* <Link to={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea"> */}
                                          <a href={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea">
                                            {item &&
                                              (filetype_nft == "png" || filetype_nft == "jpg" || filetype_nft == "gif" || filetype_nft == "svg" || filetype_nft == "webp" || filetype_nft == "jpeg") ? (
                                              <img
                                                src={item.cloudUrl}
                                                className=""
                                                alt=""
                                              />
                                            ) : filetype_nft == "mp3" || filetype_nft == "ogg" ? (
                                              <>
                                                <div className="audio_player_new">
                                                  <audio width="100%" height="300" controls controlsList="nodownload">
                                                    <source src={item.cloudUrl} />
                                                  </audio>
                                                  <img
                                                    src={geometryImage}
                                                    className="" alt="" />
                                                </div>


                                              </>

                                            ) : filetype_nft == "mp4" || filetype_nft == "webm" || filetype_nft == "wav" ? (
                                              <video width="100%" height="200" controls controlsList="nodownload">
                                                <source src={item.cloudUrl} />
                                              </video>
                                            ) : ("")
                                            }
                                            {/* </Link> */}
                                          </a>

                                          {/* {item.onAuction == 1 && formatDate(item.Bidenddate) >= new Date().getTime() ?
                                          (
                                            <div className="byebtn">
                                              <button onClick={()=> navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
                                            </div>
                                          )
                                          :
                                          ("")
                                        } */}

                                          {item.onAuction == 1 && item.auction_type == "timed" && formatDate(item.Bidenddate) >= new Date().getTime() ?
                                            (
                                              <div className="byebtn">
                                                <button onClick={() => window.location.href = `/NFTDetails/${item.txHash}/${item.network}`}>Place Bid</button>
                                              </div>
                                            )
                                            :
                                            ("")
                                          }

                                          {item.onAuction == 1 && item.auction_type == "unlimited" && (item.BidendTime * 1000) >= new Date().getTime() ?
                                            (
                                              <div className="byebtn">
                                                <button onClick={() => window.location.href = `/NFTDetails/${item.txHash}/${item.network}`}>Place Bid</button>
                                              </div>
                                            )
                                            :
                                            ("")
                                          }

                                        </div>
                                        <p>
                                          {item.user_id != null ? (
                                            <span className="name_item">
                                              {item.user_id.username}
                                              {item.user_id.kycstatus == 1 ? (
                                                <img
                                                  src={imaeg}
                                                  className=""
                                                  alt=""
                                                />
                                              )
                                                :
                                                (<img
                                                  src={imaeg}
                                                  className=""
                                                  alt=""

                                                />)
                                              }

                                            </span>
                                          ) : ("")}

                                          <span className="liks"> {item.likes ? item.likes.length : 0}{" "} Likes</span>
                                        </p>
                                        <h5>{item.Name}</h5>
                                        {/* <div className="currencyc">
                                        <small>Current Bid</small>
                                        <span>
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          10.01<small>ETH</small>
                                        </span>
                                      </div> */}

                                        {item.onSale == 1 ? (
                                          <div className="currencyc">
                                            <small>Price</small>
                                            <span>
                                              {item.network == 'matic' ? (
                                             
                                                <img
                                                  src={maticImage}
                                                className=""
                                                alt=""
                                                />

                                              ) : (
                                                <img
                                                  src={
                                                    eth
                                                  }
                                                className=""
                                                alt=""
                                                />
                                              )}
                                              {item.Price}<small>{item.network}</small>
                                            </span>
                                          </div>
                                        ) : ("")}

                                        {item.onAuction == 1 ? (
                                          <div className="currencyc">
                                            <small>Current Bid</small>
                                            <span>
                                              {item.network == 'matic' ? (
                                                <img
                                                  src={
                                                    maticImage
                                                  }
                                                  className=""
                                                  alt=""
                                                />

                                              ) : (
                                                <img
                                                  src={
                                                    eth
                                                  }
                                                    className=""
                                                    alt=""
                                                />
                                              )}
                                              {item.Bidprice}<small>{item.network}</small>
                                            </span>
                                          </div>
                                        ) : ("")}
                                        <div className="share_sec d-flex">
                                          <div className="like-share">
                                            <span>
                                              {liked_nftsref.current.length > 0 &&
                                                liked_nftsref.current.includes(
                                                  item._id
                                                ) ? (

                                                <i
                                                  className={fav_idref.current.toString() == item._id.toString() && fav_statusref.current == "deactive" ? "bi bi-suit-heart" : "bi bi-suit-heart-fill"}
                                                  onClick={() => favorite(`${item._id}`, 'remove')}
                                                ></i>
                                              ) : (
                                                <i
                                                  className={fav_idref.current.toString() == item._id.toString() && fav_statusref.current == "active" ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"}
                                                  onClick={() => favorite(`${item._id}`, 'add')}
                                                ></i>
                                              )}
                                            </span>
                                          </div>
                                          <div className="like-share">
                                            <div class="dropdown">
                                              <div
                                                class="bi bi-share"
                                                type="button"
                                                data-toggle="dropdown"
                                                onClick={() => setIsOpen(true)}
                                              >
                                                <span class="caret"></span>
                                              </div>
                                              {isOpen && (
                                                <ul class="dropdown-menu">
                                                  <li>
                                                    <a
                                                      class="bi bi-facebook"
                                                      href={`https://www.facebook.com/sharer/sharer.php?u=` + env.frontUrl + 'NFTDetails/' + item.txHash}
                                                      target="_blank"
                                                    >
                                                      Facebook
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      class="bi bi-twitter"
                                                      href={`https://twitter.com/intent/tweet?text=Checkout this item on Fantically&url=` + env.frontUrl + 'NFTDetails/' + item.txHash}
                                                      target="_blank"
                                                    >
                                                      Twitter
                                                    </a>
                                                  </li>
                                                </ul>
                                              )}
                                            </div>
                                            <span>
                                              {/* <i
                                              class="bi bi-share"
                                              // onClick={() => setIsOpen(true)}
                                            ></i> */}

                                              {/* {isOpen && ( */}
                                              {/* <ul class="social-links"> */}
                                              {/*<a class="bi bi-facebook" href={`https:facebook.com/sharer/sharer.php?href=${fronthost}/NFTDetails/${item.txHash}/${item.network}` } >Share on facebook</a>
                                             */}
                                              {/* <div> */}

                                              {/* <a
                                                    class="fab fa-facebook-f"
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopensea.io%2Fassets%2Farbitrum%2F0xfae39ec09730ca0f14262a636d2d7c5539353752%2F344448%2F`}
                                                  >
                                                    ShareOn FaceBook
                                                  </a> */}
                                              {/* </div> */}
                                              {/* <div><a class="bi bi-instagram" href={`https://www.instagram.com/?url=${fronthost}/NFTDetails/${item.txHash}/${item.network}` } >Share on instagram</a></div> */}
                                              {/* <div>
                                                  
                                                  <a
                                                    class="fab fa-twitter"
                                                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20item%20on%20OpenSea&url=https%3A%2F%2Fopensea.io%2Fassets%2Farbitrum%2F0xfae39ec09730ca0f14262a636d2d7c5539353752%2F344448%2F&via=opensea`}
                                                  >
                                                    ShareOn Twitter
                                                  </a>
                                                </div> */}
                                              {/* </ul> */}
                                              {/* )} */}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              ) : (
                                <div className="col-lg-3">No Datas found</div>
                              )
                              }
                              {/* <div className="col-lg-3">
                                <div className="card-Trending ">
                                  <div className="positionreel">
                                    <div className="countown">
                                      {" "}
                                      <Countdown
                                        date={Date.now() + 1212122000}
                                        renderer={renderer}
                                      />
                                    </div>
                                    <Link to="" className="imgconyeea">
                                      <img
                                        src={
                                          require("../image/newimg/geomatry.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </Link>

                                    <div className="byebtn">
                                      <button>Place Bid</button>
                                    </div>
                                  </div>
                                  <p>
                                    <span className="name_item">
                                      Geometry
                                      <img
                                        src={
                                          require("../image/newimg/uil_comment-verify.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </span>

                                    <span className="liks">140 Likes</span>
                                  </p>
                                  <h5>Georunners</h5>
                                  <div className="currencyc">
                                    <small>Current Bid</small>
                                    <span>
                                      <img
                                        src={
                                          require("../image/newimg/eth.png")
                                            .default
                                        }
                                        className=""
                                      />
                                      10.01<small>ETH</small>
                                    </span>
                                  </div>
                                  <div className="like-share">
                                    <span>
                                      <i class="bi bi-share"></i>
                                    </span>
                                    <span>
                                      <i class="bi bi-suit-heart"></i>
                                    </span>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        {/* <div id="Premium" class="tab-pane fade">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="card-Trending ">
                                <div className="positionreel">
                                  <div className="countown">
                                    {" "}
                                    <Countdown
                                      date={Date.now() + 1212122000}
                                      renderer={renderer}
                                    />
                                  </div>
                                  <Link to="" className="imgconyeea">
                                    <img
                                      src={
                                        require("../image/newimg/geomatry.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>

                                  <div className="byebtn justify-content-between">
                                    <div className="prmium_img">
                                      <img
                                        src={
                                          require("../image/newimg/premium.png")
                                            .default
                                        }
                                        className=""
                                      />
                                    </div>
                                    <button>Place Bid</button>
                                  </div>
                                </div>
                                <p>
                                  <span className="name_item">
                                    Geometry
                                    <img
                                      src={
                                        require("../image/newimg/uil_comment-verify.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </span>

                                  <span className="liks">140 Likes</span>
                                </p>
                                <h5>Georunners</h5>
                                <div className="currencyc">
                                  <small>Current Bid</small>
                                  <span>
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01<small>ETH</small>
                                  </span>
                                </div>
                                <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                    <i class="bi bi-suit-heart"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="col-lg-12 collumn_new_s justify-content-center d-flex">
                      {Nftsref.current.length > 0 ? (
                        <Pagination
                          itemClass="page-item"
                          linkClass="page-link"
                          activePage={currentPage}
                          itemsCountPerPage={recordPerPage}
                          totalItemsCount={total}
                          pageRangeDisplayed={pageRange}
                          onChange={handlePageChange}
                        />
                      ) : ("")}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
