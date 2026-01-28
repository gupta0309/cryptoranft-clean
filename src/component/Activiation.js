import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slider from "react-slick";
import ForgetInput from "./ForgetInput";
import OtpInput from "react-otp-input";
import { postMethod } from '../service/api'
import { getMethod } from '../service/api'
import apiService from '../service/serviceUrl'
import { toastAlert } from "../lib/toastAlert";
import forgotPasswordImage from "../image/newimg/OTP.png";


function LandingPage() {
  const [value, setValue] = useState();

  const [OTP, setOTP] = useState("");
  const [disableButton, setdisableButton] = useState(false);


  const navigate = useNavigate();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const activiation = async () => {

    var userType = localStorage.getItem('userType');
    var userEmail = localStorage.getItem('Email');
    var userPhone = localStorage.getItem('Phone');

    if (userType === "Email") {
      var emailPhone = userEmail;
    } else if (userType === "Phone") {
      var emailPhone = userPhone;
    }
    var obj = {
      emailPhone: emailPhone,
      userType: userType,
      otp: OTP
    }
    var data = {
      apiUrl: apiService.activiationEmail,
      payload: obj
    };
    //   setdisableButton(true);
    var resp = await postMethod(data);
    if (resp.status) {
      toastAlert("success", resp.Message);
      console.log(resp, '=-=-=resp=-=-=-resp=-=-');
      navigate("/loginPage");
    } else {
      toastAlert("error", resp.Message);
    }

  }

  const resendOTP = async () => {
    var getType = localStorage.getItem('userType');
    console.log(getType, " getType -----")
    if (getType === "Email") {
      var obj = {
        type: "Email",
        email: localStorage.getItem('Email')
      }
      var data = {
        apiUrl: apiService.Resendotp,
        payload: obj,
      };
      setdisableButton(true);
      var resp = await postMethod(data);
      setdisableButton(false);
      if (resp.status) {
        toastAlert("success", resp.Message);
      } else {
        toastAlert("error", resp.Message);
      }
    }
    if (getType === "Phone") {
      var obj = {
        type: "Phone",
        phoneNumber: localStorage.getItem('Phone')
      }

      var data = {
        apiUrl: apiService.Resendotp,
        payload: obj,
      };

      setdisableButton(true);
      var resp = await postMethod(data);
      setdisableButton(false);
      if (resp.status) {
        toastAlert("success", resp.Message);
      } else {
        toastAlert("error", resp.Message);
      }
    }
  }


  return (
    <>
      <Header />
      <main className="pading-landin">
        <div className=" clasnew_registre forgetpassss">
          <div className="container">
            <div className="row d-flex justify-content-center flex-wrap-reverse ">
              <div className="col-lg-6">
                <img
                  src={forgotPasswordImage}
                  className=""
                  alt=""
                />
              </div>

              <div className="col-lg-6">
                <div className="forgetpass">
                  <h3> Account Activiation </h3>
                  <div className="input_forgwr">
                    <p>
                      Please enter ONE TIME PASSWORD and
                      <br />
                      Verify your account.
                    </p>
                    <div className="text-forger ">
                      <OtpInput
                        value={OTP}
                        onChange={setOTP}
                        numInputs={6}
                        otpType="number"
                        autoFocus
                      // separator={<span>-</span>}
                      />
                    </div>
                    <div className="login_button_00">
                      
                      {
                        disableButton === true ?
                          (
                            <Button className="signin-btn header_btn" >
                              Loading...
                            </Button>
                          ) :
                          <Button className="signin-btn header_btn" onClick={activiation} >
                            Proceed
                          </Button>
                      }

                    </div>
                    <div className="button_text_sectuon">
                      <p className="dataforheget">
                        Didn’t Recieve ?<Link to="" onClick={resendOTP}>Resend OTP</Link>
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
