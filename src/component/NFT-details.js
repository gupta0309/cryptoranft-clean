import React, { useEffect, useRef } from "react";
import useState from "react-usestateref";
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import { Link } from "react-router-dom";

import geomatry from "../image/newimg/geomatry.png";
import uil_comment from "../image/newimg/uil_comment-verify.png";
import descrioton from "../image/newimg/descrioton.png";
import prpos from "../image/newimg/prpos.png";
import level from "../image/newimg/level.png";
import start from "../image/newimg/start.png";
import profileImage from "../image/profileImage.jpeg";

import { Button } from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import { polygon_token_abi } from "../component/ABI/polygon_token_abi";
import { polygon_singlemint_abi } from "./ABI/polygon_singlemint_abi";
import { polygon_singlesale_abi } from "./ABI/polygon_singlesale_abi";
import { polygon_multimint_abi } from "./ABI/polygon_multimint_abi";
import { polygon_multisale_abi } from "./ABI/polygon_multisale_abi";
import { polygon_singleauction_abi } from "./ABI/polygon_singleauction_abi";
import { polygon_lazybuy_abi } from "./ABI/polygon_lazybuy_abi";

import { postMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { toastAlert } from "../lib/toastAlert";
import Moment from "moment";

import Web3 from "web3";
import Datetime from "react-datetime";
import { useNavigate } from "react-router-dom";
import { env } from "../service/envConfig";
import axios from "axios";
import { socket } from "../context/socket";

import {
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, Contract, ethers } from "ethers";

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
        <span>{days}d</span> :<span>{hours}h</span> :<span>{minutes}m</span> :
        <span>{seconds}s</span>
      </div>
    );
  }
};

