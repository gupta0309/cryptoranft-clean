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
                    Create Pair{" "}
                    <span className="img_space">
                      <img alt="" src={setting} data-tip data-for="setting" />
                      <img alt="" src={history} />
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
                  <p>
                    The ratio of tokens you add will set the price.
                    <br />
                    Once you are ok with the rate click supply to review.
                  </p>
                </div>

                <div className="liqudity_after_connect">
                  <div className="coin_price_section">
                    <div>
                      <span>
                        1 <small>BTC</small>
                      </span>
                      <span>
                        <i class="fas fa-arrow-right"></i>
                      </span>
                      <span>
                        53,260.20<small>USD</small>
                      </span>
                    </div>
                  </div>
                  <div className="select_coin_section">
                    <div className="">
                      <span>Input</span>
                      <input type="text" value="4,000" />
                      <span>Balance: 2.4854</span>
                    </div>
                    <div>
                      <p data-toggle="modal" data-target="#select_coin">
                        {" "}
                        <img alt="" src={USD} />
                        USD <i class="fas fa-chevron-down"></i>
                      </p>
                    </div>
                  </div>
                  <p className="plus_pcls">+</p>
                  <div className="select_coin_section">
                    <div className="">
                      <span>Input</span>
                      <input type="text" value="0.8642" />
                      <span>Balance: 28.4584</span>
                    </div>
                    <div>
                      <p data-toggle="modal" data-target="#select_coin">
                        {" "}
                        <img alt="" src={BTC} />
                        BTC <i class="fas fa-chevron-down"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="button_conntect_wal button_excahg">
                  Create Pair
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
                    <img alt="" src={TRX} />
                    <div>
                      <h3>TRX</h3>
                      <p>Tether</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img alt="" src={BTC1} />
                    <div>
                      <h3>BTC</h3>
                      <p>Bitcoin</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img alt="" src={TUST} />
                    <div>
                      <h3>TETH</h3>
                      <p>Tether</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img alt="" src={ETH} />
                    <div>
                      <h3>ETH</h3>
                      <p>Ethereum</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img alt="" src={TUSD} />
                    <div>
                      <h3>TUSD</h3>
                      <p>Dollar</p>
                    </div>
                  </div>
                  <div className="coin_selec">
                    <img alt="" src={TUDC} />
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
    </div>
  );
}

export default Home;
