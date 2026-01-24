import React, {useState, useEffect} from "react";
import Sideber from "../component/Sidebar";
import Header from "../component/Header";
import HeaderAfter from "../component/Headerafterlogin";

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
import MaterialDesignSwitch from "../component/Countdown";

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
import Countdown from "react-countdown";
import Web3 from "web3";
import {auctionAbi} from "../core/constant";
import axios from "axios";
import {polygon_auctionSingle} from "../core/polygon_auctionSingle";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Home() {
  const [ntfimage, setNftimage] = useState("");
  const [loading, setLoading] = useState(true);
  const [auctionloading, setAuctionLoading] = useState(true);
  const [recentAuctions, setrecentAuction] = useState("");
  const [ownerDetails, setOwner] = useState(true);
  const [nftDetails, setNft] = useState("");
  const [auctionTime, setAuctionTime] = useState();
  const [bidLoader, setBidLoader] = useState(false);
  const [bidAmount, setBidAmount] = useState();
  const [currency, setCurrency] = useState("");
  const [recentAuction, getcurrentAuction] = useState("");
  const [conversion, setConversion] = useState("");
  const [nft_new, setnft_new] = useState("");
  const [nft_sold, setnft_sold] = useState("");
  const [discover, setdiscover] = useState(0);
  const [loginCheck, setLoginCheck] = useState(false);

  const getHomePgeContent = () => {
    setLoading(true);
    var current_chain = localStorage.getItem("chainId");
    var network = "BNB";
    if (current_chain == 80001) {
      network = "MATIC";
    } else {
      network = "BNB";
    }
    api.homePageApi(network).then((res) => {
      console.log(res, "resres");
      setLoading(false);
      setNftimage(res.data.newNft);
      setnft_sold(res.data.nft_sold);
      setdiscover(1);
      console.log(res.data.newNft, "resresresresres");
      //  console.log(ntfimage,'ntfimagentfimagentfimage')
    });

    var tokenCheck = localStorage.getItem("wallet");
    if (tokenCheck == null || tokenCheck == undefined) {
      setLoginCheck(false);
    } else {
      setLoginCheck(true);
    }
  };

  const getrecentAuction = () => {
    setAuctionLoading(true);
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    if (current_chain == 97) {
      network = "BNB";
    } else {
      network = "MATIC";
    }
    api.recentAuction(network).then((res) => {
      console.log(res, "resres");
      setAuctionLoading(false);
      setrecentAuction(res.data.topAuction);
      // setOwner(res.data.userdet);
      // setNft(res.data.nftdet);
      // setCurrency(res.data.nftdet.network);
      //  console.log(res.data.topAuction,'topAuctiontopAuctiontopAuction')
      //  console.log(res.data.userdet,'ownerDetailsownerDetails')
      //  console.log(ntfimage,'ntfimagentfimagentfimage')
      var currentTime = Math.floor(Date.now() / 1000);
      const timer = (res.data.topAuction.end_time - currentTime) * 1000;
      console.log(timer, "this is timer!");
      setAuctionTime(timer);
    });
  };

  useEffect(() => {
    var current_chain = localStorage.getItem("chainId");
    var network = "BNB";
    if (current_chain == 80001) {
      network = "MATIC";
    } else {
      network = "BNB";
    }
    //setCurrency(network)

    getHomePgeContent();
    //getrecentAuction();
  }, []);

  var home_slide = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
  };

  var discover_slider = {
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

  // const sendBid = async () => {
  //   setBidLoader(true);
  //   if (bidAmount < parseFloat(nftDetails.initial_price)) {
  //     alert("Cannot Place bid: Bid amount Lower than item price");
  //     setBidLoader(false);
  //     return;
  //   }

  //   if (window.ethereum) {
  //     console.log("inisde here haha");
  //     await window.ethereum.send("eth_requestAccounts");
  //     window.web3 = new Web3(window.ethereum);
  //     // const accounts = await window.ethereum.request({
  //     //   method: "eth_requestAccounts",
  //     // });
  //     const accounts = await window.web3.eth.getAccounts();

  //     window.contract = await new window.web3.eth.Contract(
  //       auctionAbi,
  //       nftDetails.auction_address
  //     );
  //     // var etherAmount = window.web3.utils.toBN(parseInt(currentBid));
  //     // var weiValue = window.web3.utils.toWei(etherAmount, "ether");
  //     // console.log(weiValue, "this is weiValue");
  //     let biddingPrice = parseFloat(bidAmount) * 1000000000000000000;
  //     if (parseFloat(recentAuctions.highest_bid) >= biddingPrice) {
  //       alert("Bid higher");
  //       return;
  //     }

  //     var bidHash = "";
  //     const startBidding = await window.contract.methods
  //       .bid()
  //       .send({
  //         from: accounts[0],
  //         gas: 470000,
  //         value: biddingPrice,
  //       })
  //       .on("transactionHash", function (hash) {
  //         console.log(hash, "money sent");
  //         bidHash = hash;
  //       })
  //       .on("receipt", function (receipt) {
  //         console.log(receipt, "this is receipt");
  //         // alert("succesffully deposited");
  //         // bidModal(false);
  //         axios({
  //           method: "POST",
  //           url: api.baseURL+"/create_bid",
  //           data: {
  //             from: receipt.from,
  //             bidAmount: bidAmount,
  //             auction_address: nftDetails.auction_address,
  //             txHash: bidHash,
  //           },
  //         }).then((res) => {
  //           alert("successfully placed Bid!");
  //           window.location.reload();
  //           // setBidModalLoader(false);
  //         });
  //       });
  //   }
  // };

  // const sendBid = async () => {
  //   console.log("nft token id===", nftDetails.token_id);

  //   console.log(parseInt(bidAmount), "this is currentBid");
  //   console.log(typeof currentBid, "this is type");
  //   setBidLoader(true);

  //   if (bidAmount < parseFloat(nftDetails.initial_price)) {
  //     alert("Cannot Place bid: Bid amount Lower than item price");
  //     setBidLoader(false);
  //     return;
  //   }

  //   // setBidModalLoader(true);
  //   if (window.ethereum) {
  //     console.log("inisde here haha");
  //     await window.ethereum.send("eth_requestAccounts");
  //     window.web3 = new Web3(window.ethereum);
  //     // const accounts = await window.ethereum.request({
  //     //   method: "eth_requestAccounts",
  //     // });
  //     const accounts = await window.web3.eth.getAccounts();

  //     window.contract = await new window.web3.eth.Contract(
  //       auctionAbi,
  //       "0x0d7f4459DC3A86Fa6689Cbf4877225D08EE5a8A3"
  //     );
  //     // var etherAmount = window.web3.utils.toBN(parseInt(currentBid));
  //     // var weiValue = window.web3.utils.toWei(etherAmount, "ether");
  //     // console.log(weiValue, "this is weiValue");
  //     let biddingPrice = parseFloat(bidAmount) * 1000000000000000000;
  //     if (parseFloat(recentAuctions.highest_bid) >= biddingPrice) {
  //       alert("Bid higher");
  //       return;
  //     }

  //     var bidHash = "";
  //     const startBidding = await window.contract.methods
  //       .bid(nftDetails.token_id)
  //       .send({
  //         from: accounts[0],
  //         gas: 470000,
  //         value: biddingPrice,
  //       })
  //       .on("transactionHash", function (hash) {
  //         console.log(hash, "money sent");
  //         bidHash = hash;
  //       })
  //       .on("receipt", function (receipt) {
  //         console.log(receipt, "this is receipt");
  //         // alert("succesffully deposited");
  //         // bidModal(false);
  //         axios({
  //           method: "POST",
  //           url: api.baseURL + "/create_bid",
  //           data: {
  //             from: receipt.from,
  //             bidAmount: bidAmount,
  //             auction_address: "0x0d7f4459DC3A86Fa6689Cbf4877225D08EE5a8A3",
  //             txHash: bidHash,
  //             token_id: nftDetails.token_id,
  //           },
  //         }).then((res) => {
  //           setBidLoader(false);
  //           alert("successfully placed Bid!");
  //           window.location.reload();
  //           // setBidModalLoader(false);
  //         });
  //       });
  //   }
  // };

  const setcurrentAuction = async (auction) => {
    var nftdata = ntfimage.filter((x) => x.token_id == auction.token_id);
    console.log("filter nft data", nftdata[0]);
    setNft(nftdata[0]);
    getcurrentAuction(auction);
    setCurrency(nftdata[0].network);

    console.log("nftdetails", nftDetails);
  };

  const sendBid = async () => {
    setBidLoader(true);
    if (bidAmount < parseFloat(nftDetails.initial_price)) {
      alert("Cannot Place bid: Bid amount Lower than item price");
      setBidLoader(false);
      return;
    }

    // setBidModalLoader(true);

    if (nftDetails.type == "single") {
      var current_chain = localStorage.getItem("chainId");
      var network = "";
      var contract_address = "";
      var contract_owner = "";
      var abi = "";
      if (current_chain == 97) {
        network = "BNB";
        contract_address = "0x0d7f4459DC3A86Fa6689Cbf4877225D08EE5a8A3";
        contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
        abi = auctionAbi;
      } else {
        network = "MATIC";
        contract_address = "0xc763d61d2f1849b248cf80de403cd8d654e8fa1d";
        contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
        abi = polygon_auctionSingle;
      }
      if (window.ethereum) {
        console.log("inisde here haha");
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const accounts = await window.web3.eth.getAccounts();

        window.contract = await new window.web3.eth.Contract(
          abi,
          contract_address
        );
        // var etherAmount = window.web3.utils.toBN(parseInt(currentBid));
        // var weiValue = window.web3.utils.toWei(etherAmount, "ether");
        // console.log(weiValue, "this is weiValue");
        let biddingPrice = parseFloat(bidAmount) * 1000000000000000000;
        if (parseFloat(recentAuction.highest_bid) >= biddingPrice) {
          alert("Bid higher");
          return;
        }

        var bidHash = "";
        const startBidding = await window.contract.methods
          .bid(nftDetails.token_id)
          .send({
            from: accounts[0],
            gas: 470000,
            value: biddingPrice,
          })
          .on("transactionHash", function (hash) {
            console.log(hash, "money sent");
            bidHash = hash;
          })
          .on("receipt", function (receipt) {
            console.log(receipt, "this is receipt");
            // alert("succesffully deposited");
            // bidModal(false);
            axios({
              method: "POST",
              url: api.baseURL + "/create_bid",
              data: {
                from: receipt.from,
                bidAmount: bidAmount,
                auction_address: contract_address,
                txHash: bidHash,
                token_id: nftDetails.token_id,
                network: nftDetails.network,
                type: nftDetails.type,
              },
            }).then((res) => {
              setBidLoader(false);
              alert("successfully placed Bid!");
              window.location.reload();
              // setBidModalLoader(false);
            });
          });
      }
    } else {
    }
  };

  const endAuction = async () => {
    // alert("auction has ended");
    //write logic for auction ending
    if (nftDetails.type == "single") {
      var current_chain = localStorage.getItem("chainId");
      var network = "";
      var contract_address = "";
      var contract_owner = "";
      var abi = "";
      if (current_chain == 97) {
        network = "BNB";
        contract_address = "0x0d7f4459DC3A86Fa6689Cbf4877225D08EE5a8A3";
        contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
        abi = auctionAbi;
      } else {
        network = "MATIC";
        contract_address = "0xc763d61d2f1849b248cf80de403cd8d654e8fa1d";
        contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
        abi = polygon_auctionSingle;
      }
      setLoading(true);
      if (window.ethereum) {
        console.log("inisde here haha");
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const accounts = await window.web3.eth.getAccounts();

        window.contract = await new window.web3.eth.Contract(
          abi,
          contract_address
        );
        //const highestBid = await window.contract.methods.highestBid().call();

        const auctions = await window.contract.methods
          .auctions(nftDetails.token_id)
          .call();
        console.log("auctions====", auctions);

        const bidderDetails = await window.contract.methods
          .highestBidder(auctions.auctionId)
          .call();
        console.log(bidderDetails, "highestBidderhighestBidder");

        const endAuction = await window.contract.methods
          .auctionEnd(nftDetails.token_id, contract_owner)
          .send({
            from: accounts[0],
            gas: 470000,
          })
          .on("transactionHash", function (hash) {
            console.log(hash, "money sent");
            axios({
              method: "POST",
              url: api.baseURL + "/end_auction",
              //url: "http://localhost:3003/end_auction",
              data: {
                highestBid: bidderDetails.currentHighestBid,
                highestBidder: bidderDetails.currentHighestBidder,
                auctionAddress: contract_address,
                auctionCreator: nftDetails.owned_by,
                tokenId: window.location.href.split("/")[4],
                royalty: nftDetails.royalty,
                creator: nftDetails.created_by,
                hash: hash,
                network: nftDetails.network,
                type: nftDetails.type,
              },
            })
              .then((endres) => {
                console.log(endres, "auction ended");
                alert("auction ended");

                setLoading(false);
              })
              .catch((e) => alert("some error occurred"));
          });
      }
    } else {
    }
  };

  const options = [
    {value: "1", label: "New"},
    {value: "2", label: "Sold", className: "myOptionClassName"},
  ];

  const Discover = async (e) => {
    console.log("setdiscover===", e.value);
    setdiscover(e.value);
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
      url: api.baseURL + "/likes",
      data: {
        user: localStorage.getItem("wallet"),
        token_id: params,
        network: network,
      },
    })
      .then((res) => {
        console.log("like response====", res);
        setNftimage(res.data.newNft);
        setnft_sold(res.data.nft_sold);
        setdiscover(1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
      url: api.baseURL + "/dislikes",
      data: {
        user: localStorage.getItem("wallet"),
        token_id: params,
        network: network,
      },
    })
      .then((res) => {
        console.log("like response====", res);
        setNftimage(res.data.newNft);
        setnft_sold(res.data.nft_sold);
        setdiscover(1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loginToCont = () => {
    try {
      alert("error", "Please connect wallet!");
    } catch (error) {
      alert("error", "Please refresh the page");
    }
  };

  return (
    <div>
      <Header />

      <main className="home_pading_section">
        <div className="bg_gray_">
          <section className="container section_first_one">
            <div className="row">
              <div className="col-lg-8">
                <div className="fist_contnet">
                  <h1>
                    Discover digital <br /> assets! <br />
                    Purchase and sell premium and exclusive NFTs.
                  </h1>
                  <p>
                   Create, buy, and sell amazing art, audio, video, cards, photos and more
                  </p>

                  <div className="home_button">
                    {/* <Button>Connect Wallet</Button> */}
                    <Link to="/faq">
                      Learn how it works <i class="fas fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Slider {...home_slide} className="banner_slide">
                  {loading ? (
                    <div style={{height: "80vh"}}>
                      <center style={{paddingTop: "200px"}}>
                        <div class="fa-3x mt-5 pt-5">
                          <i class="fas fa-spinner fa-spin"></i>
                        </div>
                      </center>
                    </div>
                  ) : (
                    ntfimage &&
                    ntfimage.map((item, i) => {
                      var like_users = [];
                      for (var j = 0; j < item.likes.length; j++) {
                        like_users.push(item.likes[j].wallet_address);
                      }
                      return item && item.NFTtype == "Image" ? (
                        <div>
                          <div className="refernc_cad m-0">
                            <Link
                              to={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                              className="content_section"
                            >
                              <div className="imge_with_1">
                                <div className="imge_with_2">
                                  <img src={item && item.cloudUrl} />
                                </div>
                              </div>
                            </Link>
                            <div className="bottom_content">
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
                                {loginCheck == false ? (
                                  <p className="p-0 text_sss_like">
                                    <i
                                      class="fas fa-heart"
                                      onClick={() => loginToCont()}
                                    ></i>

                                    {item.likes ? item.likes.length : 0}
                                  </p>
                                ) : (
                                  <p className="p-0 text_sss_like">
                                    {like_users.length > 0 &&
                                    like_users.includes(
                                      localStorage.getItem("wallet")
                                    ) ? (
                                      <i
                                        class="fa fa-heart-o"
                                        onClick={() => Dislike(item.token_id)}
                                      ></i>
                                    ) : (
                                      <i
                                        class="fas fa-heart"
                                        onClick={() => Like(item.token_id)}
                                      ></i>
                                    )}
                                    {item.likes ? item.likes.length : 0}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      );
                      //(

                      // <div>
                      //   <div className="clas_img_babber">
                      //     <img src={homesectio2} />
                      //   </div>
                      // </div>
                      //);
                    })
                  )}

                  {/*                  
                  <div>
                    <div className="clas_img_babber">
                      <img src={homesectio2} />
                    </div>
                  </div>
                  <div>
                    <div className="clas_img_babber">
                      <img src={homesectio2} />
                    </div>
                  </div>
                  <div>
                    <div className="clas_img_babber">
                      <img src={homesectio2} />
                    </div>
                  </div>
                  <div>
                    <div className="clas_img_babber">
                      <img src={homesectio2} />
                    </div>
                  </div>
                  <div>
                    <div className="clas_img_babber">
                      <img src={homesectio2} />
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-4">
                <div className="price_home_banner">
                  <h2>521k</h2>
                  <p>Items Sold</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price_home_banner">
                  <h2>$32m</h2>
                  <p>Paid to Creators</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price_home_banner">
                  <h2>219k</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div> */}
          </section>
        </div>

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
                  <Dropdown
                    options={options}
                    className="widthi_123"
                    onChange={(e) => Discover(e)}
                    value="New"
                  />
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
                {discover == 1 ? (
                  <div id="home" class="tab-pane fade in active show">
                    <Slider {...discover_slider}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Image" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="home" class="tab-pane fade in active show">
                    <Slider {...discover_slider}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Image" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 1 ? (
                  <div id="menu1" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Music" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}

                                      {item && item.cover_image && (
                                        <img
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
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    {/* <div className="inner_contenyteee reels 1"> */}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="menu1" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Music" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}

                                      {item && item.cover_image && (
                                        <img
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
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    {/* <div className="inner_contenyteee reels 1"> */}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 1 ? (
                  <div id="menu2" class="tab-pane fade">
                    <Slider {...discover_slidernew}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Video" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}

                                      {item && item.cloudUrl && (
                                        <video
                                          width="184px"
                                          height="275px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video>
                                      )}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
                                    </span>
                                  </div>
                                  <div className="profile_namess">
                                    {/* <div className="inner_contenyteee reels 1">
                                    </div> */}
                                    {/* <h5>3 mints left</h5> */}
                                  </div>
                                 

                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price}{" "}
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="menu2" class="tab-pane fade">
                    <Slider {...discover_slidernew}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Video" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}

                                      {item && item.cloudUrl && (
                                        <video
                                          width="184px"
                                          height="275px"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video>
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
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
                                    </span>
                                  </div>

                                  <div className="final_price">
                                    <p>
                                      <span>
                                        {item.initial_price}{" "}
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

              {discover == 1 ? (
                  <div id="menu3" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Trading Cards" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="menu3" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Trading Cards" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}


                {discover == 1 ? (
                  <div id="menu4" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Virtual worlds" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="menu4" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Virtual worlds" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}


                {discover == 1 ? (
                  <div id="menu5" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {ntfimage &&
                        ntfimage.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Gaming" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}

                {discover == 2 ? (
                  <div id="menu5" class="tab-pane fade">
                    <Slider {...discover_slider}>
                      {nft_sold &&
                        nft_sold.map((item, i) => {
                          var like_users = [];
                          for (var j = 0; j < item.likes.length; j++) {
                            like_users.push(item.likes[j].wallet_address);
                          }

                          return item && item.NFTtype == "Gaming" ? (
                            <div>
                              <div className="refernc_cad m-0">
                                <a
                                  className="content_section"
                                  href={`/mynft-details/${item.token_id}/${item.network.toLowerCase()}`}
                                >
                                  <div className="imge_with_1">
                                    <div className="imge_with_2">
                                      {/* <img src={selectoption} /> */}
                                      {<img src={item && item.cloudUrl} />}
                                    </div>
                                  </div>
                                </a>
                                <div className="bottom_content">
                                  <div className="titirle_ss">
                                    <p>{item.name}</p>
                                    <span className="label_card">
                                      {item.initial_price}{" "}
                                      {item.network ? item.network : "BNB"}
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
                                        {item.network ? item.network : "BNB"}
                                      </span>
                                    </p>
                                    {loginCheck == false ? (
                                      <p className="p-0 text_sss_like">
                                        <i
                                          class="fas fa-heart"
                                          onClick={() => loginToCont()}
                                        ></i>

                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    ) : (
                                      <p className="p-0 text_sss_like">
                                        {like_users.length > 0 &&
                                        like_users.includes(
                                          localStorage.getItem("wallet")
                                        ) ? (
                                          <i
                                            class="fa fa-heart-o"
                                            onClick={() =>
                                              Dislike(item.token_id)
                                            }
                                          ></i>
                                        ) : (
                                          <i
                                            class="fas fa-heart"
                                            onClick={() => Like(item.token_id)}
                                          ></i>
                                        )}
                                        {item.likes ? item.likes.length : 0}
                                      </p>
                                    )}
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
                ) : (
                  ""
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <div id="Place" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Bid Now</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div className="place_bit">
                <h3>
                  Current Highest Bid:{" "}
                  {recentAuction
                    ? recentAuction.highest_bid === ""
                      ? "0 " + currency
                      : recentAuction.highest_bid + " " + currency
                    : ""}
                </h3>

                <div className="form-class">
                  <label>
                    Enter Bid amount (Greater than current bidding amount)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 0.1"
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer model_footer_sec">
              {bidLoader == true ? (
                <Button type="button" class="btn btn-secondary">
                  Loading...{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => sendBid()}
                >
                  Bid Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
