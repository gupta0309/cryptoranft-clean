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
import OtpInput from "react-otp-input";
import inter from "../image/internet.svg";
import confirm_img from "../image/newimg/confirm-img.png"


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
                      <h5>Code Verification</h5>
                      <div className="pading_section_s">
                        <p>Please enter ONE TIME PASSWORD to verify .</p>
                        <div>
                          <div className="input_forgwr">
                            <div className="text-forger d-flex justify-content-center">
                              <OtpInput
                                numInputs={6}
                                otpType="number"
                                autoFocus
                                separator={<span>-</span>}
                              />
                            </div>
                            <div className="login_button_00">
                              <Button
                                className="signin-btn header_btn"
                                data-toggle="modal"
                                data-target="#chageroom"
                              >
                                Verify
                              </Button>
                            </div>
                            <div className="button_text_sectuon">
                              <p className="dataforheget mt-2">
                                Didn’t Recieve ?<Link to="">Resend OTP</Link>
                              </p>
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
        </div>
      </div>
      <div id="chageroom" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body sucessss_sss_">
              <img
                src={confirm_img}
                alt=""
                className=""
              />
              <p>Your details changed successfully</p>
              <div className="Button_neww login_button_00">
                <Button
                  className="signin-btn header_btn w-100"
                  data-dismiss="modal"
                >
                  Ok
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
