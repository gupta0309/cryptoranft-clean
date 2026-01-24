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
import ITABLE from "../image/icon_table.png";

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
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="card_table_accordion">
                <div class="container">
                  <div class="col-md-12">
                    <div class="panel panel-default">
                      <div class="panel-heading color_fff">
                        Liquidity Pools with total value locked
                      </div>
                      <div>
                        <Button className="button_conntect_wal  button_table_d">
                          Add Liquidity
                        </Button>
                        <p className="p_clas_add">
                          My Total Value Locked: $123,456.00
                        </p>
                      </div>
                      <div class="panel-body caed">
                        <table class="table table-condensed table-striped">
                          <tbody>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo7"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo7">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo6"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo6">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo1"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo1">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo2"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo2">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo3"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo3">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              data-target="#demo4"
                              class="accordion-toggle"
                            >
                              <td>
                                <div className="table_icon">
                                  <img src={ITABLE} />
                                  <div>
                                    <p>IFO BNB</p>
                                    <span>Automatic Swap</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Contract</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Info</span>
                                  <label className="labelclor">0.0</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>APY</span>
                                  <label className="labelclor">66.70%</label>
                                </div>
                              </td>
                              <td>
                                <div className="table_conten">
                                  <span>Pool Tokens</span>
                                  <label className="labelclor">
                                    100.650498/0.04%
                                  </label>
                                </div>
                              </td>
                              <td>
                                <i class="fas fa-chevron-up"></i>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo4">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <p className="cls_tablE_">
                                        Get ICR-TRX LP{" "}
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        View Contract
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                      <p className="cls_tablE_">
                                        See Pair Info
                                        <i class="fas fa-external-link-alt"></i>
                                      </p>
                                    </div>
                                    <div className="col-lg-5">
                                      <div className="disply_clas_ss">
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                        <div className="table_conten">
                                          <span>Pool Info</span>
                                          <label className="labelclor">
                                            0.0
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="div_buuto_ss">
                                        <Button className="button_conntect_wal">
                                          Add Liquidity
                                        </Button>
                                        <Button className="button_conntect_wal">
                                          Remove Liquidity
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;
