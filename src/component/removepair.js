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

import waiting from "../image/waiting.png";
import faild from "../image/faild.png";

import sucess from "../image/succes.png";
import history from "../image/history_1.png";
import setting from "../image/setting0.png";

import ReactTooltip from "react-tooltip";
import MaterialDesignSwitch from "./Countdown";

import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Scrollbars} from "react-custom-scrollbars";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeaderAfter />

      <div className="section_swap">
        <div className="container">
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <div className="title_header"></div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="card_swap">
                <div className="swap_title span_ss">
                  <label className="gradion_text w-100 d-flex justify-content-between align-item-center">
                    Your Will remove{" "}
                    <span className="img_space">
                      <img src={setting} data-tip data-for="setting" />
                      <img src={history} />
                    </span>
                  </label>
                  <ReactTooltip
                    id="setting"
                    place="bottom"
                    type="dark"
                    effect="float"
                    className="width_tool_tip"
                  >
                    <p>Liquidity provider rewards</p>
                    <span>
                      Liquidity providers earn a 0.3% fee on all trades
                      proportional to their share of the pool. Fees are added to
                      the pool, accrue in real time and can be claimed by
                      withdrawing your liquidity. Read re about providing
                      liquidity
                    </span>
                  </ReactTooltip>
                </div>

                <div className="liqudity_after_connect mt-5">
                  <div className="select_coin_section">
                    <div className="">
                      <span>Input</span>
                      <input type="text" value="4,000" />
                    </div>
                    <div>
                      <p data-toggle="modal" data-target="#select_coin">
                        {" "}
                        <img src={USD} />
                        USD <i class="fas fa-chevron-down"></i>
                      </p>
                    </div>
                  </div>
                  <p className="plus_pcls">+</p>
                  <div className="select_coin_section">
                    <div className="">
                      <span>Input</span>
                      <input type="text" value="0.8642" />
                    </div>
                    <div>
                      <p data-toggle="modal" data-target="#select_coin">
                        {" "}
                        <img src={BTC} />
                        BTC <i class="fas fa-chevron-down"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confrim_swap_from mt-5 mb-3">
                  <p className="mb-4">
                    <span>USD/BTC</span>{" "}
                    <span className="gradion_text font_sixz">
                      21.48788157892
                    </span>
                  </p>
                  <p className="mb-4">
                    <span>Price</span>{" "}
                    <span className="gradion_text font_sixz">
                      154782 USD per BTC
                    </span>
                  </p>
                </div>

                <Button
                  className="button_conntect_wal button_excahg"
                  data-toggle="modal"
                  data-target="#remove_pair"
                >
                  Confirm Remove
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div class="modal" id="select_coin">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header ">
              <h4 class="modal-title  ml-auto gradion_text">Select a Token</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="select_input">
                <input type="text" placeholder="Search the token name" />
              </div>
              <div className="scroll_bar">
                <Scrollbars style={{width: 460, height: 300}}>
                  <div className="coin_selec">
                    <img src={TRX} />
                    <div>
                      <h3>TRX</h3>
                      <p>Tether</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img src={BTC1} />
                    <div>
                      <h3>BTC</h3>
                      <p>Bitcoin</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img src={TUST} />
                    <div>
                      <h3>TETH</h3>
                      <p>Tether</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img src={ETH} />
                    <div>
                      <h3>ETH</h3>
                      <p>Ethereum</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img src={TUSD} />
                    <div>
                      <h3>TUSD</h3>
                      <p>Dollar</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img src={TUDC} />
                    <div>
                      <h3>USDC</h3>
                      <p>Dollar</p>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="remove_pair">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header ">
              <h4 class="modal-title gradion_text">Remove Liquidity</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="transaction_active_tab">
                <label>Remove Amount</label>
                <div className="tab_input">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" class="active" href="">
                        25%
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        50%
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        75%
                      </a>
                    </li>
                  </ul>
                  <input placeholder="" value="100%" />
                </div>
                <div className="confrim_swap_from mt-3 mb-3">
                  <p>
                    <span>0.001588</span>{" "}
                    <span>
                      BTC
                      <img src={BTC} />
                    </span>
                  </p>
                  <p>
                    <span>1.23425</span>{" "}
                    <span>
                      9TUDC
                      <img src={TUDC} />
                    </span>
                  </p>
                </div>
                <p className="m-0 mt-3 text-right colo_fff">Receive BTC</p>
                <div className="liqudity_content create_pair">
                  <div className="confrim_swap_from mt-3 mb-3">
                    <p>
                      <span>Price</span>{" "}
                      <span className="text-right">
                        1 BTC = 532.176 USDC <br />1 USDC = 0.00521248 BTC
                      </span>
                    </p>
                  </div>
                </div>
                <Button className="button_conntect_wal button_excahg">
                  Confirm Supply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