function Home() {
  const navigate = useNavigate();
  const options = ["Choose Category", "two", "three"];
  const [userDatas, setUserDatas, userDatasref] = useState("");
  const [NFTDetails, setNftDetails] = useState("");
  const [levelPercent, setlevelPercent] = useState("");
  const [BuyLoading, setBuyLoading] = useState("");
  const [auctionData, setauctionDetails] = useState("");
  const [bidLoader, setBidLoader] = useState(false);
  const [bidAmount, setBidAmount] = useState();
  const [salePrice, setSalePrice] = useState();
  const [minimumBidPrice, setMinBid] = useState();
  const [Bidstartdate, setBidstartdate, Bidstartdateref] = useState("");
  const [Bidenddate, setBidenddate, Bidenddateref] = useState("");
  const [auctionTime, setauctionTimer, auctionTimerref] = useState("");
  const [fixedLoader, setfixedLoader] = useState(false);
  const [timedLoader, settimedLoader] = useState(false);
  const [goingLoader, setgoingLoader] = useState(false);
  const [CollectionNfts, setCollectionNfts, CollectionNftsref] = useState("");
  const [likeUsers, setLikes] = useState([]);
  const [saleQuantity, setsaleQuantity, saleQuantityref] = useState("");
  const [buyQuantity, setbuyQuantity, buyQuantityref] = useState("");
  const [networkcurrent, setNetwork, networkcurrentref] = useState("");
  const [Loading, setLoading] = useState("");
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [withdrawLoader, setWithDrawLoader] = useState(false);
  const [withdrawAmount, setWithDrawAmount] = useState();
  const [transferLoad, setTransferLoad] = useState(false);
  const [sender, setSender] = useState("");
  const [transferQuantity, setTransfer, transferQuantityref] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [nftfileType, setnftfileType, nftfileTyperef] = useState("");
  const [liked_nfts, setLiked, liked_nftsref] = useState("");
  const [nftResponse, setnftResponse, nftResponseref] = useState("");
  const [CurrNetwork, setCurrNetwork] = useState("");
  const [auctionLoader, setauctionLoader, auctionLoaderref] = useState(false);
  const [cancelauctionLoader, setcancelauctionLoader, cancelauctionLoaderref] =
    useState(false);
  const [gasFees, setgasFees, gasFeesref] = useState("");
  const childWindow = "";
  const myInput = useRef(null);
  const buycancel = useRef(null);
  const bidnow = useRef(null);
  const fixedsale = useRef(null);
  const timed = useRef(null);
  const ongoing = useRef(null);
  const transfer = useRef(null);

  const [singleSaletxid, setsingleSaletxid, singleSaletxidref] = useState("");
  const { isConnected, address } = useAppKitAccount();
  const { caipNetwork } = useAppKitNetwork();
  const { walletProvider } = useAppKitProvider("eip155");

  const userWallet = String(address).toLowerCase();

  useEffect(() => {
    // if (isConnected) return navigate("/walletconnect");
    var tokenID = window.location.href.split("/")[4];
    getTokenInfo(tokenID);
    getAuctionInfo(tokenID);
    setNetwork(caipNetwork.name);
    socket.connect();
    socket.on("socketResponse", async (response) => {
      console.log("socket response====", response);
      //window.location.reload(true);
      var tokenID = window.location.href.split("/")[4];
      getTokenInfo(tokenID);
      getAuctionInfo(tokenID);
    });
    getGasFee();
  }, [0]);

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  const getTokenInfo = async (tokenID) => {
    try {
      var obj = {
        token_id: tokenID,
      };
      var data = {
        apiUrl: apiService.getNFTDetails,
        payload: obj,
      };

      var resp = await postMethod(data);
      console.log(resp, "=-=-=-=-=resp=-=-=-");
      if (resp.status) {
        setNftDetails(resp.data);
        console.log(
          "item.BidendTime >= new Date().getTime()",
          resp.data.BidendTime
        );
        console.log(
          "item.BidendTime >= new Date().getTime()",
          new Date().getTime()
        );
        setUserDatas(resp.data.user_id);
        console.log(
          "formatDate(NFTDetails.Bidstartdate) + (+NFTDetails.BidTime * 1000)===",
          formatDate(resp.data.Bidstartdate) + +NFTDetails.BidTime * 1000
        );
        if (+resp.data.levelValue > 0 && +resp.data.levelOff > 0) {
          var percent = (+resp.data.levelValue / +resp.data.levelOff) * 100;
          console.log("percent====", percent);
          percent = parseFloat(percent).toFixed(2);
          console.log("percent  11111====", percent);
          setlevelPercent(percent);
        }
        var findObj = {
          collections_id: resp.data.collections_id,
          nft_id: resp.data._id,
        };
        getnftbyCollections(findObj);
        var like_users = [];
        if (resp.data.likes.length > 0) {
          for (var j = 0; j < resp.data.likes.length; j++) {
            like_users.push(resp.data.likes[j].wallet_address);
          }
          setLikes(like_users);
        }
        var filetype = resp.data.cloudUrl.split(".").pop().trim();
        setnftfileType(filetype);
        // toastAlert('success', resp.Message );
      } else {
        // toastAlert('error', resp.Message );
      }
    } catch (error) {}
  };

  const getAuctionInfo = async (tokenID) => {
    try {
      var obj = {
        nft_txid: tokenID,
      };
      var data = {
        apiUrl: apiService.getAuctionDetails,
        payload: obj,
      };

      var resp = await postMethod(data);
      console.log(resp, "=-=-=-=-=get auction resp=-=-=-");
      if (resp.status) {
        setauctionDetails(resp.data);
      } else {
        // toastAlert('error', resp.Message );
      }
    } catch (error) {}
  };

  const getProfile = async (owner) => {
    try {
      var payload = {
        walletAddress: owner,
      };
      var data = {
        apiUrl: apiService.getownerProfile,
        payload: payload,
      };
      var resp = await postMethod(data);
      if (resp.status) {
        setUserDatas(resp.Message);
        // console.log(resp, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      } else {
      }
    } catch (error) {}
  };

  const getnftbyCollections = async (findObj) => {
    try {
      var obj = {
        nft_id: findObj.nft_id,
        collections_id: findObj.collections_id,
      };
      var data = {
        apiUrl: apiService.getnftbyCollections,
        payload: obj,
      };

      var resp = await postMethod(data);
      if (resp.status) {
        setCollectionNfts(resp.data);
        setLiked(resp.liked_nfts);
      } else {
        // toastAlert('error', resp.Message );
      }
    } catch (error) {}
  };

  const copy = async (text, msg) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    //navigator.clipboard.writeText(text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toastAlert("success", msg);
  };
  const [currentbalance, setCurrentBalance] = useState();
  const getBalance = async (account) => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum);
        // Request account access if needed
        await window.ethereum.enable();
        // Get the current accounts
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0]; // Assuming you want the first account
        // Get the balance
        const balance = await web3.eth.getBalance(account);
        console.log("Account balance:", balance);
        setCurrentBalance(balance);
      } else {
        console.error(
          "Please install MetaMask or another Ethereum browser extension."
        );
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      throw error;
    }
  };

  const buyNft = async () => {
    console.log("call buy nft===");

    const ethersProvider = new BrowserProvider(
      walletProvider || window.ethereum
    );
    const signer = await ethersProvider.getSigner();

    try {
      setBuyLoading(true);
      console.log(NFTDetails.mintTypes, "call buy nft===");

      if (NFTDetails.mintTypes == "lazy") {
        let minting = await mintProcess(NFTDetails);
        if (minting.status) {
          let nft_data = minting.nftData;
          buycancel.current?.click();
          toastAlert("success", "Purchased Successfully");
          //navigate(`/NFTDetails/${nft_data.txHash}/${nft_data.network}`)
          window.location.href = `/NFTDetails/${nft_data.txHash}/${nft_data.network}`;
        } else {
          toastAlert("error", "Something went wrong, Please try again");
        }
      } else {
        if (NFTDetails.NFTtype == "multiple") {
          let total_price = parseFloat(NFTDetails.Price);
          var network = caipNetwork.name;
          var contract_address = env.polygon_multisale_contract;
          var contract_owner = env.polygon_multimint_contract;
          var abi = polygon_multisale_abi;
          var mint_abi = polygon_multimint_abi;

          var polygon_contract_address = env.polygon_token_contract;
          var polygon_contract_abi = polygon_token_abi;

          const mintContract = new Contract(contract_owner, mint_abi, signer);

          const tokenContract = new Contract(
            polygon_contract_address,
            polygon_contract_abi,
            signer
          );

          const purchaseContract = new Contract(contract_address, abi, signer);

          // const weiValue = ethers.parseEther(total_price?.toString());
          const weiValue = total_price * 10 ** 6;

          // const listings = await purchaseContract.collectibleListings(
          //   contract_owner,
          //   NFTDetails.tokenId
          // );
          // await listings.wait();
          // console.log("listings===", listings);

          const approve_mint_contract = await mintContract.setApprovalForAll(
            contract_address,
            "true"
          );
          const receiptt = await approve_mint_contract.wait();
          console.log("receipt===", receiptt);

          const approve_token_contract = await tokenContract.approve(
            contract_address,
            weiValue * buyQuantityref.current
          );
          const receipttt = await approve_token_contract.wait();
          console.log("receipt===", receipttt);

          const buy = await purchaseContract.purchaseCollectible(
            contract_owner,
            NFTDetails.tokenId,
            buyQuantityref.current,
            NFTDetails.owner,
            { value: weiValue * buyQuantityref.current }
          );
          const receipt = await buy.wait();
          console.log("receipt===", receipt);

          var obj = {
            toAddress: String(await signer.getAddress()).toLowerCase(),
            fromAddress: NFTDetails.owner,
            tokenId: NFTDetails.tokenId,
            initial_price: NFTDetails.Price,
            creator: NFTDetails.creator,
            royalty: NFTDetails.royalty,
            hash: receipt.hash,
            network: NFTDetails.network,
            type: NFTDetails.type,
            cloudUrl: NFTDetails.cloudUrl,
            NFTtype: NFTDetails.NFTtype,
            NFT_id: NFTDetails._id,
            Quantity: buyQuantityref.current,
          };

          var data = {
            apiUrl: apiService.buyNFT,
            payload: obj,
          };

          var resp = await postMethod(data);
          console.log("buy response===", resp);
          if (resp.status) {
            setBuyLoading(false);
            buycancel.current?.click();
            toastAlert("success", resp.Message);
            //window.location.href = `/NFTDetails/${resp.data.txHash}/${resp.data.network}`;
            window.location.href = `/NFTDetails/${receipt.hash}/${resp.data.network}`;
          } else {
            setBuyLoading(false);
            toastAlert("error", resp.Message);
          }
        } else {
          let total_price = parseFloat(NFTDetails.Price);
          var network = caipNetwork.name;
          var contract_address = env.polygon_singlesale_contract;
          var contract_owner = env.polygon_singlemint_contract;
          var abi = polygon_singlesale_abi;
          var mint_abi = polygon_singlemint_abi;

          var polygon_contract_address = env.polygon_token_contract;
          var polygon_contract_abi = polygon_token_abi;

          const mintContract = new Contract(contract_owner, mint_abi, signer);

          const purchaseContract = new Contract(contract_address, abi, signer);

          const tokenContract = new Contract(
            polygon_contract_address,
            polygon_contract_abi,
            signer
          );

          var lazy_status;
          if (NFTDetails.mint_type == "lazy") {
            lazy_status = true;
          } else {
            lazy_status = false;
          }
          try {
            const balance = await ethersProvider.getBalance(
              await signer.getAddress()
            );
            //console.log("Account balance:", balance);
            setCurrentBalance(balance);
            if (parseFloat(balance) > total_price) {
              let receipt;
              try {
                // Update purchase function to match ABI signature
                console.log("approve from token contract");
                const approveamt = total_price * 10 ** 6;
                const approvetrx = await tokenContract.approve(
                  contract_address,
                  approveamt
                );
                const approvereceipt = await approvetrx.wait();
                console.log("receipt===", approvereceipt);

                const approvetrxx = await mintContract.setApprovalForAll(
                  contract_address,
                  "true"
                );
                const approvereceiptt = await approvetrxx.wait();
                console.log("receipt===", approvereceiptt);

                const buy = await purchaseContract.purchase(
                  contract_owner,
                  NFTDetails.tokenId
                );
                receipt = await buy.wait();
                console.log("receipt===", receipt);
              } catch (error) {
                console.error("Error buying NFT:", error);
                setBuyLoading(false);
                toastAlert("error", "Transaction failed: " + error.message);
                return;
              }

              var obj = {
                toAddress: String(await signer.getAddress()).toLowerCase(),
                fromAddress: NFTDetails.owner,
                tokenId: NFTDetails.tokenId,
                initial_price: NFTDetails.Price,
                creator: NFTDetails.creator,
                royalty: NFTDetails.royalty,
                hash: receipt.hash,
                network: NFTDetails.network,
                type: NFTDetails.type,
                cloudUrl: NFTDetails.cloudUrl,
                NFTtype: NFTDetails.NFTtype,
                NFT_id: NFTDetails._id,
              };
              var data = {
                apiUrl: apiService.buyNFT,
                payload: obj,
              };

              var resp = await postMethod(data);
              console.log("buy response===", resp);
              if (resp.status) {
                setBuyLoading(false);
                buycancel.current?.click();
                toastAlert("success", resp.Message);
                window.location.href = `/NFTDetails/${resp.data.txHash}/${resp.data.network}`;
              } else {
                setBuyLoading(false);
                toastAlert("error", resp.Message);
              }
            } else {
              setBuyLoading(false);
              buycancel.current?.click();

              toastAlert("error", "Insufficient Balance");
            }
          } catch (error) {
            console.error("Error estimating gas:", error);
          }
        }
      }
    } catch (e) {
      console.log("purchaseContract error==", e);
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const sendBid = async () => {
    const ethersProvider = new BrowserProvider(
      walletProvider || window.ethereum
    );
    const signer = await ethersProvider.getSigner();
    try {
      setBidLoader(true);
      console.log("auctionData.highest_bid", auctionData);

      if (bidAmount < parseFloat(auctionData.minimumBid)) {
        toastAlert(
          "error",
          "Cannot Place bid: Bid price greater than minimum bid price " +
            auctionData.minimumBid
        );
        setBidLoader(false);
        return;
      } else if (bidAmount < parseFloat(auctionData.highest_bid)) {
        toastAlert(
          "error",
          "Cannot Place bid: Bid price greater than highest bid price " +
            auctionData.highest_bid
        );
        setBidLoader(false);
        return;
      }

      // setBidModalLoader(true);

      if (NFTDetails.NFTtype == "single") {
        var network = NFTDetails.network;
        var contract_address = env.polygon_singleauction_contract;
        var contract_owner = NFTDetails.owner;
        var abi = polygon_singleauction_abi;

        let biddingPrice = bidAmount * 10 ** 6;

        //ddddd
        var auctionmint_address = env.polygon_singlemint_contract;
        var mintAbi = polygon_singlemint_abi;

        var polygon_contract_address = env.polygon_token_contract;
        var polygon_contract_abi = polygon_token_abi;

        const tokenContract = new Contract(
          polygon_contract_address,
          polygon_contract_abi,
          signer
        );

        const approve_token_contract = await tokenContract.approve(
          contract_address,
          biddingPrice
        );
        const receipttt = await approve_token_contract.wait();
        console.log("receipt===Approve", receipttt);

        const mintContract = new Contract(contract_owner, mintAbi, signer);

        const approve_mint_contract = await mintContract.approve(
          auctionmint_address,
          NFTDetails.tokenId
        );
        const receiptttt = await approve_mint_contract.wait();
        console.log("mint===Approve", receiptttt);

        //ddd
        console.log("Bid===Go Bid");
        const auctionContract = new Contract(contract_address, abi, signer);

        console.log("biddingPrice", biddingPrice);
        console.log("NFTDetails.tokenId", NFTDetails.tokenId);

        const startBidding = await auctionContract.bid(
          NFTDetails.tokenId,
          biddingPrice
        );
        const bid_recipt = await startBidding.wait();
        const bidHash = bid_recipt.hash;
        console.log("bidHash===", bidHash);

        var bid_obj = {
          from: String(await signer.getAddress()).toLowerCase(),
          bidAmount: bidAmount,
          auction_address: contract_address,
          txHash: bidHash,
          token_id: NFTDetails.token_id,
          network: NFTDetails.network,
          type: NFTDetails.type,
          nft_txid: NFTDetails.txHash,
          nft_id: NFTDetails._id,
          owner: NFTDetails.owner,
        };

        var data = {
          apiUrl: apiService.bidNFT,
          payload: bid_obj,
        };

        var resp = await postMethod(data);
        console.log("bid response===", resp);

        if (resp.status) {
          setBidLoader(false);
          //window.location.reload(true)
          bidnow.current?.click();
          toastAlert("success", resp.Message);
          window.location.reload(true);
        } else {
          setBidLoader(false);
          toastAlert("error", resp.Message);
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };
  const formatDate = (dateval) => {
    try {
      var date_val = new Date(dateval);
      var time_converted = date_val.getTime();
      return +time_converted;
    } catch (error) {
      console.log("catch formatdate====", error);
    }
  };

  const startSale = async (nftData) => {
    console.log("nft data===ssssssssssss", nftData);
    const ethersProvider = new BrowserProvider(walletProvider);
    const signer = await ethersProvider.getSigner();
    try {
      setfixedLoader(true);
      console.log(nftData.mintTypes, "nftData.mintTypes");
      console.log(salePrice, "current.current");

      if (nftData.NFTtype !== "multiple") {

        console.log("call single");

        var current_chain = localStorage.getItem("chainId");
        var network = caipNetwork.name;
        var contract_address = env.polygon_singlesale_contract;
        var contract_owner = env.polygon_singlemint_contract;
        var abi = polygon_singlesale_abi;
        var mint_abi = polygon_singlemint_abi;

        const purchaseContract = new Contract(contract_address, abi, signer);

        // var weiValue = ethers.parseEther(salePrice);
        var weiValue = salePrice * 10 ** 6;

        var royalty_status = false;
        var sell_hash = "";
        // if(+salePrice > NFTDetails.Price)
        // {
        //   royalty_status = false;
        // }
        console.log("royalty_status===", royalty_status);

        const mintContract = new Contract(contract_owner, mint_abi, signer);

        const approveTx = await mintContract.approve(
          contract_address,
          nftData.tokenId
        );
        const approveReceipt = await approveTx.wait();
        console.log("approveReceipt===", approveReceipt);

        const addListingTx = await purchaseContract.addListing(
          weiValue,
          contract_owner,
          nftData.tokenId,
          false
        );
        const addListingReceipt = await addListingTx.wait();
        console.log("addListingReceipt===", addListingReceipt);

        setsingleSaletxid(addListingReceipt.hash);

        const saleData = {
          owner: NFTDetails.owner,
          tokenId: NFTDetails.tokenId,
          txHash: NFTDetails.txHash,
          Price: salePrice,
          sale_txid: sell_hash,
        };

        var data = {
          apiUrl: apiService.startSale,
          payload: saleData,
        };

        var resp = await postMethod(data);
        if (resp.status) {
          setfixedLoader(false);
          fixedsale.current?.click();
          toastAlert("success", resp.Message);
          window.location.reload(true);
          //toastAlert("success", resp.Message);
        } else {
          setfixedLoader(false);
          toastAlert("error", resp.Message);
        }
      } else {

        console.log("call multiple new transactions 01");

     
        const contract_address = env.polygon_multisale_contract;
        const contract_owner = env.polygon_multimint_contract;
        const abi = polygon_multisale_abi;
        const mint_abi = polygon_multimint_abi;

        const purchaseContract = new Contract(contract_address, abi, signer);

        var weiValue = salePrice * 10 ** 6;

        var royalty_status = false;
        var sell_hash = "";
        
        console.log("royalty_status===", royalty_status);

        const mintContract = new Contract(contract_owner, mint_abi, signer);

        console.log("Approving multiple NFT for sale...");
              const approveTx = await mintContract.setApprovalForAll(contract_address, "True");
              await approveTx.wait();
    
        // console.log("nftData.tokenIddddddd",nftData.tokenId);
        // console.log("saleQuantityref.currentttttt",saleQuantityref.current);


        const addListingTx = await purchaseContract.addCollectibleListing(
          weiValue,
          contract_owner,
          nftData.tokenId,
          saleQuantityref.current,
          false
        );
        const addListingReceipt = await addListingTx.wait();
        console.log("addListingReceipt===", addListingReceipt);

        setsingleSaletxid(addListingReceipt.hash);

        const saleData = {
          owner: NFTDetails.owner,
          tokenId: NFTDetails.tokenId,
          txHash: NFTDetails.txHash,
          Price: salePrice,
          Quantity: saleQuantityref.current,
          sale_txid: sell_hash,
        };

        var data = {
          apiUrl: apiService.startSale,
          payload: saleData,
        };

        var resp = await postMethod(data);
        if (resp.status) {
          setfixedLoader(false);
          fixedsale.current?.click();
          toastAlert("success", resp.Message);
          window.location.reload(true);
          //toastAlert("success", resp.Message);
        } else {
          setfixedLoader(false);
          toastAlert("error", resp.Message);
        }
      }
    } catch (e) {}
  };

  
  const startAuction = async (nftData, type) => {
    console.log("startAuction=====", type);

    const ethersProvider = new BrowserProvider(
      walletProvider || window.ethereum
    );
    const signer = await ethersProvider.getSigner();

    try {
      if (NFTDetails.onSale == 0) {
        if (type == "timed") {
          settimedLoader(true);
        } else {
          var bidStart = Bidstartdateref.current;
          var bidEnd = new Date(bidStart).getTime() + 365 * 24 * 60 * 60 * 1000;
          var endDate = new Date(bidEnd).toISOString();
          setBidenddate(endDate);

          var endtimer =
            new Date(bidEnd).getTime() / 1000 -
            new Date(bidStart).getTime() / 1000;
          console.log("endtimer===", endtimer);
          setauctionTimer(endtimer);

          setgoingLoader(true);
        }

        if (NFTDetails.NFTtype == "single") {
          var current_chain = caipNetwork.id;
          var network = caipNetwork.name;
          var contract_address = env.polygon_singleauction_contract;
          var contract_owner = env.polygon_singlemint_contract;
          var abi = polygon_singleauction_abi;
          var mintAbi = polygon_singlemint_abi;

          var _biddingTime = auctionTimerref.current;

          const simpleauctionContract = new Contract(
            contract_address,
            abi,
            signer
          );

          const mintContract = new Contract(contract_owner, mintAbi, signer);

          const approveTx = await mintContract.approve(
            contract_address,
            NFTDetails.tokenId
          );
          const approveReceipt = await approveTx.wait();
          console.log("approveReceipt===", approveReceipt);

          const createAuctionTx = await simpleauctionContract.createAuction(
            _biddingTime,
            NFTDetails.tokenId,
            contract_owner
          );
          const createAuctionReceipt = await createAuctionTx.wait();
          console.log("createAuctionReceipt===", createAuctionReceipt);

          const auction = await simpleauctionContract.auctions(
            NFTDetails.tokenId
          );
          console.log("Auction Data===", auction);

          var auction_obj = {
            contractAddress: contract_address,
            endTime: auction.auctionEndTime?.toString(),
            tokenId: NFTDetails.tokenId,
            network: network,
            type: NFTDetails.NFTtype,
            address: String(address).toLowerCase(),
            txHash: createAuctionReceipt.hash,
            auctionId: auction.auctionId?.toString(),
            startDate: Bidstartdate,
            endDate: Bidenddate,
            minimumBid: minimumBidPrice,
            nft_txid: NFTDetails.txHash,
            BidTime: _biddingTime,
            auction_type: type,
          };
          console.log("auction_obj===", auction_obj);
          if (
            auction_obj != null &&
            auction_obj != "" &&
            auction_obj != undefined &&
            auction_obj != "undefined"
          ) {
            var data = {
              apiUrl: apiService.startAuction,
              payload: auction_obj,
            };

            var resp = await postMethod(data);
            if (resp.status) {
              if (type == "timed") {
                settimedLoader(false);
                timed.current?.click();
              } else {
                setgoingLoader(false);
                ongoing.current?.click();
              }
              toastAlert("success", resp.Message);
              window.location.reload(true);
            } else {
              if (type == "timed") {
                settimedLoader(false);
                timed.current?.click();
              } else {
                setgoingLoader(false);
                ongoing.current?.click();
              }
              toastAlert("error", resp.Message);
            }
          }
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const format_Date = async (dateval) => {
    try {
      var [dateValues, timeValues] = dateval.split(" ");
      var [day, month, year] = dateValues.split("-");
      var [hours, minutes, seconds] = timeValues.split(":");
      var formatDate = new Date(
        +year,
        +month - 1,
        +day,
        +hours,
        +minutes,
        +seconds
      );
      return formatDate;
    } catch (error) {
      console.log("catch formatdate====", error);
    }
  };

  const selectbidStart = async (e) => {
    console.log("selectbid====", e);
    if (e == "now") {
      //var cur_date = Moment(new Date()).format("DD-MM-YYYY hh:mm:ss");
      var cur_date = new Date().toISOString();
      setBidstartdate(cur_date);
    } else {
      //var startdate = Moment(e.toDate()).format("DD-MM-YYYY hh:mm:ss");
      var startdate = e.toDate().toISOString();
      setBidstartdate(startdate);
    }
  };

  const selectbidEnd = async (e) => {
    if (+e > 0 && +e <= 4) {
      console.log("11111");
      // var bidStart = Bidstartdateref.current.toString();
      // bidStart = await formatDate(bidStart);
      // console.log("bidStart====", bidStart);
      // console.log("bidStart.getTime() / 1000 ====", new Date(bidStart).getTime());
      //console.log("+e * 24 * 60 * 60=====",+e * 24 * 60 * 60 * 1000);
      var bidStart = Bidstartdateref.current;
      var bidEnd = new Date(bidStart).getTime() + +e * 24 * 60 * 60 * 1000;
      // console.log("bidEnd====", bidEnd);
      var endtimer = +e * 24 * 60 * 60;
      var endDate = new Date(bidEnd).toISOString();
      //console.log("endDate====", endDate);
      //endDate =  Moment(endDate).format("DD-MM-YYYY hh:mm:ss");
      setBidenddate(endDate);
      setauctionTimer(endtimer);
      //console.log("auctionTimer ref===", auctionTimerref.current);
    } else {
      console.log("22222");
      //var enddate = Moment(e.toDate()).format("DD-MM-YYYY hh:mm:ss");
      var enddate = e.toDate().toISOString();
      setBidenddate(enddate);

      // var bidStart = Bidstartdateref.current.toString();
      // bidStart = await formatDate(bidStart);

      // var bidEnd = Moment(e.toDate()).format("DD-MM-YYYY hh:mm:ss");
      // bidEnd = await formatDate(bidEnd);
      var bidStart = Bidstartdateref.current;
      var bidEnd = enddate;
      var endtimer =
        new Date(bidEnd).getTime() / 1000 - new Date(bidStart).getTime() / 1000;
      setauctionTimer(endtimer);
      console.log("auctionTimer ref===", auctionTimerref.current);
    }
  };

  const favorite = async (nft_id) => {
    try {
      var data = {
        apiUrl: apiService.favoriteAction,
        payload: { nft_id: nft_id },
      };
      var resp = await postMethod(data);
      console.log(resp.data, "-=-==-=-=-=-=----=-=-=-=-=-resp-=-=-");
      if (resp.status) {
        var tokenID = window.location.href.split("/")[4];
        getTokenInfo(tokenID);
      } else {
      }
    } catch (error) {}
  };

  const selectbuyQty = async (e) => {
    try {
      e.preventDefault();
      if (NFTDetails.NFTtype == "multiple") {
        if (e.target.value > NFTDetails.saleQuantity) {
          buycancel.current?.click();
          toastAlert(
            "error",
            "Please enter quantity less than or equal to the available " +
              NFTDetails.saleQuantity
          );
        } else {
          setbuyQuantity(e.target.value);
        }
      } else {
        setbuyQuantity(e.target.value);
      }
    } catch (error) {}
  };

  const Changenetwork = async () => {
    const polygonChainId = "0x89"; // Polygon Mainnet

    console.log("Switching to Polygon Network");

    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: polygonChainId }], // Change to Polygon Mainnet
      })
      .then((res) => {
        console.log("Network switched to Polygon", res);
        setNetwork("Polygon");
        localStorage.setItem("chainId", polygonChainId);
        localStorage.setItem("netWork", "Polygon");
        toastAlert("success", "Network Changed to Polygon");
        window.location.href = window.location.href;
      })
      .catch((err) => {
        if (err.code === 4902) {
          toastAlert("error", "Please add Polygon Network to Metamask");
        } else {
          toastAlert("error", "Something went wrong, please try again");
        }
      });
  };

  const endAuction = async () => {
    const provider = new BrowserProvider(walletProvider || window.ethereum);
    const signer = await provider.getSigner();
    try {
      setauctionLoader(true);
      if (NFTDetails.NFTtype == "single") {
        var network = NFTDetails.network;
        var contract_address = env.polygon_singleauction_contract;
        var mint_contract_address = env.polygon_singlemint_contract;
        var abi = polygon_singleauction_abi;
        var mintAbi = polygon_singlemint_abi;
        const auctionContract = new ethers.Contract(
          contract_address,
          abi,
          signer
        );

        const auctions = await auctionContract.auctions(NFTDetails.tokenId);
        const bidderDetails = await auctionContract.highestBidder(
          auctions.auctionId
        );
        const endAuction = await auctionContract.auctionEnd(
          NFTDetails.tokenId,
          mint_contract_address
        );
        await endAuction.wait();
        const end_hash = endAuction.hash;

        console.log("end_hash", end_hash);

        var obj = {
          highestBid: Number(bidderDetails.currentHighestBid),
          highestBidder: bidderDetails.currentHighestBidder,
          auctionAddress: contract_address,
          auctionCreator: NFTDetails.owner,
          tokenId: NFTDetails.tokenId,
          royalty: NFTDetails.royalty,
          creator: NFTDetails.creator,
          hash: end_hash,
          network: NFTDetails.network,
          type: NFTDetails.NFTtype,
          nft_id: NFTDetails._id,
        };
        console.log("obj===================", obj);
        var data = {
          apiUrl: apiService.endAuction,
          payload: obj,
        };

        var resp = await postMethod(data);
        console.log("resp.statussssssss===========", resp.status);
        if (resp.status) {
          toastAlert("success", "Auction ended successfully");
          setauctionLoader(false);
          var tokenID = window.location.href.split("/")[4];
          console.log("tokenIDDDDDDD===========", tokenID);
          getTokenInfo(tokenID);
          getAuctionInfo(tokenID);
          //window.location.reload(true);
        } else {
          toastAlert("success", resp.Message);
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const cancelAuction = async () => {
    const provider = new BrowserProvider(walletProvider || window.ethereum);
    const signer = await provider.getSigner();
    try {
      setcancelauctionLoader(true);
      if (NFTDetails.NFTtype == "single") {
        var network = NFTDetails.network;
        var contract_address = env.polygon_singleauction_contract;
        var mint_contract_address = env.polygon_singlemint_contract;
        var abi = polygon_singleauction_abi;
        var mintAbi = polygon_singlemint_abi;
        const auctionContract = new ethers.Contract(
          contract_address,
          abi,
          signer
        );

        const auctions = await auctionContract.auctions(NFTDetails.tokenId);
        const bidderDetails = await auctionContract.highestBidder(
          auctions.auctionId
        );
        const cancelAuction = await auctionContract.cancelAuction(
          NFTDetails.tokenId,
          mint_contract_address
        );
        await cancelAuction.wait();
        const cancel_hash = cancelAuction.hash;

        var obj = {
          auctionAddress: contract_address,
          auctionCreator: NFTDetails.owner,
          tokenId: NFTDetails.tokenId,
          royalty: NFTDetails.royalty,
          creator: NFTDetails.creator,
          hash: cancel_hash,
          network: NFTDetails.network,
          type: NFTDetails.NFTtype,
          nft_id: NFTDetails._id,
        };

        console.log("obj===================", obj);

        var data = {
          apiUrl: apiService.cancelAuction,
          payload: obj,
        };

        var resp = await postMethod(data);
        if (resp.status) {
          toastAlert("success", "Auction cancelled successfully");
          setcancelauctionLoader(false);
          var tokenID = window.location.href.split("/")[4];
          getTokenInfo(tokenID);
        } else {
          toastAlert("success", resp.Message);
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const withDraw = async () => {
    const ethersProvider = new BrowserProvider(
      walletProvider || window.ethereum
    );
    const signer = await ethersProvider.getSigner();
    try {
      var current_chain = localStorage.getItem("chainId");
      var network = caipNetwork.name;
      var contract_address = env.polygon_singleauction_contract;
      var mintAbi = polygon_singleauction_abi;
      //ddd

      setWithDrawLoader(true);
      const withdraw_contract = new Contract(contract_address, mintAbi, signer);

      const auctions = await withdraw_contract.auctions(NFTDetails.tokenId);
      console.log("auctions====", auctions);

      const returnss = await withdraw_contract.pendingReturns(
        auctions.auctionId,
        userWallet
      );

      console.log("returns====ssss", Number(returnss));

      if (Number(returnss) === 0) {
        setWithDrawAmount(0);
        toastAlert("error", "You dont have any amount to withdraw");
        window.location.reload();
      } else {
        const returns = await withdraw_contract.withdraw(NFTDetails.tokenId);

        var obj = {
          nft_id: NFTDetails._id,
          auctionAddress: contract_address,
          user: userWallet,
        };
        var data = {
          apiUrl: apiService.bidWithdraw,
          payload: obj,
        };

        var resp = await postMethod(data);

        if (resp.status) {
          setWithDrawLoader(false);
          toastAlert("success", "successfully withdrawn");
          window.location.reload();
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const transferNft = async () => {
    console.log("transfer instant");
    try {
      setTransferLoad(true);
      if (sender === "") {
        toastAlert("error", "Wallet address can't be empty");
        setTransferLoad(false);
        return;
      }

      if (address) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        var current_chain = caipNetwork.id;
        var network = caipNetwork.name;
        var contract_owner = env.polygon_singlemint_contract;
        var abi = polygon_singlemint_abi;

        const mintContract = new Contract(contract_owner, abi, signer);

        console.log("Receiver Address:", sender);
        console.log("Sender Address:", address);
        console.log("Token ID:", NFTDetails.tokenId);

        var transfer_hash = "";

        const tx = await mintContract.transferFrom(
          address, // Current Owner
          sender, // Recipient
          NFTDetails.tokenId // Token ID
        );

        console.log("Transaction sent:", tx.hash);

        // Wait for confirmation
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);

        if (receipt && receipt.status === 1) {
          const obj = {
            toAddress: String(sender).toLowerCase(),
            ownerAddress: NFTDetails.owner,
            tokenId: NFTDetails.tokenId,
            initial_price: NFTDetails.Price,
            creator: NFTDetails.creator,
            royalty: NFTDetails.royalty,
            hash: tx.hash,
            network: NFTDetails.network,
            type: NFTDetails.type,
            cloudUrl: NFTDetails.cloudUrl,
            NFTtype: NFTDetails.NFTtype,
            NFT_id: NFTDetails._id,
            Quantity: transferQuantityref.current,
          };

          const data = {
            apiUrl: apiService.transferNFT,
            payload: obj,
          };

          const resp = await postMethod(data);
          console.log("Transfer Response:", resp);

          if (resp.status) {
            setTransferLoad(false);
            transfer.current?.click();
            toastAlert("success", resp.Message);
          } else {
            setTransferLoad(false);
            toastAlert("error", resp.Message);
          }
        }
      }
    } catch (e) {
      if (e.code == 4001) {
        console.log("call here");
        window.location.reload(true);
      }
    }
  };

  const mintNFT = async (nftData) => {
    if (nftData.mintTypes == "lazy") {
      let token_created_id;
      var obj = {
        Name: nftData.Name,
        Description: nftData.description,
        nftImage: nftData.cloudUrl,
      };
      var data = {
        apiUrl: apiService.uploadData,
        payload: obj,
      };
      var resp = await postMethod(data);
      console.log("nft upload==", resp);
      if (resp) {
        const nft = await createNewNft(resp.fileIPFS.ipfs);
        setnftResponse(nft);
        if (nft) {
          token_created_id =
            nftData.NFTtype == "single"
              ? nft.events.Transfer.returnValues.tokenId
              : nft.events.TransferSingle.returnValues.id;
          var nft_obj = {
            owner: String(nft.from).toLowerCase(),
            creator: String(nft.from).toLowerCase(),
            tokenId: token_created_id,
            txHash: nft.transactionHash,
            _id: nftData._id,
          };
          var data = {
            apiUrl: apiService.mintNFT,
            payload: nft_obj,
          };
          var response_nft = await postMethod(data);
          if (response_nft.status) {
            toastAlert("success", response_nft.Message);
            navigate(`/NFTDetails/${nft.transactionHash}/${nftData.network}`);
          } else {
            toastAlert("error", response_nft.Message);
          }
        }
      }
    }
  };

  const mintProcess = async (nftData) => {
    if (nftData.mintTypes == "lazy") {
      let token_created_id;
      
      console.log(
        'nftData.cloudUrl.split("/")[1]',
        nftData.cloudUrl.split("/")
      );
      var file_split = nftData.cloudUrl.split("/");
      var http_filename = "https://" + file_split[2] + "/" + file_split[3];
      console.log("http_filename===", http_filename);

      const formData = new FormData();

      var file_Data = await fetch(http_filename, { mode: "no-cors" });

      console.log("file_Data===", file_Data);
      var blob_data = await file_Data.blob();

      var file_obj = {
        name: nftData.cloudUrl.split("/")[3],
        type: blob_data.type,
        size: blob_data.size,
      };

      console.log("file obj===", file_obj);

      formData.append("file", blob_data);

      const metadata = JSON.stringify({
        name: nftData.Name,
        description: nftData.Description,
        image: nftData.cloudUrl,
      });
      formData.append("pinataMetadata", metadata);
      console.log("nft formData===", formData);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      try {
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: "Infinity",
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: "Bearer " + env.pinata_jwt,
            },
          }
        );
        console.log("pinata response===", res.data);
        if (res.data) {
          const nft = await createNewNft(res.data.IpfsHash);
          setnftResponse(nft);
          if (nft) {
            console.log("NFT Minting Successful:", nft);
            console.log("nftData", nftData);

            token_created_id = NFTDetails.tokenId + 1;
            var nft_obj = {
              owner: String(nft.from).toLowerCase(),
              creator: String(nft.from).toLowerCase(),
              tokenId: token_created_id,
              txHash: nft.transactionHash,
              _id: nftData._id,
              Quantity: buyQuantityref.current,
            };
            var data = {
              apiUrl: apiService.mintNFT,
              payload: nft_obj,
            };
            var response_nft = await postMethod(data);
            return response_nft;
          }
        } else {
          setBuyLoading(false);
          toastAlert(
            "error",
            "Network traffic issue, Please try after some times"
          );
        }
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  const createNewNft = async (metaDataURI) => {
    try {
      if (!caipNetwork || !NFTDetails) {
        throw new Error("Missing network or NFT details.");
      }

      let network = caipNetwork.name;
      let mint_type = NFTDetails.mint_type;
      let lazy_type = false;
      let sale_price = 0;

      if (mint_type === "lazy" && NFTDetails.onSale === 1) {
        lazy_type = true;
        sale_price = NFTDetails.Price;
      }

      setCurrNetwork(network);

      const ethersProvider = new BrowserProvider(
        walletProvider || window.ethereum
      );
      const signer = await ethersProvider.getSigner();

      if (!signer) {
        throw new Error("Signer not found. Please connect a wallet.");
      }

      var polygon_contract_abi = polygon_token_abi;

      const token_contract = new Contract(
        env.polygon_token_contract,
        polygon_contract_abi,
        signer
      );

      const single_mint_contract = new Contract(
        env.polygon_singlemint_contract,
        polygon_singlemint_abi,
        signer
      );

      const lazy_contract = new Contract(
        env.polygon_lazybuy_contract,
        polygon_lazybuy_abi,
        signer
      );

      if (!single_mint_contract) {
        throw new Error("Minting contract is not available.");
      }

      console.log("Contract call ======================");
      console.log("metaDataURI:", metaDataURI);
      console.log("NFTDetails.royalty:", NFTDetails.royalty);
      console.log("NFTDetails.creator:", NFTDetails.creator);

      // Ensure valid inputs
      const royalty = parseInt(NFTDetails.royalty, 10) || 0;
      if (!metaDataURI || typeof metaDataURI !== "string") {
        throw new Error("Invalid metadata URI.");
      }

      if (!NFTDetails.creator) {
        throw new Error("Creator address is missing.");
      }

      // Contract interaction for Minting NFT
      const tx = await single_mint_contract.Minting(
        metaDataURI,
        royalty,
        NFTDetails.creator
      );
      const receipt = await tx.wait(); // Wait for transaction confirmation

      console.log("Minting Success:", receipt);

      // Get the address of the signer
      const address = await signer.getAddress();

      // Lazy Buy NFT if applicable
      if (lazy_type) {
        // const salePriceInWei = ethers.parseEther(sale_price.toString());
        const salePriceInWei = sale_price * 10 ** 6;

        const lazy_tx_approve = await token_contract.approve(
          env.polygon_lazybuy_contract,
          salePriceInWei
        );

        const lazy_receipts = await lazy_tx_approve.wait();
        console.log("Lazy Approve Success:", lazy_receipts);

        const lazy_tx = await lazy_contract.lazy_buynft(
          NFTDetails.creator,
          salePriceInWei
        );

        console.log("Lazy Buy Transaction Hash:", lazy_tx.hash);
        const lazy_receipt = await lazy_tx.wait();
        console.log("Lazy Buy Success:", lazy_receipt);
      }

      return receipt;
    } catch (error) {
      console.error("Error from Minting:", error.message || error);
    }
  };

  const Auth = Buffer.from(
    env.infura_apikey + ":" + env.infura_secret
  ).toString("base64");

  console.log("Auth", Auth);

  const getGasFee = async () => {
    try {
      const { data } = await axios.get(
        `https://gas.api.infura.io/networks/${env.matic_chainId}/suggestedGasFees`,
        {
          headers: {
            Authorization: `Basic ${Auth}`,
          },
        }
      );
      console.log("Suggested gas fees:", data);
      if (data != null) {
        setgasFees(data);
      }
    } catch (error) {
      console.log("Server responded with:", error);
    }
  };

  console.log("auctionData=================", auctionData);

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
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="NFT_img_cont">
                        <div className="row justify-content-center ">
                          <div className="col-lg-12">
                            <div className="card-Trending ">
                              <div className="positionreel">
                                {NFTDetails.auction_type == "timed" &&
                                NFTDetails.onAuction == 1 &&
                                formatDate(NFTDetails.Bidenddate) >=
                                  new Date().getTime() ? (
                                  <div className="countown">
                                    <Countdown
                                      date={
                                        formatDate(NFTDetails.Bidstartdate) +
                                        +NFTDetails.BidTime * 1000
                                      }
                                      renderer={renderer}
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                                <Link to="" className="imgconyeea nft_image">
                                  {NFTDetails &&
                                  (nftfileTyperef.current == "png" ||
                                    nftfileTyperef.current == "jpg" ||
                                    nftfileTyperef.current == "gif" ||
                                    nftfileTyperef.current == "svg" ||
                                    nftfileTyperef.current == "webp" ||
                                    nftfileTyperef.current == "jpeg") ? (
                                    <img
                                      src={NFTDetails.cloudUrl}
                                      className=""
                                    />
                                  ) : nftfileTyperef.current == "mp3" ||
                                    nftfileTyperef.current == "ogg" ? (
                                    <>
                                      <div className="audio_player_new">
                                        <audio
                                          width="100%"
                                          height="300"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={
                                              NFTDetails && NFTDetails.cloudUrl
                                            }
                                          />
                                        </audio>

                                        <img
                                          src={geomatry}
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                    </>
                                  ) : nftfileTyperef.current == "mp4" ||
                                    nftfileTyperef.current == "webm" ||
                                    nftfileTyperef.current == "wav" ? (
                                    <video
                                      width="100%"
                                      height="300"
                                      controls
                                      controlsList="nodownload"
                                    >
                                      <source
                                        src={NFTDetails && NFTDetails.cloudUrl}
                                      />
                                    </video>
                                  ) : (
                                    ""
                                  )}
                                </Link>

                                {/* <div className="byebtn justify-content-end">
                                  <button>Place Bid</button>
                                </div> */}
                              </div>
                              <p>
                                <span className="name_item">
                                  {userDatasref.current.username}
                                  {userDatasref.current.kycstatus == 1 ? (
                                    <img
                                      src={uil_comment}
                                      alt=""
                                      className=""
                                    />
                                  ) : (
                                    ""
                                  )}
                                </span>

                                <span className="liks">
                                  {NFTDetails.likes
                                    ? NFTDetails.likes.length
                                    : 0}{" "}
                                  Likes
                                </span>
                              </p>
                              <h5> {NFTDetails.Name} </h5>
                              {/* {NFTDetails.onAuction==1?(

                                <div className="currencyc">
                                <small>Current Bid</small>
                                <span>
                                  <img
                                    src={
                                      require("../image/newimg/eth.png").default
                                    }
                                    className=""
                                  />
                                  {NFTDetails.Bidprice}<small>{NFTDetails.network}</small>
                                </span>
                                </div>

                              ):("")} */}

                              <div className="share_sec d-flex">
                                <div className="like-share">
                                  {/* <span>
                                  <i class="bi bi-share"></i>
                                </span> */}
                                  <span>
                                    {NFTDetails.likes &&
                                    NFTDetails.likes.length > 0 &&
                                    likeUsers.includes(userWallet) ? (
                                      <i
                                        class="bi bi-suit-heart-fill"
                                        onClick={() =>
                                          favorite(`${NFTDetails._id}`)
                                        }
                                      ></i>
                                    ) : (
                                      <i
                                        class="bi bi-suit-heart"
                                        onClick={() =>
                                          favorite(`${NFTDetails._id}`)
                                        }
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
                                            href={
                                              `https://www.facebook.com/sharer/sharer.php?u=` +
                                              env.frontUrl +
                                              "NFTDetails/" +
                                              NFTDetails.txHash
                                            }
                                            target="_blank"
                                          >
                                            Facebook
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            class="bi bi-twitter"
                                            href={
                                              `https://twitter.com/intent/tweet?text=Checkout this item on Fantically&url=` +
                                              env.frontUrl +
                                              "NFTDetails/" +
                                              NFTDetails.txHash
                                            }
                                            target="_blank"
                                          >
                                            Twitter
                                          </a>
                                        </li>
                                      </ul>
                                    )}
                                  </div>
                                  {/* <span></span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="home_header latest_header">
                              <h1>More From This Collection</h1>
                            </div>
                          </div>

                          {CollectionNftsref.current.length > 0 &&
                            CollectionNftsref.current.map((item, i) => {
                              // var like_users = [];
                              // for (var j = 0; j < item.likes.length; j++) {
                              //   like_users.push(item.likes[j].wallet_address);
                              // }
                              var filetype_nft = item.cloudUrl
                                .split(".")
                                .pop()
                                .trim();
                              return item.user_id != null &&
                                item.user_id != undefined ? (
                                <div className="col-lg-4 col-ac col-6 w-auto ">
                                  <div className="card-Trending ">
                                    <div className="positionreel">
                                      {/* <Link to={`/NFTDetails/${item.txHash}/${item.network}`} className="imgconyeea"> */}
                                      <a
                                        href={`${env.frontUrl}NFTDetails/${item.txHash}/${item.network}`}
                                        className="imgconyeea"
                                      >
                                        {item &&
                                        (filetype_nft == "png" ||
                                          filetype_nft == "jpg" ||
                                          filetype_nft == "gif" ||
                                          filetype_nft == "svg" ||
                                          filetype_nft == "webp" ||
                                          filetype_nft == "jpeg") ? (
                                          <img
                                            src={item.cloudUrl}
                                            className=""
                                          />
                                        ) : filetype_nft == "mp3" ||
                                          filetype_nft == "ogg" ? (
                                          <>
                                            <div className="audio_player_new">
                                              <audio
                                                width="100%"
                                                height="100"
                                                controls
                                                controlsList="nodownload"
                                              >
                                                <source src={item.cloudUrl} />
                                              </audio>
                                              <img
                                                src={geomatry}
                                                alt=""
                                                className=""
                                              />
                                            </div>
                                          </>
                                        ) : filetype_nft == "mp4" ||
                                          filetype_nft == "webm" ||
                                          filetype_nft == "wav" ? (
                                          <video
                                            width="100%"
                                            height="200"
                                            controls
                                            controlsList="nodownload"
                                          >
                                            <source src={item.cloudUrl} />
                                          </video>
                                        ) : (
                                          ""
                                        )}
                                        {/* </Link> */}
                                      </a>

                                      {item.onAuction == 1 &&
                                      formatDate(item.Bidenddate) >=
                                        new Date().getTime() ? (
                                        <div className="byebtn">
                                          <button
                                            onClick={() =>
                                              navigate(
                                                `/NFTDetails/${item.txHash}/${item.network}`
                                              )
                                            }
                                          >
                                            Place Bid
                                          </button>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                    <p>
                                      <span className="name_item">
                                        {item.user_id.username}
                                        {item.user_id.kycstatus == 1 ? (
                                          <img
                                            src={uil_comment}
                                            alt=""
                                            className=""
                                          />
                                        ) : (
                                          ""
                                        )}
                                      </span>

                                      <span className="liks">
                                        {item.likes ? item.likes.length : 0}{" "}
                                        Likes
                                      </span>
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
                                    {/* <div className="like-share">
                                    <span>
                                      <i class="bi bi-share"></i>
                                    </span>
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
                                  </div> */}
                                  </div>
                                </div>
                              ) : (
                                ""
                              );
                            })}

                          {/* <div className="col-lg-6">
                            <div className="card-Trending  ">
                              <div className="positionreel">
                                <div className="countown">
                                  {" "}
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

                                <div className="byebtn justify-content-end">
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
                          <div className="col-lg-6">
                            <div className="card-Trending ">
                              <div className="positionreel">
                                <div className="countown">
                                  {" "}
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

                                <div className="byebtn justify-content-end">
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
                    <div className="col-lg-4 p-0">
                      <div className="NFT-details_section">
                        <h3>{NFTDetails.collections}</h3>
                        <div className="data_des">
                          <p className="desction_data">
                            <img src={descrioton} alt="" className="" />
                            Description
                          </p>
                          <small>{NFTDetails.description} </small>
                        </div>
                        <div className="data_des">
                          <p className="desction_data">
                            <img src={prpos} alt="" className="" />
                            Properties
                          </p>
                          <div className="prprertir">
                            <span>{NFTDetails.propertiesType} </span>
                            <p> {NFTDetails.description} </p>
                          </div>
                        </div>
                        <div className="data_des">
                          <p className="desction_data">
                            <img src={level} alt="" className="" />
                            Levels
                          </p>
                          <div className="NFTlavels">
                            <div className="after_fill_">
                              <label>
                                {NFTDetails.levelName}{" "}
                                <span>
                                  {" "}
                                  {NFTDetails.levelValue} of{" "}
                                  {NFTDetails.levelOff}{" "}
                                </span>
                              </label>
                              <div class="progress">
                                <div
                                  style={{ width: levelPercent + "%" }}
                                  class="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={levelPercent}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span class="sr-only">
                                    {levelPercent}% Complete
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="data_des">
                          <p className="desction_data">
                            <img src={start} alt="" className="" />
                            States
                          </p>
                          <div className="">
                            <div className="after_fill_">
                              <h2 className="w-100 rade-dd">
                                <small> {NFTDetails.statsName} </small>{" "}
                                <small>
                                  {" "}
                                  {NFTDetails.statsValue} of{" "}
                                  {NFTDetails.statsOff}{" "}
                                </small>
                              </h2>
                            </div>
                            {/* <div className="after_fill_">
                              <h2 className="w-100 rade-dd">
                                <small>Character</small> <small>3 of 5</small>
                              </h2>
                            </div> */}
                          </div>
                        </div>
                        <div className="data_des details_tabs">
                          <ul class="nav nav-tabs">
                            <li>
                              <a
                                data-toggle="tab"
                                href="#Owner"
                                className="active"
                              >
                                Owner
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#Details">
                                Details
                              </a>
                            </li>
                            {auctionData != "" ? (
                              <li>
                                <a data-toggle="tab" href="#Bid">
                                  Bid
                                </a>
                              </li>
                            ) : (
                              <li></li>
                            )}
                          </ul>
                          <div>
                            <div class="tab-content">
                              <div
                                id="Owner"
                                class="tab-pane fade in active show"
                              >
                                <Link to="" className="owners_details">
                                  {NFTDetails.mintTypes == "instant" &&
                                  NFTDetails.owner == userWallet ? (
                                    userDatasref.current.profileImage != "" &&
                                    userDatasref.current.profileImage !=
                                      null ? (
                                      <div className="img_sss">
                                        <img
                                          src={
                                            userDatasref.current.profileImage
                                          }
                                        />
                                      </div>
                                    ) : (
                                      <div className="img_sss">
                                        <img src={profileImage} alt="" />
                                      </div>
                                    )
                                  ) : (
                                    ""
                                  )}

                                  <div className="content">
                                    <div className="copytext_e">
                                      <h2>{NFTDetails.owner}</h2>
                                      <span>
                                        <i
                                          onClick={() =>
                                            copy(
                                              NFTDetails.owner,
                                              "Address Copied"
                                            )
                                          }
                                          class="fa fa-clone"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </div>
                                    {NFTDetails.NFTtype == "multiple" &&
                                    NFTDetails.onSale == 1 ? (
                                      <p>
                                        {NFTDetails.saleQuantity}/
                                        {NFTDetails.Quantity} for sale
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Link>
                                <div className="action_section_new d-flex-sss">
                                  {/* <Link to="" className="owners_details">
                                    <div className="img_sss">
                                      <img
                                        src={
                                          require("../image/newimg/pridileee.png")
                                            .default
                                        }
                                      />
                                    </div>
                                    <div className="content">
                                      <h2>
                                        oiehisdbjksdbkhmabsdjhf387368weruwerwe68r76weurydwer
                                      </h2>
                                      <p>5/5 Not for sale</p>
                                    </div>
                                  </Link> */}

                                  {NFTDetails.mintTypes == "instant" ? (
                                    <div className="Butotn_section">
                                      {NFTDetails.onSale == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      networkcurrentref.current ==
                                        NFTDetails.network ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#buynow"
                                        >
                                          Buy Now
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onSale == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      networkcurrentref.current !=
                                        NFTDetails.network ? (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Buy Now
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                      {NFTDetails.onAuction == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      formatDate(NFTDetails.Bidenddate) >=
                                        new Date().getTime() &&
                                      NFTDetails.auction_type == "timed" &&
                                      networkcurrentref.current ==
                                        NFTDetails.network ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#bidnow"
                                        >
                                          Place Bid
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onAuction == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      formatDate(NFTDetails.Bidenddate) >=
                                        new Date().getTime() &&
                                      NFTDetails.auction_type == "timed" &&
                                      networkcurrentref.current !=
                                        NFTDetails.network ? (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Place Bid
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onAuction == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      NFTDetails.BidendTime * 1000 >=
                                        new Date().getTime() &&
                                      NFTDetails.auction_type == "unlimited" &&
                                      networkcurrentref.current ==
                                        NFTDetails.network ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#bidnow"
                                        >
                                          Place Bid
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onAuction == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      NFTDetails.BidendTime * 1000 >=
                                        new Date().getTime() &&
                                      NFTDetails.auction_type == "unlimited" &&
                                      networkcurrentref.current !=
                                        NFTDetails.network ? (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Place Bid
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ) : (
                                    <div className="Butotn_section">
                                      {NFTDetails.onSale == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      networkcurrentref.current ==
                                        NFTDetails.network ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#buynow"
                                        >
                                          Buy Now
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onSale == 1 &&
                                      NFTDetails.owner?.toLowerCase() !=
                                        userWallet?.toLowerCase() &&
                                      networkcurrentref.current !=
                                        NFTDetails.network ? (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Buy Now
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  )}
                                  {/* <div className="Butotn_section">
                                    <Button
                                      data-toggle="modal"
                                      data-target="#FixedAuction"
                                    >
                                      Put on sale
                                    </Button>
                                    <Button
                                      data-toggle="modal"
                                      data-target="#Cancel_order"
                                    >
                                      Cancel Order
                                    </Button>
                                  </div> */}
                                  {NFTDetails.mintTypes == "instant" ? (
                                    <div className="Butotn_section">
                                      {NFTDetails.onSale == 0 &&
                                      NFTDetails.onAuction == 0 &&
                                      NFTDetails.owner?.toLowerCase() ==
                                        userWallet?.toLowerCase() ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#FixedAuction"
                                        >
                                          Fixed Price
                                        </Button>
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.NFTtype == "single" &&
                                      NFTDetails.onSale == 0 &&
                                      NFTDetails.onAuction == 0 &&
                                      NFTDetails.owner?.toLowerCase() ==
                                        userWallet?.toLowerCase() ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#TimedAuction"
                                        >
                                          Timed Auction
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                      {/* {NFTDetails.NFTtype == "single" && NFTDetails.onAuction == 0 && NFTDetails.owner == userWallet ? (
                                    <Button
                                      data-toggle="modal"
                                      data-target="#On_goingAuction"
                                    >
                                      On going auction
                                    </Button>
                                    ) : ("")} */}
                                    </div>
                                  ) : (
                                    <div className="Butotn_section">
                                      {NFTDetails.onSale == 0 &&
                                      NFTDetails.onAuction == 0 &&
                                      NFTDetails.owner?.toLowerCase() ==
                                        userWallet?.toLowerCase() ? (
                                        <Button
                                          data-toggle="modal"
                                          data-target="#FixedAuction"
                                        >
                                          Fixed Price
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  )}

                                  {NFTDetails.owner?.toLowerCase() ==
                                    userWallet?.toLowerCase() &&
                                  NFTDetails.mintTypes == "instant" ? (
                                    <div className="Butotn_section">
                                      {NFTDetails &&
                                      NFTDetails.onAuction &&
                                      auctionData &&
                                      auctionData.highest_bidder &&
                                      Date.now() + auctionData.end_time <
                                        Date.now() ? (
                                        networkcurrentref.current ==
                                        NFTDetails.network ? (
                                          auctionLoaderref.current == true ? (
                                            <Button>Loading ...</Button>
                                          ) : (
                                            <Button
                                              onClick={() => endAuction()}
                                            >
                                              Execute Auction
                                            </Button>
                                          )
                                        ) : NFTDetails.onAuction &&
                                          auctionData &&
                                          auctionData.highest_bidder &&
                                          Date.now() + auctionData.end_time <
                                            Date.now() &&
                                          networkcurrentref.current !=
                                            NFTDetails.network ? (
                                          <Button
                                            onClick={() =>
                                              Changenetwork(NFTDetails.network)
                                            }
                                          >
                                            Execute Auction
                                          </Button>
                                        ) : (
                                          ""
                                        )
                                      ) : (
                                        ""
                                      )}

                                      {NFTDetails.onAuction &&
                                      auctionData &&
                                      auctionData.highest_bidder &&
                                      Date.now() + auctionData.end_time >
                                        Date.now() ? (
                                        networkcurrentref.current ==
                                        NFTDetails.network ? (
                                          auctionLoaderref.current == true ? (
                                            <Button>Loading ...</Button>
                                          ) : (
                                            <Button
                                              onClick={() => endAuction()}
                                            >
                                              End Auction
                                            </Button>
                                          )
                                        ) : NFTDetails.onAuction &&
                                          auctionData &&
                                          auctionData.highest_bidder &&
                                          Date.now() + auctionData.end_time >
                                            Date.now() &&
                                          networkcurrentref.current !=
                                            NFTDetails.network ? (
                                          <Button
                                            onClick={() =>
                                              Changenetwork(NFTDetails.network)
                                            }
                                          >
                                            End Auction
                                          </Button>
                                        ) : (
                                          ""
                                        )
                                      ) : (
                                        ""
                                      )}
                                      {NFTDetails.onAuction &&
                                      networkcurrentref.current ==
                                        NFTDetails.network ? (
                                        cancelauctionLoaderref.current ==
                                        true ? (
                                          <Button>Loading ...</Button>
                                        ) : (
                                          <Button
                                            onClick={() => cancelAuction()}
                                          >
                                            Cancel Auction
                                          </Button>
                                        )
                                      ) : NFTDetails.onAuction &&
                                        networkcurrentref.current !=
                                          NFTDetails.network ? (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Cancel Auction
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ) : (
                                    ""
                                  )}

                                  <div className="Butotn_section">
                                    {/* {NFTDetails.mintTypes == "instant" &&
                                    NFTDetails.NFTtype == "single" &&
                                    NFTDetails.onSale == 0 &&
                                    NFTDetails.onAuction == 0 &&
                                    NFTDetails.owner == userWallet ? (
                                      <Button
                                        data-toggle="modal"
                                        data-target="#On_goingAuction"
                                      >
                                        Unlimited auction
                                      </Button>
                                    ) : (
                                      ""
                                    )} */}

                                    {NFTDetails.onSale == 0 &&
                                    NFTDetails.owner == userWallet ? (
                                      networkcurrentref.current ==
                                      NFTDetails.network ? (
                                        NFTDetails.mintTypes == "instant" ? (
                                          <Button
                                            data-toggle="modal"
                                            data-target="#Transfer"
                                          >
                                            Transfer
                                          </Button>
                                        ) : (
                                          ""
                                        )
                                      ) : (
                                        <Button
                                          onClick={() =>
                                            Changenetwork(NFTDetails.network)
                                          }
                                        >
                                          Transfer
                                        </Button>
                                      )
                                    ) : (
                                      ""
                                    )}

                                    {NFTDetails.owner != userWallet ? (
                                      <Button onClick={() => withDraw()}>
                                        Withdraw
                                      </Button>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div id="Details" class="tab-pane fade in  ">
                                {NFTDetails && NFTDetails != null ? (
                                  NFTDetails.mintTypes == "instant" ? (
                                    <div className="content">
                                      <p>Token ID: {NFTDetails.tokenId}</p>
                                      <p>
                                        Token Standard:{" "}
                                        {NFTDetails.NFTtype == "single"
                                          ? "ERC-721"
                                          : "ERC-1155"}
                                      </p>
                                      <p>Buy With: CSTAR</p>
                                      <p>
                                        Network:{" "}
                                        {NFTDetails.network.toUpperCase()}
                                      </p>
                                      <p>
                                        Created At:{" "}
                                        {Moment(NFTDetails.createdAt).fromNow()}
                                      </p>
                                      <p>
                                        Transaction Hash:{" "}
                                        <span>
                                          {" "}
                                          {NFTDetails.txHash.substring(0, 15)}
                                          ... {/* <small> */}
                                          <i
                                            onClick={() =>
                                              copy(
                                                NFTDetails.txHash,
                                                "Transaction hash copied"
                                              )
                                            }
                                            class="fa fa-clone"
                                            aria-hidden="true"
                                          ></i>
                                          {/* </small> */}
                                        </span>
                                      </p>
                                      {NFTDetails.NFTtype == "multiple" ? (
                                        <p>Quantity: {NFTDetails.Quantity}</p>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ) : (
                                    <div className="content">
                                      <p>
                                        Token Standard:{" "}
                                        {NFTDetails.NFTtype == "single"
                                          ? "ERC-721"
                                          : "ERC-1155"}
                                      </p>
                                      <p>
                                        Network:{" "}
                                        {NFTDetails.network.toUpperCase()}
                                      </p>
                                      <p>
                                        Created At:{" "}
                                        {Moment(NFTDetails.createdAt).fromNow()}
                                      </p>
                                      {NFTDetails.NFTtype == "multiple" ? (
                                        <p>Quantity: {NFTDetails.Quantity}</p>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  )
                                ) : (
                                  ""
                                )}
                              </div>
                              <div id="Bid" class="tab-pane fade in  ">
                                <div className="flex_conteteded">
                                  {auctionData &&
                                    auctionData.bidders.map((item, i) => {
                                      return (
                                        <div className="content">
                                          <p>Bid Price: {item.amount}</p>
                                          <p>
                                            By{" "}
                                            <span>
                                              {item.bidder_address.substring(
                                                0,
                                                25
                                              )}
                                              ...
                                              <i
                                                onClick={() =>
                                                  copy(
                                                    item.bidder_address,
                                                    "Address copied"
                                                  )
                                                }
                                                class="fa fa-clone"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </p>
                                        </div>
                                      );
                                    })}

                                  {!auctionData ? (
                                    <div className="content">
                                      <p>No Bids Found</p>
                                    </div>
                                  ) : (
                                    " "
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <div class="modal" id="buynow">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Buy Now</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={buycancel}
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <p>You are about to place a Buy Order</p>
                          <div className="colo-img">
                            {NFTDetails &&
                            (nftfileTyperef.current == "png" ||
                              nftfileTyperef.current == "jpg" ||
                              nftfileTyperef.current == "gif" ||
                              nftfileTyperef.current == "svg" ||
                              nftfileTyperef.current == "webp" ||
                              nftfileTyperef.current == "jpeg") ? (
                              <img src={NFTDetails.cloudUrl} />
                            ) : nftfileTyperef.current == "mp3" ||
                              nftfileTyperef.current == "ogg" ? (
                              <>
                                <div className="audio_player_new">
                                  <audio
                                    width="100%"
                                    height="300"
                                    controls
                                    controlsList="nodownload"
                                  >
                                    <source
                                      src={NFTDetails && NFTDetails.cloudUrl}
                                    />
                                  </audio>

                                  <img src={geomatry} alt="" className="" />
                                </div>
                              </>
                            ) : nftfileTyperef.current == "mp4" ||
                              nftfileTyperef.current == "webm" ||
                              nftfileTyperef.current == "wav" ? (
                              <video
                                width="100%"
                                height="300"
                                controls
                                controlsList="nodownload"
                              >
                                <source
                                  src={NFTDetails && NFTDetails.cloudUrl}
                                />
                              </video>
                            ) : (
                              ""
                            )}
                            <span>by</span>
                            <p>{NFTDetails.owner}</p>
                          </div>
                          <div className="buy-detaise">
                            <div className="content_cls_oo">
                              <small>Price</small>{" "}
                              <span>
                                {NFTDetails.Price} CSTAR ({NFTDetails.network})
                              </span>
                            </div>
                            {NFTDetails.NFTtype == "multiple" ? (
                              <>
                                <div className="content_cls_oo">
                                  <small>Available Quantity</small>{" "}
                                  <span>({NFTDetails.saleQuantity})</span>
                                </div>
                                <h1>Enter Quantity to Buy</h1>
                                <div className="drob_dowmn_select">
                                  <input
                                    type="text"
                                    placeholder="e.g 10"
                                    value={buyQuantityref.current}
                                    onChange={selectbuyQty}
                                  />
                                </div>
                              </>
                            ) : (
                              ""
                            )}

                            {/* <div className="content_cls_oo">
                          <small>Your Balanace</small> <span>0 {NFTDetails.network}</span>
                        </div> */}
                            {/* {NFTDetails.mintTypes == "instant" ? ( */}
                            {NFTDetails.NFTtype == "multiple" ? (
                              <div className="content_cls_oo">
                                {buyQuantityref.current != "" ? (
                                  <>
                                    <small>You Will Pay</small>{" "}
                                    <span>
                                      {parseFloat(
                                        NFTDetails.Price *
                                          buyQuantityref.current
                                      )}{" "}
                                      CSTAR ({NFTDetails.network})
                                    </span>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              <div className="content_cls_oo">
                                <small>You Will Pay</small>{" "}
                                <span>
                                  {parseFloat(NFTDetails.Price)} CSTAR (
                                  {NFTDetails.network})
                                </span>
                              </div>
                            )}
                            {/* ) ) : ("")} */}
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {BuyLoading == true ? (
                              <a>Loading...</a>
                            ) : (
                              <a onClick={() => buyNft()}>Buy Now</a>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal" id="bidnow">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Bid Now</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={bidnow}
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <p>You are about to place a Bid for </p>
                          <div className="colo-img">
                            {NFTDetails &&
                            (nftfileTyperef.current == "png" ||
                              nftfileTyperef.current == "jpg" ||
                              nftfileTyperef.current == "gif" ||
                              nftfileTyperef.current == "svg" ||
                              nftfileTyperef.current == "webp" ||
                              nftfileTyperef.current == "jpeg") ? (
                              <img src={NFTDetails.cloudUrl} />
                            ) : nftfileTyperef.current == "mp3" ||
                              nftfileTyperef.current == "ogg" ? (
                              <>
                                <div className="audio_player_new">
                                  <audio
                                    width="100%"
                                    height="300"
                                    controls
                                    controlsList="nodownload"
                                  >
                                    <source
                                      src={NFTDetails && NFTDetails.cloudUrl}
                                    />
                                  </audio>
                                  <img src={geomatry} alt="" className="" />
                                </div>
                              </>
                            ) : nftfileTyperef.current == "mp4" ||
                              nftfileTyperef.current == "webm" ||
                              nftfileTyperef.current == "wav" ? (
                              <video
                                width="100%"
                                height="300"
                                controls
                                controlsList="nodownload"
                              >
                                <source
                                  src={NFTDetails && NFTDetails.cloudUrl}
                                />
                              </video>
                            ) : (
                              ""
                            )}
                            <span>by</span>
                            <p>{NFTDetails.owner}</p>
                          </div>
                          <div className="buy-detaise">
                            <div className="content_cls_oo">
                              <small>Current Highest Bid</small>{" "}
                              <span>
                                {auctionData
                                  ? auctionData.highest_bid === ""
                                    ? "0 " + auctionData.network
                                    : auctionData.highest_bid +
                                      " (CSTAR) " +
                                      auctionData.network
                                  : ""}
                              </span>
                            </div>

                            <h1>
                              Enter Bid amount{" "}
                              <small>
                                (Greater than current bidding amount)
                              </small>
                            </h1>
                            <div className="drob_dowmn_select">
                              <input
                                type="text"
                                placeholder="Enter Amount"
                                className="w-100"
                                onChange={(e) => setBidAmount(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {bidLoader == true ? (
                              <a>Loading...</a>
                            ) : (
                              <a onClick={() => sendBid()}>Bid Now</a>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal" id="FixedAuction">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Fixed Price</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={fixedsale}
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <div className="buy-detaise">
                            <h1>Enter Price</h1>
                            <div className="drob_dowmn_select">
                              <input
                                type="text"
                                placeholder="e.g 10"
                                onChange={(e) => setSalePrice(e.target.value)}
                              />
                            </div>

                            {NFTDetails.NFTtype == "multiple" ? (
                              <>
                                <h1>Enter Quantity</h1>
                                <div className="drob_dowmn_select">
                                  <input
                                    type="text"
                                    placeholder="e.g 10"
                                    onChange={(e) =>
                                      setsaleQuantity(e.target.value)
                                    }
                                  />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {fixedLoader == true ? (
                              <span>Loading...</span>
                            ) : (
                              <span onClick={() => startSale(NFTDetails)}>
                                Start Sale
                              </span>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal" id="TimedAuction">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Timed Auction</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={timed}
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <div className="buy-detaise">
                            <h1>Enter The Minimum Bid Value</h1>
                            <div className="drob_dowmn_select">
                              <input
                                type="text"
                                onChange={(e) => setMinBid(e.target.value)}
                              />
                            </div>

                            <div className="content_cls_oo apsoluteeeeee">
                              <small>Starting Date</small>{" "}
                              <span>
                                {" "}
                                <Datetime
                                  onChange={(e) => selectbidStart(e)}
                                  inputProps={{
                                    onKeyDown: (e) => {
                                      e.preventDefault();
                                    },
                                  }}
                                />
                              </span>
                            </div>
                            <div className="content_cls_oo apsoluteeeeee">
                              <small>Expiration Date</small>{" "}
                              <span>
                                {" "}
                                <Datetime
                                  onChange={(e) => selectbidEnd(e)}
                                  inputProps={{
                                    onKeyDown: (e) => {
                                      e.preventDefault();
                                    },
                                  }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {timedLoader == true ? (
                              <a>Loading...</a>
                            ) : (
                              <a
                                onClick={() =>
                                  startAuction(NFTDetails, "timed")
                                }
                              >
                                Start Auction
                              </a>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal" id="On_goingAuction">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Ongoing Aution</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={ongoing}
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <div className="buy-detaise">
                            <h1>Enter The Minimum Bid Value</h1>
                            <div className="drob_dowmn_select">
                              <input
                                type="text"
                                onChange={(e) => setMinBid(e.target.value)}
                              />
                            </div>

                            <div className="content_cls_oo apsoluteeeeee">
                              <small>Starting Date</small>{" "}
                              <span>
                                {" "}
                                <Datetime
                                  onChange={(e) => selectbidStart(e)}
                                  inputProps={{
                                    onKeyDown: (e) => {
                                      e.preventDefault();
                                    },
                                  }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {goingLoader == true ? (
                              <a>Loading...</a>
                            ) : (
                              <a
                                onClick={() =>
                                  startAuction(NFTDetails, "unlimited")
                                }
                              >
                                Start Auction
                              </a>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal" id="Transfer">
                  <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Transfer</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          ref={transfer}
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body create_collectiion_body">
                        <div className="content_bid">
                          <div className="buy-detaise">
                            <h1>Enter Wallet Address</h1>
                            <div className="drob_dowmn_select">
                              <input
                                type="text"
                                onChange={(e) => setSender(e.target.value)}
                                className="w-100"
                              />
                            </div>

                            {NFTDetails.NFTtype == "multiple" ? (
                              <>
                                <h1>Enter Quantity</h1>
                                <div className="drob_dowmn_select">
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      setTransfer(e.target.value)
                                    }
                                    className="w-100"
                                  />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div class="form-group bottm_buttn  ">
                          <Button className="header_btn new">
                            {transferLoad == true ? (
                              <a>Loading...</a>
                            ) : (
                              <a onClick={() => transferNft()}> Transfer </a>
                            )}
                          </Button>
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
    </div>
  );
}

export default Home;
