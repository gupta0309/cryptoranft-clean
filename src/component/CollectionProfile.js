import React, {useState, useEffect} from "react";
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import Twitter from "../image/twitter.svg";
import Plane from "../image/plane.svg";
import News from "../image/new_ww.svg";
import NFT from "../image/nft_new.svg";
import games from "../image/games.svg";
import defi from "../image/defi.svg";
import {Link} from "react-router-dom";

import collectionImg from "../image/newimg/collection_img.png"
import ethimg from "../image/newimg/eth.png"
import top1img from "../image/newimg/top1.png"
import pridileee from "../image/newimg/pridileee.png"



import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import {postMethod} from "../service/api";
import {getMethod} from "../service/api";
import apiService from "../service/serviceUrl";
import {toastAlert} from "../lib/toastAlert";
import Moment from "moment";

const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
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

  useEffect(() => {
    getProfile();
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
    } catch (error) {}
  };

  const copy = async (text) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    navigator.clipboard.writeText(text);
    toastAlert("success", "Address copied");
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
                  <h1>Collections</h1>
                  <div className="menu_sec">
                    <Listmenusec />
                  </div>
                </div>

                <main className="main-secton-prifieme">
                  <div className="row">
                    <div className="col-lg-7">
                      <div>
                        <div className="">
                          <ul class="nav nav-tabs">
                            <li>
                              <a
                                data-toggle="tab"
                                href="#Items"
                                className="active"
                              >
                                Items
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#Activity">
                                Activity
                              </a>
                            </li>
                          </ul>
                          <div class="tab-content profile-page_comp">
                            <div
                              id="Items"
                              class="tab-pane fade in active show"
                            >
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="container_gidee_new_collection  mb-3">
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link className="touree" to="">
                                      <div className="collection_card">
                                        <div className="img">
                                          <span>
                                            <img
                                              src={
                                                collectionImg
                                              }
                                              alt=""
                                              className=""
                                            />
                                          </span>
                                        </div>
                                        <div className="content_orr">
                                          <h2>ballbornart</h2>
                                          <p>Digital Art #001</p>
                                          <div className="currencyc">
                                            <span>
                                              <img
                                                src={
                                                  ethimg
                                                }
                                                alt=""
                                                className=""
                                              />
                                              10.01<small>ETH</small>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="Activity" class="tab-pane fade in ">
                              <div className="container_gidee_new_collection new-grrrfde">
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="top-collection">
                                  <Link to="">
                                    {" "}
                                    <img
                                      src={
                                        top1img
                                      }
                                      alt=""
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
                                              ethimg
                                            }
                                            alt=""
                                            className=""
                                          />
                                          10.01
                                        </span>
                                      </p>
                                      <div className="creator-name">
                                        <small>From: You</small>
                                        <small className="">
                                          3 minutes ago
                                        </small>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="row">
                        <div className="col-lg-12  ">
                          <div className="new_collection_ptofilr touree">
                            <div className="profile_card_ m-0 collection_card pt-0">
                              <div className="img">
                                <span>
                                  <img
                                    src={
                                      collectionImg
                                    }
                                    alt=""
                                    className=""
                                  />
                                </span>
                              </div>
                              <div className="collection_profile">
                                <img
                                  src={
                                    pridileee
                                  }
                                  alt=""
                                  className=""
                                />
                                <h6>
                                  Ballborn{" "}
                                  <i class="bi bi-check-circle-fill"></i>
                                </h6>
                              </div>
                              <div className="border-section about_contem">
                                <h6>Description</h6>
                                <p>
                                  There are many variations of the passages of
                                  Lorem Ipsum available, but the majority have
                                  suffered the alteration in form, by injected
                                  humour.
                                </p>
                              </div>
                              <div className="border-section about_contem border-none">
                                <h6>About</h6>
                                <div className="item_cardes">
                                  <div>
                                    <h1>6.78k</h1>
                                    <p>Items</p>
                                  </div>
                                  <div>
                                    <h1>6.78k</h1>
                                    <p>Owners</p>
                                  </div>
                                  <div>
                                    <h1>
                                      <img
                                        src={
                                          ethimg
                                        }
                                        alt=""
                                        className=""
                                      />
                                      6.78k
                                    </h1>
                                    <p>Floor price</p>
                                  </div>
                                  <div>
                                    <h1>
                                      <img
                                        src={
                                          ethimg
                                        }
                                        alt=""
                                        className=""
                                      />
                                      6.78k
                                    </h1>
                                    <p>Traded</p>
                                  </div>
                                </div>
                              </div>
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
                                              ethimg
                                            }
                                              alt=""
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
                                              ethimg
                                            }
                                              alt=""
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
                                              ethimg
                                            }
                                              alt=""
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
                                              ethimg
                                            }
                                              alt=""
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
                                              ethimg
                                            }
                                              alt=""
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
                                              ethimg
                                            }
                                              alt=""
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
