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

import inter from "../image/internet.svg";
import collection_img from "../image/newimg/collection_img.png"
import collection_profile from "../image/newimg/collection_profile.png"


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
                  <div className="container_gidee mb-3">
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="touree" to="">
                      <div className="collection_card">
                        <div className="img">
                          <span>
                            <img
                            alt=""
                              src={
                                collection_img
                              }
                              className=""
                            />
                          </span>
                        </div>
                        <div className="content_orr">
                          <div className="circle_ing">
                            {" "}
                            <img
                            alt=""
                              src={
                                collection_profile
                              }
                              className=""
                            />
                          </div>
                          <h2>ballbornart</h2>
                          <p>Robert Fox</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="home_header latest_header">
                    <h1>Accounts</h1>
                    <div className="menu_sec"></div>
                  </div>
                  <div className="container_gidee">
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
                    <Link to="" className="accounts_section">
                      <div>
                        <img
                        alt=""
                          src={
                            require("../image/newimg/collection_profile.png")
                              .default
                          }
                          className=""
                        />
                      </div>
                      <div>
                        <h3>Gentle Unicorn</h3>
                        <p>Robert Fox</p>
                      </div>
                    </Link>
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
