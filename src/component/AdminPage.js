import React, { Component, useEffect, useState } from "react";
import Sideber from "./Sidebar";
import Header from "./Header";
import HeaderAfter from "./Headerafterlogin";

import Twitter from "../image/twitter.svg";
import USD from "../image/USD.png";
import BTC from "../image/BTC.png";
import TRX from "../image/trx.png";
import BTC1 from "../image/btc_1.png";
import TUST from "../image/usdt.png";
import ETH from "../image/eth.png";
import TUSD from "../image/tusd.png";
import TUDC from "../image/usdc.png";
import landing_img from "../image/horse_1.png";
import homei_1 from "../image/home2_1.png";
import homei_2 from "../image/home2_2.png";

import homei_3 from "../image/home2_3.png";

import homei_4 from "../image/home2_4.png";
import homesectio2 from "../image/house_2.png";
import Tokenomic from "../image/Tokenomics.png";
import Trade from "../image/Trade.png";

import lion_1 from "../image/lion_img.png";
import facetoken from "../image/tokenface.png";
import filan_icon_1 from "../image/trade_icon.png";
import filan_icon_2 from "../image/earn_icon.png";

import filan_icon_3 from "../image/arb_icon.png";
import link_i from "../image/link_i.png";
import logoN from "../image/clola_logoo.png";

import Chart from "./chart/Chart";

import waiting from "../image/waiting.png";
import faild from "../image/faild.png";

import sucess from "../image/succes.png";

import ReactTooltip from "react-tooltip";
import MaterialDesignSwitch from "./Countdown";

import selectoption from "../image/capage/4C9F1DFE-3D54-4D0E-8ACE-B0A0E1E3AF7E.png";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Scrollbars } from "react-custom-scrollbars";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import { Button } from "@material-ui/core";

import Footer from "../component/Footer";

import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router-dom";
import api from "../utils/api/index";
import { format } from "date-fns";
import Moment from "moment";
import ReactPlayer from "react-player";

