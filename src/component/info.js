import React, {Component, useEffect} from "react";
import Header from "./Header";

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

import ReactAudioPlayer from "react-audio-player";

import Web3 from "web3";
import {auctionAbi} from "../core/constant";
import {contractAbi} from "../abi";
import axios from "axios";
import ReactPlayer from "react-player";
import Countdown from "react-countdown";
import api from "../utils/api/index";
import {purchaseAbi} from "../purchaseAbi";
import {multipleAbi} from "../multipleAbi";
import {purchasemultiAbi} from "../purchasemultiAbi";
import {polygon_auctionSingle} from "../core/polygon_auctionSingle";
import {polygon_auctionMultiple} from "../core/polygon_auctionMultiple";
import {maticmultiAbi} from "../maticmultiAbi";
import {maticAbi} from "../maticAbi";
import {polygon_purchaseSingle} from "../core/polygon_purchaseSingle";
import { useNavigate } from 'react-router-dom';
import { toastAlert } from "../lib/toastAlert";
import useState from 'react-usestateref'

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [loading, setLoading] = useState(true);
  const [nftData, setNftData] = useState();
  const [coverImage, setCoverImage] = useState();
  const [auction, setAuction] = useState();
  const [account, setAccount] = useState("none");
  const [auctionData, setAuctionData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [transferModal, setTransferModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [transferAddress, setTransferAddress] = useState("");
  const [transferLoad, setTransferLoad] = useState(false);
  const [sender, setSender] = useState("");
  const [buyModal, setBuyModal] = useState(false);
  const [buyLoading, setBuyLoading] = useState();
  const [auctionLoading, setAuctionLoading] = useState(false);
  const [auctionModal, setAuctionModal] = useState(false);
  const [auctionTime, setAuctionTime] = useState();
  const [highestBid, setHighestBid] = useState();
  const [bidModal, setBidModal] = useState(false);
  const [bidLoader, setBidLoader] = useState(false);
  const [bidAmount, setBidAmount] = useState();
  const [copy, setCopy] = useState("Click to copy");
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [withdrawLoader, setWithDrawLoader] = useState(false);
  const [withdrawAmount, setWithDrawAmount] = useState();
  const [withdrawAddress, setwithdrawAddress] = useState();
  const [imageLoading, setImageLoading] = useState(true);
  const [initialPrice, setInitialPrice] = useState("");
  const [startSaleModal, setStartSaleModal] = useState(false);
  const [startSaleLoader, setStartSaleLoader] = useState();
  const [tx_history, settx_history] = useState([]);
  const [walletToken, setwalletToken] = useState("");
  const [ownerDetails, setUserDatas] = useState("");
  const [Unlock, setUnlock] = useState(false);
  const [collectible, setcollectible] = useState([]);
  const [data, setData] = useState();
  const [nftType, setNftType] = useState("");
  const [currToken, setCurrToken] = useState(0);
  const [auctionLoad, setauctionLoad] = useState(false);
  const [nftBool, setNftBool] = useState(false);
  const [current, setCurrent] = useState("");
  const [owner, setOwner] = useState("");
  const [history, sethistory] = useState([]);
  const [qty, setQty] = useState("");
  const [transferQuantity, setTransfer] = useState("");
  const [currency, setCurrency] = useState("");
  const [nftBalance,setBalance] = useState(0);
  const [nftOwner,setnftOwner] = useState("");
  const [saleOwner,setsaleOwner] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [networkcurrent, setNetwork,networkcurrentref] = useState("");
  const [saleQty,setsaleQty] = useState(0);
  const [timers, setAuctionTimer] = useState();
  const [terms, setTerms] = useState("no");

  const navigate = useNavigate();
  useEffect(() => {
    var tokenCheck = localStorage.getItem("wallet");
    if(tokenCheck == null || tokenCheck == undefined){
      setLoginCheck(false);
    }else{
      setLoginCheck(true);
    }
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    if (current_chain == 80001) {
      network = "MATIC";
    } else {
      network = "BNB";
    }

    var currentnetwork = "";
    if (localStorage.getItem("chainId") == 97) {
      currentnetwork = "BNB";
    } else if (localStorage.getItem("chainId") == 80001) {
      currentnetwork = "MATIC";
    }
    console.log("localStorage chainId====",localStorage.getItem("chainId"));
    console.log("currentnetwork currentnetwork====",currentnetwork);
    setNetwork(currentnetwork);
    //setCurrency(network)

   

    var getNftType = localStorage.getItem("NftType");
    setNftType(getNftType);
    let storageCheck = localStorage.getItem("wallet");
    setwalletToken(storageCheck);
    // console.log("isnide here!", getURL+"/get_token_info");
    console.log('tokenId: window.location.href.split("/")[4');
    setCurrToken(window.location.href.split("/")[4]);

   

    // console.log(tx_history,'tx_historytx_historytx_history')
    // console.log('nftData.initial_price',nftData.initial_price)
    getInfo();
    //getUserDetails();
    //getUserProfile();
    openWithdraw();
  }, []);

  const getInfo = async () => {
    console.log(window.location.href.split("/")[4], "=-=-=window.location-=-=-=");
    var user = localStorage.getItem("wallet");
    if(user)
    {
      console.log("call 111");
      window.web3 = new Web3(window.ethereum);
      var current_chain = await window.web3.eth.getChainId();
    }
    else
    {
      var current_chain = 97;
    }
   
    const chainId = localStorage.getItem("chainId");
    var network = "BNB";
    if (chainId != undefined) {
      if (chainId == 80001) {
        network = "MATIC";
      } else {
        network = "BNB";
      }
    } else {
      if (current_chain == 80001) {
        network = "MATIC";
      } else {
        network = "BNB";
      }
    }
    axios({
      url: api.baseURL + "/get_token_info",
      // url    : api.baseURL+"/get_token_info",
      method: "POST",
      data: {
        tokenId: window.location.href.split("/")[4],
        network: window.location.href.split("/")[5],
      },
    })
      .then(async (response) => {
        console.log(response.data, "nft detail----------------");
        if (response.data.message == "nft not found!") {
          setNftBool(false);
        } else {
          setNftData(response.data.nft);

          setNftBool(true);

          console.log("*********", response.data.nft);
          
          // console.log("currentnetwork=== currentnetwork==",currentnetwork);
          
          var user = localStorage.getItem("wallet");
          if(user)
          {
            console.log("call 2222");
            getUserDetails(response.data.nft);
          if (response.data.nft.type == "multiple" && response.data.nft.network == network) {
            window.web3 = new Web3(window.ethereum);

            const accounts = await window.web3.eth.getAccounts();
            var current_chain = localStorage.getItem("chainId");
            var contract_owner = "";
            var abi = "";
            if (current_chain == 97) {
              contract_owner = "0x61c056d8868dc9af7fb6fe77f3e2b1d7176b4707";
              abi = multipleAbi;
            } else {
              contract_owner = "0x65923e0223a3a3fc7493198a03a068400d4a15f8";
              abi = maticmultiAbi;
            }
    
            // window.contract = await new window.web3.eth.Contract(
            //   abi,
            //   contract_owner
            // );
    
            // window.contract.methods
            // .balanceOf(
            //   accounts[0],
            //   window.location.href.split("/").pop(),
            // ).call().then(async (res)=>{
            //   console.log("balance===",res);
            //   if(res)
            //   {
            //     setBalance(res);
            //     console.log("nftBalance===",nftBalance);
            //   }
              
            // });

            // var sale_owner = response.data.nft.sale_owner.filter(
            //   (x)=>
            //   x.address == accounts[0]
            // );
            // if(sale_owner.length>0)
            // {
            //   setsaleOwner(sale_owner[0].address);
              
            // }
            // console.log("saleOwner====",sale_owner[0].address);

            // if(response.data.nft.sale_owner.length>0)
            // {
            //   setsaleQty(response.data.nft.sale_owner.slice(-1)[0].qty);
            // }
            
            if(response.data.nft.sale_owner.length>0)
            {
              var saleOwners = response.data.nft.sale_owner[response.data.nft.sale_owner.length-1];
              console.log("saleOwners===",saleOwners);
              console.log("saleOwners length===",Object.keys(saleOwners).length);
              if(Object.keys(saleOwners).length>0)
              {
                setsaleOwner(saleOwners.address);
                setsaleQty(saleOwners.qty);
              }
            }
            // var contract_address = "";
            // var contract_owner = "";
            // var mint_abi = "";
            // if (current_chain == 97) {
            //     network = "BNB";
            //     contract_address = "0xe62166b29c39c22fe99a3e3cf45fd5243e44813e";
            //     contract_owner = "0x61c056d8868dc9af7fb6fe77f3e2b1d7176b4707";
            //     abi = purchasemultiAbi;
            //     mint_abi = multipleAbi;
      
            //     const purchaseContract = await new window.web3.eth.Contract(
            //       abi,
            //       contract_address
            //     );
      
            //     const listings = await purchaseContract.methods
            //       .collectibleListings(contract_owner, response.data.nft.token_id)
            //       .call();
            //     console.log("listings====", listings);
            // }
            // else
            // {
            //     network = "MATIC";
            //     contract_address = "0x2a66719084262d0d9871e7d2e7c52f621fdfba76";
            //     contract_owner = "0x65923e0223a3a3fc7493198a03a068400d4a15f8";
            //     abi = polygon_auctionMultiple;
            //     mint_abi = maticmultiAbi;
      
            //     const purchaseContract = await new window.web3.eth.Contract(
            //       abi,
            //       contract_address
            //     );
      
            //     const listings = await purchaseContract.methods
            //       .collectibleListings(contract_owner, response.data.nft.token_id)
            //       .call();
            // }
            

          }
            
        }
        let auctionAddress = response.data.nft.auction_address;
        setNftData(response.data.nft);

        setUnlock(response.data.nft.Unlock);
        setCurrency(response.data.nft.network);

        console.log(
          "-----response.data.nft----",
          response.data.nft,
          "----response.data.nft-----;"
        );
        // if(response.data.nft)
        // {
        //   getownerDetails();
        // }
        settx_history(response.data.nft.tx_history);
        if (localStorage.getItem("wallet")) {
          setAccount(localStorage.getItem("wallet"));
        }

        if (response.data.nft.on_auction) {
          axios({
            url: api.baseURL + "/get_auction_details",
            method: "POST",
            data: {
              token_id: window.location.href.split("/")[4],
              network: window.location.href.split("/")[5],
            },
          })
            .then(async (res) => {
              console.log(
                res.data.auction,
                "get_auction_details get_auction_detailsget_auction_details"
              );
              var currentTime = Math.floor(Date.now() / 1000);
              const timer = (res.data.auction.end_time - currentTime) * 1000;
              console.log(timer, "this is timer!");
              setAuctionTime(timer);
              // console.log(date);
              setAuctionData(res.data.auction);
              setLoading(false);
            })
            .catch((e) => console.log(e));
        }
        setLoading(false);
      }
      })
      .catch((e) => console.log(e));
  };

  const getUserDetails = async (nftinfo) => {
    try {
      console.log("nftinfo====",nftinfo);
      axios({
        method: "POST",
        url: api.baseURL + "/get_user_details",
        data: {
          user: localStorage.getItem("wallet"),
        },
      })
        .then((res) => {
          console.log(res.data, "USER PRORULWE");
          var nft_check = res.data.nfts.filter(
            (x)=>
            (x.token_id == window.location.href.split("/")[4] && x.type == nftinfo.type && x.network == nftinfo.network)
          );
          console.log(nft_check, "nft_check");
           if(nft_check.length>0)
           {
            console.log(nft_check[0].quantity, "nft_check balance");
            setBalance(nft_check[0].quantity);
           }
          setData(res.data);
          // setcollectible(res.data.collectibles);
          // sethistory(res.data.activity);
          // console.log("::::::::", res.data.collectibles);
          // console.log(currToken, "*****");
          // var index = res.data.collectibles.findIndex(
          //   (x) => x.token_id == currToken
          // );
          // console.log(index, "***index**");
          // if (index != -1) {
          //   console.log(res.data.collectibles[index], "||||||||");
          //   setNftData(res.data.collectibles[index]);
          // } else {
          //   console.log("______");
          // }
          // setLoading(false);
        })
        .catch((err) =>
          //alert("error occurred!")
          console.log("error occurred!",err)
        );
    } catch (error) {}
  };

  const getownerDetails = async () => {
    console.log("get owner detils===", nftData);
    try {
      axios({
        method: "POST",
        url: api.baseURL + "/get_owner_details",
        //url: "http://localhost:3003/get_owner_details",
        data: {
          token_id: nftData.token_id,
        },
      })
        .then((res) => {
          setOwner(res.data.owner);
          setCurrent(res.data.creator);
        })
        .catch((err) =>
          //alert("error occurred!")
          console.log("error occurred!")
        );
    } catch (error) {}
  };

  // const Changenetwork = async (network) => {
  //   var current_chain = await window.web3.eth.getChainId();
  //   const chainId = localStorage.getItem("chainId");

  //   if(chainId == 97 || chainId == 80001)
  //   {
    
  //   var id = "";
  //   if (network == "BNB") {
  //     id = "0x61";
  //   } else {
  //     id = "0x13881";
  //   }
  //   console.log("network change");
  //   window.ethereum
  //     .request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{chainId: id}], // chainId must be in hexadecimal numbers
  //     })
  //     .then((res) => {
  //       console.log("network change res===", res);
  //       setNetwork(network);
  //       var chain_id = (network=="BNB")?97:80001;
  //     console.log("chain network==",network);
  //     console.log("chain_id==",chain_id);
  //     localStorage.setItem("chainId",chain_id);
  //       toastAlert("success","Network Changed")
  //       window.location.href = window.location.href
  //     })
  //     .catch((err) => {
  //       if (err.code == 4902) {
  //         alert("Please add " + network + " to metamask");
  //       } else {
  //         alert("Something went wrong, please try again");
  //       }
  //     });
  //   }
  //   else
  //   {
  //     toastAlert("error","Please connect BSC or MATIC network in your metamask")
  //   }
  // };

  const Changenetwork = async (network) => {
    const chainId = localStorage.getItem("chainId");
    if(chainId == 97 || chainId == 80001)
    {
      toastAlert("error","Please change the network to "+network);
    }
    else
    {
      toastAlert("error","Please connect BSC or MATIC network in your metamask");
    }
  };

  const buyNft = async () => {
    console.log("call buy nft===");
    try {
      if(terms=="no")
      {

        toastAlert("error","Please select terms and conditions"); 

      }
      else
      {
        setBuyLoading(true);
        if (window.ethereum) {
          console.log("inisde here");
          await window.ethereum.send("eth_requestAccounts");
          window.web3 = new Web3(window.ethereum);
    
          const accounts = await window.web3.eth.getAccounts();
    
          
    
    
          if (nftData.type == "multiple") {
            
            if(saleQty < qty)
            {
              toastAlert('error','Quantity must be less than or equal to available qty');
              return false;
            }
            else
            {   
              let total_price = parseFloat(nftData.initial_price) * qty;
            console.log("call buy nft multi===",qty);
            
            var current_chain = localStorage.getItem("chainId");
            var network = "";
            var contract_address = "";
            var contract_owner = "";
            var abi = "";
            var mint_abi = "";
            if (current_chain == 97) {
              network = "BNB";
              contract_address = "0xe62166b29c39c22fe99a3e3cf45fd5243e44813e";
              contract_owner = "0x61c056d8868dc9af7fb6fe77f3e2b1d7176b4707";
              abi = purchasemultiAbi;
              mint_abi = multipleAbi;
    
              const purchaseContract = await new window.web3.eth.Contract(
                abi,
                contract_address
              );
    
              const listings = await purchaseContract.methods
                .collectibleListings(contract_owner, nftData.token_id)
                .call();
              console.log("listings====", listings);
                const buy = await purchaseContract.methods
                .purchaseCollectible(
                  contract_owner,
                  window.location.href.split("/")[4],
                  qty,
                  nftData.owned_by
                )
                .send({
                  from: accounts[0],
                  gas: 470000,
                  value: window.web3.utils.toWei(total_price.toString(), "ether"),
                })
                .on("transactionHash", function (hash) {
                  console.log(hash, "buy hash");
                  axios({
                    method: "POST",
                    url: api.baseURL + "/transfer_nft",
                    //url: "http://localhost:3003/transfer_nft",
                    data: {
                      toAddress: accounts[0],
                      fromAddress: nftData.owned_by,
                      tokenId: window.location.href.split("/")[4],
                      initial_price: nftData.initial_price,
                      creator: nftData.created_by,
                      music: nftData.music,
                      cover_image: nftData.cover_image,
                      royalty: nftData.royalty,
                      hash: hash,
                      network: nftData.network,
                      type: nftData.type,
                      cloudUrl: nftData.cloudUrl,
                      qty: qty,
                      NFTtype:nftData.NFTtype
                    },
                  })
                    .then((res) => {
                      console.log(res, "afterBuying");
                      if(res.status)
                      {
                        setBuyLoading(false);
                        alert("succesfully purchased!");
                        window.location.reload();
                      }
                      
                    })
                    .catch((e) => console.log(e));
                }).on("confirmation", function(no,receipt){
                  console.log("confirmation====",receipt);
    
                });
            } else {
              network = "MATIC";
              contract_address = "0x2a66719084262d0d9871e7d2e7c52f621fdfba76";
              contract_owner = "0x65923e0223a3a3fc7493198a03a068400d4a15f8";
              abi = polygon_auctionMultiple;
              mint_abi = maticmultiAbi;
    
              const purchaseContract = await new window.web3.eth.Contract(
                abi,
                contract_address
              );
    
              const listings = await purchaseContract.methods
                .collectibleListings(contract_owner, nftData.token_id)
                .call();
              const buy = await purchaseContract.methods
                .purchaseCollectible(
                  contract_owner,
                  window.location.href.split("/")[4],
                  qty,
                  nftData.owned_by
                )
                .send({
                  from: accounts[0],
                  gas: 470000,
                  value: window.web3.utils.toWei(total_price.toString(), "ether"),
                })
                .on("transactionHash", function (hash) {
                  console.log(hash, "buy hash");
                  axios({
                    method: "POST",
                    url: api.baseURL + "/transfer_nft",
                    //url: "http://localhost:3003/transfer_nft",
                    data: {
                      toAddress: accounts[0],
                      fromAddress: nftData.owned_by,
                      tokenId: window.location.href.split("/")[4],
                      initial_price: nftData.initial_price,
                      creator: nftData.created_by,
                      music: nftData.music,
                      cover_image: nftData.cover_image,
                      royalty: nftData.royalty,
                      hash: hash,
                      network: nftData.network,
                      type: nftData.type,
                      cloudUrl: nftData.cloudUrl,
                      qty: qty,
                      NFTtype:nftData.NFTtype
                    },
                  })
                    .then((res) => {
                      console.log(res, "afterBuying");
                      setBuyLoading(false);
                      alert("succesfully purchased!");
                      window.location.reload();
                    })
                    .catch((e) => console.log(e));
                });
            }
            }
            
          } else {
            let total_price = parseFloat(nftData.initial_price);
            var current_chain = localStorage.getItem("chainId");
            var network = "";
            var contract_address = "";
            var contract_owner = "";
            var abi = "";
            var mint_abi = "";
            if (current_chain == 97) {
              network = "BNB";
              contract_address = "0x6da5fbc2d718da2218c5986192131a95a4c478d2";
              contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
              abi = purchaseAbi;
              mint_abi = contractAbi;
            } else {
              network = "MATIC";
              contract_address = "0x5156cc91fa73e192098cd7b0e7615b3fb23cd98a";
              contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
              abi = polygon_purchaseSingle;
              mint_abi = maticAbi;
            }
            const purchaseContract = await new window.web3.eth.Contract(
              abi,
              contract_address
            );
    
            const buy = await purchaseContract.methods
              .purchase(contract_owner, window.location.href.split("/")[4])
              .send({
                from: accounts[0],
                gas: 470000,
                value: window.web3.utils.toWei(total_price.toString(), "ether"),
              })
              .on("transactionHash", function (hash) {
                console.log(hash, "buy hash");
                axios({
                  method: "POST",
                  url: api.baseURL + "/transfer_nft",
                  //url: "http://localhost:3003/transfer_nft",
                  data: {
                    toAddress: accounts[0],
                    fromAddress: nftData.owned_by,
                    tokenId: window.location.href.split("/")[4],
                    initial_price: nftData.initial_price,
                    creator: nftData.created_by,
                    music: nftData.music,
                    cover_image: nftData.cover_image,
                    royalty: nftData.royalty,
                    hash: hash,
                    network: nftData.network,
                    type: nftData.type,
                    cloudUrl: nftData.cloudUrl,
                    NFTtype:nftData.NFTtype
                  },
                })
                  .then((res) => {
                    console.log(res, "afterBuying");
                    setBuyLoading(false);
                    alert("succesfully purchased!");
                    window.location.reload();
                  })
                  .catch((e) => console.log(e));
              });
          }
        }
          
        
      }
      }
      catch (e) {
        if(e.code==4001)
        {
          console.log("call here")
          window.location.reload(true);
        }
      }
    
  };

  const transferNft = async () => {
    try {
      setTransferLoad(true);
      if (sender === "") {
        alert("to address cant be empty");
        setTransferLoad(false);
        return;
      }
  
      if (transferLoad) {
        alert("Please wait.. transaction under progress!");
        return;
      }
  
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
  
        const accounts = await window.web3.eth.getAccounts();
        if (nftData.type == "multiple") {
          var current_chain = localStorage.getItem("chainId");
          var network = "";
          var contract_owner = "";
          var abi = "";
          if (current_chain == 97) {
            network = "BNB";
            contract_owner = "0x61c056d8868dc9af7fb6fe77f3e2b1d7176b4707";
            abi = multipleAbi;
          } else {
            network = "MATIC";
            contract_owner = "0x65923e0223a3a3fc7493198a03a068400d4a15f8";
            abi = maticmultiAbi;
          }
  
          window.contract = await new window.web3.eth.Contract(
            abi,
            contract_owner
          );
  
          // const balance =  await window.contract.methods
          // .balanceOf(
          //   accounts[0],
          //   window.location.href.split("/").pop(),
          // ).call();
          // console.log("balance===",balance);
          // return
          if(transferQuantity > nftBalance)
          {
             alert("Please enter quantity less than your balance");
             window.location.reload();
          }
          else
          {
            const send = await window.contract.methods
            .safeTransferFrom(
              accounts[0],
              sender,
              window.location.href.split("/")[4],
              transferQuantity,
              "0x00"
            )
            .send({from: accounts[0]})
            .on("transactionHash", function (hash) {
              console.log(hash, "this is tranfer hash");
              axios({
                method: "POST",
                url: api.baseURL + "/update_nft_history",
                data: {
                  tokenId: window.location.href.split("/")[4],
                  network: nftData.network,
                  type: nftData.type,
                  newOwner: sender,
                  currentOwner: accounts[0],
                  txHash: hash,
                  qty: transferQuantity
                },
              }).then((res) => {
                if (res.data === "success") {
                  // setTransferLoading()
  
                  // console.log(send, "this is send");
                  // console.log(currentUser, "this is currentUser");
                  alert("successfully transfered!");
                  setTransferLoad(false);
                  refreshPage();
                }
              });
            });
  
          }
          
        } else {
          var current_chain = localStorage.getItem("chainId");
          var network = "";
          var contract_owner = "";
          var abi = "";
          if (current_chain == 97) {
            network = "BNB";
            contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
            abi = contractAbi;
          } else {
            network = "MATIC";
            contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
            abi = maticAbi;
          }
  
          window.contract = await new window.web3.eth.Contract(
            abi,
            contract_owner
          );
  
          const send = await window.contract.methods
            .transferFrom(
              accounts[0],
              sender,
              window.location.href.split("/")[4]
            )
            .send({from: accounts[0]})
            .on("transactionHash", function (hash) {
              console.log(hash, "this is tranfer hash");
              axios({
                method: "POST",
                url: api.baseURL + "/update_nft_history",
                data: {
                  tokenId: window.location.href.split("/")[4],
                  network: nftData.network,
                  type: nftData.type,
                  newOwner: sender,
                  currentOwner: accounts[0],
                  txHash: hash,
                },
              }).then((res) => {
                if (res.data === "success") {
                  // setTransferLoading()
  
                  // console.log(send, "this is send");
                  // console.log(currentUser, "this is currentUser");
                  alert("successfully transfered!");
                  setTransferLoad(false);
                  refreshPage();
                }
              });
            });
        }
      }
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
   
  };

  const sendBid = async () => {
    try {

      console.log("nft token id===", nftData.token_id);

    console.log(parseInt(bidAmount), "this is currentBid");
    console.log(typeof currentBid, "this is type");
    setBidLoader(true);

    console.log(
      "nftData.initial_pricenftData.initial_price",
      auctionData.highest_bid
    );

    if (bidAmount < parseFloat(auctionData.highest_bid)) {
      alert("Cannot Place bid: Bid amount Lower than item price");
      setBidLoader(false);
      return;
    }

    // setBidModalLoader(true);

    if (nftData.type == "single") {
      var current_chain = localStorage.getItem("chainId");
      var network = "";
      var contract_address = "";
      var contract_owner = "";
      var abi = "";
      if (current_chain == 97) {
        network = "BNB";
        contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
        contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
        abi = auctionAbi;
      } else {
        network = "MATIC";
        contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
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
        if (parseFloat(auctionData.highest_bid) >= biddingPrice) {
          alert("Bid higher");
          return;
        }

        var bidHash = "";
        const startBidding = await window.contract.methods
          .bid(nftData.token_id)
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
                token_id: nftData.token_id,
                network: nftData.network,
                type: nftData.type,
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
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
    
  };

  const getUserProfile = async () => {
    try {
      console.log("getUserProfilegetUserProfilegetUserProfile");
      axios
        .get(api.baseURL + "/get_more_users")
        .then((res) => {
          console.log(res.data, "resres");

          let userData = res.data.topUsers;
          console.log(
            userData,
            "---userData----userData---userData",
            walletToken,
            "----walletToken--"
          );
          // let userFind = userData.findIndex(x=>x.wallet_address == walletToken);
          var indexing = userData.findIndex(
            (x) =>
              x.wallet_address == "0xd072229405f5ca2c83dcc2fe8e687a303b7259a4"
          );

          console.log(indexing, "userFinduserFinduserFind");
          if (indexing != -1) {
            var userDataFetch = userData[indexing];
            setUserDatas(userDataFetch);
            console.log("____userDataFetch_____", userDataFetch);
          }
          // this.setState({
          //   data: res.data,
          //   authorData: res.data.topUsers,
          // });
          // console.log(this.state.data)
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  };

  const startAuction = async () => {
    console.log("startAuction=====");
    try {
    
      setAuctionLoading(true);
    if(nftData.on_sale==true)
    {
      alert("Your sale already started, please wait..");
      window.location.reload();

    }
    else
    {
      if (nftData.type == "single") {
        var current_chain = localStorage.getItem("chainId");
        var network = "";
        var contract_address = "";
        var contract_owner = "";
        var abi = "";
        var mintAbi = "";
        if (current_chain == 97) {
          network = "BNB";
          contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
          contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
          abi = auctionAbi;
          mintAbi = contractAbi;
        } else {
          network = "MATIC";
          contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
          contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
          abi = polygon_auctionSingle;
          mintAbi = maticAbi;
        }
  
        if (window.ethereum) {
          console.log("inisde here");
          await window.ethereum.send("eth_requestAccounts");
          window.web3 = new Web3(window.ethereum);
          const accounts = await window.web3.eth.getAccounts();
          const finalTime = parseInt(timers);
  
          var _biddingTime = finalTime * 60 * 60;
          var simpleauctionContract = new window.web3.eth.Contract(
            abi,
            contract_address
          );
          console.log();
         // if (!nftData.transfer) {
            if (window.ethereum) {
              await window.ethereum.send("eth_requestAccounts");
              window.web3 = new Web3(window.ethereum);
              const accounts = await window.web3.eth.getAccounts();
  
              window.contract = await new window.web3.eth.Contract(
                mintAbi,
                contract_owner
              );
              console.log(
                window.location.href.split("/")[4],
                "this is token Id"
              );
  
              const theOwner = await window.contract.methods
                .approve(contract_address, window.location.href.split("/")[4])
                .send({from: accounts[0]})
                .on("transactionHash", function (hash) {
                  console.log(hash, "this is approved hash");
                });
            }
          //}
  
          var startAuctionHash = "";
          var currentTime = Math.floor(new Date().getTime() / 1000);
          var auctionEndTime = currentTime + _biddingTime;
          console.log("auctionEndTime====", auctionEndTime);
          var simpleauction = simpleauctionContract.methods
            .createAuction(_biddingTime, nftData.token_id, contract_owner)
            .send({
              from: accounts[0],
              gas: "4700000",
            })
            .on("transactionHash", function (hash) {
              console.log(hash, "money sent");
              startAuctionHash = hash;
            })
            .on("receipt", async function (receipt) {
              console.log(receipt, "this is receipt");
              window.contract = await new window.web3.eth.Contract(
                abi,
                receipt.contractAddress
              );
  
              const endtTime = await simpleauctionContract.methods
                .auctions(nftData.token_id)
                .call()
                .then((res) => {
                  console.log("auction====", res);
                  console.log("auction end time====", res.auctionEndTime);
  
                  var current_chain = localStorage.getItem("chainId");
                  var network = "";
                  if (current_chain == 97) {
                    network = "BNB";
                  } else {
                    network = "MATIC";
                  }
                  axios({
                    method: "POST",
                    url: api.baseURL + "/create_auction",
                    data: {
                      contractAddress: receipt.contractAddress,
                      endTime: res.auctionEndTime,
                      tokenId: window.location.href.split("/")[4],
                      network: nftData.network,
                      type: nftData.type,
                      address: accounts[0],
                      txHash: startAuctionHash,
                      network: nftData.network,
                      username: data.profile_name
                    },
                  });
                })
                .then((res) => {
                  console.log(res, "endt time da");
                  alert("auction started");
                  setAuctionLoading(false);
                  window.location.reload();
                  // setAuctionStatus("Auction Started!");
                  var currentTime = Math.floor(Date.now() / 1000);
                  const timer = (timers - currentTime) * 1000;
                  console.log(timer, "this is timer!");
                  setAuctionTime(timer);
                });
            });
        }
      }
    }
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
    
    
  };

  const endAuction = async () => {
    // alert("auction has ended");
    //write logic for auction ending
    try {
      if (nftData.type == "single") {
        var current_chain = localStorage.getItem("chainId");
        var network = "";
        var contract_address = "";
        var contract_owner = "";
        var abi = "";
        if (current_chain == 97) {
          network = "BNB";
          contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
          contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
          abi = auctionAbi;
        } else {
          network = "MATIC";
          contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
          contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
          abi = polygon_auctionSingle;
        }
  
        console.log(auctionData, "this is auction Data");
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
            .auctions(nftData.token_id)
            .call();
          console.log("auctions====", auctions);
  
          const bidderDetails = await window.contract.methods
            .highestBidder(auctions.auctionId)
            .call();
          console.log(bidderDetails, "highestBidderhighestBidder");
  
          const endAuction = await window.contract.methods
            .auctionEnd(nftData.token_id, contract_owner)
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
                  auctionCreator: nftData.owned_by,
                  tokenId: window.location.href.split("/")[4],
                  royalty: nftData.royalty,
                  creator: nftData.created_by,
                  hash: hash,
                  network: nftData.network,
                  type: nftData.type,
                },
              })
                .then((endres) => {
                  console.log(endres, "auction ended");
                  alert("auction ended");
                  setNftData(endres.data.nft);
  
                  setLoading(false);
                })
                .catch((e) => alert("some error occurred"));
            });
        }
      } else {
      }
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
   
  };

  const stopSale = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: api.baseURL + "/stop_nft_sale",
      data: {
        tokenId: window.location.href.split("/")[4],
        network: nftData.network,
        type: nftData.type,
      },
    })
      .then((res) => {
        setLoading(false);
        alert("Sale stopped");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const cancelAuction = async () => {
    // alert("auction has ended");
    //write logic for auction ending
    try {
      if (nftData.type == "single") {
        var current_chain = localStorage.getItem("chainId");
        var network = "";
        var contract_address = "";
        var contract_owner = "";
        var abi = "";
        if (current_chain == 97) {
          network = "BNB";
          contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
          contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
          abi = auctionAbi;
        } else {
          network = "MATIC";
          contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
          contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
          abi = polygon_auctionSingle;
        }
  
        console.log(auctionData, "this is auction Data");
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
            .auctions(nftData.token_id)
            .call();
          console.log("auctions====", auctions);
  
          const bidderDetails = await window.contract.methods
            .highestBidder(auctions.auctionId)
            .call();
          console.log(bidderDetails, "highestBidderhighestBidder");
  
          const cancelAuction = await window.contract.methods
            .cancelAuction(nftData.token_id, contract_owner)
            .send({
              from: accounts[0],
              gas: 470000,
            })
            .on("transactionHash", function (hash) {
              console.log(hash, "money sent");
              axios({
                method: "POST",
                url: api.baseURL + "/cancel_auction",
                data: {
                  auctionAddress: contract_address,
                  auctionCreator: nftData.owned_by,
                  tokenId: window.location.href.split("/")[4],
                  royalty: nftData.royalty,
                  creator: nftData.created_by,
                  hash: hash,
                  network: nftData.network,
                  type: nftData.type,
                },
              })
                .then((endres) => {
                  console.log(endres, "auction cancelled");
                  alert("auction cancelled");
                  setNftData(endres.data.nft);
                  window.location.reload(true);
                  setLoading(false);
                })
                .catch((e) => alert("some error occurred"));
            });
        }
      } else {
      }
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
    
  };


  // const startSale = async () => {
  //   setLoading(true);
  //   setBidModal(false);
  //   var currentAccount;
  //   if (window.ethereum) {
  //     console.log("inisde here haha");
  //     await window.ethereum.send("eth_requestAccounts");
  //     window.web3 = new Web3(window.ethereum);
  //     // const accounts = await window.ethereum.request({
  //     //   method: "eth_requestAccounts",
  //     // });
  //     const accounts = await window.web3.eth.getAccounts();
  //     currentAccount = accounts[0];

  //     console.log(accounts[0], "this is the account!");
  //   }

  //   console.log(currentAccount, "this is current account");
  //   // return;

  //   if (nftData.transfer) {
  //     axios({
  //       method: "POST",
  //       url: api.baseURL+"/start_nft_sale",
  //       data: {
  //         tokenId: window.location.href.split("/").pop(),
  //         user: currentAccount,
  //         initialPrice: initialPrice,
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res, "this is res");
  //         setLoading(false);
  //         alert("Sale Started");
  //         window.location.reload();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } else {
  //     if (window.ethereum) {
  //       console.log("inisde here haha");
  //       await window.ethereum.send("eth_requestAccounts");
  //       window.web3 = new Web3(window.ethereum);
  //       // const accounts = await window.ethereum.request({
  //       //   method: "eth_requestAccounts",
  //       // });
  //       const accounts = await window.web3.eth.getAccounts();

  //       window.contract = await new window.web3.eth.Contract(
  //         contractAbi,
  //         "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9"
  //       );

  //       const theOwner = await window.contract.methods
  //         .approve(
  //           "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9",
  //           window.location.href.split("/").pop()
  //         )
  //         .send({from: accounts[0]})
  //         .on("transactionHash", function (hash) {
  //           console.log(hash, "this is approve hash");
  //           axios({
  //             method: "POST",
  //             url: api.baseURL+"/start_nft_sale",
  //             data: {
  //               tokenId: window.location.href.split("/").pop(),
  //               user: currentAccount,
  //               initialPrice: initialPrice,
  //             },
  //           })
  //             .then((res) => {
  //               setLoading(false);
  //               alert("Sale Started");
  //               window.location.reload();
  //             })
  //             .catch((e) => {
  //               console.log(e);
  //             });
  //         });
  //     }
  //   }
  // };

  const startSale = async () => {
    try{
      console.log("nftData.on_auction===",nftData.on_auction);
    var currentnetwork = "";
    if (localStorage.getItem("chainId") == 97) {
      currentnetwork = "BNB";
    } else if (localStorage.getItem("chainId") == 80001) {
      currentnetwork = "MATIC";
    }
    if(currentnetwork == nftData.network)
    {
      if(nftData.on_auction==true)
      {
        alert("Your auction already started, please wait");
        window.location.reload();
  
      }
      else
      {
  
        setLoading(true);
      setBidModal(false);
      var currentAccount;
      if (window.ethereum) {
        console.log("inisde here haha");
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const accounts = await window.web3.eth.getAccounts();
        currentAccount = accounts[0];
  
        console.log(accounts[0], "this is the account!");
      }
  
      console.log(currentAccount, "this is current account");
      console.log("nft type====", nftData.type);
      if (window.ethereum) {
        console.log("inisde here haha");
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const accounts = await window.web3.eth.getAccounts();
          if (nftData.type == "multiple") {
            console.log("call multiple");
  
            if(qty>nftBalance)
            {
              alert("Please enter quantity less than your balance");
              window.location.reload();
            }
            else
            {
            var current_chain = localStorage.getItem("chainId");
            var network = "";
            var contract_address = "";
            var contract_owner = "";
            var abi = "";
            var mint_abi = "";
            if (current_chain == 97) {
              network = "BNB";
              contract_address = "0xe62166b29c39c22fe99a3e3cf45fd5243e44813e";
              contract_owner = "0x61c056d8868dc9af7fb6fe77f3e2b1d7176b4707";
              abi = purchasemultiAbi;
              mint_abi = multipleAbi;
            } else {
              network = "MATIC";
              contract_address = "0x2a66719084262d0d9871e7d2e7c52f621fdfba76";
              contract_owner = "0x65923e0223a3a3fc7493198a03a068400d4a15f8";
              abi = polygon_auctionMultiple;
              mint_abi = maticmultiAbi;
            }
    
            const purchaseContract = await new window.web3.eth.Contract(
              abi,
              contract_address
            );
    
            //var etherAmount = window.web3.utils.toBN(initialPrice);
            var weiValue = window.web3.utils.toWei(initialPrice, "ether");
            console.log("etherAmount====",weiValue);
            //return
            // console.log("qty===",qty);
            // return false;
    
            window.contract = await new window.web3.eth.Contract(
              mint_abi,
              contract_owner
            );
            const theOwner = await window.contract.methods
              .setApprovalForAll(contract_address, "True")
              .send({from: accounts[0]})
              .on("transactionHash", async function (hash) {
                console.log(hash, "this is approved hash");
                // setAuctionStatus("Deploying Auction");
    
                const addListing = await purchaseContract.methods
                  .addCollectibleListing(
                    weiValue,
                    contract_owner,
                    window.location.href.split("/")[4],
                    qty
                  )
                  .send({from: accounts[0], gas: 470000})
                  .on("transactionHash", function (hash) {
                    console.log(hash, "this is approve hash");
                    axios({
                      method: "POST",
                      url: api.baseURL + "/start_nft_sale",
                      data: {
                        tokenId: window.location.href.split("/")[4],
                        user: currentAccount,
                        initialPrice: initialPrice,
                        network: nftData.network,
                        type: nftData.type,
                        qty: qty
                      },
                    })
                      .then((res) => {
                        setLoading(false);
                        alert("Sale Started");
                        window.location.reload();
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  });
              });
  
            }
          } else {
            console.log("call single");
            var current_chain = localStorage.getItem("chainId");
            var network = "";
            var contract_address = "";
            var contract_owner = "";
            var abi = "";
            var mint_abi = "";
            if (current_chain == 97) {
              network = "BNB";
              contract_address = "0x6da5fbc2d718da2218c5986192131a95a4c478d2";
              contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
              abi = purchaseAbi;
              mint_abi = contractAbi;
            } else {
              network = "MATIC";
              contract_address = "0x5156cc91fa73e192098cd7b0e7615b3fb23cd98a";
              contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
              abi = polygon_purchaseSingle;
              mint_abi = maticAbi;
            }
    
            const purchaseContract = await new window.web3.eth.Contract(
              abi,
              contract_address
            );
    
            //var etherAmount = window.web3.utils.toBN(parseFloat(initialPrice));
            var weiValue = window.web3.utils.toWei(initialPrice, "ether");
    
            window.contract = await new window.web3.eth.Contract(
              mint_abi,
              contract_owner
            );
            const theOwner = await window.contract.methods
              .approve(contract_address, window.location.href.split("/")[4])
              .send({from: accounts[0]})
              .on("transactionHash", async function (hash) {
                console.log(hash, "this is approved hash");
                // setAuctionStatus("Deploying Auction");
    
                const addListing = await purchaseContract.methods
                  .addListing(
                    weiValue,
                    contract_owner,
                    window.location.href.split("/")[4]
                  )
                  .send({from: accounts[0], gas: 470000})
                  .on("transactionHash", function (hash) {
                    console.log(hash, "this is approve hash");
                    axios({
                      method: "POST",
                      url: api.baseURL + "/start_nft_sale",
                      data: {
                        tokenId: window.location.href.split("/")[4],
                        user: currentAccount,
                        initialPrice: initialPrice,
                        network: nftData.network,
                        type: nftData.type,
                      },
                    })
                      .then((res) => {
                        setLoading(false);
                        alert("Sale Started");
                        window.location.reload();
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  });
              });
          }
        
      }
  
      }
    }
    else
    {
      Changenetwork(nftData.network)
    }
    }
    catch(e)
    {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
    

   
    
    // }
  };

  // const openWithdraw = async () => {

  // }

  const openWithdraw = async () => {
    var current_chain = localStorage.getItem("chainId");
    var network = "";
    var contract_address = "";
    var contract_owner = "";
    var abi = "";
    if (current_chain == 97) {
      network = "BNB";
      contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
      contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
      abi = auctionAbi;
    } else {
      network = "MATIC";
      contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
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
      const auctions = await window.contract.methods
        .auctions(window.location.href.split("/")[4])
        .call();
      console.log("auctions====", auctions);

      const returns = await window.contract.methods
        //.pendingReturns(window.location.href.split("/").pop(),localStorage.getItem("wallet"))
        .pendingReturns(auctions.auctionId, localStorage.getItem("wallet"))
        .call();

      console.log("accounts[0]====", accounts[0]);

      console.log(returns, "returns");
      var withdrawCheckdata;

      axios({
        url: api.baseURL + "/get_auction_details",
        method: "POST",
        data: {
          token_id: window.location.href.split("/")[4],
          network: window.location.href.split("/")[5]
        },
      })
        .then(async (res) => {
          console.log(res.data.auction, "withdraw chek");
          const auctionDatas = res.data.auction;
          if (auctionDatas.bidders.length > 0) {
            withdrawCheckdata = auctionDatas.bidders.filter(
              (x) =>
                x.bidder_address.toLowerCase() ==
                localStorage.getItem("wallet").toLowerCase()
            );
            console.log("check withdraw data==", withdrawCheckdata[0].withdraw);

            if (withdrawCheckdata[0].withdraw === true || returns === "0") {
              setWithDrawAmount(0);
              setWithdrawModal(false);
              // alert("You dont have any amount to withdraw");
              // window.location.reload();
              console.log("You dont have any amount to withdraw");
            } else {
              setWithDrawAmount(parseFloat(returns) / 1000000000000000000);
              setWithdrawModal(true);
              console.log("call to withdraw");
            }
          }
          else
          {
            let returnamount = parseFloat(returns) / 1000000000000000000;
            if(returnamount>0)
            {
              setWithDrawAmount(parseFloat(returns) / 1000000000000000000);
              setWithdrawModal(true);
              console.log("call to withdraw");
            }
          }
        })
        .catch((e) => console.log(e));
    }
  };
  const withDraw = async () => {
    try {
      var current_chain = localStorage.getItem("chainId");
    var network = "";
    var contract_address = "";
    var contract_owner = "";
    var abi = "";
    if (current_chain == 97) {
      network = "BNB";
      contract_address = "0x4395c94f9b44fc0a014b8498064e710f1cd4fef2";
      contract_owner = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9";
      abi = auctionAbi;
    } else {
      network = "MATIC";
      contract_address = "0x770e959ecb5b5ff8dd1738dc757ba4b990d9a54c";
      contract_owner = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9";
      abi = polygon_auctionSingle;
    }
    setWithDrawLoader(true);
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
      const auctions = await window.contract.methods
        .auctions(nftData.token_id)
        .call();
      console.log("auctions====", auctions);

      const returnss = await window.contract.methods
        //.pendingReturns(nftData.token_id,localStorage.getItem("wallet"))
        .pendingReturns(auctions.auctionId, localStorage.getItem("wallet"))
        .call();

      console.log("accounts[0]====", accounts[0]);

      console.log(returnss, "returns");
      if (returnss === "0") {
        setWithDrawAmount(0);
        alert("You dont have any amount to withdraw");
        window.location.reload();
      } else {
        //setWithDrawAmount(parseFloat(returns) / 1000000000000000000);

        const returns = await window.contract.methods
          .withdraw(nftData.token_id)
          .send({
            from: localStorage.getItem("wallet"),
            gas: "4700000",
          })
          .on("transactionHash", function (hash) {
            console.log(hash, "money sent");

            axios({
              url: api.baseURL + "/bid_withdraw",
              method: "POST",
              data: {
                auctionAddress: contract_address,
                user: localStorage.getItem("wallet"),
                token_id: nftData.token_id,
              },
            })
              .then((res) => {
                setWithDrawLoader(false);
                alert("successfully withdrawn");
                window.location.reload();
              })
              .catch((e) => alert("some error occurred"));
          });
      }
    }
      
    } catch (e) {
      if(e.code==4001)
      {
        console.log("call here")
        window.location.reload(true);
      }
    }
    
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const connectWallet  = async  (e) => {
    if(loginCheck == false){
      toastAlert('error','Connect your wallet');
      navigate('/');
    }
  }

  const set_auctionTime = (timer) => {
    if(timer<1)
    {
      toastAlert('error','Please enter valid time in hours');
    }
    else
    {
      //setAuctionTime(timer);
      setAuctionTimer(timer)
    }
    
  }

  const set_qty = (val) => {
    if(saleQty<val)
    {
      toastAlert('error','Quantity must be less than or equal to available qty');
    }
    else
    {
      setQty(val)
    }
  }

  const set_terms= (val) => {
      setTerms(val)
  }

  // const buyNft = () => {

  // }

  // const sendBid = () => {

  // }

  // const startAuction = () => {

  // }

  // const startSale = () => {

  // }

  // const transferNft = () => {

  // }

  return (
    <div>
      <Header />
      <main className="home_pading_section infopage">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="deatil_img_sectiuon">
                <div className="label_section">
                  <span className="catagory_label">
                    {" "}
                    {nftData && nftData.NFTtype == "Music"
                      ? "Audio"
                      : nftData && nftData.NFTtype == "Image"
                      ? "Art"
                      : nftData && nftData.NFTtype == "Video"
                      ? "Video"
                      : nftData && nftData.NFTtype == "Virtual worlds"
                      ? "Virtual worlds"
                      : nftData && nftData.NFTtype == "Trading Cards"
                      ? "Trading Cards"
                      : nftData && nftData.NFTtype == "Gaming"
                      ? "Gaming"
                      : ""}{" "}
                  </span>
                  {/* <span className="ulock_label">UNLOCKABLE</span> */}
                </div>
                <div className="img_section_">
                  {/* {
                    nftBool == false ? <img src={homesectio2} /> : <img src={nftData.music } />
                  } */}

                  {nftBool == false ? (
                    // <img src={homesectio2} />
                    <div>
                      <center>
                        <div class="fa-3x mt-5 pt-5">
                          <i class="fas fa-spinner fa-spin"></i>
                        </div>
                      </center>
                    </div>
                  ) : nftData.NFTtype == "Music" ? (
                    <span>
                      <img
                        src={
                          api.baseURL +
                          "/" +
                          nftData.cover_image.split("public")[1]
                        }
                      />
                      <ReactAudioPlayer
                        src={nftData && nftData.cloudUrl}
                        controls
                        controlsList="nodownload"
                      />
                    </span>
                  ) : nftData.NFTtype == "Image" || nftData.NFTtype == "Virtual worlds" || nftData.NFTtype == "Trading Cards" || nftData.NFTtype == "Gaming" ? (
                    <img src={nftData.cloudUrl} />
                  ) : (
                    <span>
                      {/* <img  src={api.baseURL+"/"+nftData.cover_image.split('public')[1]}  />  */}
                      <a href={nftData.music} target="_blank">
                        {/* <ReactPlayer url={nftData.music} /> */}
                        <video width="100%" height="300" controls controlsList="nodownload">
                          <source src={nftData && nftData.cloudUrl} type="video/mp4" />
                        </video>
                      </a>
                    </span>
                  )}
                </div>
                {/* <div className="button_sher_link">
                  <Button>
                    <i class="fas fa-upload"></i>
                  </Button>
                  <Button>
                    <i class="fas fa-heart"></i>
                  </Button>
                  <Button>
                    <i class="fas fa-ellipsis-h"></i>
                  </Button>
                </div> */}
              </div>
              {/* <div className="bootom_imag_labe">
                <div className="d-flex">
                  <p>
                    <i class="fas fa-eye"></i>2, 100
                  </p>
                  <p>
                    <i class="fas fa-heart"></i>123
                  </p>
                </div>
                <span>icon</span>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="pading_ooo">
                <div className="details_sectiond">
                  <h1>{nftData && nftData.name} </h1>
                  <p className="first_details">
                    <span className="lable_price">
                      {" "}
                      {nftData && nftData.initial_price} {currency}
                    </span>{" "}
                    {/* <span className="lable_price_usd">$4,422.87</span> 10 mints */}
                    {/* left */}
                  </p>

                  <p className="description">
                    {nftData && nftData.description}
                  </p>
                  {/* <div className="chalance">
                    <label>Challenge:</label>
                    <p>
                      Create a minted art of a Olympic Athlete Lorem ipsum
                      dolor...
                    </p>
                  </div> */}
                  {/* <p className="current_price">
                    Current place: <span>#42</span>
                  </p>

                  <p className="hash_tag">#fanart #digital #art #creative</p> */}
                </div>

                <div className="tab_sectionSs second_section">
                  <ul class="nav nav-tabs justify-content-start">
                    {/* <li class="active">
                      <a data-toggle="tab" href="#Current" class="active">
                        Current
                      </a>
                    </li> */}
                    <li class="active">
                      <a data-toggle="tab" href="#Owners" class="active">
                        Owners
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#History">
                        History
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Bids">
                        Bids
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab_ddddd  ">
                  <div class="tab-content">
                    {/* <div id="Current" class="tab-pane fade in active show">
                      <div className="flex_conteteded">
                        <div className="d-flex justify-content-start align-items-center list_oner">
                          <img src={homei_4} />
                          <div>
                            <small>Owner</small>
                            <p>Enrico Cole</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center list_oner">
                          <img src={homei_4} />
                          <div>
                            <small>Creator</small>
                            <p>Enrico Cole</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div id="Owners" class="tab-pane fade in active show">
                      {/* <div className="flex_conteteded">
                        <div className="d-flex justify-content-start align-items-center list_oner">
                        {
                        owner && owner.profile_image == "" ? 
                        <img src={homei_4} />
                        :
                        <img src={ owner &&  api.baseURL+"/"+owner.profile_image.split('public')[1] } />

                      }
                          
                          <div>
                            <small>Owner</small>
                            <p>{owner.profile_name}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center list_oner">
                        {
                        current && current.profile_image == "" ? 
                        <img src={homei_4} />
                        :
                        <img src={ current &&  api.baseURL+"/"+current.profile_image.split('public')[1] } />

                      }
                          <div>
                            <small>Creator</small>
                            <p>{current.profile_name}</p>
                          </div>
                        </div> */}
                      <div className="flex_conteteded">
                        {/* <div className="d-flex justify-content-start align-items-center list_oner">
                        {
                        data && data.profile_image == "" ? 
                        <img src={homei_4} />
                        :
                        <img src={ data &&  api.baseURL+"/"+data.profile_image.split('public')[1] } />

                      }
                          
                          <div>
                            <small>Owner</small>
                            {
                        data && data.profile_name == "" ? "" : 
                            <p>{data.profile_name}</p>
                           }
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center list_oner">
                        {
                        data && data.profile_image == "" ? 
                        <img src={homei_4} />
                        :
                        <img src={ data &&  api.baseURL+"/"+data.profile_image.split('public')[1] } />

                      }
                          <div>
                            <small>Creator</small>
                            {
                        data && data.profile_name == "" ? "" : 
                            <p>{data.profile_name}</p>
                           }
                          </div>
                        </div> */}
                        <div className="">

                          {nftData && nftData.type=="multiple" ?
                          (<div className="d-flex justify-content-start align-items-center list_oner">
                            <div>
                              <small>Owner </small> 
                              {nftBalance>0?
                              (<p>{account} </p>):(<p>{nftData && nftData.owned_by}</p>)
                              }
                            </div>
                          </div>):("")
                          }

                          {nftData && nftData.type=="single" ?
                          (<div className="d-flex justify-content-start align-items-center list_oner">
                            <div>
                              <small>Owner </small> 
                              <p>{nftData && nftData.owned_by} </p>
                            </div>
                          </div>):("")
                          }

                          {nftData && nftData.type=="multiple" ?
                          (<div className="d-flex justify-content-start align-items-center list_oner">
                            <div>
                              <small>Quantity </small> 
                              {nftBalance>0?
                              (<p>{nftBalance} </p>):(<p>{nftData.quantity}</p>)
                              }
                            </div>
                          </div>):("")
                          }
                          <div className="d-flex justify-content-start align-items-center list_oner">
                            {/* <img src={homei_4} /> */}
                            <div>
                              <small>Creator</small>
                              <p>{nftData && nftData.created_by} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="History" class="tab-pane fade">
                      <div className="flex_conteteded">
                        {tx_history &&
                          tx_history.map((item, i) => {
                            return (
                              <div className="d-flex justify-content-start align-items-center list_oner">
                                <div>
                                  <p>Type: {item.selling_type} </p>
                                  <p>By {item.to}</p>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div id="Bids" class="tab-pane fade">
                      <div className="flex_conteteded">
                        {auctionData &&
                          auctionData.bidders.map((item, i) => {
                            return (
                              <div className="d-flex justify-content-start align-items-center list_oner">
                                <div>
                                  <p>Bid Price: {item.amount} </p>
                                  <p>By {item.bidder_address}</p>
                                </div>
                              </div>
                            )
                          })}

                        {!auctionData ? (
                              <div className="d-flex justify-content-start align-items-center list_oner">
                                <div>
                                  <p>No Bids Found</p>
                                </div>
                              </div>
                            ) : (" ")
                          }
                      </div>
                    </div>
                  </div>
                </div>

                {/* {nftData ? (
                  <div className="card_sectioio">
                    <div className="card_inside_conten">
                      <div>
                        {auctionData && auctionData.highest_bidder ? (
                          <p>
                            Highest bid by{" "}
                            {auctionData.highest_bidder.substring(0, 15)}...
                          </p>
                        ) : (
                          ""
                        )}
                        <h3>
                          {auctionData
                            ? auctionData.highest_bid === ""
                              ? "0 " + currency
                              : auctionData.highest_bid + " " + currency
                            : ""}
                          <span className="ust_price"></span>
                        </h3>

                        <h4 className="mt-0 mb-2">
                          {auctionTime ? (
                            Date.now() + auctionTime < Date.now() ? (
                              "Auction Ended"
                            ) : (
                              <Countdown date={Date.now() + auctionTime} />
                            )
                          ) : (
                            ""
                          )}
                        </h4>
                      </div>
                    </div>
                    <div className="banner_butn_section">
                      {nftData &&
                      nftData.owned_by.toLowerCase() ===
                        account.toLowerCase() ? (
                        nftData && nftData.on_sale ? (
                          <div>
                            <div>
                              {loading == true ? (
                                <Button
                                  className="btn btn-primary p-button"
                                  type="button"
                                >
                                  Loading...{" "}
                                </Button>
                              ) : (
                                <Button
                                  className="btn btn-primary p-button"
                                  type="button"
                                  onClick={() => stopSale()}
                                >
                                  Stop Sale
                                </Button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div>
                              <Button
                                className="btn btn-primary p-button"
                                type="button"
                                data-toggle="modal"
                                data-target="#startSale"
                              >
                                Start Sale
                              </Button>
                            </div>
                          </div>
                        )
                      ) : nftData && nftData.on_sale ? (
                        <div>
                          <div>
                            <Button
                              className="btn btn-primary p-button"
                              type="button"
                              data-toggle="modal"
                              data-target="#Purchase"
                            >
                              Purchase now
                            </Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {nftData &&
                      nftData.type == "single" &&
                      nftData.owned_by.toLowerCase() ===
                        account.toLowerCase() ? (
                        nftData.on_auction ? (
                          <span>
                            {Date.now() + auctionTime < Date.now() ? (
                              <Button
                                className="btn btn-primary p-button"
                                onClick={() => endAuction()}
                              >
                                End Auction
                              </Button>
                            ) : (
                              <Button
                                className="btn btn-primary p-button"
                                onClick={() => endAuction()}
                              >
                                Stop Auction
                              </Button>
                            )}
                          </span>
                        ) : (
                          <Button
                            className="btn btn-primary p-button"
                            data-toggle="modal"
                            data-target="#Auction"
                          >
                            Start Auction
                          </Button>
                        )
                      ) : nftData && nftData.on_auction ? (
                        <span>
                          {Date.now() + auctionTime < Date.now() ? (
                            ""
                          ) : (
                            <Button
                              className="btn btn-primary p-button"
                              data-toggle="modal"
                              data-target="#Place"
                            >
                              Place a bid
                            </Button>
                          )}
                        </span>
                      ) : (
                        ""
                      )}

                      {nftData.owned_by.toLowerCase() ===
                      account.toLowerCase() ? (
                        <Button
                          className="btn btn-primary p-button"
                          data-toggle="modal"
                          data-target="#Transfer"
                        >
                          Transfer
                        </Button>
                      ) : (
                        ""
                      )}

                      {withdrawModal ? (
                        <Button
                          className="btn btn-primary p-button "
                          onClick={() => withDraw()}
                        >
                          Withdraw
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )} */}

{nftData && nftData.type=='single' && 
        nftData.owned_by.toLowerCase() ===
          account.toLowerCase() ? (

 <div className="card_sectioio">
      <div className="card_inside_conten">
        <div>
          {auctionData && auctionData.highest_bidder ? (
            <p>
              Highest bid by{" "}
              {auctionData.highest_bidder.substring(0, 15)}...
            </p>
          ) : (
            ""
          )}
          <h3>
            {auctionData
              ? auctionData.highest_bid === ""
                ? ""
                : auctionData.highest_bid + " " + currency
              : ""}
            <span className="ust_price"></span>
          </h3>

          {/* <h4 className="mt-0 mb-2">
            {auctionTime ? (
              Date.now() + auctionTime < Date.now() ? (
                auctionData && auctionData.highest_bidder ? (
                <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Execute Auction
                </Button>
                ): (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => cancelAuction()}
                >
                  Cancel Auction
                </Button>
                )
              ) : (
                <Countdown date={Date.now() + auctionTime} />
              )
            ) : (
              ""
            )}
          </h4> */}

          <h4 className="mt-0 mb-2">
            {auctionTime ? (
              Date.now() + auctionTime > Date.now() ? (
                <Countdown date={Date.now() + auctionTime} />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </h4>
        </div>
        </div>

         <div className="banner_butn_section">
          {nftData.on_sale  ? (
            // <div>
            //   <div>
            //     {
                loading == true ? (
                  <Button
                    className="btn btn-primary p-button"
                    type="button"
                  >
                    Loading...{" "}
                  </Button>
                ) : (
                  networkcurrentref.current == nftData.network ? (
                  <Button
                    className="btn btn-primary p-button"
                    type="button"
                    onClick={() => stopSale()}
                  >
                    Stop Sale
                  </Button>
                  ):(
                    <Button
                    className="btn btn-primary p-button"
                    type="button"
                    onClick={() => Changenetwork(nftData.network)}
                  >
                    Stop Sale
                  </Button>
                  )
                )
            //     }
            //   </div>
            // </div>
          ) : (
            // <div>
            //   <div>
            //   {
              networkcurrentref.current == nftData.network ? (
                <Button
                  className="btn btn-primary p-button"
                  type="button"
                  data-toggle="modal"
                  data-target="#startSale"
                >
                  Start Sale
                </Button>
              ): (
                <Button
                  className="btn btn-primary p-button"
                  type="button"
                  onClick={() => Changenetwork(nftData.network)}
                >
                  Start Sale
                </Button>
              )
            // }
            //   </div>
            // </div>
          )}
{/* 
        {nftData &&
        nftData.type == "single" &&
          nftData.on_auction ? (
            <span>
              {auctionData && auctionData.highest_bidder && Date.now() + auctionTime < Date.now() ? (
                networkcurrentref.current == nftData.network ? (
                <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Execute Auction
                </Button>
                ): (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => Changenetwork(nftData.network)}
                >
                  Execute Auction
                </Button>
                )
              ) : (
                <span>
                {auctionData && auctionData.highest_bid === ""? (
                   networkcurrentref.current == nftData.network ? (
                 <Button
                 className="btn btn-primary p-button"
                 onClick={() => cancelAuction()}
               >
                 Cancel Auction
               </Button>
                   ):(
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => Changenetwork(nftData.network)}
                >
                  Cancel Auction
                </Button> 
                   )
                ): (
                  networkcurrentref.current == nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Stop Auction
                </Button>
                  ): (
                  <Button
                    className="btn btn-primary p-button"
                    onClick={() => Changenetwork(nftData.network)}
                  >
                    Stop Auction
                  </Button>
                  )
                )
                }
                
                </span>
              )}
            </span>
          ) : ("") } */}

       {/* {nftData &&
        nftData.type == "single" &&
          nftData.on_auction ? (
            <span>
              {
              auctionData && auctionData.highest_bidder && Date.now() + auctionTime < Date.now() ? (
                networkcurrentref.current == nftData.network ? (
                <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Execute Auction
                </Button>
                ): (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => Changenetwork(nftData.network)}
                >
                  Execute Auction
                </Button>
                )
              ) : (

                ""
                )
              }

              {
              auctionData && auctionData.highest_bidder && Date.now() + auctionTime > Date.now() ? (
                networkcurrentref.current == nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Stop Auction
                </Button>
                    ):(
                   <Button
                   className="btn btn-primary p-button"
                   onClick={() => Changenetwork(nftData.network)}
                 >
                   Stop Auction
                 </Button> 
                )
              ) : (
                ""
                )
              
              }

              {
              networkcurrentref.current == nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => cancelAuction()}
                >
                  Cancel Auction
                </Button>
                    ):(
                   <Button
                   className="btn btn-primary p-button"
                   onClick={() => Changenetwork(nftData.network)}
                 >
                   Cancel Auction
                 </Button> 
                )
                
                }
            </span>
          ) : ("") } */}

      {nftData &&
        nftData.type == "single" &&
          nftData.on_auction && auctionData && auctionData.highest_bidder && Date.now() + auctionTime < Date.now() ? (
                networkcurrentref.current == nftData.network ? (
                <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Execute Auction
                </Button>
                ): (
                  nftData &&
        nftData.type == "single" &&
          nftData.on_auction && auctionData && auctionData.highest_bidder && Date.now() + auctionTime < Date.now() &&
                networkcurrentref.current != nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => Changenetwork(nftData.network)}
                >
                  Execute Auction
                </Button>
                ) : ("")
              ) 
              ) : (

                ""
                )
              }

              {nftData &&
        nftData.type == "single" &&
          nftData.on_auction && auctionData && auctionData.highest_bidder && Date.now() + auctionTime > Date.now() ? (
                networkcurrentref.current == nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => endAuction()}
                >
                  Stop Auction
                </Button>
                  ):
                ( nftData &&
                  nftData.type == "single" &&
                    nftData.on_auction && auctionData && auctionData.highest_bidder && Date.now() + auctionTime > Date.now() && networkcurrentref.current != nftData.network ? (
                  
                  
                   <Button
                   className="btn btn-primary p-button"
                   onClick={() => Changenetwork(nftData.network)}
                 >
                   Stop Auction
                 </Button> 
                ): ("")
                )
                ) : ("")
                
                }

              {
              nftData &&
              nftData.type == "single" &&
                nftData.on_auction && networkcurrentref.current == nftData.network ? (
                  <Button
                  className="btn btn-primary p-button"
                  onClick={() => cancelAuction()}
                >
                  Cancel Auction
                </Button>
                    ):
                    (
                        nftData &&
                        nftData.type == "single" &&
                          nftData.on_auction && networkcurrentref.current != nftData.network ? (

                   <Button
                   className="btn btn-primary p-button"
                   onClick={() => Changenetwork(nftData.network)}
                 >
                   Cancel Auction
                 </Button> 
                      ): ("")
                )
                
                }
            {/* </span>
          ) : ("") } */}
          
          {nftData &&
        nftData.type == "single" &&
        !nftData.on_auction ? (
          networkcurrentref.current == nftData.network ? (
            <Button
              className="btn btn-primary p-button"
              data-toggle="modal"
              data-target="#Auction"
            >
              Start Auction
            </Button>
          ): (
            nftData &&
        nftData.type == "single" &&
        !nftData.on_auction && networkcurrentref.current != nftData.network ? (
            <Button
              className="btn btn-primary p-button"
              onClick={() => Changenetwork(nftData.network)}
            >
              Start Auction
            </Button>
          ) : ("")
          )
          ) : ("")}

         {networkcurrentref.current == nftData.network ? (
          <Button
            className="btn btn-primary p-button"
            data-toggle="modal"
            data-target="#Transfer"
          >
            Transfer
          </Button>
         ) : (
          <Button
          className="btn btn-primary p-button"
          onClick={() => Changenetwork(nftData.network)}
        >
          Transfer
        </Button>
         )}

        {withdrawModal ? (
          networkcurrentref.current == nftData.network ? (
          <Button
            className="btn btn-primary p-button "
            onClick={() => withDraw()}
          >
            Withdraw
          </Button>
          ) : (
            <Button
            className="btn btn-primary p-button "
            onClick={() => Changenetwork(nftData.network)}
          >
            Withdraw
          </Button>
          )
        ) : (
          ""
        )}
        </div>
    </div>
    ) : (
    ""
    )}

{nftData && nftData.type=='multiple' && nftBalance > 0 ? (
<div className="card_sectioio">
     <div className="banner_butn_section">
      {nftData.on_sale && saleOwner.toLowerCase() == account.toLowerCase() ? (
        // <div>
        //   <div>
        //     {
            loading == true ? (
              <Button
                className="btn btn-primary p-button"
                type="button"
              >
                Loading...{" "}
              </Button>
            ) : (
              networkcurrentref.current == nftData.network ? (
              <Button
                className="btn btn-primary p-button"
                type="button"
                onClick={() => stopSale()}
              >
                Stop Sale
              </Button>
              ): (
                <Button
                className="btn btn-primary p-button"
                type="button"
                onClick={() => Changenetwork(nftData.network)}
              >
                Stop Sale
              </Button>
              )
            )
        //     }
        //   </div>
        // </div>
      ) : (
        // <div>
        //   <div>
        //     {
            networkcurrentref.current == nftData.network ? (
            <Button
              className="btn btn-primary p-button"
              type="button"
              data-toggle="modal"
              data-target="#startSale"
            >
              Start Sale
            </Button>
            ) : (
              <Button
              className="btn btn-primary p-button"
              type="button"
              onClick={() => Changenetwork(nftData.network)}
            >
              Start Sale
            </Button>
            )
        //   }
        //   </div>
        // </div>
      )}
      
      {networkcurrentref.current == nftData.network ? (
      <Button
        className="btn btn-primary p-button"
        data-toggle="modal"
        data-target="#Transfer"
      >
        Transfer
      </Button>
      ) : (
        <Button
        className="btn btn-primary p-button"
        onClick={() => Changenetwork(nftData.network)}
      >
        Transfer
      </Button>
      )}
    </div>
</div>
) : (
""
)}

{/* {nftData && nftData.type=='multiple'  && nftBalance == 0  ? (
<div className="card_sectioio">
     <div className="banner_butn_section">
      {nftData.on_sale && saleOwner.toLowerCase() == account.toLowerCase() ? (
        <div>
          <div>
            {loading == true ? (
              <Button
                className="btn btn-primary p-button"
                type="button"
              >
                Loading...{" "}
              </Button>
            ) : (
              networkcurrentref.current == nftData.network ? (
              <Button
                className="btn btn-primary p-button"
                type="button"
                onClick={() => stopSale()}
              >
                Stop Sale
              </Button>
              ): (
                <Button
                className="btn btn-primary p-button"
                type="button"
                onClick={() => Changenetwork(nftData.network)}
              >
                Stop Sale
              </Button>
              )
            )}
          </div>
        </div>
      ) : (
        <div>
          {nftData.owned_by.toLowerCase() ===
          account.toLowerCase() ? (
          <div>
            {networkcurrentref.current == nftData.network ? (
            <Button
              className="btn btn-primary p-button"
              type="button"
              data-toggle="modal"
              data-target="#startSale"
            >
              Start Sale
            </Button>
            ) : (
              <Button
              className="btn btn-primary p-button"
              type="button"
              onClick={() => Changenetwork(nftData.network)}
            >
              Start Sale
            </Button>
            )}
          </div>
         ) : ("")}
        </div>
      )}
      {nftData.owned_by.toLowerCase() ===
          account.toLowerCase() ? (
      <div>
      {networkcurrentref.current == nftData.network ? (
      <Button
        className="btn btn-primary p-button"
        data-toggle="modal"
        data-target="#Transfer"
      >
        Transfer
      </Button>
      ) : (
        <Button
        className="btn btn-primary p-button"
        onClick={() => Changenetwork(nftData.network)}
      >
        Transfer
      </Button>
      )}
      </div>
      ): ("")}
    </div>
</div>
) : (
""
)} */}

{nftData &&
    nftData.owned_by.toLowerCase() !==
      account.toLowerCase() && saleOwner.toLowerCase() != account.toLowerCase() && (withdrawModal || nftData.on_sale || nftData.on_auction) ? (

<div className="card_sectioio">
  <div className="card_inside_conten">
    <div>
      { auctionData && auctionData.highest_bidder ? (
        <p>
          Highest bid by{" "}
          {auctionData.highest_bidder.substring(0, 15)}...
        </p>
      ) : (
        ""
      )}
      <h3>
        {auctionData
          ? auctionData.highest_bid === ""
            ? " "
            : auctionData.highest_bid + " " + currency
          : ""}
        <span className="ust_price"></span>
      </h3>

      <h4 className="mt-0 mb-2">
        {auctionTime ? (
          Date.now() + auctionTime < Date.now() ? (
            ""
          ) : (
            <Countdown date={Date.now() + auctionTime}/>
          )
        ) : (
          ""
        )}
      </h4>
    </div>
    </div>

     <div className="banner_butn_section">
      {loginCheck == true && nftData.on_sale ? (
        // <div>
        //     <div>
        //     {
            networkcurrentref.current == nftData.network ? (
              <Button
                className="btn btn-primary p-button"
                type="button"
                data-toggle="modal"
                data-target="#Purchase"
              >
                Purchase now
              </Button>
            ) : (
              <Button className="btn btn-primary p-button"
              type="button"
              onClick={() => Changenetwork(nftData.network)}
              >
              Purchase now
            </Button>
            )
          //   }
          //   </div>
          // </div>
      ) :  (
        ""
    )}

  {/* {loginCheck == false && nftData.on_sale ? (
          <div>
          <div>
              <Button
              className="btn btn-primary p-button"
              type="button"
              onClick = {() => connectWallet()}
              >
              Purchase now
              </Button>
          </div>
          </div>
        ) :  (
          ""
      )}

    {loginCheck == true && nftData &&
    nftData.type == "single" &&
      nftData.on_auction ? (
        <span>
        {Date.now() + auctionTime < Date.now() ? (
            ""
        ) : (
          networkcurrentref.current == nftData.network ? (
            <Button
            className="btn btn-primary p-button"
            data-toggle="modal"
            data-target="#Place"
            >
            Place a bid
            </Button>
          ) : (
            <Button
            className="btn btn-primary p-button"
            onClick={() => Changenetwork(nftData.network)}
            >
            Place a bid
            </Button>
          )
        )}
        </span>
      ) : (
        ""
    )}

{loginCheck == false && nftData &&
    nftData.type == "single" &&
      nftData.on_auction ? (
        <span>
        {Date.now() + auctionTime < Date.now() ? (
            ""
        ) : (
          <Button
          className="btn btn-primary p-button"
          onClick = {() => connectWallet()}
          >
          Place a bid
          </Button>
        )}
        </span>
      ) : (
        ""
    )} */}

{loginCheck == false ? (
  nftData.on_sale ? (
              <Button
              className="btn btn-primary p-button"
              type="button"
              onClick = {() => connectWallet()}
              >
              Purchase now
              </Button>
        ) :  (
          ""
      )):("")}

    {loginCheck == true && nftData &&
    nftData.type == "single" &&
      nftData.on_auction ? (
        
        Date.now() + auctionTime < Date.now() ? (
            ""
        ) : (
          networkcurrentref.current == nftData.network ? (
            <Button
            className="btn btn-primary p-button"
            type="button"
            data-toggle="modal"
            data-target="#Place"
            >
            Place a bid
            </Button>
          ) : (
            <Button
            className="btn btn-primary p-button"
            type="button"
            onClick={() => Changenetwork(nftData.network)}
            >
            Place a bid
            </Button>
          )
        )
      ) : 
      (
        ""
      )
    }

{loginCheck == false && nftData &&
    nftData.type == "single" &&
      nftData.on_auction ? (
        
        Date.now() + auctionTime < Date.now() ? (
            ""
        ) : (
          <Button
          className="btn btn-primary p-button"
          type="button"
          onClick = {() => connectWallet()}
          >
          Place a bid
          </Button>
        )
      ) : (
        ""
    )}

{withdrawModal ? (
      networkcurrentref.current == nftData.network ? (
      <Button
        className="btn btn-primary p-button "
        onClick={() => withDraw()}
      >
        Withdraw
      </Button>
      ) : (
        <Button
        className="btn btn-primary p-button "
        onClick={() => Changenetwork(nftData.network)}
      >
        Withdraw
      </Button>
      )
    ) : (
      ""
    )}

    
    </div>
 

</div>
) : (
""
)}


              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <div id="Purchase" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">CHECKOUT</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="bid_model_123">
                <div class="text_bit_detail margin_boreef">
                  <span>Item</span>
                  <span>Subtotal</span>
                </div>
                <div class="img_flex_buy margin_boreef pb-3">
                  <div>
                    {/* <img src={homei_4} alt="" /> */}
                    {nftBool == true && nftData.NFTtype == "Music" ? (
                    <span>
                      <img
                        src={
                          api.baseURL +
                          "/" +
                          nftData.cover_image.split("public")[1]
                        }
                      />
                      <ReactAudioPlayer
                        src={nftData && nftData.cloudUrl}
                        controls
                        controlsList="nodownload"
                      />
                    </span>
                  ) : nftBool == true && (nftData.NFTtype == "Image" || nftData.NFTtype == "Virtual worlds" || nftData.NFTtype == "Trading Cards" || nftData.NFTtype == "Gaming") ? (
                    <img src={nftData && nftData.cloudUrl} />
                  ) : (
                    // <span>
                        // <video width="100" height="100" controls controlsList="nodownload">
                        //   <source src={nftData && nftData.cloudUrl} type="video/mp4" />
                        // </video>
                        <ReactPlayer url={nftData && nftData.cloudUrl}  controls="true" width="100px" height="100px"/>
                    // </span>
                  )}
                  </div>
                  <div class="body_detail">
                    <p>
                      Description set by user in previous steps of the new NFT
                      process
                    </p>
                  </div>
                  <div class="body_detail">
                    <p>Initial price:</p>
                    <small>
                      ({nftData && nftData.initial_price + " " + currency})
                    </small>
                  </div>
                  {/* <div class="body_detail">
                    <p>Transfer price:</p>
                    <small>(0.001 {currency})</small>
                  </div> */}
                </div>
                {nftData && nftData.type == "multiple" ? (
                <div class="img_flex_buy margin_boreef pb-3 justify-content-between">
                  <div class="body_detail">
                  <p>Enter Quantity:</p>
                  </div>
                  {/* <div className="form-class"> */}
                  <div class="body_detail">
                  <small>
                  <input
                      type="number"
                      onChange={(e) => set_qty(e.target.value)}
                    />
                  </small>
                  </div>
                    
                  {/* </div> */}
                </div>
                ): ""}
                {nftData && nftData.type == "multiple" ? (
                <div class="img_flex_buy margin_boreef pb-3 justify-content-between">
                  <div class="body_detail">
                    <p>Available Quantity for sale</p>
                  </div>
                  <div class="body_detail">
                    <small>
                      {saleQty}
                    </small>
                  </div>
                </div>
                ): ""}
                {nftData && nftData.type == "multiple" ? (
                <div class="img_flex_buy margin_boreef pb-3 justify-content-between">
                  <div class="body_detail">
                    <p>Total</p>
                  </div>
                  <div class="body_detail">
                    <small>
                      ({parseFloat(nftData && nftData.initial_price * qty)}{" "}
                      {currency})
                    </small>
                  </div>
                </div>
                ):(
                  <div class="img_flex_buy margin_boreef pb-3 justify-content-between">
                  <div class="body_detail">
                    <p>Total</p>
                  </div>
                  <div class="body_detail">
                    <small>
                      ({parseFloat(nftData && nftData.initial_price)}{" "}
                      {currency})
                    </small>
                  </div>
                </div>
                )}
                <div class="form-check redio_chech">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    value="yes"
                    onChange={(e) => set_terms(e.target.value)}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    By checking this box, I agree{" "}
                    <a href="">Terms of Service</a>
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer model_footer_sec">
              {/* <a onClick={() => buyNft()}>
                <button type="button" class="btn btn-secondary w-100">
                  Buy
                </button>
              </a> */}

              {buyLoading == true ? (
                <Button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  class="btn btn-secondary w-100"
                  onClick={() => buyNft()}
                >
                  Buy
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

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
                  {auctionData
                    ? auctionData.highest_bid === ""
                      ? "0 " + currency
                      : auctionData.highest_bid + " " + currency
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
                <Button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  class="btn btn-secondary w-100"
                  onClick={() => sendBid()}
                >
                  Bid Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="Auction" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Auction</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div className="place_bit">
                <div className="form-class">
                  <label>Enter Auction End Time(in hours)</label>
                  <input
                    type="number"
                    placeholder="Ex: 5hrs"
                    onChange={(e) => set_auctionTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer model_footer_sec">
              {auctionLoading == true ? (
                <button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </button>
              ) : (
                // <a onClick={() => startAuction()}>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => startAuction()}
                >
                  Start Auction
                </button>
                // </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="startSale" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Start Sale</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div className="place_bit">
                <div className="form-class">
                  <label>Instant Sale Price:</label>
                  <input
                    type="number"
                    onChange={(e) => setInitialPrice(e.target.value)}
                  />
                </div>
                {nftData && nftData.type == "multiple" ? (
                  <div className="form-class">
                    <label>Enter Quantity:</label>
                    <input
                      type="number"
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="modal-footer model_footer_sec">
              {loading == true ? (
                <button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </button>
              ) : (
                // <a onClick={() => startSale()}>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => startSale()}
                >
                  Start Sale
                </button>
                // </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="Transfer" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Transfer Token</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div className="place_bit">
                <div className="form-class">
                  <label>Enter Transfer Address</label>
                  <input
                    type="text"
                    onChange={(e) => setSender(e.target.value)}
                  />
                </div>
              </div>

              {nftData && nftData.type == "multiple" ? (
                <div className="place_bit">
                  <div className="form-class">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      onChange={(e) => setTransfer(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div class="modal-footer model_footer_sec">
              {transferLoad == true ? (
                <button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </button>
              ) : (
                // <a onClick={() => startAuction()}>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => transferNft()}
                >
                  Transfer Token
                </button>
                // </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="Withdraw" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Withdraw</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            {/* <div class="modal-body">
              <div className="place_bit">

                <div className="form-class">
                  <label>
                    Enter Address
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setwithdrawAddress(e.target.value)}
                  />
                </div>
              </div>
            </div> */}
            <div class="modal-footer model_footer_sec">
              {withdrawLoader == true ? (
                <Button type="button" class="btn btn-secondary w-100">
                  Loading...{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  class="btn btn-secondary w-100"
                  onClick={() => withDraw()}
                >
                  Withdraw
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
