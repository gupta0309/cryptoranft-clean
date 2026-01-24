import React, { useState, useEffect } from "react";
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
import collection_preview from "../image/newimg/collection_preview.png";
import finalaas from "../image/newimg/finalaas.png"




import Token1 from "../image/toker1.png";
import { Button } from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { toastAlert } from "../lib/toastAlert";
import Moment from "moment";
import Pagination from "react-js-pagination";
import {
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
} from "@reown/appkit/react";
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
  const [userDatas, setUserDatas] = useState("");
  const [userActivity, setuserActivity] = useState("");
  const [allActivity, setallActivity] = useState("");
  const [userWallet, setuserWallet, userWalletref] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [total, settotal] = useState(0);
  const [perpage, setperpage] = useState(12);

  const [currentPage_user, setCurrentPage_user] = useState(1);
  const [total_user, settotal_user] = useState(0);
  const [perpage_user, setperpage_user] = useState(12);

    const { address, isConnected } = useAppKitAccount();
    const { caipNetwork } = useAppKitNetwork();

  useEffect(() => {
    let userWallet = address;
    console.log("userWallet====", userWallet);
    if (userWallet != null && userWallet != "") {
      setuserWallet(userWallet);
      getProfile();
      getActivity(userWallet, 1);
      getallActivity(1);
    }

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
    navigator.clipboard.writeText(text);
    toastAlert("success", "Address copied");
  };

  const recordPerPage = 12;
  const pageRange = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getallActivity(pageNumber);
  };

  const recordPerPage_user = 12;
  const pageRange_user = 5;

  const handlePageChange_user = (pageNumber) => {
    setCurrentPage_user(pageNumber);
    let userWallet = address;
    getActivity(userWallet, pageNumber);
  };

  const getActivity = async (userWallet, page) => {
    try {
      var data = {
        apiUrl: apiService.getactivity,
        payload: {
          owner: userWallet, perpage: perpage,
          page: page
        }
      };
      var resp = await postMethod(data);
      console.log("user activity data===", resp);
      if (resp.status) {
        setuserActivity(resp.data);
        settotal_user(resp.total);
      } else {
      }
    } catch (error) { }
  };

  const getallActivity = async (page) => {
    try {
      var obj = {
        perpage: perpage,
        page: page
      }

      var data = {
        apiUrl: apiService.getallActivity,
        payload: obj
      };
      var resp = await postMethod(data);
      console.log("user activity all data===", resp);
      if (resp.status) {
        setallActivity(resp.data);
        settotal(resp.total);
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
                  <h1>History</h1>
                  <div className="menu_sec">
                    <Listmenusec />
                  </div>
                </div>

                <main className="main-secton-prifieme">
                  <ul class="nav nav-tabs">
                    <li>
                      <a data-toggle="tab" href="#all" className="active">
                        All
                      </a>
                    </li>
                    {/* <li>
                      <a data-toggle="tab" href="#Collections">
                        Following
                      </a>
                    </li> */}
                    <li>
                      <a data-toggle="tab" href="#Activity">
                        My Activity
                      </a>
                    </li>
                  </ul>

                  <div className="row">
                    <div className="col-lg-7">
                      <div class="tab-content">
                        <div id="all" class="tab-pane fade in active show">
                          {/* <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="collumn_new_s">
                            <div className="notification_history">
                              <div className="img">
                                <img
                                  src={
                                    require("../image/newimg/pridileee.png")
                                      .default
                                  }
                                  className=""
                                />
                              </div>
                              <div className="datts_content">
                                <p>
                                  <span>Followers</span>{" "}
                                  <span className="date_time">3 min ago</span>
                                </p>
                                <h2>
                                  Liked By
                                  908097234098729048723948623984763294872369487632847623874
                                </h2>
                              </div>
                            </div>
                          </div> */}

                          <div className="activeitee">
                            {/* <div className="collection_content">
                              <h3>Fine Arts</h3>
                            </div> */}
                            <div className="row">
                              {allActivity.length > 0 ? (
                                allActivity.map((item, i) => {
                                  return (
                                    <>
                                      {item.type != "Follow" && item.type != "Unfollow" && item.nft_id != null && item.nft_id != undefined && item.nft_id.cloudUrl != null && item.nft_id.cloudUrl != undefined && item.nft_id.cloudUrl != "" ? (
                                        <div className="col-lg-6">
                                          <div className="top-collection">
                                            <Link to={`/NFTDetails/${item.nft_id.txHash}/${item.nft_id.network}`}>
                                              {" "}
                                              {item.nft_id.cloudUrl != null ? (
                                                item &&
                                                  (item.nft_id.cloudUrl.split(".").pop().trim() == "png" || item.nft_id.cloudUrl.split(".").pop().trim() == "jpg" || item.nft_id.cloudUrl.split(".").pop().trim() == "gif" || item.nft_id.cloudUrl.split(".").pop().trim() == "svg" || item.nft_id.cloudUrl.split(".").pop().trim() == "webp" || item.nft_id.cloudUrl.split(".").pop().trim() == "jpeg") ? (
                                                  <img
                                                    src={item.nft_id.cloudUrl}
                                                    className="prodile"
                                                    alt=""
                                                  />
                                                ) : item.nft_id.cloudUrl.split(".").pop().trim() == "mp3" || item.nft_id.cloudUrl.split(".").pop().trim() == "ogg" ? (
                                                  <>
                                                    {/* <div className="audio_player_new">
                                        <audio  width="50" height="50" controls controlsList="nodownload">
                                        <source src={item.nft_id.cloudUrl} />
                                      </audio> */}
                                                    <img
                                                      src={geomatry}
                                                      alt=""
                                                      className="prodile" width="50" height="50" />
                                                    {/* </div> */}
                                                  </>

                                                ) : item.nft_id.cloudUrl.split(".").pop().trim() == "mp4" || item.nft_id.cloudUrl.split(".").pop().trim() == "webm" || item.nft_id.cloudUrl.split(".").pop().trim() == "wav" ? (
                                                  <video width="50" height="50" controls controlsList="nodownload">
                                                    <source src={item.nft_id.cloudUrl} />
                                                  </video>
                                                ) : ("")
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
                                                  {item.by == localStorage.getItem("walletAddress") ? (
                                                    <small>From: You</small>
                                                  ) : (
                                                    <small>From: {item.user_id.username}</small>
                                                  )}

                                                  <small>{Moment(item.createdAt).fromNow()}</small>
                                                </div>
                                              </div>
                                            </Link>
                                          </div>
                                        </div>

                                      )
                                        :
                                        (
                                          ""
                                        )
                                      }

                                    </>
                                  )
                                })) : (<div className="col-lg-12"> No Datas found </div>)
                              }
                              <div className="col-lg-12 collumn_new_s justify-content-center d-flex">
                                {allActivity.length > 0 ? (
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
                            {/* {allActivity.length > 0 ? (
                            <Pagination
                              itemClass="page-item"
                              linkClass="page-link"
                              activePage={currentPage}
                              itemsCountPerPage={recordPerPage}
                              totalItemsCount={total}
                              pageRangeDisplayed={pageRange}
                              onChange={handlePageChange}
                            />
                            ) : ("")} */}
                          </div>
                        </div>
                        <div id="Collections" class="tab-pane fade">
                          <div className="collection_content">
                            <h3>
                              Fine Arts <Link to="">View All</Link>
                            </h3>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="img_collectiton">
                                  <Link to="">
                                    <img
                                      src={
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
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
                                        collection_preview
                                      }
                                      alt=""
                                      className=""
                                    />
                                  </Link>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="Activity" class="tab-pane fade">
                          <div className="activeitee">
                            {/* <div className="collection_content">
                              <h3>Fine Arts</h3>
                            </div> */}
                            <div className="row">
                              {userActivity.length > 0 ? (
                                userActivity.map((item, i) => {
                                  return (
                                    <>
                                      {item.type != "Follow" && item.type != "Unfollow" && item.nft_id != null && item.nft_id.cloudUrl ? (
                                        <div className="col-lg-6">
                                          <div className="top-collection">
                                            <Link to={`/NFTDetails/${item.nft_id.txHash}/${item.nft_id.network}`}>
                                              {" "}
                                              {item.nft_id.cloudUrl != null ? (
                                                item &&
                                                  (item.nft_id.cloudUrl.split(".").pop().trim() == "png" || item.nft_id.cloudUrl.split(".").pop().trim() == "jpg" || item.nft_id.cloudUrl.split(".").pop().trim() == "gif" || item.nft_id.cloudUrl.split(".").pop().trim() == "svg" || item.nft_id.cloudUrl.split(".").pop().trim() == "webp" || item.nft_id.cloudUrl.split(".").pop().trim() == "jpeg") ? (
                                                  <img
                                                    src={item.nft_id.cloudUrl}
                                                    className="prodile"
                                                    alt=""
                                                  />
                                                ) : item.nft_id.cloudUrl.split(".").pop().trim() == "mp3" || item.nft_id.cloudUrl.split(".").pop().trim() == "ogg" ? (
                                                  <>
                                                    {/* <div className="audio_player_new">
                                        <audio  width="50" height="50" controls controlsList="nodownload">
                                        <source src={item.nft_id.cloudUrl} />
                                      </audio> */}
                                                    <img
                                                      src={geomatry}
                                                      alt=""
                                                      className="prodile" width="50" height="50" />
                                                    {/* </div> */}
                                                  </>

                                                ) : item.nft_id.cloudUrl.split(".").pop().trim() == "mp4" || item.nft_id.cloudUrl.split(".").pop().trim() == "webm" || item.nft_id.cloudUrl.split(".").pop().trim() == "wav" ? (
                                                  <video width="50" height="50" controls controlsList="nodownload">
                                                    <source src={item.nft_id.cloudUrl} />
                                                  </video>
                                                ) : ("")
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
                                                  {item.by == localStorage.getItem("walletAddress") ? (
                                                    <small>From: You</small>
                                                  ) : (
                                                    <small>From: {item.user_id.username}</small>
                                                  )}

                                                  <small>{Moment(item.createdAt).fromNow()}</small>
                                                </div>
                                              </div>
                                            </Link>
                                          </div>
                                        </div>

                                      )
                                        :
                                        (
                                          ""
                                        )
                                      }

                                    </>
                                  )
                                })) : (<div className="col-lg-12"> No Datas found </div>)
                              }
                              <div className="col-lg-12 collumn_new_s justify-content-center d-flex">
                                {userActivity.length > 0 ? (
                                  <Pagination
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activePage={currentPage_user}
                                    itemsCountPerPage={recordPerPage_user}
                                    totalItemsCount={total_user}
                                    pageRangeDisplayed={pageRange_user}
                                    onChange={handlePageChange_user}
                                  />
                                ) : ("")}
                              </div>
                              {/* {userActivity.length > 0 ? (
                            <Pagination
                              itemClass="page-item"
                              linkClass="page-link"
                              activePage={currentPage_user}
                              itemsCountPerPage={recordPerPage_user}
                              totalItemsCount={total_user}
                              pageRangeDisplayed={pageRange_user}
                              onChange={handlePageChange_user}
                            />
                            ) : ("")} */}
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
