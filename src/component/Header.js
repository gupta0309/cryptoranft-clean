import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Button } from "@material-ui/core";
import qustin from "../image/qustin.svg";
import plane from "../image/plane.svg";
import notification from "../image/notification.svg";
import meta from "../image/MetaMask_Fox 1.svg";
import coinbase from "../image/coinbase-logo-freelogovectors 1.svg";

import wallet from "../image/wallet_icon.svg";
import Fantically_logo_1 from "../image//logo/nft logo.png"


import { Link, NavLink } from "react-router-dom";
import trest from "../image/trust.svg";

import walletconnt from "../image/wallet.png";
import noti from "../image/waiting.png";
import ETH from "../image/eth.svg";
import BSE from "../image/bse.svg";
import poly from "../image/bolygon.png";
import logoN from "../image/capage/logo.png";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toastAlert } from "../lib/toastAlert";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../component/empty";
import { checkAuth } from "../service/axios";
import apiService from "../service/serviceUrl";
import { getMethod, postMethod } from "../service/api";

// import publicIp from "public-ip";
import axios from "axios";
import api from "../utils/api/index";
import Moment from "moment";

const provider = new WalletConnectProvider({
  rpc: {
    97: process.env.REACT_APP_MORALIS_END_POINT,
  },
});

function Header(props) {
  const { active } = props;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginCheck, setLoginCheck] = useState(false);
  const [data, setNftimage] = useState();
  const [activity, setactivity] = useState();

  const [searchText, setSearchText] = useState("");
  const [searchNFTdata, setNftsearch] = useState("");
  const [datas, setData] = useState("");
  const excludeColumns = ["created_by", "owned_by", "name", "NFTtype"];
  const [open, searchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [networkImg, setnetworkImg] = useState("");
  const [authToken, setAuthToken] = useState(false);

  const [account, setAccount, accountref] = useState("");
  const [userActive, setuserActive] = useState(false);

  useEffect(() => {

    let getToken = localStorage.getItem("user_token");
    // console.log("getToken===", getToken);
    if (getToken != "" && getToken != undefined && getToken != null) {
      checkUser();
    }
    setAuthToken(checkAuth());
    var wallet = localStorage.getItem("walletAddress");
    if (wallet != undefined && wallet != null && wallet != "") {
      setuserActive(true);
      setAccount(wallet);
    } else {
      setuserActive(false);
    }
    getNFTS();
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

  const getNFTS = async () => {
    try {
      var data = {
        apiUrl: apiService.getallNFTS,
        payload: {},
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
        return (
          str.Name.toLowerCase().indexOf(lowercasedValue) >= 0 ||
          str.collections.toLowerCase().indexOf(lowercasedValue) >= 0 ||
          str.description.toLowerCase().indexOf(lowercasedValue) >= 0 ||
          str.category.toLowerCase().indexOf(lowercasedValue) >= 0 ||
          str.subCategory.toLowerCase().indexOf(lowercasedValue) >= 0
        );
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

  return (
    <div>
      <header>
        <div className="w-100">
          <nav className="navbar navbar-light navbar-expand-xl navigation-clean-search">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">

                <img
                  src={Fantically_logo_1}
                  alt=""

                />
                {/* <img
                  src={require("../image/newimg/fc2@2x.png").default}
                  className=""
                /> */}
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav mr-auto">
                  {/* <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="button"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Theme
                    </a>
                  </li> */}

                  <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/home">
                      HOME
                    </NavLink>
                  </li>
                  {authToken == false ? (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/loginPage">
                        EXPLORE
                      </NavLink>
                    </li>
                  ) : userActive == true ? (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/explore">
                        EXPLORE
                      </NavLink>
                    </li>
                  ) : (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/walletConnect">
                        EXPLORE
                      </NavLink>
                    </li>
                  )}

                  {authToken == false ? (
                    ""
                  ) : (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                  )}

                  {authToken == false ? (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/loginPage">
                        Collection
                      </NavLink>
                    </li>
                  ) : (
                    <li className="nav-item" role="presentation">
                      <NavLink className="nav-link" to="/collection">
                        Collection
                      </NavLink>
                    </li>
                  )}

                  {/* <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/">
                      EXHIBITION
                    </NavLink>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/">
                      ARTISTS & AREATORS
                    </NavLink>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/">
                      STATS
                    </NavLink>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/discoverNew">
                      WALLET
                    </NavLink>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/creatornft">
                      Creators
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/faq">
                      How it works
                    </Link>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    <a className="nav-link" onClick={() => networkChange()}>
                      Network
                    </a>
                  </li> */}
                  {/* <li className="nav-item" role="presentation">
                    {userWallet == "" || userWallet == undefined ? (
                      <a
                        className="nav-link"
                        role="button"
                        href="#"
                        data-toggle="modal"
                        data-target="#connect"
                      >
                        Apply as an creator
                      </a>
                    ) : ( kycStatus != 2 ? (
                      <Link className="nav-link" to="/artist">
                      Apply as an creator
                    </Link>
                    ) : ""
                    )}
                  </li> */}

                  {/* <li className="nav-item" role="presentation">
                    {userWallet == "" || userWallet == undefined ? (
                      <a
                        className="nav-link"
                        role="button"
                        href="#"
                        data-toggle="modal"
                        data-target="#connect"
                      >
                        Apply as an creator
                      </a>
                    ) : (
                      <Link className="nav-link" to="/artist">
                        Apply as an creator
                      </Link>
                    )}
                  </li> */}

                  {/* <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">More</a>
                            <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                        </li> */}
                </ul>
                {/* <div className="light_dark_mode">
                  {isOpen == true ? (
                    <button onClick={() => setIsOpen(!isOpen)}>
                    <button onClick={() => changeTheme("light")}>
                      <i className="fas fa-sun"></i>
                    </button>
                  ) : (
                    <button onClick={() => setIsOpen(true)}>
                    <button onClick={() => changeTheme("dark")}>
                      <i className="fas fa-moon"></i>
                    </button>
                  )}
                  <button>
                    <i className="fas fa-moon"></i>
                  </button>
                </div> */}
                <div className="header_search eheader_newwww">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                  />

                  {/* <NavLink to=""> */}
                  <span>
                    <i className="bi bi-search"></i>
                  </span>
                  {/* </NavLink> */}
                  {open == true && (
                    <div className="box-container w-100">
                      {datas &&
                        datas.map((d, i) => {
                          return (
                            <div key={i} className="box">
                              <a href={`/NFTDetails/${d.txHash}/${d.network}`}>
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
                </div>

                {/* 
                =========FLAG=======

                <div className="language-selec">
                  <img
                    src={require("../image/newimg/languaa.png").default}
                    className=""
                  />
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Eng (India)
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </div>
                </div> */}

                {/* <div className="home_header_inpur">
                  <input
                    type="text"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <i className="fas fa-search"></i>
                  {open == true && (
                    <div className="box-container">
                      {datas &&
                        datas.map((d, i) => {
                          return (
                            <div
                              key={i}
                              className="box"
                              style={{backgroundColor: d.color}}
                            >
                              <a
                                href={`/mynft-details/${d.token_id}/${d.network}`}
                              >
                                {d.name}
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
                </div> */}

                {/* <a
                  href=""
                  className="mar-2 notify_icon"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  <span>
                    <i className="fas fa-bell"></i>
                    {loginCheck == false ? (
                      <span></span>
                    ) : (
                      <div id="demo" className="collapse">
                        <div>
                          <div className="box-container position_rel">
                            <div className="notification_new">
                              <div className="notification_tiele">
                                <span>Notification</span>
                                <Link to={`/profile/${userWallet}`}>
                                  See All
                                </Link>
                              </div>
                              {activity &&
                                activity.map((item, i) => {
                                  var dates = Moment(item.date).format(
                                    "MMMM Do, YYYY"
                                  );
                                  //console.log(item,'==item==')
                                  return item.activity_type == "kyc" ? (
                                    <Link
                                      to="/createoption"
                                      className="notifecontnet_text p-0"
                                    >
                                      {item && item.cloudUrl && (
                                        <div className="img">
                                          <img src={item.cloudUrl} />
                                        </div>
                                      )}
                                      <div className="noti_text">
                                        <h4>{item.message} </h4>
                                        <p>on {dates}</p>
                                      </div>
                                    </Link>
                                  ) : (
                                    <Link
                                      to={`/profile/${userWallet}`}
                                      className="notifecontnet_text p-0"
                                    >
                                      {item && item.cloudUrl && (
                                        <div className="img">
                                          <img src={item.cloudUrl} />
                                        </div>
                                      )}
                                      <div className="noti_text">
                                        <h4>{item.activity_type} </h4>
                                        <p>on {dates}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                            </div>

                           
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </a> */}
                {authToken == false ? (
                  <span className="heade_btnt">
                    <Button className="header_btn">
                      <Link to="/loginPage">Login</Link>
                    </Button>
                    <Button className="header_btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </span>
                ) : (
                  <span className="heade_btnt">
                    {userActive == true ? (
                      <Button className="header_btn">
                        <Link to={`/profile/${accountref.current}`}>
                          Profile
                        </Link>
                      </Button>
                    ) : (
                      ""
                    )}
                    {userActive == false ? (
                       <Button className="header_btn">
                         <Link to="/walletconnect">Connect Wallet</Link>
                       </Button>
                    ) : (
                      <Button className="header_btn">
                        <Link to={`/profile/${accountref.current}`}>
                          {accountref.current.substring(0, 15)}...
                        </Link>
                      </Button>
                    )}
                  </span>
                )}

                {/* {data && data.kyc_status == 2 ? (
                  <a
                    className="btn btn-light action-button button_conntect_wal p-button p-button-rounded mr-2 createbtn"
                    role="button"
                  >
                    <Link to="/createoption">
                      Create <i className="fas fa-plus"></i>
                    </Link>
                  </a>
                ) : (
                  <a
                    className="btn btn-light action-button button_conntect_wal p-button p-button-rounded mr-2 createbtn"
                    role="button"
                  >
                    <Link to="/artist">
                      Create <i className="fas fa-plus"></i>
                    </Link>
                  </a>
                )} */}
                {/* {localStorage.getItem("chainId") == "80001" ? (
                  <a
                    href=""
                    className="connect_wal new_bg_for_content"
                    data-toggle="modal"
                    data-target="#exampleModalCenterNew"
                  >
                    <img src={poly} alt="" />
                  </a>
                ) : (
                  <a
                    href=""
                    className="connect_wal new_bg_for_content"
                    data-toggle="modal"
                    data-target="#exampleModalCenterNew"
                  >
                    <img src={BSE} alt="" />
                  </a>
                )} */}

                {/* {userWallet == "" || userWallet == undefined ? (
                  <a
                    className="btn btn-light action-button button_conntect_wal"
                    role="button"
                    href="#"
                    data-toggle="modal"
                    data-target="#connect"
                  >
                    Connect Wallet
                  </a>
                ) : (
                  <Link
                    className="btn btn-light action-button button_conntect_wal"
                    to={`/profile/${userWallet}`}
                  >
                    {userWallet.substring(0, 15)}...
                  </Link>
                )} */}
                {/* {loginCheck && loginCheck == true ? (
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    onClick={() => logout()}
                  >
                    <i className="fa fa-sign-out"></i>
                  </a>
                ) : (
                  ""
                )} */}
              </div>

              
            </div>
          </nav>
        </div>
      </header>

      {/* <div className="modal" id="connect">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Connect to Wallet</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>


            <div className="modal-body">
              <div className="connect_wallet">
                <a onClick={() => connectWallet("metamask")}>
                  <div className="content_selectio">
                    <span>
                      {loginCheck == true ? (
                        "Connected!"
                      ) : (
                        <span>
                          {loading == false ? "Metamask" : "Connecting..."}
                        </span>
                      )}
                    </span>
                    {loading == false ? <img src={meta} /> : ""}
                  </div>
                </a>
                <a onClick={() => connectWallet("walletconnect")}>
                  <div className="content_selectio">
                    <span>Wallet Connect</span>
                    <img src={wallet} />
                  </div>
                </a>

              </div>
              <p>
                Access the marketplace{" "}
                <Link to="" className="">
                  using your favourite wallet
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="modal fade"
        id="exampleModalCenterNew"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Choose network
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div className="modal-body">
              <div className="connect_walet">
               
                <div onClick={() => networkChange("BSC")}>
                  <img src={BSE} alt="" />
                  <p>Binance Smart Chain Mainnet</p>
                </div>
                <div onClick={() => networkChange("MATIC")}>
                  <img src={poly} alt="" />
                  <p>Matic(Polygon) Mainnet</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
