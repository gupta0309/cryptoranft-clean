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

import geomatry from "../image/newimg/geomatry.png"
import africls from "../image/newimg/africls.png"
import uil_comment from "../image/newimg/uil_comment-verify.png"
// import matic from "../image/newimg/matic.png"
import matic from "../image/newimg/icon_1.png"
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
import { dummyDashboard } from "../data/Dummydata";
 

const Completionist = () => <span></span>;
const userWallet = localStorage.getItem("walletAddress");

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
  const [userDatas, setUserDatas] = useState("");
  const navigate = useNavigate();
  const [Nfts, setNfts, Nftsref] = useState("");
  const [Collections, setCollections, Collectionsref] = useState("");
  const [Artists, setArtists, Artistsref] = useState("");
  const [Notifications, setNotifications, Notificationsref] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [liked_nfts, setLiked, liked_nftsref] = useState("");

  useEffect(() => {
    getProfile();
    getDashboard();
    getNotifications();
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

  const copy = async (text) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    // navigator.clipboard.writeText(text);
    navigator['clipboard'].writeText(text);
    toastAlert("success", "Address copied");
  };


  // const getDashboard = async () => {
  //   try {
  //     var data = {
  //       apiUrl: apiService.getdashboard
  //     };
  //     var resp = await getMethod(data);
  //     console.log(resp.users, '=-=-=-=resp.users=-=-=-=');
  //     if (resp.status) {
  //       setNfts(resp.nfts);
  //       setCollections(resp.collections);
  //       setArtists(resp.users);
  //       setLiked(resp.liked_nfts);
  //     } else {
  //     }
  //   } catch (error) { }
  // };
const getDashboard = () => {
  setNfts(dummyDashboard.nfts);
  setCollections(dummyDashboard.collections);
  setArtists(dummyDashboard.users);
  setLiked(dummyDashboard.liked_nfts);
};



  const getNotifications = async () => {
    try {
      var data = {
        apiUrl: apiService.userNotifications,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        setNotifications(resp.data);
        console.log(resp, "setNotifications-=-=-");
      } else {
      }
    } catch (error) { }
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

  const favorite = async (nft_id) => {
    try {
      var data = {
        apiUrl: apiService.favoriteAction,
        payload: { nft_id: nft_id }
      };
      var resp = await postMethod(data);
      console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      if (resp.status) {
        getDashboard();
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
                <div className="row">
                  <div className="col-lg-10">
                    <div className="home_header latest_header">
                      <h1 className=" text-center " >Trending</h1>
                      <div className="menu_sec">
                        <Listmenusec />
                      </div>
                    </div>
                    <div className=" profile-page_comp dashpoadr">
                      <div className="row justify-content-center ">
                        {Nftsref.current.length > 0 ?
                          Nftsref.current.map((item, i) => {
                            var like_users = [];
                            for (var j = 0; j < item.likes.length; j++) {
                              like_users.push(item.likes[j].wallet_address);
                            }
                            var filetype_nft = item.cloudUrl.split(".").pop().trim();
                            return (
                              <div className="col-lg-3 col-6 col-ac " onClick={() => window.location.href = `/NFTDetails/${item.txHash}/${item.network}`}>
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


                                    <Link to="" className="imgconyeea">
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
                                            <audio width="100%" height="100" controls controlsList="nodownload">
                                              <source src={item.cloudUrl} />
                                            </audio>
                                            <img
                                              src={geomatry}
                                              className=""
                                              alt=""
                                            />
                                          </div>


                                        </>

                                      ) : filetype_nft == "mp4" || filetype_nft == "webm" || filetype_nft == "wav" ? (
                                        <video width="100%" height="200" controls controlsList="nodownload">
                                          <source src={item.cloudUrl} />
                                        </video>
                                      ) : ("")
                                      }
                                    </Link>

                                    {item.onAuction == 1 && formatDate(item.Bidenddate) >= new Date().getTime() ?
                                    (
                                      <div className="byebtn">
                                        <button onClick={()=> navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
                                      </div>
                                    )
                                    :
                                    ("")
                                  }

                                    {item.onAuction == 1 && item.auction_type == "timed" && formatDate(item.Bidenddate) >= new Date().getTime() ?
                                      (
                                        <div className="byebtn">
                                          <button onClick={() => navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
                                        </div>
                                      )
                                      :
                                      ("")
                                    }

                                    {item.onAuction == 1 && item.auction_type == "unlimited" && (item.BidendTime * 1000) >= new Date().getTime() ?
                                      (
                                        <div className="byebtn">
                                          <button onClick={() => navigate(`/NFTDetails/${item.txHash}/${item.network}`)}>Place Bid</button>
                                        </div>
                                      )
                                      :
                                      ("")
                                    }

                                  </div>
                                  <p>
                                    <span className="name_item">
                                      {item.user_id.username}


                                      {item.user_id.kycstatus == 1 ? (

                                        <img
                                          src={
                                            uil_comment
                                          }
                                          alt=""
                                          className=""
                                        />
                                      )
                                        :

                                        <img
                                          src={
                                            uil_comment
                                          }
                                          alt=""
                                          className=""
                                        />
                                      }

                                    </span>

                                    <span className="liks">{item.likes ? item.likes.length : 0} Likes</span>
                                  </p>
                                  <h5>{item.Name}</h5>
                                  {item.onSale == 1 ? (
                                    <div className="currencyc">
                                      <small>Price</small>
                                      <span  >
                                        {item.network == 'Polygon' ? (
                                          <img
                                            src={
                                              matic
                                            }
                                            alt=""
                                            className=""
                                          />

                                        ) : (
                                          <img
                                            src={
                                              eth
                                            }
                                            alt=""
                                            className=""
                                          />
                                        )}
                                        {item.Price}
                                        {/* <small>{item.network}</small> */}
                                      </span>
                                    </div>
                                  ) : ("")}

                                  {item.onAuction == 1 ? (
                                    <div className="currencyc">
                                      <small> Bid</small>
                                      <span>

                                        {item.network == 'Polygon' ? (
                                          <img
                                            src={
                                              matic
                                            }
                                            alt=""
                                            className=""
                                          />

                                        ) : (
                                          <img
                                            src={
                                              eth
                                            }
                                            alt=""
                                            className=""
                                          />
                                        )}
                                        {item.Bidprice}
                                        {/* <small>{item.network}</small>*/}
                                      </span>
                                    </div>
                                  ) : ("")}

                                  {/* //------share and like------- */}
                                   <div className="like-share">
                                  <span>
                                    <i class="bi bi-share"></i>
                                  </span>
                                  <span>
                                  {like_users.length > 0 &&
                                      like_users.includes(
                                        userWallet
                                      ) ? (
                                        <i
                                          class="bi bi-suit-heart-fill"
                                          onClick={()=> favorite(`${item._id}`)}
                                        ></i>
                                      ) : (
                                        <i
                                          class="bi bi-suit-heart"
                                          onClick={()=> favorite(`${item._id}`)}
                                        ></i>
                                      )}
                                  </span>
                                </div> 

                                   <div className="like-share">
                                        <span>
                                        {liked_nftsref.current.length > 0 &&
                                          liked_nftsref.current.includes(
                                            item._id
                                          ) ? (
                                            <i
                                              class="bi bi-suit-heart-fill"
                                              onClick={()=> favorite(`${item._id}`)}
                                            ></i>
                                          ) : (
                                            <i
                                              class="bi bi-suit-heart"
                                              onClick={()=> favorite(`${item._id}`)}
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
                                                  href={`https://www.facebook.com/sharer/sharer.php?u=`+env.frontUrl+'NFTDetails/'+item.txHash}
                                                  target = "_blank"
                                                >
                                                  Facebook
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  class="bi bi-twitter"
                                                  href={`https://twitter.com/intent/tweet?text=Checkout this item on Fantically&url=`+env.frontUrl+'NFTDetails/'+item.txHash}
                                                  target = "_blank"
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
                                </div>
                              </div>
                            )
                          }) :
                          <div className="home_header latest_header">
                            {/* <h1>Loading...</h1> */}
                          </div>
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
                                    require("../image/newimg/eth.png").default
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
                                    require("../image/newimg/eth.png").default
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
                                    require("../image/newimg/eth.png").default
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
                                    require("../image/newimg/eth.png").default
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
                  <div className="col-lg-2 p-33px">
                    <div className="home_header latest_header dashboard_new_header">
                      <h1>Notifications
                      {Notificationsref.current.length > 0 ? (
                        // <div className="menu_sec ">
                          <Link to="/history" className="text-center ml-2 " ><i style={{color:"white"}} class="bi bi-bell"></i></Link>
                        // </div>
                        ) : ("")}
                      </h1>
                    </div>
                    <div className="card-Trending m-0 card_new_paddin">
                      {Notificationsref.current.length > 0 ? (
                        Notificationsref.current.map((item, i) => {
                          if (item.nft_id != null) {
                            var filetype_nft = item.nft_id.cloudUrl.split(".").pop().trim();
                          }

                          return (item.nft_id != null && item.nft_id.cloudUrl != null ? (
                            <Link to={`/NFTDetails/${item.nft_id.txHash}/${item.nft_id.network}`}>
                              <div className="notification">
                                <div>
                                  {item.nft_id.cloudUrl &&
                                    (filetype_nft == "png" || filetype_nft == "jpg" || filetype_nft == "gif" || filetype_nft == "svg" || filetype_nft == "webp" || filetype_nft == "jpeg") ? (
                                    <img
                                      src={item.nft_id.cloudUrl}
                                      className=""
                                      alt=""
                                    />
                                  ) : filetype_nft == "mp3" || filetype_nft == "ogg" ? (
                                    <>
                                      <div className="audio_player_new">
                                        <audio width="60%" height="60" controls controlsList="nodownload">
                                          <source src={item.nft_id.cloudUrl} />
                                        </audio>
                                        import
                                        <img
                                          alt=""
                                          src={geomatry}
                                          className="" />
                                      </div>


                                    </>

                                  ) : filetype_nft == "mp4" || filetype_nft == "webm" || filetype_nft == "wav" ? (
                                    <video width="60%" height="60" controls controlsList="nodownload">
                                      <source src={item.nft_id.cloudUrl} />
                                    </video>
                                  ) : ("")
                                  }
                                </div>
                                <div>
                                  {/* <h5>{item.nft_id.Name}</h5> */}
                                  <p>
                                    {item.type} on
                                  </p>
                                  <p>{Moment(item.createdAt).format('DD MMM, YYYY, hh:mm')}</p>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            ""
                          ))
                        })
                      ) : (
                        <div className="notification">
                          <div>
                            <p>
                              No Notifications
                            </p>
                          </div>
                        </div>
                      )
                      }
                      {/* <Link to="">
                        <div className="notification">
                          <div>
                            <img
                              src={
                                require("../image/newimg/profilee.png").default
                              }
                              className=""
                            />
                          </div>
                          <div>
                            <h5>George Smith</h5>
                            <p>
                              bid with <span>24.254 ETH</span>
                            </p>
                            <p>15 Aug, 2022, 22:52</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="">
                        <div className="notification">
                          <div>
                            <img
                              src={
                                require("../image/newimg/profilee.png").default
                              }
                              className=""
                            />
                          </div>
                          <div>
                            <h5>George Smith</h5>
                            <p>
                              bid with <span>24.254 ETH</span>
                            </p>
                            <p>15 Aug, 2022, 22:52</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="">
                        <div className="notification">
                          <div>
                            <img
                              src={
                                require("../image/newimg/walleti.png").default
                              }
                              className=""
                            />
                          </div>
                          <div>
                            <h5>ETH Received</h5>
                            <p>
                              <span>20.058 ETH </span> Added
                            </p>
                            <p>15 Aug, 2022, 22:52</p>
                          </div>
                        </div>
                      </Link> */}
                      {/* <div className="bottom_links">
                        <Link to="/explore">View All</Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="home_header latest_header dashboard_new_header headeind">
                    <h1>Popular Creators</h1>
                    {/* <div className="menu_sec">
                      <Link to="">View All</Link>
                    </div> */}
                  </div>
                  <div className="col-lg-12 p-0">
                    <div className="fix_papulare">

                      {Artistsref.current.length > 0 &&
                        Artistsref.current.map((item, i) => {
                          return (item.walletAddress != null && item.walletAddress != "" ?

                            <div className="card-Trending m-0 card_new_paddin">
                              <Link to={`/profile/${item.walletAddress}`}>
                                <div className="notification">
                                  <div>
                                    {item && item.profileImage != "" ? (
                                      <img
                                        src={item.profileImage}
                                        className=""
                                        alt=""
                                      />
                                    ) :
                                      (
                                        <img
                                          src={require("../image/profileImage.jpeg").default}
                                          className=""
                                          alt=""
                                        />

                                      )}

                                  </div>
                                  <div>
                                    <h5>{item.username.substring(0, 10)}...</h5>
                                    <p>
                                      <p>{item.followers.length} Followers</p>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            : ""
                          )
                        })
                      }

                      {/* <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="card-Trending m-0 card_new_paddin">
                        <Link to="">
                          <div className="notification">
                            <div>
                              <img
                                src={
                                  require("../image/newimg/profilee.png")
                                    .default
                                }
                                className=""
                              />
                            </div>
                            <div>
                              <h5>George Smith</h5>
                              <p>
                                <p>1.2M Followers</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="home_header latest_header dashboard_new_header headeind">
                    <h1>Top collections over last 24 hours</h1>
                    {/* <div className="menu_sec">
                      <Link to="">View All</Link>
                    </div> */}
                  </div>
                  <div className="col-lg-12 p-0">
                    <div className="card-Trending m-0 card_new_paddin top_collection_section bg_new_dash">
                      <div className="row pt-4">

                        {Collectionsref.current.length > 0 ? (
                          Collectionsref.current.map((item, i) => {
                            return (
                              <div className="col-lg-4">
                                <div className="top-collection">
                                  <Link to={`/collection/nfts/${item.collectionId}/${item.network}`}>
                                    {" "}

                                    {item && item.image != "" ? (
                                      <img
                                        src={item.image}
                                        className="prodile"
                                        alt=""
                                      />
                                    ) :
                                      (
                                        <img
                                          src={
                                            africls
                                          }
                                          alt=""
                                          className="prodile"
                                        />

                                      )}

                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          {item.name}
                                        </span>
                                        <span className="price-top">
                                          {item.network == 'polygon' ? (
                                            <img
                                              src={
                                                matic
                                              }
                                              alt=""
                                              className=""
                                            />

                                          ) : (
                                            <img
                                              src={
                                                matic
                                              }
                                              alt=""
                                              className=""
                                            />
                                          )}

                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>{item.user_id.username}</small>
                                        <span className="text-green">+59.05%</span>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            )
                          })
                        ) : (<div className="   text-white  mx-auto text-center mb-4  "> No Datas Found </div>)
                        }

                        {/* <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="top-collection">
                            <Link to="">
                              {" "}
                              <img
                                src={
                                  require("../image/newimg/africls.png").default
                                }
                                className="prodile"
                              />
                              <div className="top-conteht">
                                <p>
                                  <span className="titlw_top">
                                    Realistic Digital Art
                                  </span>
                                  <span className="price-top">
                                    <img
                                      src={
                                        require("../image/newimg/eth.png")
                                          .default
                                      }
                                      className=""
                                    />
                                    10.01
                                  </span>
                                </p>
                                <div className="creator-name">
                                  <small>Sam moore</small>
                                  <span className="text-green">+59.05%</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
