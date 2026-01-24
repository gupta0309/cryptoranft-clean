import React, { useEffect } from "react";
import useState from 'react-usestateref'
import { Link } from "react-router-dom";

import Logo from "../image/logo/nft logo.png";

import HomeLogo from "../image/home.svg";
import { Button } from "@material-ui/core";

import nftLogo from "../image/nft.svg";
import promotionLogo from "../image/promotion.svg";
import qustin from "../image/qustin.svg";
import plane from "../image/plane.svg";
import notification from "../image/notification.svg";


import DiscouintLogo from "../image/discount.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../service/axios";

import apiService from "../service/serviceUrl";
import { getMethod, postMethod } from "../service/api";

import createLogo from "../image/newimg/active.png"
import dashboardlogo from "../image/newimg/dashboardmenu.png"
import movieLogo from "../image/newimg/movieMenu.png"
import exploreLogo from "../image/newimg/explore.png"
import bidLogo from "../image/newimg/active.png"
import collectionLogo from "../image/newimg/collection.png"
import favoriteLogo from "../image/newimg/faverot.png"
import profLogo from "../image/newimg/profileee.png"
import historyLogo from "../image/newimg/history.png"
import settingLogo from "../image/newimg/setting.png"
import logoutLogo from "../image/newimg/logout.png"
import RevenueLogo from "../image/newimg/Revenue.png"
import {
    useAppKitAccount,
} from "@reown/appkit/react";

// import { Link  } from '@material-ui/core';

