import React, { useEffect } from "react";
import useState from 'react-usestateref';
import qustin from "../image/qustin.svg";
import plane from "../image/plane.svg";
import notification from "../image/notification.svg";
import meta from "../image/MetaMask_Fox 1.svg";
import coinbase from "../image/coinbase-logo-freelogovectors 1.svg";



import wallet from "../image/wallet_icon.svg";
import Fantically_logo_1 from "../image/logo/nft logo.png"
import profileImage from "../image/profileImage.jpeg"

import { Link } from "react-router-dom";
import trest from "../image/trust.svg";

import walletconnt from "../image/wallet.png";
import Logo from "../image/DiscountSales.png";
import ETH from "../image/eth.svg";
import BSE from "../image/bse.svg";
import poly from "../image/bolygon.png";
import { NavLink, useNavigate } from "react-router-dom";
import apiService from "../service/serviceUrl";
import { getMethod, postMethod } from "../service/api";
import { ethers } from "ethers";

import ReactTooltip from "react-tooltip";
import MaterialDesignSwitch from "../component/Countdown";
import logoN from "../image/capage/logocapage.svg";
import ModelPages from "../ModelPages";
import { toastAlert } from "../lib/toastAlert";
import { isEmpty } from "../component/empty";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Dropdown from "react-dropdown";
import { env } from "../service/envConfig";
import Explore from "./Explore";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";
import { useAppKit, useAppKitNetwork, useAppKitAccount } from '@reown/appkit/react';

