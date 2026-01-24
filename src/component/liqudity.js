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
              <div className="title_header">
                <h1 className="gradion_text">LIQUIDITY</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="card_swap">
                <div className="swap_title span_ss">
                  <label className="gradion_text w-100 d-flex justify-content-between align-item-center">
                    Liquidity{" "}
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
                  <p>Add liquidity to receive LP tokens</p>
                </div>
                <div className="liqudity_before_connect">
                  <div className="swap_title span_ss mt-4">
                    <label className="gradion_text">Your Liquidity</label>
                    <div className="connect_data_box">
                      <p>Connect to a wallet to view your liquidity.</p>
                    </div>
                  </div>
                  <div className="addional_data">
                    <p>
                      <span>
                        Don't see a pool you joined? <span>Import it.</span>
                      </span>{" "}
                      <span>-</span>
                    </p>
                    <p>
                      Or, if you staked your LP tokens in a farm, unstake them
                      to see them here.
                    </p>
                  </div>
                  <Button className="button_conntect_wal button_excahg">
                    Show available Liquidity
                  </Button>
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

                <Button
                  className="button_conntect_wal button_excahg"
                  data-toggle="modal"
                  data-target="#confirm_model"
                >
                  Add Liquidity
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className="hiddenw">
              <div className="priceing_section">
                <h5 className="gradion_text">Price and pool share</h5>
                <div className="bottom_content_collec">
                  <div>
                    <p> 15.87</p>
                    <span>USD per BTC</span>
                  </div>
                  <div>
                    <p>0.002484</p>
                    <span>BTC per USD</span>
                  </div>
                  <div>
                    <p>
                      <i class="fas fa-chevron-left"></i>0.1%
                    </p>
                    <span>Share of Pool</span>
                  </div>
                </div>
              </div>
              <div className="priceing_section">
                <h5 className="font_sixz">
                  Your position{" "}
                  <span className="sapn_price">
                    <img src={USD} />
                    USD <i>+</i>
                    <img src={BTC} />
                    BTC
                  </span>
                </h5>
                <div className="bottom_content_collec">
                  <div>
                    <p>USD</p>
                    <span>12350.40545</span>
                  </div>
                  <div>
                    <p>BTC</p>
                    <span>0.650498</span>
                  </div>
                  <div>
                    <p>Pool token</p>
                    <span>0.65049827.60484068440</span>
                  </div>
                </div>
              </div>
              <div className="priceing_section">
                <div className="addional_data colou33">
                  <p className="inside_we">
                    Liquidity providers earn a 0.25% fee on all trades
                    proportional to their share of the pool by adding liquidity.
                    Fees are added to the pool, accrue in real time and can be
                    claimed by withdrawing your liquidity.
                  </p>
                </div>
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
              <h4 class="modal-title  ml-auto gradion_text">
                You will Receive
              </h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="confrim_swap_from">
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
              <span className="gradion_text font_style_s">
                Output is estimated. If the price changes by more than 0.5% your
                transaction will revert.
              </span>
              <div className="dead_line_sec">
                <div className="liqudity_content">
                  <h5>BTC/USDC</h5>
                  <div>
                    <div className="confrim_swap_from">
                      <p>
                        <span>BTC Deposited</span>{" "}
                        <span>
                          0.000000086924
                          <img src={BTC} />
                        </span>
                      </p>
                      <p>
                        <span>USDC Deposited</span>{" "}
                        <span>
                          0.000015842
                          <img src={TUDC} />
                        </span>
                      </p>
                      <p>
                        <span>Price</span>{" "}
                        <span className="text-right">
                          1 BTC = 532.176 USDC <br />1 USDC = 0.00521248 BTC
                        </span>
                      </p>
                      <p>
                        <span>Share of Pool</span> <span>0.000002482%</span>
                      </p>
                    </div>
                  </div>
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
  );
}

export default Home;