function SidebarAdmin() {
    const [sidebarActive, setsidebarActive, sidebarActiveref] = useState("AdminDashboard");
    const navigate = useNavigate();
    const [userWallet, setuserWallet, userWalletref] = useState("");
    const { address, isConnected } = useAppKitAccount();
    const [UserDatas, setUserDatas] = useState("");

    const getProfile = async () => {
        try {
            var data = {
                apiUrl: apiService.profiledatas,
            };
            var resp = await getMethod(data);
            if (resp.status) {
                // console.log(resp, "-=-==-=-=-=-=----=-=-=_____-=-=-resp-=-=-");
                setUserDatas(resp.Message);
                // console.log(resp.Message.userRole, "role ss")
            } else {
            }
        } catch (error) { }
    };

    useEffect(() => {
        setuserWallet(address);
        getProfile();

    }, [0])

    const isAdmin = UserDatas.userRole === "admin";

    const userLogut = async () => {
        localStorage.clear();
        navigate("/loginPage");
    };

    const sidebarActiveClick = async (e) => {
        console.log(e);
        setsidebarActive(e);
    };


    return (
        <div className="lefr_menu_e">
            <div className="close menu_hidden">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#sidebar-wrapper"
                    aria-controls="sidebar-wrapper"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon">
                        <i class="far fa-times-circle"></i>
                    </span>
                </button>
            </div>

            <div className="side_bar_new">
                <a href="https://cinestarnft.io/">
                    <img src={Logo} alt="logo" class="img-fluid logo" />
                </a>




                <div className="nav_link">

                    <>
                        <div className={
                            window.location.href.split("/")[3] === "dashboard"
                                ? "side_bar_link active custom-sb"
                                : "side_bar_link custom-sb"
                        }
                        >
                            <NavLink
                                to="/dashboard"
                                onClick={() => sidebarActiveClick("dashboard")}
                            >
                                <img
                                    src={dashboardlogo}
                                    className="img-fluid"
                                    alt=""
                                />
                                Dashboard
                            </NavLink>
                        </div>

                        <div
                            className={
                                window.location.href.split("/")[3] === "movies"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/movies"
                                onClick={() => sidebarActiveClick("movies")}
                            >
                                <img
                                    src={movieLogo}
                                    className="img-fluid"
                                    alt=""
                                />
                                Movies
                            </NavLink>
                        </div>


                        <div
                            className={
                                window.location.href.split("/")[3] === "explore"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/explore"
                                onClick={() => sidebarActiveClick("explore")}
                            >
                                <img
                                    src={exploreLogo}
                                    className="img-fluid"
                                    alt=""
                                />{" "}
                                Explore
                            </NavLink>
                        </div>


                        <div
                            className={
                                window.location.href.split("/")[3] === "activebids"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/activebids"
                                onClick={() => sidebarActiveClick("ActiveBids")}
                            >
                                <img
                                    src={bidLogo}
                                    className="img-fluid"
                                    alt=""
                                />{" "}
                                Active Bids
                            </NavLink>
                        </div>

                        <div
                            className={
                                window.location.href.split("/")[3] === "collection"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/collection"
                                onClick={() => sidebarActiveClick("collection")}
                            >
                                <img
                                    src={collectionLogo}
                                    className="img-fluid"
                                    alt=""
                                />{" "}
                                Collection
                            </NavLink>
                        </div>
                        <div
                            className={
                                window.location.href.split("/")[3] === "favorites"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/favorites"
                                onClick={() => sidebarActiveClick("Favorites")}
                            >
                                <img
                                    src={favoriteLogo}
                                    className="img-fluid"
                                    alt=""
                                />{" "}
                                Favorites
                            </NavLink>
                        </div>

                        {/* {
                            isAdmin ?
                                <div
                                    className={
                                        window.location.href.split("/")[3] === "UserRevenue"
                                            ? "side_bar_link active custom-sb"
                                            : "side_bar_link custom-sb"
                                    }
                                >
                                    <NavLink
                                        to="/UserRevenue"
                                        onClick={() => sidebarActiveClick("UserRevenue")}
                                    >
                                        <img
                                            src={RevenueLogo}
                                            className="img-fluid"
                                            alt=""
                                        />{" "}
                                        User Revenue
                                    </NavLink>
                                </div>
                                :
                                null
                        } */}

                        {address != null ? (
                            <div
                                className={
                                    window.location.href.split("/")[3] === "profile"
                                        ? "side_bar_link active custom-sb"
                                        : "side_bar_link custom-sb"
                                }
                            >
                                <NavLink
                                    to={`/profile/${address}`}
                                    onClick={() => sidebarActiveClick("profile")}
                                >
                                    <img
                                        src={profLogo}
                                        className="img-fluid"
                                        alt=" "
                                    />
                                    Profile
                                </NavLink>
                            </div>
                        ) : (
                            <div
                                className={
                                    window.location.href.split("/")[3] === "profile"
                                        ? "side_bar_link active custom-sb"
                                        : "side_bar_link custom-sb"
                                }
                            >
                                <NavLink
                                    to={`/walletconnect`}
                                    onClick={() => sidebarActiveClick("profile")}
                                >
                                    <img
                                        src={profLogo}
                                        className="img-fluid"
                                        alt=" "
                                    />
                                    Profile
                                </NavLink>
                            </div>

                        )}

                        {/* <div
            className={
              window.location.href.split("/")[3] == "Wallet"
                ? "side_bar_link active custom-sb"
                : "side_bar_link custom-sb"
            }
          >
            <NavLink
              to="/"
              onClick={() => sidebarActiveClick("Wallet")}
            >
              <img
                src={require("../image/newimg/wallet.png").default}
                className="img-fluid"
              />{" "}
              Wallet
            </NavLink>
          </div> */}
                        {address != null ? (
                            <div
                                className={
                                    window.location.href.split("/")[3] === "history"
                                        ? "side_bar_link active custom-sb"
                                        : "side_bar_link custom-sb"
                                }
                            >
                                <NavLink to="/history" onClick={() => sidebarActiveClick("history")}>
                                    <img
                                        src={historyLogo}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    History
                                </NavLink>
                            </div>
                        ) : (
                            <div
                                className={
                                    window.location.href.split("/")[3] === "history"
                                        ? "side_bar_link active custom-sb"
                                        : "side_bar_link custom-sb"
                                }
                            >
                                <NavLink to="/walletconnect" onClick={() => sidebarActiveClick("history")}>
                                    <img
                                        src={historyLogo}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    History
                                </NavLink>
                            </div>
                        )}


                        {/* <div
            className={
              sidebarActive == "Settings"
                ? "side_bar_link active custom-sb"
                : "side_bar_link custom-sb"
            }
          >
            <NavLink
              to="/dashboard"
              onClick={() => sidebarActiveClick("Settings")}
            >
              <img
                src={settingLogo}
                className="img-fluid"
              />{" "}
              Settings
            </NavLink>
          </div>  */}

                    </>
                    
                    <>
                        <hr style={{ background: "white" }} className="  " />
                        <h4 style={{ color: "#ff1010" }} className=" mb-4 mt-4     " > Admin Control  </h4>

                        <div
                            style={{}}
                            className={
                                window.location.href.split("/")[3] === "AdminDashboard"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminDashboard"
                                onClick={() => sidebarActiveClick("AdminDashboard")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt=" "
                                />
                                Dashboard
                            </NavLink>
                        </div>

                        <div
                            style={{}}
                            className={
                                window.location.href.split("/")[3] === "createNewItem"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/createNewItem"
                                onClick={() => sidebarActiveClick("createNewItem")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt=" "
                                />
                                Add NFT
                            </NavLink>
                        </div>

                        <div
                            // style={{padding:"10px 0px", width:"100%" , fontSize:"10px !important"}}
                            className={
                                window.location.href.split("/")[3] === "AdminCreateJoner"
                                    ? "side_bar_link active custom-sb  "
                                    : "side_bar_link custom-sb "
                            }
                        >
                            <NavLink
                                to="/AdminCreateJoner"
                                onClick={() => sidebarActiveClick("AdminCreateJoner")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt=" "
                                />
                                Add Joner
                            </NavLink>
                        </div>

                        <div
                            className={
                                window.location.href.split("/")[3] === "AdminCreateCategory"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminCreateCategory"
                                onClick={() => sidebarActiveClick("AdminCreateCategory")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt=" "
                                />
                                Add Catogeory
                            </NavLink>
                        </div>


                        <div
                            className={
                                window.location.href.split("/")[3] === "AdminCreateMovie"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminCreateMovie"
                                onClick={() => sidebarActiveClick("AdminCreateMovie")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt="c"
                                />
                                Add Movie
                            </NavLink>
                        </div>
                        {/* <div
                        className={
                            window.location.href.split("/")[3] === "AdminRightsDistribution"
                                ? "side_bar_link active custom-sb"
                                : "side_bar_link custom-sb"
                        }
                    >
                        <NavLink
                            to="/AdminRightsDistribution"
                            onClick={() => sidebarActiveClick("AdminRightsDistribution")}
                        >
                            <img
                                src={settingLogo}
                                className="img-fluid"
                                alt="c"
                            />
                            Rights
                        </NavLink>
                    </div> */}


                        <div
                            className={
                                window.location.href.split("/")[3] === "AdminMovieList"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminMovieList"
                                onClick={() => sidebarActiveClick("AdminMovieList")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt="c"
                                />
                                Movie List
                            </NavLink>
                        </div>

                        <div
                            className={
                                window.location.href.split("/")[3] === "adminusers"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/adminusers"
                                onClick={() => sidebarActiveClick("adminusers")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt="c"
                                />
                                Users List
                            </NavLink>
                        </div>
                        <div
                            className={
                                window.location.href.split("/")[3] === "AdminCreateNFTCategory"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminCreateNFTCategory"
                                onClick={() => sidebarActiveClick("AdminCreateNFTCategory")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt="c"
                                />
                                Add NFTCategory
                            </NavLink>
                        </div>
                        <div
                            className={
                                window.location.href.split("/")[3] === "AdminCreateNFTCollection"
                                    ? "side_bar_link active custom-sb"
                                    : "side_bar_link custom-sb"
                            }
                        >
                            <NavLink
                                to="/AdminCreateNFTCollection"
                                onClick={() => sidebarActiveClick("AdminCreateNFTCollection")}
                            >
                                <img
                                    src={settingLogo}
                                    className="img-fluid"
                                    alt="c"
                                />
                                Add NFTCollection
                            </NavLink>
                        </div>

                        {/* <div className="side_bar_link lofoout custom-sb" onClick={userLogut}>
                  <NavLink to="/">
                    <img
                      src={logoutLogo}
                      className="img-fluid"
                      alt=""
                    />{" "}
                    Logout
                  </NavLink>
                </div> */}
                    </>

                </div>




            </div>
            {/* <div className="neneu_section">
        <div className="card_menue-sede">
          <img
            src={require("../image/newimg/balanace_issue.png").default}
            className=""
          />
          <div className="balance">
            <p>Your Balance</p>
            <h5>23.02 ETH</h5>
          </div>
          <Button>Add Funds</Button>
        </div>
      </div> */}


        </div>



    );
}

export default SidebarAdmin;