function Header() {
  const [isOpenDD, setIsOpenDD] = useState(false);
  const { open, close } = useAppKit();
  const { caipNetwork } = useAppKitNetwork();
  const { balance, account, address } = useAppKitAccount();
  // console.log("walletsbalance", balance);
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const Launchpad = useScrollSection("Launchpad");
  const Roadmap = useScrollSection("Roadmap");
  const Mission = useScrollSection("Mission");

  const [searchText, setSearchText] = useState("");
  const [searchNFTdata, setNftsearch] = useState("");
  const [datas, setData] = useState("");
  const excludeColumns = ["creator", "owner"];
  const [opens, searchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const userLogut = async () => {
    localStorage.clear();
    navigate("/loginPage");
  };

  const [UserDatas, setUserDatas] = useState("");
  const [uploadprofile, setuploadprofile] = useState(false);
  const [walletbalance, setwalletbalance] = useState();
  const [type, setnfttype, typeref] = useState("Select Type");
  const [nftnetwork, setnftnetwork, nftnetworkref] = useState("Select Network");

  const [nft_type, setnft_type, nft_typeref] = useState("");
  const [nft_network, setnft_network, nft_networkref] = useState("");

  const nft_options = [
    { value: "single", label: "Single NFT" },
    { value: "multiple", label: "Multiple NFT" },
  ];

  const defaultOption5 = "Select Type";

  const network_options = [
    { value: "eth", label: "ETH" },
    { value: "matic", label: "MATIC" },
  ];

  const defaultOption = "Select Network";
  const filter_value = (localStorage.getItem("openfilter") != undefined) ? localStorage.getItem("openfilter") : false;
  const [openfilter, setopenfilter, openfilterref] = useState(filter_value);

  const handleOpenModal = (view) => {
    open({ view });
  };

  useEffect(() => {

    let getToken = localStorage.getItem("user_token");
    // console.log("getToken===", getToken);
    if (getToken != "" && getToken != undefined && getToken != null) {
      checkUser();
    }
    getProfile();

    getNFTS();

    // var type_value = window.location.href.split("?")[1];
    // if(type_value != undefined && type_value != null && type_value != "")
    // {
    //   type_value = type_value.split("=");
    //   console.log("type_value===",type_value);
    //   var type_values = window.location.href.split("&");
    //   console.log("type_values---",type_values);

    //   if(type_value[0]=="network")
    //   {
    //     var nftnetwork = window.location.href.split("=")[1];
    //     console.log("nftnetwork===",nftnetwork)
    //     if(nftnetwork != null && nftnetwork != undefined)
    //     {
    //       setnftnetwork(nftnetwork.toUpperCase());
    //     }

    //   }
    //   else if(type_value[0]=="type")
    //   {
    //     var type = window.location.href.split("=")[1];
    //     console.log("typenft===",type)
    //     if(type != null && type != undefined)
    //     {
    //     setnfttype(type);
    //     }
    //   }
    // }

    var type_value = localStorage.getItem("nft_type");
    var network_value = localStorage.getItem("nft_network");
    if (type_value != undefined && type_value != null && type_value != "") {
      setnfttype(type_value);
    }
    if (network_value != undefined && network_value != null && network_value != "") {
      setnftnetwork(network_value);
    }

    if ((network_value != undefined && network_value != null && network_value != "") || (type_value != undefined && type_value != null && type_value != "")) {
      setnftnetwork(network_value);
      setnfttype(type_value);
    }

  }, [0]);

  const checkUser = async () => {
    try {
      var data = {
        apiUrl: apiService.checkUser
      };
      var resp = await getMethod(data);
      if (resp.status) {
      } else {
        localStorage.clear();
        navigate("/loginPage");
      }
    } catch (error) { }
  };

  const getProfile = async () => {
    try {
      var data = {
        apiUrl: apiService.profiledatas,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        setUserDatas(resp.Message);
        // console.log(resp, "-=-==-=-=-=-=----=-=-=_____-=-=-resp-=-=-");
      } else {
      }
    } catch (error) { }
  };

  const copy = async (text) => {
    console.log("=-=-=-=-=copy-=-=-=-======-=-=-=-=-=-=-=-=");
    //navigator.clipboard.writeText(text);
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    toastAlert("success", "Address copied");
  };

  const getNFTS = async () => {
    try {
      var data = {
        apiUrl: apiService.getNFTS,
        payload: {}
      };
      var resp = await postMethod(data);
      if (resp.status) {
        setNftsearch(resp.data);
      } else {
      }
    } catch (error) { }
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(searchNFTdata);
    else {
      console.log(searchNFTdata, "searchNFTdatasearchNFTdatasearchNFTdata");

      // const filteredData =  searchNFTdata.filter(function(datas) {
      //     return datas.Name.toString() == lowercasedValue;
      //   });
      const filteredData = searchNFTdata.filter((str) => {
        return str.Name.toLowerCase().indexOf(lowercasedValue) >= 0 || str.collections.toLowerCase().indexOf(lowercasedValue) >= 0 || str.description.toLowerCase().indexOf(lowercasedValue) >= 0 || str.category.toLowerCase().indexOf(lowercasedValue) >= 0 || str.subCategory.toLowerCase().indexOf(lowercasedValue) >= 0;
      });
      console.log(filteredData, "=-=-=-=filteredData--", datas);
      setData(filteredData);
    }
  };

  const handleChange = (value) => {
    console.log("=-=-=-=-=-=-=", value, "||||");
    let checknfrname = isEmpty(value);
    if (checknfrname == true) {
      searchOpen(true);
    } else {
      searchOpen(false);
    }
    setSearchText(value);
    filterData(value);
  };

  const nav = async (page) => {
    navigate("/" + page);
  };


  const select_Type = async (option) => {

    localStorage.setItem("nft_type", option.value);
    setnft_type(option.value);
    setnfttype(option.value);
    window.location.href = env.frontUrl + "explore";
    // //navigate("/explore");
    // if (option.value == "single") {
    //   setnft_type(option.value);

    //   navigate("/explore");
    //   //window.location.href = env.frontUrl+"explore?type=single";
    // } else {
    //   setnft_network(option.value);
    //   navigate("/explore");
    //   //window.location.href = env.frontUrl+"explore?type=multiple";
    // }
  };

  const select_Network = async (option) => {
    localStorage.setItem("nft_network", option.value.toUpperCase());
    setnftnetwork(option.value);
    window.location.href = env.frontUrl + "explore";
    // if (option.value == "eth") {
    //  //window.location.href = env.frontUrl+"explore?network=eth";
    // } else {
    // // window.location.href = env.frontUrl+"explore?network=matic";
    // }
  };

  const togglefilter = async () => {
    setopenfilter(openfilterref.current = !openfilterref.current);
    localStorage.setItem("openfilter", (openfilterref.current = !openfilterref.current));
  }

  return (
    <div>
      <ModelPages />
      <header className="posutopm_stats">
        <div className="w-100">
          <nav class="navbar navbar-light navbar-expand-xl navigation-clean-search">
            <div class="container-fluid">
              <a class="navbar-brand gradion_text hideweb" href="https://cinestarnft.io/">

                <img
                  src={Fantically_logo_1}
                  className=""
                  alt=""
                />
                {/* <img
                  src={require("../image/newimg/fc2@2x.png").default}
                  className=""
                /> */}
              </a>

              <button
                data-toggle="collapse"
                class="navbar-toggler"
                data-target="#navcol-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav mr-auto justify-content-center align-items-center gap-13px" >
                  <div className="search_header">
                    <span>
                      <i class="bi bi-search"></i>
                    </span>
                    <input type="text" placeholder="Search" value={searchText}
                      onChange={(e) => handleChange(e.target.value)} />
                    <button onClick={() => nav('explore')}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-sliders2-vertical"
                        viewBox="0 0 16 16"
                        onClick={togglefilter}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"
                        />
                      </svg>
                    </button>
                  </div>
                  {opens == true && (
                    <div className="box-container">
                      {datas &&
                        datas.map((d, i) => {
                          return (
                            <div
                              key={i}
                              className="box"
                            >
                              <a
                                href={`/NFTDetails/${d.txHash}/${d.network}`}
                              >
                                {d.Name}
                                <br />
                              </a>
                            </div>
                          );
                        })}
                      <div className="clearboth"></div>
                      {datas.length === 0 && (
                        <span>No records found to display!</span>
                      )}
                    </div>
                  )}

                  {openfilterref.current ?
                    (
                      <div className="filter_dropdown">
                        <Dropdown
                          options={network_options}
                          value={nftnetworkref.current}
                          onChange={(o) => select_Network(o)}
                          className="classs_radion ml-3"
                        />

                        <Dropdown
                          options={nft_options}
                          value={typeref.current}
                          onChange={(o) => select_Type(o)}
                          className="classs_radion ml-3"
                        />
                      </div>
                    ) : ("")}
                </ul>
                <ul class="nav navbar-nav ml-auto">
                  {/* <div className="language-selec">
                    <img
                      src={require("../image/newimg/languaa.png").default}
                      className=""
                    />
                  <div class="dropdown">
                      <button
                        type="button"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Eng (India)
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Link 1
                        </a>
                        <a class="dropdown-item" href="#">
                          Link 2
                        </a>
                        <a class="dropdown-item" href="#">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div> */}

                  {UserDatas.userRole === "admin" ? (<>
                    <li class="nav-item hideweb" role="presentation">
                      {/* <div className="dropdown"> */}
                      <button
                        style={{ width: '100%', margin: "0px" }}
                        className=" btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={() => setIsOpenDD(!isOpenDD)}
                      >
                        Admin Controls
                      </button>
                      {isOpenDD && (
                        <ul className="dropdown-menu show" style={{ display: "block" }}>
                          <li>
                            <NavLink className="nav-link" to="/AdminDashboard">
                              Admin Dashboard
                            </NavLink>
                            <NavLink className="nav-link" to="/createNewItem">
                              Add New NFT
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminCreateJoner">
                              Add Joner
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminCreateCategory">
                              Add Category
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminCreateMovie">
                              Add Movie
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminMovieList">
                              Movie List
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/adminusers">
                              All Users
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminCreateNFTCategory">
                              Add NFT Category
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="nav-link" to="/AdminCreateNFTCollection">
                              Add NFT Collection
                            </NavLink>
                          </li>

                        </ul>
                      )}
                      {/* </div> */}
                    </li>
                  </>) : ""}
                    

                  

                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/movies">
                      Movies
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/explore">
                      Explore
                    </NavLink>
                  </li>
                  {/* <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/createNewItem">
                      Create
                    </NavLink>
                  </li> */}
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/activebids">
                      Active Bids
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/favorites">
                      Collection
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/favorites">
                      Favorites
                    </NavLink>
                  </li>
                  {UserDatas.userRole === "admin" ? <></> :
                  
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/UserRevenue">
                      User Revenue
                    </NavLink>
                  </li>
                  }
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/collection">
                      Profile
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/history">
                      History
                    </NavLink>
                  </li>
                  <li class="nav-item hideweb" role="presentation">
                    <NavLink className="nav-link" to="/collection">
                      Logout
                    </NavLink>
                  </li>
                  <div className="language-selec ned_ass">
                    {/* <img
                      src={require("../image/newimg/profile_s.png").default}
                      className=""
                    /> */}
                    {/* {uploadprofile == false ? ( */}

                    {/* ) : (
                      <div className="profile_img">
                        <img
                          src={require("../image/newimg/profile_s.png")}
                          className=""
                        />
                      </div>
                    )} */}

                    <div class="dropdown">
                      <button
                        type="button"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <div className="profile_img mr-3">
                          {UserDatas.profileImage == "" ? (


                            <img
                              src={
                                profileImage
                              }
                              alt=""
                              lassName=""
                            />
                          ) : (
                            <img
                              src={UserDatas && UserDatas.profileImage}
                              lassName=""
                              alt=""
                            />
                          )}
                        </div>
                        {UserDatas && UserDatas.username}
                      </button>


                      <div class="dropdown-menu">
                        <div className="balance_s">
                          <small>Wallet</small>
                          <div className="wallet_Address">
                            <p>
                              <span>
                                {" "}
                                {address && address == ""
                                  ? "Connect wallet"
                                  : address}{" "}
                              </span>
                              <small onClick={() => copy(address)}>
                                <i
                                  class="fa fa-clone"
                                  aria-hidden="true"
                                ></i>
                              </small>
                            </p>{" "}
                          </div>
                        </div>
                        <div className="balance_s">
                          <small>Balance</small>
                          <h3>
                            {/* {parseFloat(balance).toFixed(4)} {caipNetwork.name} */}
                            {caipNetwork.name}
                          </h3>
                          <h3 onClick={() => handleOpenModal('Networks')}>Change Network</h3>
                        </div>
                        <a class="dropdown-item" href="/Changepass">
                          Changepassword
                        </a>
                        <a class="dropdown-item" href="/editprofile">
                          EditProfile
                        </a>
                        <a class="dropdown-item" onClick={userLogut}>
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="notification_cc" onClick={() => nav('history')}>
                    <span>
                      <i class="bi bi-bell"></i>
                    </span>
                  </div>
                </ul>

                {/* <a class="btn btn-light action-button button_conntect_wal" role="button" href="#" data-toggle="modal" data-target="#connect">Connect Wallet</a> */}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* <div class="modal" id="transactio_1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        <h4 class="modal-title gradion_text">Transaction Settings</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
       <div className='transaction_active_tab'>
        <label>Slippage tolerance</label>
        <div className='tab_input'>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" class="active" href="">0.1%</a></li>
          <li><a data-toggle="tab" href="#menu1">0.5%</a></li>
          <li><a data-toggle="tab" href="#menu2">1.0%</a></li>
        </ul>
          <input placeholder='' value='50' />

        </div>
        <div className='dead_line_sec'>
        <label>Transaction deadline <span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <div className='dead_line_s'>
          <p>5</p><span>Minutes</span>
        </div>
        
        </div>
        <div className='dead_line_sec'>
          <label>Interface Settings</label>
        <div className='inside_flex mt-4'>
        <label>Transaction deadline <span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <MaterialDesignSwitch />
        </div>
        <div className='inside_flex'>
        <label>Disable Multihops<span><i class="far fa-question-circle" data-tip data-for='happyFace'></i></span></label>
        <ReactTooltip id='happyFace' place="right" type="dark" effect="float">
        <span>Show happy face</span>
        </ReactTooltip>
        <MaterialDesignSwitch />
        </div>
        </div>
        
       </div>
      </div>

     

    </div>
  </div>
</div>
<div class="modal" id="connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        <h4 class="modal-title  ml-auto gradion_text">Connect to Wallet</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
       <div className='connect_wallet'>
        <div className='content_selectio'>
        <span>Metamask</span>
        <img src={meta} />
        </div>
        <div className='content_selectio'>
        <span>Coinbase Wallet</span>
        <img src={coinbase} />
        </div>
        <div className='content_selectio'>
        <span>Wallet Connect</span>
        <img src={wallet} />
        </div>
        <div className='content_selectio'>
        <span>Trustswap</span>
        <img src={trest} />
        </div>
       </div>
       <p>Access the marketplace <Link to="" className="gradion_text">using your favourite wallet</Link></p>
      </div>

     

    </div>
  </div>
</div> */}
    </div>
  );
}

export default Header;
