import React from "react";
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import Twitter from "../image/twitter.svg";
import Plane from "../image/plane.svg";
import News from "../image/new_ww.svg";
import NFT from "../image/nft_new.svg";
import games from "../image/games.svg";
import defi from "../image/defi.svg";
import {Link} from "react-router-dom";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="timer-sect">
        <span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
      </div>
    );
  }
};

function Home() {
  return (
    <div>
      <div id="wrapper" className="d-flex">
        {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
        <div
          className="border-end bg-white collapse navbar-collapse "
          id="sidebar-wrapper"
        >
          <Sideber />
        </div>
        <div id="page-content-wrapper">
          <Header />

          <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="edit-prodile_card">
                    <div className="upload_img_">
                      <h5>Create New Item</h5>
                      <div className="pading_section_s">
                        <form className="register_form final_form">
                          <div className="row mt-3">
                            <div className="col-lg-12">
                              <div class="form-group col_input_p">
                                <div className="d-flex justify-content-between"></div>
                                <div class="input-group">
                                  <input
                                    class="form-control"
                                    className="form-control"
                                    placeholder="Supply"
                                  />
                                </div>
                                <small className="small-foinr mt-3">
                                  The number of items that can be minted. No gas
                                  cost to you!{" "}
                                </small>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div class="form-group inputeee">
                                <select className="selecycc">
                                  <option>Blockchain</option>
                                  <option>Blockchain</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="bottm_buttn pt-3">
                            <Button
                              className="signin-btn header_btn"
                              data-toggle="modal"
                              data-target="#createditem"
                            >
                              {" "}
                              <Link to=""> Create</Link>
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
