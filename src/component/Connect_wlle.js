import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slider from "react-slick";
import ForgetInput from "./ForgetInput";
import { toastAlert } from "../lib/toastAlert";
import { checkAuth } from "../service/axios";

import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import Web3 from "web3";
import apiService from "../service/serviceUrl";
import { hexToDec } from "../service/commonFunc";
import { env } from "../service/envConfig";

import connectwallet from "../image/newimg/conect-walle.png";
import metamas from "../image/newimg/metamas.png";
import trustwallet from "../image/newimg/trustwallet.png";
import { useAppKitAccount } from "@reown/appkit/react";

function LandingPage() {
  const [value, setValue] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState("");
  const [userActive, setuserActive] = useState(false);
  const navigate = useNavigate();
  const { isConnected, address } = useAppKitAccount();


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
   
    getProfile();

  }, [0])

 

  const walletConnect = async () => {
    try {
      if (isConnected && address) {
        setAccount(address);
        let walletAccount = address.toLowerCase();
        setuserActive(true);

        let obj = {
          walletaddress: walletAccount,
        };

        let data = {
          apiUrl: apiService.walletAuth,
          payload: obj,
        };

        let resp = await postMethod(data);
        if (resp.status) {
          toastAlert("success", "Wallet connected successfully!");
          if (UserDatas.userRole == "admin") {
            
            navigate("/AdminDashboard");
          }
          else
          {
            navigate("/dashboard");
            }
        } else {
          toastAlert("error", resp.Message);
        }
      } else {
        toastAlert("error", "Wallet is not connected");
      }
    } catch (error) {
      console.error("Error in wallet connection:", error);
      toastAlert("error", "Error in wallet connect");
    }
  };

  return (
    <>
      <Header active={userActive} />
      <main className="pading-landin">
        <div className=" clasnew_registre forgetpassss">
          <div className="container">
            <div className="row flex-wrap-reverse align-item-center  ">
              <div className="col-lg-6">
                <img src={connectwallet} className="marehbivc" alt="" />
              </div>

              <div className="col-lg-6">
                <div className="forgetpass">
                  <h3>Connect with wallet</h3>
                  <div className="input_forgwr">
                    <p>
                      Connect to one of our wallet provider or Create a new one.
                      <br />
                      Your crypto wallet securely stores your digital goods and
                      cryptocurrencies.
                    </p>
                    <div className="connect_wallet">
                      {/* <h3>
                        <span className="img_wallet">
                          <img
                            src={
                              require("../image/newimg/create-wall.png").default
                            }
                            className=""
                          />
                        </span>
                        Create Wallet
                      </h3> */}
                      <div style={{    textAlign: "center", marginTop: "20px" }}>
                        <h3 style={{ display: "flex", flexDirection: "column", justifyContent: "center",cursor: "pointer" }}>
                          <appkit-button />
                        </h3>

                        <br />

                        {isConnected ? (
                          <h3
                            style={{
                              cursor: "pointer",
                              padding: "10px 20px",
                              backgroundColor: "#4CAF50",
                              color: "white",
                              display: "inline-block",
                              borderRadius: "5px",
                              marginTop: "10px",
                            }}
                            onClick={walletConnect}
                          >
                            Next
                          </h3>
                        ) : (
                          <h3
                            style={{
                              cursor: "pointer",
                              padding: "10px 20px",
                              backgroundColor: "#FF5733",
                              color: "white",
                              display: "inline-block",
                              borderRadius: "5px",
                              marginTop: "10px",
                            }}
                          >
                            Not Connected
                          </h3>
                        )}
                      </div>

                      {/* Connect MetaMask */}
                      {/* <h3 style={{"cursor":"pointer"}} >
                        <span className="img_wallet">
                          

                          <img
                            src={metamas}
                            className=""
                            alt=""
                          />
                        </span>
                        Connect MetaMask */}
                      {/* Connect MetaMask */}
                      {/* </h3> */}
                      {/* <h3 onClick={()=>walletConnect('Trustwallet')}   style={{"cursor":"pointer"}}>
                        <span className="img_wallet">
                          <img
                            src={
                              trustwallet
                            }
                            className=""
                            alt=""
                          />
                        </span>
                        Connect Trust Wallet
                      </h3> */}
                    </div>
                    <div className="w-100 text-center">
                    
                      <Link
                        className="text-center w-100 text-secondary "
                        to="/dashboard"
                      >
                        Skip
                      </Link>

                    </div>

                    <div className="button_text_sectuon">
                      <p className="dataforheget">
                        By Connecting Your Wallet You’re are agree to our terms
                        & conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
