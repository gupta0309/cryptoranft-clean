import React from "react";
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

import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Scrollbars} from "react-custom-scrollbars";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";

import Footer from "../component/Footer";

function Home() {
  return (
    <ScrollingProvider>
      <div className="main_pading">
        <Header />

        <section className="craeteoption">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div class="CreateHome_heading__22pxj">
                  <h1>
                    <strong>Upload mints</strong>
                  </h1>
                  <p>
                    Choose <strong>"Single"</strong> if you want your
                    collectible to be one of a kind o<strong>"Multiple"</strong>
                    if you want to sell one collectible multiple times.
                  </p>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="d-flex justify-content-center align-item-center">
                      <div className="card_new_option">
                        <div className="imge_with_1">
                          <div className="imge_with_2">
                            <img src={selectoption} alt="" />
                          </div>
                        </div>
                        <Button className="p-button p-component p-button-rounded">
                          <Link to="/createsingle">  Create Single </Link>
                        </Button>
                      </div>
                      <div className="card_new_option">
                        <div className="imge_with_1">
                          <div className="imge_with_2">
                            <img src={selectoption} alt="" />
                          </div>
                        </div>
                        <Button className="p-button p-component p-button-rounded">
                          <Link to="/createMulti">  Create Multiple </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="CreateHome_heading__22pxj">
                  <p className="class_ppa">
                    We do not own your private keys and cannot access your funds
                    without your confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ScrollingProvider>
  );
}

export default Home;
