import React, { useEffect } from "react";
import useState from "react-usestateref";
import Sideber from "./Sidebar";
import Header from "./Headerafterlogin";
import Twitter from "../image/twitter.svg";
import Plane from "../image/plane.svg";
import News from "../image/new_ww.svg";
import NFT from "../image/nft_new.svg";
import games from "../image/games.svg";
import defi from "../image/defi.svg";
import { Link } from "react-router-dom";

import inter from "../image/internet.svg";
import confirm from "../image/newimg/confirm-img.png"
import sign_red_error_icon1 from "../image/sign-red-error-icon-1.png"

import Token1 from "../image/toker1.png";
import { Button } from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toastAlert } from "../lib/toastAlert";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import OtpInput from "react-otp-input";
import { env } from "../service/envConfig";

const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
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
  const initailformvalue = {
    text: "",
    Instagram: "",
    Facebook: "",
    Twitter: ""
  };
  const [profileImage, setprofileImage] = useState("");
  const [textErr, SertextErr, SettextErrref] = useState(false);
  const [twitterErr, SettwitterErr, SettwitterErrref] = useState(false);
  const [facebookErr, SetfacebookErr, SetfacebookErrref] = useState(false);
  const [instagramErr, SetinstagramErr, SetinstagramErrref] = useState(false);
  const [MobileValue, setMobileValue] = useState();
  const [fullName, setfullName] = useState("");
  const [userData, setUserData] = useState("");
  const [mobileEmail, setMobileEmail] = useState("");
  const [show, setShow] = useState(false);
  const [OTP, setOTP] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [disableButton, setdisableButton] = useState(false);
  const [formValue, setFormValue] = useState(initailformvalue);
  const [validtext, Setvalidtext] = useState("");
  const { text, Twitter, Facebook, Instagram } = formValue;
  const HandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(e.target, "-0-");
    let formData = { ...formValue, ...{ [name]: value } };
    setFormValue(formData);
  };

  const vallidate = () => {
    console.log("=-=-");
    const error = {};
    var values = formValue;

    if (!values.text) {
      SertextErr(true);
      error.text = "Enter your text";
    } else {
      SertextErr(false);
    }


    if (!values.Twitter) {
      error.Twitter = "This is a required question";
      SettwitterErr(true);
    } else {
      console.log("oooooooo")

      const regex = new RegExp(
        "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
      );
      if (regex.test(values.Twitter)) {
        SettwitterErr(false);
      } else {
        error.Twitter = "Invalid url format";
        SettwitterErr(true);
      }
    }

    if (!values.Twitter) {
      error.Twitter = "Enter your link";
      SettwitterErr(true);
    } else {
      console.log("oooooooo")

      const regex = new RegExp(
        "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
      );
      if (regex.test(values.Twitter)) {
        SettwitterErr(false);
      } else {
        error.Twitter = "Invalid url format";
        SettwitterErr(true);
      }
    }
    if (!values.Facebook) {
      error.Facebook = "Enter Your link";
      SetfacebookErr(true);
    } else {
      console.log("oooooooo")

      const regex = new RegExp(
        "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
      );
      if (regex.test(values.Facebook)) {
        SetfacebookErr(false);
      } else {
        error.Facebook = "Invalid url format";
        SetfacebookErr(true);
      }
    }
    if (!values.Instagram) {
      error.Instagram = "Enter your Link";
      SetinstagramErr(true);
    } else {
      console.log("oooooooo")

      const regex = new RegExp(
        "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
      );
      if (regex.test(values.Instagram)) {
        SetinstagramErr(false);
      } else {
        error.Instagram = "Invalid url format";
        SetinstagramErr(true);
      }
    }
    Setvalidtext(error);
  };
  const imageUpload = (type, val) => {
    console.log("type===", type);
    console.log("val===", val);
    const fileExtension = val.name.split(".").at(-1);
    const fileSize = val.size;
    const fileName = val.name;
    console.log("fileExtension===", fileExtension);
    console.log("fileSize===", fileSize);
    console.log("fileName===", fileName);
    if (
      fileExtension != "png" &&
      fileExtension != "jpg" &&
      fileExtension != "jpeg"
    ) {
      toastAlert(
        "error",
        "File does not support. You must use .png or .jpg or .jpeg "
      );
      return false;
    } else if (fileSize > 1000000) {
      toastAlert("error", "Please upload a file smaller than 1 MB");
      return false;
    } else {
      const data = new FormData();
      data.append("file", val);
      data.append("upload_preset", env.presetName);
      data.append("cloud_name", env.cloudName);
      fetch("https://api.cloudinary.com/v1_1/" + env.cloudName + "/auto/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("cloudinary upload===", data.url);
          setprofileImage(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setfullNameChange = (e) => {
    setfullName(e.target.value);
  };


  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      var data = {
        apiUrl: apiService.getProfile,
      };
      var resp = await getMethod(data);
      // console.log("=-=-=-resp=-=-=-=-", resp);

      if (resp) {
        setUserData(resp.Message);
        console.log("=-=-=-resp=-=-=-=-", resp.Message);
        setfullName(resp.Message.username);
        setMobileValue(resp.Message.mobileNumber);
        setMobileEmail(resp.Users);
        setprofileImage(resp.Message.profileImage);
        formValue.text = resp.Message.text;
        formValue.Twitter = resp.Message.twitterlink;
        formValue.Facebook = resp.Message.facebooklink;
        formValue.Instagram = resp.Message.instagramlink;

        console.log("=-=-=-resp.Message.text=-=-=-=-", resp.Message.facebooklink);

      }
    } catch (error) { }
  };

  const getOTP = async () => {
    vallidate();
    try {
      if (SettextErrref.current == false &&
        SettwitterErrref.current === false &&
        SetfacebookErrref.current == false &&
        SetinstagramErrref.current == false) {
        var type = "";
        if (userData.emailId != "") {
          type = "Email";
        }
        if (userData.mobileNumber != "") {
          type = "Phone";
        }

        var obj = {
          type: type,
          email: mobileEmail,
          number: MobileValue,
          text: formValue.text,
          twitterlink: formValue.Twitter,
          facebooklink: formValue.Facebook,
          instagramlink: formValue.Instagram
        };
        console.log(type, "=-=-type=-=");
        var data = {
          apiUrl: apiService.getOTPMobileandEmail,
          payload: obj,
        };
        setdisableButton(true);
        var resp = await postMethod(data);
        setdisableButton(false);
        if (resp.status) {
          toastAlert("success", resp.Message);
          setShow(true);
        } else {
          toastAlert("error", resp.Message);
        }
      }
    } catch (error) { }
  };
  const resendOTP = async () => {
    try {
      console.log("=-=tery-0-");
      var getType = localStorage.getItem("userTypeLogin");
      console.log(getType, "gettype=-=tery-0-");

      if (getType == "Email") {
        var obj = {
          type: "Email",
          email: localStorage.getItem("EmailLogin"),
        };
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
      if (getType == "Phone") {
        var obj = {
          type: "phone",
          phoneNumber: localStorage.getItem("PhoneLogin"),
        };

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
    } catch (error) { }
  };

  const verifyOtp = async () => {
    try {
      console.log("*******0000******");
      var obj = {
        otp: OTP,
        image: profileImage,
        name: fullName,
        text: formValue.text,
        twitterlink: formValue.Twitter,
        facebooklink: formValue.Facebook,
        instagramlink: formValue.Instagram
      };
      var data = {
        apiUrl: apiService.updateProfile,
        payload: obj,
      };
      setdisableButton(true);
      var resp = await postMethod(data);
      setdisableButton(false);
      seterrorMessage(resp.Message);
      setStatus(resp.status);
      if (resp.status) {
        console.log("=-=-=-SUCCESS=-=-=", resp);
      } else {
        console.log("=-=-=-ERROR=-=-=", resp);
      }
    } catch (error) { }
  };

  const reload = async () => {
    console.log("[==-=-=-=-=-=-=-=-=-=-=-=-");
    window.location.reload();
  };

  useState(() => {
    getProfile();
  }, [0]);

  return (
    <div>
      {show == false ? (
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
                        <h5>Edit Profile</h5>
                        <div className="pading_section_s">
                          <p>
                            Please enter your name, email or Phone number as
                            they appear on official documents. We need to know
                            your details to verify your identity so we can meet
                            regulatory compliance.
                          </p>
                          <div className="uploade_img">
                            {/* <div className="box-secrtom">
                            <img
                              src={
                                require("../image/newimg/pridileee.png").default
                              }
                              className=""
                            />
                            <div className="input_upload">
                              <input type="file" />
                              <span>
                                <i class="bi bi-camera"></i>
                              </span>
                            </div>
                          </div> */}

                            <div class="avatar-upload">
                              <div class="avatar-edit">
                                <input
                                  type="file"
                                  id="imageUpload"
                                  onChange={(e) =>
                                    imageUpload(
                                      "address_proof",
                                      e.target.files[0]
                                    )
                                  }
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label for="imageUpload"></label>
                              </div>
                              <div class="avatar-preview">
                                {profileImage == "" ? (
                                  <div id="imagePreview"></div>
                                ) : (
                                  <img src={profileImage} />
                                )}
                              </div>
                            </div>
                          </div>
                          {/* {f++ield=="upload"?( */}
                          <form className="register_form">
                            <div class="form-group ">
                              <div className="d-flex justify-content-between">
                                <label class="control-label " for="email">
                                  Full Name
                                </label>
                              </div>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i className="bi bi-person-fill"></i>
                                </div>
                                <input
                                  class="form-control"
                                  className="form-control"
                                  placeholder="Enter Full Name"
                                  value={fullName}
                                  onChange={setfullNameChange}
                                />
                              </div>
                            </div>
                            <div class="form-group ">
                              <div className="d-flex justify-content-between">
                                <label class="control-label " for="email">
                                  Text Area
                                </label>
                              </div>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i className="bi bi-person-fill"></i>
                                </div>
                                <input
                                  class="form-control"
                                  className="form-control"
                                  placeholder="Enter Your Text"
                                  name="text"
                                  value={text}
                                  onChange={HandleChange}
                                />
                              </div>
                              {SettextErrref.current == true ? (
                                <p style={{ color: "red" }}>
                                  {validtext.text}
                                </p>
                              ) : (
                                ""
                              )}{" "}
                            </div>
                            <div class="form-group ">
                              <div className="d-flex justify-content-between">
                                <label class="control-label " for="email">
                                  Twitter Link
                                </label>
                              </div>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i className="bi bi-twitter"></i>
                                </div>
                                <input
                                  className="form-control"
                                  placeholder="Enter Your Twitter Link"
                                  name="Twitter"
                                  value={Twitter}
                                  onChange={HandleChange}
                                />
                              </div>
                              {SettwitterErrref.current == true ? (
                                <p style={{ color: "red" }}>
                                  {validtext.Twitter}
                                </p>
                              ) : (
                                ""
                              )}{" "}
                            </div>

                            <div class="form-group ">
                              <div className="d-flex justify-content-between">
                                <label class="control-label " for="email">
                                  Facebook Link
                                </label>
                              </div>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i className="bi bi-facebook"></i>
                                </div>
                                <input

                                  className="form-control"
                                  placeholder="Enter Your Facebook Link"
                                  name="Facebook"
                                  value={Facebook}
                                  onChange={HandleChange}

                                />
                              </div>
                              {SetfacebookErrref.current == true ? (
                                <p style={{ color: "red" }}>
                                  {validtext.Facebook}
                                </p>
                              ) : (
                                ""
                              )}{" "}

                            </div>
                            <div class="form-group ">
                              <div className="d-flex justify-content-between">
                                <label class="control-label " for="email">
                                  Instagram Link
                                </label>
                              </div>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i className="bi bi-instagram"></i>
                                </div>
                                <input

                                  className="form-control"
                                  placeholder="Enter Your Insta link"
                                  name="Instagram"
                                  value={Instagram}
                                  onChange={HandleChange}

                                />
                              </div>
                              {SetinstagramErrref.current == true ? (
                                <p style={{ color: "red" }}>
                                  {validtext.Instagram}
                                </p>
                              ) : (
                                ""
                              )}{" "}
                            </div>



                            {userData.mobileNumber != "" ? (
                              <div class="form-group ">
                                <div className="d-flex justify-content-between">
                                  <label class="control-label " for="email">
                                    You will get OTP from Phone Number for
                                    Profile update
                                  </label>
                                </div>
                                <div className="input-group">
                                  <div className="input-group-addon ifonetee">
                                    <i className="bi bi-telephone-fill"></i>
                                  </div>
                                  <PhoneInput
                                    placeholder="Enter phone number"
                                    value={MobileValue}
                                    onChange={setMobileValue}
                                    disabled
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="form-group ">
                                <label class="control-label " for="email">
                                  You will get OTP from Email for Profile update
                                </label>
                                <div className="input-group">
                                  <div className="input-group-addon">
                                    <i className="bi bi-envelope-fill"></i>
                                  </div>
                                  <input
                                    className="form-control"
                                    id="email"
                                    name="emailAddress"
                                    type="text"
                                    dis
                                    placeholder="Enter Email"
                                    value={mobileEmail}
                                  />
                                </div>
                              </div>
                            )}

                            <div className="bottm_buttn">
                              {disableButton == true ? (
                                <Button className="signin-btn header_btn">
                                  {" "}
                                  Loading...
                                </Button>
                              ) : (
                                <Button
                                  className="signin-btn header_btn header_btn_12"
                                  onClick={getOTP}
                                >
                                  {" "}
                                  SAVE
                                </Button>
                              )}
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
      ) : (
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
                                    value={OTP}
                                    onChange={setOTP}
                                    numInputs={6}
                                    otpType="number"
                                    autoFocus
                                    separator={<span>-</span>}
                                  />
                                </div>
                                <div className="login_button_00">
                                  <Button
                                    className="signin-btn header_btn header_btn_12"
                                    data-toggle="modal"
                                    data-target="#chageroom"
                                    onClick={verifyOtp}
                                  >
                                    Verify
                                  </Button>
                                </div>
                                <div className="button_text_sectuon">
                                  <p className="dataforheget">
                                    Didn’t Recieve ?{" "}
                                    <a onClick={resendOTP}>Resend OTP</a>
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
                {status == true ? (
                  <div class="modal-body sucessss_sss_">
                    <img
                      src={confirm}
                      alt=""
                      className=""
                    />
                    <p>{errorMessage} </p>
                    <div className="Button_neww login_button_00">
                      <Button
                        className="signin-btn header_btn w-100"
                        data-dismiss="modal"
                        onClick={reload}
                      >
                        Ok
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div class="modal-body sucessss_sss_">


                    <img
                      src={
                        sign_red_error_icon1
                      }
                      alt=""
                      className=""
                    />
                    <p>{errorMessage} </p>
                    <div className="Button_neww login_button_00">
                      <Button
                        className="signin-btn header_btn  w-100"
                        data-dismiss="modal"
                      >
                        Ok
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
