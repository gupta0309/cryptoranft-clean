import React, {useState, useEffect} from "react";
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

import homei_4 from "../image/capage/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";
import homesectio2 from "../image/capage/D966AB20-7994-4931-8E45-8A582E3F0A77.png";
import selectoption from "../image/capage/4C9F1DFE-3D54-4D0E-8ACE-B0A0E1E3AF7E.png";

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

import Footer from "./Footer";

import waiting from "../image/waiting.png";
import faild from "../image/faild.png";

import sucess from "../image/succes.png";

import ReactTooltip from "react-tooltip";
import MaterialDesignSwitch from "./Countdown";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Scrollbars} from "react-custom-scrollbars";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../utils/api/index";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

function Home() {
  const [ntfimage, setNftimage] = useState("");
  const [loading, setLoading] = useState(true);
  const [nft_sold, setnft_sold] = useState("");
  const [discover,setdiscover] = useState(0);
  const [loginCheck, setLoginCheck] = useState(false);
  const [ntfimages, setNft_image] = useState("");
  const [ntfaudio, setNftaudio] = useState("");
  const [ntfvideo, setNftvideo] = useState("");
  const [ntftrade, setNfttrade] = useState("");
  const [ntfvirtual, setNftvirtual] = useState("");
  const [ntfphoto, setNftphoto] = useState("");

  const getHomePgeContent = () => {
    setLoading(true);
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    if (current_chain == 80001) {
      network = "MATIC";
    } else {
      network = "BNB";
    }
    api.homePageApi(network).then((res) => {
      console.log(res, "resres");
      setLoading(false);
      setNftimage(res.data.newNft);
      if(res.data.newNft.length>0)
       {
        var imagenft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Image"
        );
        setNft_image(imagenft);

        console.log("ntfimagesntfimages",ntfimages)

        var audionft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Music"
        );
        setNftaudio(audionft);

        var videonft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Video"
        );
        setNftvideo(videonft);

        var tradenft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Trading Cards"
        );
        setNfttrade(tradenft);

        var virtualnft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Virtual worlds"
        );
        setNftvirtual(virtualnft);

        var photonft = res.data.newNft.filter(
          (x) =>
            x.NFTtype == "Gaming"
        );
        setNftphoto(photonft);
       }
      setnft_sold(res.data.nft_sold);
      setdiscover(1);
      console.log(res.data.newNft, "resresresresres");
      
      //  console.log(ntfimage,'ntfimagentfimagentfimage')
    });

    var tokenCheck = localStorage.getItem("wallet");
    if(tokenCheck == null || tokenCheck == undefined){
      setLoginCheck(false);
    }else{
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    getHomePgeContent();
  }, []);

  const options = [
    {value: "1", label: "New"},
    {value: "2", label: "Sold", className: "myOptionClassName"},
  ];

  const Discover = async (e) => {
     console.log("setdiscover==",e.value)
     setdiscover(e.value);
  };

  const set_nft = (type) => {
     if(type=="image")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Image"
        );
        setNft_image(imagenft);
       }
     }
     else if(type=="Music")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Music"
        );
        setNftaudio(imagenft);
       }
     }
     else if(type=="Video")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Video"
        );
        setNftvideo(imagenft);
       }
     }
     else if(type=="Trading Cards")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Trading Cards"
        );
        setNfttrade(imagenft);
       }
     }
     else if(type=="Virtual worlds")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Virtual worlds"
        );
        setNftvirtual(imagenft);
       }
     }
     else if(type=="Gaming")
     {
       if(ntfimage.length>0)
       {
        var imagenft = ntfimage.filter(
          (x) =>
            x.NFTtype == "Gaming"
        );
        setNftphoto(imagenft);
       }
     }
  }

  var discover_slidernew = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,

          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  const Like = async (params) => {
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    if (current_chain == 97) {
      network = "BNB";
    } else {
      network = "MATIC";
    }
    axios({
      method: "POST",
     url: api.baseURL+"/likes",
      data: {
        user: localStorage.getItem("wallet"),
        token_id: params,
        network: network
      }
    })
      .then((res) => {
        console.log("like response====",res);
        setNftimage(res.data.newNft);
        setnft_sold(res.data.nft_sold);
        setdiscover(1);
        
      })
      .catch((e) => {
        console.log(e);
      });
 }

 const Dislike = async (params) => {
  var current_chain = localStorage.getItem("chainId");
  var network = "";
  if (current_chain == 97) {
    network = "BNB";
  } else {
    network = "MATIC";
  }
  axios({
    method: "POST",
   url: api.baseURL+"/dislikes",
    data: {
      user: localStorage.getItem("wallet"),
      token_id: params,
      network: network
    }
  })
    .then((res) => {
      console.log("like response====",res);
      setNftimage(res.data.newNft);
      setnft_sold(res.data.nft_sold);
      setdiscover(1);
    })
    .catch((e) => {
      console.log(e);
    });
}

 const loginToCont = () => {
  try {
    alert('error', "Please connect wallet!")
  } catch (error) {
    alert('error', "Please refresh the page")
  }
}
  return (
    <div>
      <Header />

      <main className="home_pading_section">
        <div className="padin_uuus">
          <section className="container second_section">
            <div className="row">
              <div className="col-lg-12">
                <h1>Discover</h1>

                <div>
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a class="active tab" data-toggle="tab" href="#home">
                        Art
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        Audio
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        Video
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu3">
                      Trading cards
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu4">
                      Virtual worlds
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu5">
                      Gaming
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="paddi_1233_rt">
                  <Dropdown options={options} className="widthi_123" onChange={(e) => Discover(e)} value="New"/>
                </div>
              </div>
            </div>
            {loading ? (
              <div style={{height: "80vh"}}>
                <center style={{paddingTop: "200px"}}>
                  <div class="fa-3x mt-5 pt-5">
                    <i class="fas fa-spinner fa-spin"></i>
                  </div>
                </center>
              </div>
            ) : (
              <div class="tab-content">
                {discover==1?(
                <div id="home" class="tab-pane fade in active show">
                  <div className="">
                    <div className="row">
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Image" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}

              {discover==2?(
                <div id="home" class="tab-pane fade in active show">
                  <div className="">
                    <div className="row">
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Image" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}
            {discover==1?(
                <div id="menu1" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Music" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {item && item.cover_image && (
                                        <img alt=""
                                          src={
                                            api.baseURL +
                                            "/" +
                                            item.cover_image.split("public")[1]
                                          }
                                        />
                                      )}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    {/* <div className="inner_contenyteee reels"> */}
                                      {/* <img alt="" src={selectoption} /> */}
                                      {item && item.cloudUrl && (
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        // <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

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
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}

             {discover==2?(
                <div id="menu1" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Music" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {item && item.cover_image && (
                                        <img alt=""
                                          src={
                                            api.baseURL +
                                            "/" +
                                            item.cover_image.split("public")[1]
                                          }
                                        />
                                      )}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    {/* <div className="inner_contenyteee reels"> */}
                                      {/* <img alt="" src={selectoption} /> */}
                                      {item && item.cloudUrl && (
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        // <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />

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
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}
                
                {discover==1?(
                <div id="menu2" class="tab-pane fade">
                  <Slider {...discover_slidernew}>
                    {ntfimage &&
                      ntfimage.map((item, i) => {
                        var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                        return item &&
                          item.NFTtype == "Video" ? (
                          <div>
                            <div className="refernc_cad m-0">
                              <a
                                className="content_section"
                                href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                              >
                                <div className="imge_with_1">
                                  <div className="imge_with_2">
                                    {/* <img alt="" src={selectoption} /> */}

                                    {item && (
                                      <ReactPlayer url={item.cloudUrl}  controls="true" width="184px"
                                      height="275px"/>
                                    )}
                                  </div>
                                </div>
                              </a>
                              <div className="bottom_content">
                                <div className="profile_namess">
                                  {/* <div className="inner_contenyteee reels 1">
                                  </div> */}
                                  {/* <h5>3 mints left</h5> */}
                                </div>
                                <div className="titirle_ss">
                                  <p>{item.name}</p>
                                  <span className="label_card">
                                    {item.initial_price} {item.network}
                                  </span>
                                </div>

                                <div className="final_price">
                                  <p>
                                    <span>
                                      {item.initial_price} {item.network}
                                    </span>
                                  </p>
                                  {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        );
                      })}
                  </Slider>
                </div>
                ):("")}

               {discover==2?(
                <div id="menu2" class="tab-pane fade">
                  <Slider {...discover_slidernew}>
                    {nft_sold &&
                      nft_sold.map((item, i) => {
                        var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                        return item &&
                          item.NFTtype == "Video" ? (
                          <div>
                            <div className="refernc_cad m-0">
                              <a
                                className="content_section"
                                href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                              >
                                <div className="imge_with_1">
                                  <div className="imge_with_2">
                                    {/* <img alt="" src={selectoption} /> */}

                                    {item && (
                                      <ReactPlayer url={item.cloudUrl} controls="true" width="184px"
                                      height="275px"/>
                                    )}
                                  </div>
                                </div>
                              </a>
                              <div className="bottom_content">
                                <div className="profile_namess">
                                  {/* <div className="inner_contenyteee reels 1">
                                  </div> */}
                                  {/* <h5>3 mints left</h5> */}
                                </div>
                                <div className="titirle_ss">
                                  <p>{item.name}</p>
                                  <span className="label_card">
                                    {item.initial_price} {item.network}
                                  </span>
                                </div>

                                <div className="final_price">
                                  <p>
                                    <span>
                                      {item.initial_price} {item.network}
                                    </span>
                                  </p>
                                  {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        );
                      })}
                  </Slider>
                </div>
                ):("")}

               {discover==1?(
                <div id="menu3" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Trading Cards" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}

              {discover==2?(
                <div id="menu3" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Trading Cards" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
            ):("")}


               {discover==1?(
                <div id="menu4" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Virtual worlds" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
                ):("")}

                {discover==2?(
                <div id="menu4" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Virtual worlds" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
                ):("")}

                {discover==1?(
                <div id="menu5" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Gaming" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
                ):("")}

                {discover==2?(
                <div id="menu5" class="tab-pane fade">
                  <div className="">
                    <div className="row">
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for(var j=0;j<item.likes.length;j++)
                          {
                            like_users.push(item.likes[j].wallet_address);
                          }
                          console.log("like users====",like_users);
                          return item &&
                            item.NFTtype == "Gaming" ? (
                            <div className="col-lg-3 p-0">
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {
                                        // <img alt="" src={"http://localhost:3003/"+item.cover_image.split('public')[1]} />
                                        <img alt="" src={item && item.cloudUrl} />
                                      }
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name} </p>
                                    <span className="label_card">
                                      {item.initial_price} {item.network}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    <div className="inner_contenyteee">
                                      {/* <img alt="" src={selectoption} /> */}
                                      {/* {
                                               item && item.cover_image && 
                                               <img alt="" src={api.baseURL+"/"+item.cover_image.split('public')[1]} />
                                           } */}
                                      {/* <h6>E Cole.</h6> */}
                                    </div>
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price} {item.network}
                                      </span>
                                    </p>
                                    {
                                      loginCheck == false ?
                                      (
                                      <p className="p-0 text_sss_like" >
                                      <i class="fas fa-heart" onClick={() => loginToCont()}></i>

                                      {item.likes?item.likes.length:0}
                                      </p>
                                      )
                                      :
                                      (
                                        <p className="p-0 text_sss_like" >
                                        {
                                        like_users.length>0 && like_users.includes(localStorage.getItem("wallet")) ?
                                        (
                                          <i class="fa fa-heart-o" onClick={() => Dislike(item.token_id)}></i>
                                        )
                                        :
                                        (
                                          <i class="fas fa-heart" onClick={() => Like(item.token_id)}></i> 
                                        )
                                        }
                                        {item.likes?item.likes.length:0}
                                        </p>
                                      )

                                    }
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
                </div>
                ):("")}

              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
