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
              <div className="title_header">
                <h1 className="gradion_text">SWAP YOUR TOKENS</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="card_swap">
                <div className="swap_title">
                  <label className="gradion_text">Swap</label>

                  <p>
                    Trade any token, LP share or Vault in a single transaction
                  </p>
                </div>
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
                    <span>Recieve</span>
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
                <div className="select_coin_section">
                  <div className="">
                    <span>Pay</span>
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

                <div className="addional_data">
                  <p>
                    <span>Min. Received</span> <span>-</span>
                  </p>
                  <p>
                    <span>Rate</span> <span>-</span>
                  </p>
                  <p>
                    <span>Price Slippage</span> <span>1%</span>
                  </p>
                  <p>
                    <span>Network Fee</span> <span>-</span>
                  </p>
                  <p>
                    <span>Metadapp Fee</span> <span>5$</span>
                  </p>
                </div>

                <Button
                  className="button_conntect_wal button_excahg"
                  data-toggle="modal"
                  data-target="#confirm_model"
                >
                  Exchange
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
      <div class="modal" id="confirm_model">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header ">
              <h4 class="modal-title  ml-auto gradion_text">Confirm Swap</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="confrim_swap_from">
                <p>
                  <span>From</span>{" "}
                  <span>
                    0.22 ETH
                    <img src={TRX} />
                  </span>
                </p>
                <p>
                  <span>To</span>{" "}
                  <span>
                    9.74 INCH
                    <img src={TRX} />
                  </span>
                </p>
              </div>
              <span className="gradion_text font_style_s">
                Output is estimated. If the price changes by more than 0.5% your
                transaction will revert.
              </span>
              <div className="dead_line_sec">
                <div className="inside_flex price_section">
                  <label>Price</label>
                  <span>
                    0.0021672 ETH per 1INCH <i class="fas fa-exchange-alt"></i>
                  </span>
                </div>

                <div className="inside_flex mt-4">
                  <label>
                    Minimum received{" "}
                    <span>
                      <i
                        class="far fa-question-circle"
                        data-tip
                        data-for="happyFace"
                      ></i>
                    </span>
                  </label>
                  <ReactTooltip
                    id="happyFace"
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <span>
                      Your transation will revert if there is a large,
                      unfavorable price movement before it is confirmed
                    </span>
                  </ReactTooltip>
                </div>
                <div className="inside_flex">
                  <label>
                    Price Impact
                    <span>
                      <i
                        class="far fa-question-circle"
                        data-tip
                        data-for="happyFace"
                      ></i>
                    </span>
                  </label>
                  <ReactTooltip
                    id="happyFace"
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <span>
                      Your transation will revert if there is a large,
                      unfavorable price movement before it is confirmed
                    </span>
                  </ReactTooltip>
                </div>
                <div className="inside_flex price_section">
                  <label>
                    Liquidity Provider Fee
                    <span>
                      <i
                        class="far fa-question-circle"
                        data-tip
                        data-for="happyFace"
                      ></i>
                    </span>
                  </label>
                  <ReactTooltip
                    id="happyFace"
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <span>
                      Your transation will revert if there is a large,
                      unfavorable price movement before it is confirmed
                    </span>
                  </ReactTooltip>
                  <span>0.000066 ETH</span>
                </div>
              </div>
              <Button className="button_conntect_wal button_excahg">
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