function Home() {
  const [onSale, setOnSale] = useState(false);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  const [image, setImage] = useState();
  const [progress, setProgress] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [profileName, setProfileName] = useState("");
  const [bio, setBio] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [dribble, setDribble] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [ntfimage, setNftimage] = useState("");
  const [collectible, setcollectible] = useState([]);
  const [tests, setactivity] = useState("");
  const [currProfile, setcurrProfile] = useState("");
  const [network, setNetwork] = useState("");

  useEffect(() => {
    setLoading(true);

    get_all_transactions();
    axios({
      method: "POST",
      url: api.baseURL + "/get_user_details",
      data: {
        user: window.location.href.split("/").pop(),
      },
    })
      .then((res) => {
        console.log("user profile===", res.data);
        if (res.data == "some Error occurred") {
          localStorage.removeItem("wallet");
          localStorage.removeItem("profile_image");
          alert("Connect to wallet and continue");
          navigate('/');

        }
        else {
          setData(res.data);
          setcollectible(res.data.collectibles);
          setactivity(res.data.activity);
          console.log(res.data.activity, "USER PRORULWE");
          if (res.data.facebook) {
            console.log("inside fb");
            setFacebook(res.data.facebook);
          } else {
            setFacebook("");
          }
          if (res.data.instagram) {
            console.log("insta");
            setInstagram(res.data.instagram);
          } else {
            setInstagram("");
          }
          if (res.data.twitter) {
            setTwitter(res.data.twitter);
          } else {
            setTwitter("");
          }
          if (res.data.dribble) {
            setDribble(res.data.dribble);
          } else {
            setDribble("");
          }
          if (res.data.profile_image) {
            setProfileImage(res.data.profile_image);
          }
          if (res.data.profile_name) {
            console.log("we are here");
            setProfileName(res.data.profile_name);
          }
          if (res.data.bio) {
            setBio(res.data.bio);
          }
          setLoading(false);
        }

      })
      .catch((err) =>
        //alert("error occurred!")
        console.log("error occurred!")
      );
  }, []);

  const get_all_transactions = () => {
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    if (current_chain == 80001) {
      network = "MATIC";
    } else {
      network = "BNB";
    }
    axios({
      method: "POST",
      url: api.baseURL + "/all_transactions",
      //url: "http://localhost:3003/all_transactions",
      data: {
        user: window.location.href.split("/").pop(),
        // network: network,
      },
    }).then((res) => {
      console.log(res.data, "all_transactions");

      setNftimage(res.data.Nfts);
    });
  };

  const get_url_extension = (url) => {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }
  return (
    <ScrollingProvider>
      {loading ? (
        <div style={{ height: "80vh" }}>
          <center style={{ paddingTop: "200px" }}>
            <div class="fa-3x mt-5 pt-5">
              <i class="fas fa-spinner fa-spin"></i>
            </div>
          </center>
        </div>
      ) : (
        <div className="main_pading">
          <Header />

          <section className="craeteoption padin_top_e">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="card_new_option card_center_s">
                    <div className="imge_with_1">
                      <div className="imge_with_2">
                        {data && data.profile_image == "" ? (
                          <img alt="" src={selectoption} />
                        ) : (
                          <img
                            src={
                              data &&
                              data.profile_image
                            }
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                    <div className="profile_deteil">
                      <h3>{data && data.profile_name}</h3>
                      <p className="bio_profile">{data && data.bio}</p>
                      <span className="address">
                        {data && data.wallet_address.slice(0, 20) + "..."}
                      </span>
                    </div>
                    <div className="socila_icons_s">
                      <a href={data && data.facebook} target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href={data && data.twitter} target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href={data && data.instagram} target="_blank">
                        <i class="fab fa-instagram-square"></i>
                      </a>
                      <a href={data && data.dribble} target="_blank">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </div>
                    <div className="socila_icons_s">
                      {data && data.followers && data.followers.length > 0 ? (
                        <p>{data.followers.length} Followers </p>
                      ) : (
                        <p>0 Followers </p>
                      )}
                      &nbsp;
                      {data && data.following && data.following.length > 0 ? (
                        <p>{data.following.length} Following </p>
                      ) : (
                        <p>0 Followers </p>
                      )}
                    </div>
                  </div>

                  {/* <div className="CreateHome_heading__22pxj">
                  <p className="class_ppa">
                    We do not own your private keys and cannot access your funds
                    without your confirmation.
                  </p>
                </div> */}
                </div>
                <div className="col-lg-7">
                  <div className="profileee_tab">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#home1" class="active">
                          All
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#menu1">
                          On Sale
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#menu2">
                          On Auction
                        </a>
                      </li>
                      {/* <li>
                        <a data-toggle="tab" href="#menu3">
                          Collectibles
                        </a>
                      </li> */}
                      <li>
                        <a data-toggle="tab" href="#menu4">
                          Activity
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div class="tab-content">
                        <div id="home1" class="tab-pane fade in active show">
                          <div className="row">
                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item && (item.NFTtype == "Image" || item.NFTtype == "Virtual worlds" || item.NFTtype == "Trading Cards" || item.NFTtype == "Gaming") ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          <a
                                            className="content_section"
                                            href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                          >
                                            {<img src={item && item.cloudUrl} />}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                        </div>
                                        {/* <div className="profile_namess">
                          <div className="inner_contenyteee">
                            <img src={selectoption} />
                            <h6>E Cole.</h6>
                          </div>
                          <h5>3 mints left</h5>
                        </div> */}
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item && item.NFTtype == "Music" ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                                alt=""
                                              />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {item && item.cloudUrl && (
                                            // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                            // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                            <ReactAudioPlayer
                                              src={item && item.cloudUrl}
                                              controls
                                              controlsList="nodownload"
                                            />
                                          )}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item && item.NFTtype == "Video" ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {/* {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                              />
                                            </a>
                                          )} */}

                                          {item && item.cloudUrl && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              {/* <video
                                          width="184px"
                                          height="275px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video> */}
                                              <ReactPlayer url={item.cloudUrl} controls="true" width="184px"
                                                height="275px" />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {/* {item && item.cloudUrl && (
                                              // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                              // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                              <ReactAudioPlayer
                                                src={item && item.cloudUrl}
                                                controls
                                                controlsList="nodownload"
                                              />
                                            )} */}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}
                            {/* <div className="col-lg-6">
                            <div className="refernc_cad m-0">
                              <div className="imge_with_1">
                                <div className="imge_with_2">
                                  <img src=api.baseURL+"//uploads/IMAGE-1646074670721.jpeg" />
                                </div>
                              </div>
                              <div className="bottom_content">
                                <div class="titirle_ss">
                                  <p>test nft </p>
                                  <span class="label_card">0.01 BNB</span>
                                </div>
                                <div class="profile_namess">
                                  <div class="inner_contenyteee"></div>
                                </div>
                                <div class="final_price">
                                  <p>
                                    <span>0.01 BNB</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="refernc_cad m-0">
                              <div className="imge_with_1">
                                <div className="imge_with_2">
                                  <img src=api.baseURL+"//uploads/IMAGE-1646074670721.jpeg" />
                                </div>
                              </div>
                              <div className="bottom_content">
                                <div class="titirle_ss">
                                  <p>test nft </p>
                                  <span class="label_card">0.01 BNB</span>
                                </div>
                                <div class="profile_namess">
                                  <div class="inner_contenyteee"></div>
                                </div>
                                <div class="final_price">
                                  <p>
                                    <span>0.01 BNB</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="refernc_cad m-0">
                              <div className="imge_with_1">
                                <div className="imge_with_2">
                                  <img src=api.baseURL+"//uploads/IMAGE-1646074670721.jpeg" />
                                </div>
                              </div>
                              <div className="bottom_content">
                                <div class="titirle_ss">
                                  <p>test nft </p>
                                  <span class="label_card">0.01 BNB</span>
                                </div>
                                <div class="profile_namess">
                                  <div class="inner_contenyteee"></div>
                                </div>
                                <div class="final_price">
                                  <p>
                                    <span>0.01 BNB</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="refernc_cad m-0">
                              <div className="imge_with_1">
                                <div className="imge_with_2">
                                  <img src=api.baseURL+"//uploads/IMAGE-1646074670721.jpeg" />
                                </div>
                              </div>
                              <div className="bottom_content">
                                <div class="titirle_ss">
                                  <p>test nft </p>
                                  <span class="label_card">0.01 BNB</span>
                                </div>
                                <div class="profile_namess">
                                  <div class="inner_contenyteee"></div>
                                </div>
                                <div class="final_price">
                                  <p>
                                    <span>0.01 BNB</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          </div>
                        </div>

                        <div id="menu1" class="tab-pane fade">
                          <div className="row">
                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  (item.NFTtype == "Image" || item.NFTtype == "Virtual worlds" || item.NFTtype == "Trading Cards" || item.NFTtype == "Gaming") &&
                                  item.on_sale == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          <a
                                            className="content_section"
                                            href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                          >
                                            {<img src={item && item.music} />}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess"></div>
                                        {/* <div className="profile_namess">
                          <div className="inner_contenyteee">
                            <img src={selectoption} />
                            <h6>E Cole.</h6>
                          </div>
                          <h5>3 mints left</h5>
                        </div> */}
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  item.NFTtype == "Music" &&
                                  item.on_sale == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                                  alt=""
                                              />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {item && item.music && (
                                            // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                            // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                            <ReactAudioPlayer
                                              src={item && item.music}
                                              controls
                                              controlsList="nodownload"
                                            />
                                          )}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  item.NFTtype == "Video" &&
                                  item.on_sale == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {/* {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                              />
                                            </a>
                                          )} */}


                                          {item && item.cloudUrl && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              {/* <video
                                          width="184px"
                                          height="275px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video> */}
                                              <ReactPlayer url={item.cloudUrl} controls="true" width="184px"
                                                height="275px" />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {/* {item && item.music && (
                                              // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                              // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                              <ReactAudioPlayer
                                                src={item && item.music}
                                                controls
                                                controlsList="nodownload"
                                              />
                                            )} */}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}
                          </div>
                        </div>

                        <div id="menu2" class="tab-pane fade">
                          <div className="row">
                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  (item.NFTtype == "Image" || item.NFTtype == "Virtual worlds" || item.NFTtype == "Trading Cards" || item.NFTtype == "Gaming") &&
                                  item.on_auction == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          <a
                                            className="content_section"
                                            href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                          >
                                            {<img src={item && item.music} />}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess"></div>
                                        {/* <div className="profile_namess">
                          <div className="inner_contenyteee">
                            <img src={selectoption} />
                            <h6>E Cole.</h6>
                          </div>
                          <h5>3 mints left</h5>
                        </div> */}
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  item.NFTtype == "Music" &&
                                  item.on_auction == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                                  alt=""
                                              />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {item && item.music && (
                                            // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                            // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                            <ReactAudioPlayer
                                              src={item && item.music}
                                              controls
                                              controlsList="nodownload"
                                            />
                                          )}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}

                            {ntfimage &&
                              ntfimage.map((item, i) => {
                                return item &&
                                  item.NFTtype == "Video" &&
                                  item.on_auction == true ? (
                                  <div className="col-lg-6">
                                    <div className="refernc_cad m-0">
                                      <div className="imge_with_1">
                                        <div className="imge_with_2">
                                          {/* <img src={selectoption} /> */}

                                          {/* {item && item.cover_image && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}`}
                                            >
                                              <img
                                                src={
                                                  api.baseURL +
                                                  "/" +
                                                  item.cover_image.split(
                                                    "public"
                                                  )[1]
                                                }
                                              />
                                            </a>
                                          )} */}

                                          {item && item.cloudUrl && (
                                            <a
                                              className="content_section"
                                              href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                            >
                                              {/* <video
                                          width="184px"
                                          height="275px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video> */}
                                              <ReactPlayer url={item.cloudUrl} controls="true" width="184px"
                                                height="275px" />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className="bottom_content">
                                        <div className="titirle_ss">
                                          <p>{item.name}</p>
                                          <span className="label_card">
                                            {item.initial_price} {item.network}
                                          </span>
                                        </div>
                                        <div className="profile_namess">
                                          {/* <div className="inner_contenyteee reels"> */}
                                          {/* <img src={selectoption} /> */}
                                          {/* {item && item.music && (
                                              // <img src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                              // <img src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

                                              <ReactAudioPlayer
                                                src={item && item.music}
                                                controls
                                                controlsList="nodownload"
                                              />
                                            )} */}
                                          {/* <h6>E Cole.</h6> */}
                                          {/* </div> */}
                                          {/* <h5>3 mints left</h5> */}
                                        </div>
                                        <div className="final_price">
                                          <p>
                                            <span>
                                              {item.initial_price}{" "}
                                              {item.network}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                );
                              })}
                          </div>
                        </div>

                        {/* <div id="menu3" class="tab-pane fade">
                          <div className="row">
                            {collectible &&
                              collectible.map((item, i) => {
                                <div className="col-lg-6">
                                  <div className="refernc_cad m-0">
                                    <div className="imge_with_1">
                                      <div className="imge_with_2">

                                        <a
                                          className="content_section"
                                          href={`/mynft-details/${item.token_id}`}
                                        >
                                          {
                                            <img
                                              src={item && item.cover_image}
                                            />
                                          }
                                        </a>
                                      </div>
                                    </div>
                                    <div className="bottom_content">
                                      <div className="titirle_ss">
                                        <p>{item.name}</p>
                                        <span className="label_card">
                                          {item.item_price} {item.network}
                                        </span>
                                      </div>

                                      <div className="final_price">
                                        <p>
                                          <span>{item.item_price} {item.network}</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>;
                              })}
                          </div>
                        </div> */}

                        <div id="menu4" class="tab-pane fade">
                          <div className="row justify-content-center">
                            <ul className="list-unstyled">
                              {tests &&
                                tests.map((item, i) => {
                                  var dates = Moment(item.date).format(
                                    "DD-MM-YYYY"
                                  );
                                  var filetype = '';
                                  if (item.cloudUrl != "" && item.cloudUrl != undefined && item.cloudUrl) {
                                    filetype = get_url_extension(item.cloudUrl);
                                  }
                                  var activity_name = "";
                                  if (item.activity_type == "token_buy") {
                                    activity_name = "Buy Nft";
                                  }
                                  else if (item.activity_type == "token_sale") {
                                    activity_name = "Sale Nft";
                                  }
                                  else {
                                    activity_name = item.activity_type;
                                  }

                                  console.log(filetype, "filetypefiletype");
                                  return activity_name !== "kyc" ? (
                                    <li className="single-tab-list d-flex align-items-center">


                                      {item && item.cloudUrl && filetype !== "mp3" && filetype !== "mp4" && filetype !== "wav" && (
                                        <a href="">
                                          <img
                                            src={item.cloudUrl}
                                            className="avatar-lg"
                                            alt=""
                                          />
                                        </a>
                                      )}

                                      {item && item.cloudUrl && filetype == "mp3" && (
                                        <a href="">
                                          <img src={selectoption} className="avatar-lg" alt="" />
                                        </a>
                                      )}

                                      {item && item.cloudUrl && filetype == "wav" && (
                                        <a href="">
                                          <img src={selectoption} className="avatar-lg" alt="" />
                                        </a>
                                      )}

                                      {item && item.cloudUrl && filetype == "mp4" && (
                                        <a href="">
                                          {/* <video
                                          width="80px"
                                          height="80px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video> */}
                                          <ReactPlayer url={item.cloudUrl} controls="true" width="184px"
                                            height="275px" />
                                        </a>
                                      )}

                                      {item && filetype == "" && (
                                        <a href="">
                                          <img
                                            src={selectoption}
                                            className="avatar-lg"
                                            alt=""
                                          />
                                        </a>
                                      )}

                                      <div className="activity-content ml-4">
                                        {/* <a href=""> */}
                                        <h5 class="mt-0 mb-2"> {item.name} </h5>
                                        {/* </a> */}
                                        <p className="m-0">
                                          {activity_name} on {dates} by{" "}
                                          {profileName}
                                        </p>
                                      </div>
                                    </li>
                                  ) : ("")
                                })}

                              {/* <li className="single-tab-list d-flex align-items-center">
                                <a href="">
                                  <img
                                    src="https://image.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg"
                                    className="avatar-lg"
                                  />
                                </a>
                                <div className="activity-content ml-4">
                                  <a href="">
                                    <h5 class="mt-0 mb-2">VOID #07/10</h5>
                                  </a>
                                  <p className="m-0">
                                    Bought <strong> for 150 XVERS</strong> on
                                    04-04-2022 by <a href="">TihiBeat</a>
                                  </p>
                                </div>
                              </li>
                              <li className="single-tab-list d-flex align-items-center">
                                <a href="">
                                  <img
                                    src="https://image.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg"
                                    className="avatar-lg"
                                  />
                                </a>
                                <div className="activity-content ml-4">
                                  <a href="">
                                    <h5 class="mt-0 mb-2">VOID #07/10</h5>
                                  </a>
                                  <p className="m-0">
                                    Bought <strong> for 150 XVERS</strong> on
                                    04-04-2022 by <a href="">TihiBeat</a>
                                  </p>
                                </div>
                              </li> */}
                            </ul>
                            {/* 
                            {tests &&
                              tests.map((item, i) => {
                                return (
                                  <div className="col-lg-4">
                                    <div className="imge_with_activity">
                                      <div className="refernc_cad m-0">
                                        <div className="imge_with_1">
                                          <div className="imge_with_2 height_sss_pp">
                                            {item.activity_type} by
                                          </div>
                                        </div>
                                        <div className="bottom_content">
                                          <div className="titirle_ss">
                                            <p>
                                              {" "}
                                              @{item.by?.slice(0, 8) +
                                                "..."}{" "}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </ScrollingProvider>
  );
}

export default Home;