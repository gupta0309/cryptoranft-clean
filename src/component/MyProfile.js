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
import uil_comment from "../image/newimg/uil_comment-verify.png";
import finalaas from "../image/newimg/finalaas.png";
import edit_3 from "../image/newimg/edit-3.png";
import profileImage from "../image/profileImage.jpeg";
import insat from "../image/newimg/insat.png";
import face from "../image/newimg/face.png";
import twite from "../image/newimg/twite.png";



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

const Completionist = () => <span></span>;



// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="timer-sect">
        <span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
      </div>
    );
  }
};

function Home() {
  const navigate = useNavigate();
  const [userDatas, setUserDatas] = useState("");
  const [twitterlink, Settwitterlink] = useState("");
  const [facebooklink, Setfacebooklink] = useState("");
  const [instagramlink, Setinstagramlink] = useState("");
  const [uploadprofile, setuploadprofile] = useState(false)
  const [Nfts, setNfts, Nftsref] = useState("");
  const [textarea, Settextarea] = useState("")
  const [userActivity, setuserActivity] = useState("");
  const [userCollection, setuserCollection] = useState("");
  const [PrivateNfts, setPrivateNfts, PrivateNftsref] = useState("");
  const [followBtn, setfollowBtn, followBtnref] = useState("");
  const [ownerData, setownerData, ownerDataref] = useState("");
  const [followCheck, setfollowCheck, followCheckref] = useState("");
  const [walletAddress, setwalletAddress, walletAddressref] = useState("");
  const [userWallet, setuserWallet, userWalletref] = useState("");

  useEffect(() => {
    let walletAddress = localStorage.getItem("walletAddress").toLowerCase();
    setwalletAddress(walletAddress);
    getownProfile(walletAddress);
    getProfile(walletAddress);
    getNFTS(walletAddress);
    getActivity(walletAddress);
    getCollections(walletAddress);
    getprivateNFTS(walletAddress);
    let userWallet = localStorage.getItem("walletAddress").toLowerCase();
    setuserWallet(userWallet);


  }, [0]);

  const getProfile = async (walletAddress) => {
    try {
      var payload = {
        walletAddress: walletAddress
      }
      var data = {
        apiUrl: apiService.getusersProfile,
        payload: payload
      };
      var resp = await postMethod(data);
      if (resp.status) {
        setUserDatas(resp.Message);
        Settextarea(resp.Message.text)
        Settwitterlink(resp.Message.twitterlink)
        Setfacebooklink(resp.Message.facebooklink)
        Setinstagramlink(resp.Message.instagramlink)

        // console.log(resp.Message.text, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
        // console.log(resp.Message.twitterlink, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");


        // console.log(resp, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      } else {
      }
    } catch (error) { }
  };

  const getownProfile = async (walletAddress) => {
    try {
      var payload = {
        walletAddress: walletAddress
      }
      var data = {
        apiUrl: apiService.getownProfile,
        payload: payload
      };
      var resp = await postMethod(data);
      if (resp.status) {
        console.log("resp====", resp);
        setownerData(resp.Message);
        setfollowCheck(resp.followcheck);
      } else {
      }
    } catch (error) { }
  };

  const copy = async (text) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    navigator.clipboard.writeText(text);
    toastAlert("success", "Address copied");
  };

  const getNFTS = async (walletAddress) => {
    try {
      var data = {
        apiUrl: apiService.userNFTS,
        payload: { owner: walletAddress }
      };
      var resp = await postMethod(data);
      if (resp.status) {
        setNfts(resp.data);
        console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      } else {
      }
    } catch (error) { }
  };

  const getActivity = async (walletAddress) => {
    try {
      var data = {
        apiUrl: apiService.getactivity,
        payload: { owner: walletAddress }
      };
      var resp = await postMethod(data);
      console.log("user activity data===", resp);
      if (resp.status) {
        setuserActivity(resp.data);
      } else {
      }
    } catch (error) { }
  };


  const getCollections = async (walletAddress) => {
    try {
      var data = {
        apiUrl: apiService.userCollections,
        payload: { owner: walletAddress }
      };
      var resp = await postMethod(data);
      console.log("user collection data===", resp);
      if (resp.status) {
        setuserCollection(resp.data);
      } else {
      }
    } catch (error) { }
  };

  const getprivateNFTS = async (walletAddress) => {
    try {
      var data = {
        apiUrl: apiService.getprivateNFTS,
        payload: { owner: walletAddress }
      };

      var resp = await postMethod(data);
      console.log("getprivateNFTS====", resp)
      if (resp.status) {
        setPrivateNfts(resp.data);
      } else {
        // toastAlert('error', resp.Message );
      }
    } catch (error) { }
  };

  const formatDate = (dateval) => {
    try {
      var [dateValues, timeValues] = dateval.split(' ');
      var [day, month, year] = dateValues.split('-');
      var [hours, minutes, seconds] = timeValues.split(':');
      var formatDate = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
      var time_converted = formatDate.getTime();
      return +time_converted;
    } catch (error) {
      console.log("catch formatdate====", error);
    }
  }

  const favorite = async (nft_id) => {
    try {
      var data = {
        apiUrl: apiService.favoriteAction,
        payload: { nft_id: nft_id, owner: walletAddressref.current }
      };
      var resp = await postMethod(data);
      console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      if (resp.status) {
        getNFTS();
      } else {
      }
    } catch (error) { }
  };

  const follow = async (user_id) => {
    try {
      var data = {
        apiUrl: apiService.followUser,
        payload: { user_id: user_id }
      };
      var resp = await postMethod(data);
      console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      if (resp.status) {
        getownProfile(walletAddressref.current)
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
                  <ul class="nav nav-tabs">
                    <li>
                      <a data-toggle="tab" href="#all" className="active">
                        Items
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Collections">
                        Collections
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Activity">
                        Activity
                      </a>
                    </li>
                  </ul>

                  <div className="row">
                    <div className="col-lg-7">
                      <div class="tab-content">
                        <div id="all" class="tab-pane fade in active show">
                          <div className="collumn_new_s">
                            <ul class="nav nav-tabs">
                              <li>
                                <a
                                  data-toggle="tab"
                                  href="#Public"
                                  className="active"
                                >
                                  Public
                                </a>
                              </li>
                              <li>
                                <a data-toggle="tab" href="#Private"  >
                                  Private
                                </a>
                              </li>
                            </ul>
                            <div class="tab-content profile-page_comp">
                              <div
                                id="Public"
                                class="tab-pane fade in active show"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="row">
                                      {Nftsref.current.length > 0 &&
                                        Nftsref.current.map((item, i) => {
                                          var like_users = [];
                                          for (var j = 0; j < item.likes.length; j++) {
                                            like_users.push(item.likes[j].wallet_address);
                                          }
                                          return (
                                            <div className="col-lg-4">
                                              <div className="card-Trending ">
                                                <div className="positionreel">

                                                  {" "}
                                                  {item.onAuction == 1 && formatDate(item.Bidstartdate) <= new Date().getTime() ?
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


                                                  <Link to={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea">
                                                    <img
                                                      src={item.cloudUrl}
                                                      className=""
                                                      alt=""
                                                    />
                                                  </Link>

                                                  {item.onAuction == 1 && formatDate(item.Bidstartdate) <= new Date().getTime() ?
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
                                                      ("")
                                                    }

                                                  </span>

                                                  <span className="liks">{item.likes ? item.likes.length : 0} Likes</span>
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
                                                <div className="like-share">
                                                  <span>
                                                    <i class="bi bi-share"></i>
                                                  </span>
                                                  <span>
                                                    {like_users.length > 0 &&
                                                      like_users.includes(
                                                        userWalletref.current
                                                      ) ? (
                                                      <i
                                                        class="bi bi-suit-heart-fill"
                                                        onClick={() => favorite(`${item._id}`)}
                                                      ></i>
                                                    ) : (
                                                      <i
                                                        class="bi bi-suit-heart"
                                                        onClick={() => favorite(`${item._id}`)}
                                                      ></i>
                                                    )}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                      {/* <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                                      <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                                      <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                                      <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                                      <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                                      <div className="col-lg-4">
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
                                                  uil_comment
                                                }
                                                  alt=""
                                                className=""
                                              />
                                            </span>

                                            <span className="liks">
                                              140 Likes
                                            </span>
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
                              </div>
                              <div id="Private" class="tab-pane fade in ">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="row">
                                      {PrivateNftsref.current.length > 0 &&
                                        PrivateNftsref.current.map((item, i) => {
                                          var like_users = [];
                                          for (var j = 0; j < item.likes.length; j++) {
                                            like_users.push(item.likes[j].wallet_address);
                                          }
                                          return (
                                            <div className="col-lg-4">
                                              <div className="card-Trending ">
                                                <div className="positionreel">

                                                  {" "}
                                                  {item.onAuction == 1 && formatDate(item.Bidstartdate) <= new Date().getTime() ?
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


                                                  <Link to={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea">
                                                    <img
                                                      src={item.cloudUrl}
                                                      className=""
                                                      alt=""
                                                    />
                                                  </Link>

                                                  {item.onAuction == 1 && formatDate(item.Bidstartdate) <= new Date().getTime() ?
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
                                                      ("")
                                                    }

                                                  </span>

                                                  <span className="liks">{item.likes ? item.likes.length : 0} Likes</span>
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
                                                <div className="like-share">
                                                  <span>
                                                    <i class="bi bi-share"></i>
                                                  </span>
                                                  <span>
                                                    {like_users.length > 0 &&
                                                      like_users.includes(
                                                        userWalletref.current
                                                      ) ? (
                                                      <i
                                                        class="bi bi-suit-heart-fill"
                                                        onClick={() => favorite(`${item._id}`)}
                                                      ></i>
                                                    ) : (
                                                      <i
                                                        class="bi bi-suit-heart"
                                                        onClick={() => favorite(`${item._id}`)}
                                                      ></i>
                                                    )}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="Collections" class="tab-pane fade profile-page_comp">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row">
                                {userCollection.length > 0 &&
                                  userCollection.map((item, i) => {
                                    return (
                                      <div className="col-lg-4" onClick={() => navigate(`/collection/nfts/${item.collectionId}/${item.network}`)}>
                                        <div className="card-Trending ">
                                          <div className="positionreel">
                                            <Link to={`/collection/nfts/${item.collectionId}/${item.network}`} className="imgconyeea">
                                              <img
                                                src={item.image}
                                                className=""
                                                alt=""
                                              />
                                            </Link>
                                          </div>
                                          <h5>{item.name}</h5>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                          {/* <div className="collection_content">
                            <h3>
                              Fine Arts <Link to="">View All</Link>
                            </h3>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="collection_content">
                            <h3>
                              3D Arts <Link to="">View All</Link>
                            </h3>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="collection_content">
                            <h3>
                              Paintings<Link to="">View All</Link>
                            </h3>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        require("../image/newimg/collection_preview.png")
                                          .default
                                      }
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div id="Activity" class="tab-pane fade">
                          <div className="activeitee">
                            {/* <div className="collection_content">
                              <h3>Fine Arts</h3>
                            </div> */}
                            <div className="row">
                              {userActivity.length > 0 &&
                                userActivity.map((item, i) => {
                                  return (
                                    <div className="col-lg-6">
                                      {item.type != "Follow" && item.type != "Unfollow" ? (
                                        <div className="top-collection">
                                          <Link to={`/NFTDetails/${item.nft_id.txHash}/${item.nft_id.network}`}>
                                            {" "}
                                            {item.nft_id.cloudUrl != null ? (
                                              <img
                                                src={item.nft_id.cloudUrl}
                                                alt=""
                                                className="prodile"
                                              />
                                            ) : (
                                              <img
                                                src={
                                                    finalaas
                                                }
                                                  alt=""
                                                className="prodile"
                                              />
                                            )}
                                            <div className="top-conteht">
                                              <p>
                                                <span className="titlw_top">
                                                  {item.nft_id.Name}
                                                </span>
                                                <span className="price-top">
                                                  {/* <img
                                             src={
                                               require("../image/newimg/eth.png")
                                                 .default
                                             }
                                             className=""
                                           />
                                           73.06 */}
                                                  {item.type}
                                                </span>
                                              </p>
                                              <div className="creator-name">
                                                {item.by == userWalletref.current ? (
                                                  <small>From: You</small>
                                                ) : (
                                                  <small>From: {item.user_id.username}</small>
                                                )}

                                                <small>{Moment(item.createdAt).fromNow()}</small>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      )
                                        :
                                        (
                                          ""
                                        )
                                      }

                                    </div>
                                  )
                                })
                              }
                              {/* <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        require("../image/newimg/finalaas.png")
                                          .default
                                      }
                                      className="prodile"
                                    />
                                    <div className="top-conteht">
                                      <p>
                                        <span className="titlw_top">
                                          African Print
                                        </span>
                                        <span className="price-top">
                                          <img
                                            src={
                                              require("../image/newimg/eth.png")
                                                .default
                                            }
                                            className=""
                                          />
                                          73.06
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small>3 minutes ago</small>
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
                    <div className="col-lg-5">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="profile_card_">
                            <div className="border-section">
                              <div className="headein_section">
                                <h4>Profile</h4>
                                {userWalletref.current == walletAddressref.current ? (
                                  <div>
                                    <Link to="/editprofile" className="edietee">

                                      <img
                                        src={
                                          edit_3
                                        }
                                        alt=""
                                        className=""
                                      />

                                    </Link>
                                    {/* <Link to="">
                                    <i class="bi bi-share"></i> Share
                                  </Link> */}
                                  </div>
                                ) : ("")}
                              </div>
                              <div className="profile_img_sect">
                                <div className="profileinggg">
                                  {/* <img
                                    src={
                                      require("../image/newimg/pridileee.png")
                                        .default
                                    }
                                    className=""
                                  /> */}
                                  {userDatas && userDatas.profileImage != "" ? (
                                    <div className="profile_img">
                                      
                                      <img
                                        src={
                                          userDatas && userDatas.profileImage
                                        }
                                        alt=""
                                        className=""
                                      />
                                    </div>
                                  ) : (
                                      <div className="profile_img">
                                       

                                      <img
                                          src={profileImage}
                                          alt=""
                                        className=""
                                      />
                                    </div>
                                  )}
                                </div>
                                <div className="name_content">
                                  <h6>
                                    {userDatas && userDatas.username}
                                    <i class="bi bi-check-circle-fill"></i>
                                  </h6>
                                  <span className="text-blue">
                                    {userDatas &&
                                      Moment(userDatas.createdAt).format(
                                        "DD-MM-YYYY"
                                      )}
                                  </span>
                                  <p>
                                    <span>
                                      {" "}
                                      {userDatas &&
                                        userDatas.walletAddress == ""
                                        ? "Connect wallet"
                                        : userDatas.walletAddress}{" "}
                                    </span>
                                    <small>
                                      <i
                                        onClick={() =>
                                          copy(userDatas.walletAddress)
                                        }
                                        class="fa fa-clone"
                                        aria-hidden="true"
                                      ></i>
                                    </small>
                                    {userWalletref.current != walletAddressref.current ? (
                                      <small>
                                        {followCheckref.current == -1 ? (
                                          <Button onClick={() => follow(userDatas._id)}>Follow</Button>
                                        ) :
                                          (
                                            <Button onClick={() => follow(userDatas._id)}>Following</Button>
                                          )}
                                      </small>
                                    ) : ("")}

                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="border-section">
                              <div className="followe-count">
                                <span>
                                  {userDatas && userDatas.followers.length}<small>Followers</small>
                                </span>
                                <span>
                                  {userDatas && userDatas.following.length}<small>Following</small>
                                </span>
                                <span>
                                  0<small>All Items</small>
                                </span>
                                <span>
                                  0<small>Minted</small>
                                </span>
                              </div>
                            </div>
                            <div className="border-section about_contem">
                              <h6>About</h6>
                              <p>
                                {userDatas && userDatas.text}
                              </p>
                            </div>
                            <div className="border-section about_contem">
                              <h6>Social Profiles</h6>
                              <div className="social-link">
                                <a href={instagramlink}>
                                  
                                  <img
                                    src={
                                      insat
                                    }
                                    alt=""
                                    className=""
                                  />
                                  Instagram
                                </a>
                                <a href={facebooklink}>
                                  <img
                                    src={
                                      face
                                    }
                                    alt=""
                                    className=""
                                  />
                                  Facebook
                                </a>
                                <a href={twitterlink}>
                                  
                                  <img
                                    src={
                                      twite
                                    }
                                    alt=""
                                    className=""
                                  />
                                  Twitter
                                </a>

                              </div>
                            </div>
                            <div className="border-section about_contem border-none">
                              <h6>username</h6>
                              <Link to="">{userDatas && userDatas.username}</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="tab-content">
                    <div id="all" class="tab-pane fade in active show">
                      <div className="collumn_new_s">
                        <ul class="nav nav-tabs">
                          <li>
                            <a
                              data-toggle="tab"
                              href="#Public"
                              className="active"
                            >
                              Public
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#Private">
                              Private
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content profile-page_comp">
                          <div id="Public" class="tab-pane fade in active show">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="row">
                                  <div className="col-lg-4">
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
                                  </div>
                                  <div className="col-lg-4">
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
                                  </div>
                                  <div className="col-lg-4">
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
                                  </div>
                                  <div className="col-lg-4">
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
                                  </div>
                                  <div className="col-lg-4">
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
                                  </div>
                                  <div className="col-lg-4">
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
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="profile_card_">
                                  <div className="border-section">
                                    <div className="headein_section">
                                      <h4>Profile</h4>
                                      <Link to="">
                                        <i class="bi bi-share"></i> Share
                                      </Link>
                                    </div>
                                    <div className="profile_img_sect">
                                      <div className="profileinggg">
                                        <img
                                          src={
                                            require("../image/newimg/pridileee.png")
                                              .default
                                          }
                                          className=""
                                        />
                                      </div>
                                      <div className="name_content">
                                        <h6>
                                          Sam more
                                          <i class="bi bi-check-circle-fill"></i>
                                        </h6>
                                        <span className="text-blue">
                                          Joined July 2022
                                        </span>
                                        <p>
                                          <span>0xADf2F7B2765fC8A931</span>
                                          <small>
                                            <i
                                              class="fa fa-clone"
                                              aria-hidden="true"
                                            ></i>
                                          </small>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="border-section">
                                    <div className="followe-count">
                                      <span>
                                        128<small>Followers</small>
                                      </span>
                                      <span>
                                        28<small>Following</small>
                                      </span>
                                      <span>
                                        18<small>All Items</small>
                                      </span>
                                      <span>
                                        8<small>Minted</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="border-section about_contem">
                                    <h6>About</h6>
                                    <p>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration in some form, by
                                      injected humour. There are many variations
                                      of passages of Lorem Ipsum available, but
                                      the majority have suffered alteration in
                                      some form, by injected humour.
                                    </p>
                                  </div>
                                  <div className="border-section about_contem">
                                    <h6>Social Profiles</h6>
                                    <div className="social-link">
                                      <Link to="">
                                        facebook
                                        <img
                                          src={
                                            require("../image/newimg/face.png")
                                              .default
                                          }
                                          className=""
                                        />
                                      </Link>
                                      <Link to="">
                                        Instagram
                                        <img
                                          src={
                                            require("../image/newimg/insat.png")
                                              .default
                                          }
                                          className=""
                                        />
                                      </Link>
                                      <Link to="">
                                        Twitter
                                        <img
                                          src={
                                            require("../image/newimg/twite.png")
                                              .default
                                          }
                                          className=""
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="border-section about_contem border-none">
                                    <h6>username</h6>
                                    <Link to="">@username</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="Private" class="tab-pane fade in ">
                            tests
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="Collections" class="tab-pane fade">
                      <h3>Menu 1</h3>
                      <p>Some content in menu 1.</p>
                    </div>
                    <div id="Activity" class="tab-pane fade">
                      <h3>Menu 2</h3>
                      <p>Some content in menu 2.</p>
                    </div>
                  </div> */}
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
