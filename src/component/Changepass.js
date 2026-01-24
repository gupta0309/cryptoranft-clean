import React ,{useEffect}from "react";
import useState from "react-usestateref";
import { Button } from "@material-ui/core";
import Header from "./Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slider from "react-slick";
import ForgetInput from "./ForgetInput";
import { toastAlert } from "../lib/toastAlert";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import forgotPasswordImage from "../image/newimg/forgot_password_2.png";


import {
  setAuthorization,
  removeAuthToken,
  removeAuthorization,
} from "../service/axios";

function LandingPage() {
  const [value, setValue] = useState();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const initialFormValue = {
    Newpassword: "",
    Confirmpassword: "",
    Oldpassword: "",
  };

  const [formvalue, Setformvalue] = useState(initialFormValue);
  const [newpasswordErr, SetnewpasswordErr, SetnewpasswordErrref] =
    useState("");
  const [ConfirmpasswordErr, SetConfirmpasswordErr, SetConfirmpasswordErrref] =
    useState("");
  const [OldpasswordErr, SetOldpasswordErr, SetOldpasswordErrref] =
    useState("");

  const [passHide, setPassHide] = useState(false);
  const [passHidenew, setPassHidenew] = useState(false);
  const [passHideconf, setPassHideconf] = useState(false);
  const [inputType, setinputType] = useState("password");
  const [inputTypeconf, setinputTypeconf] = useState("password");
  const [inputTypeold, setinputTypeold] = useState("password");
  const [buttonLoader, SetbuttonLoader] = useState(false);

  const [validationErr, setvalidationErr] = useState("");
  const navigate = useNavigate();


  const { Newpassword, Confirmpassword, Oldpassword } = formvalue;

  const handleChange = async (e) => {
    try {
      e.preventDefault();
      const { name, value } = e.target;
      console.log(e.target, "=-e,target-=-=");
      let formData = { ...formvalue, ...{ [name]: value } };
      Setformvalue(formData);
    } catch (error) {}
  };
  
  const vallidation = (values) => {

    try {
      const errors = {};
      
      if (!values.Newpassword ) {
        SetnewpasswordErr(true);
        errors.Newpassword = "Enter Your NewPassword";
      } else if (values.Newpassword == values.Oldpassword) {
        SetnewpasswordErr(true);
        errors.Newpassword = "NewPassword and oldpassword are Same";
      }else if(!Newpassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        SetnewpasswordErr(true);
        errors.Newpassword ="New Password must be eight characters, at least one letter, one number and one special character"
      }
       else {
        SetnewpasswordErr(false);
      }
      if (!values.Confirmpassword ) {
        SetConfirmpasswordErr(true);
        errors.Confirmpassword = "Enter Your ConfirmPassword";
      } else if (values.Confirmpassword != values.Newpassword) {
        SetConfirmpasswordErr(true);
        errors.Confirmpassword = "ConfirmPassword and newPassword are not same";
      } else {
        SetConfirmpasswordErr(false);
      }
      if (!values.Oldpassword ) {
        SetOldpasswordErr(true);
        errors.Oldpassword = "Enter Your OldPassword";
      } else {
        SetOldpasswordErr(false);
      }
      setvalidationErr(errors);
    } catch (error) {
      console.log(error, "-=-ereroe");
    }
  };

  const passwordhidepass = (data) => {
    if (data == "hide") {
      setPassHidenew(true);
      setinputType("text");
    } else {
      setPassHidenew(false);
      setinputType("password");
    }
  };
  const passwordhidepassconf = (data) => {
    if (data == "hide") {
      setPassHideconf(true);
      setinputTypeconf("text");
    } else {
      setPassHideconf(false);
      setinputTypeconf("password");
    }
  };
  const passwordhidepassold = (data) => {
    if (data == "hide") {
      setPassHide(true);
      setinputTypeold("text");
    } else {
      setPassHide(false);
      setinputTypeold("password");
    }
  };
  const changepassword = async () => {
    try {
      vallidation(formvalue);

      if (
        SetnewpasswordErrref.current == false &&
        SetOldpasswordErrref.current == false &&
        SetConfirmpasswordErrref.current == false
      ) {
      
        const obj = {
          Oldpassword: formvalue.Oldpassword,
          Newpassword: formvalue.Newpassword,
          Confirmpassword: formvalue.Confirmpassword,
        };
        const data = {
          apiUrl: apiService.changepassword,
          payload: obj,
        };
        SetbuttonLoader(true);

        var resp = await postMethod(data);
        console.log(resp, "=-=resp=-");
      if (resp.status == true) {
        SetbuttonLoader(false);
        toast(resp.Message);
        navigate("/loginpage")
        localStorage.clear();
      }else{
        SetbuttonLoader(false);

        toast(resp.Message);

      }
      }
    } catch (error) {

    }

  };

  return (
    <>
      <Header />
      <main className="pading-landin">
        <div className=" clasnew_registre forgetpassss">
          <div className="container">
            <div className="row d-flex flex-wrap-reverse justify-content-center align-item-center ">
              <div className="col-lg-6">
                <img src={forgotPasswordImage} className="importee" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="forgetpass">
                  <h3>Change password</h3>
                  <div className="input_forgwr">
                    <p>
                      Please enter ONE TIME PASSWORD we've sent to change your
                      password.
                    </p>
                    <div className="register_form">
                      <div class="form-group ">
                        <div className="d-flex">
                          <label class="control-label ">Old Password</label>
                        </div>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="bi bi-lock-fill"></i>
                          </div>
                          <input
                            class="form-control"
                            id="email"
                            name="Oldpassword"
                            type={inputTypeold}
                            placeholder="Old Password"
                            value={Oldpassword}
                            onChange={handleChange}
                          />
                          <div class="input-group-addon">
                            {passHide == false ? (
                              <i
                                class="bi bi-eye-slash-fill"
                                onClick={() => passwordhidepassold("hide")}
                              ></i>
                            ) : (
                              <i
                                class="bi bi-eye-fill"
                                onClick={() => passwordhidepassold("show")}
                              ></i>
                            )}
                          </div>
                        </div>
                        {OldpasswordErr == true ? (
                          <p className="text-danger">
                            {" "}
                            {validationErr.Oldpassword}{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div class="form-group ">
                        <div className="d-flex ">
                          <label class="control-label ">
                            Enter New Password
                          </label>
                        </div>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="bi bi-lock-fill"></i>
                          </div>
                          <input
                            class="form-control"
                            id="email"
                            name="Newpassword"
                            type={inputType}
                            placeholder=" New Password"
                            value={Newpassword}
                            onChange={handleChange}
                          />

                          <div class="input-group-addon">
                            {passHidenew == false ? (
                              <i
                                class="bi bi-eye-slash-fill"
                                onClick={() => passwordhidepass("hide")}
                              ></i>
                            ) : (
                              <i
                                class="bi bi-eye-fill"
                                onClick={() => passwordhidepass("show")}
                              ></i>
                            )}
                          </div>
                        </div>
                        {newpasswordErr == true ? (
                          <p className="text-danger">
                            {" "}
                            {validationErr.Newpassword}{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="form-group ">
                        <div className="d-flex">
                          <label class="control-label ">Confirm Password</label>
                        </div>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="bi bi-lock-fill"></i>
                          </div>
                          <input
                            class="form-control"
                            id="email"
                            name="Confirmpassword"
                            type={inputTypeconf}
                            placeholder="Confirm Password"
                            value={Confirmpassword}
                            onChange={handleChange}
                          />
                          <div class="input-group-addon">
                            {passHideconf == false ? (
                              <i
                                class="bi bi-eye-slash-fill"
                                onClick={() => passwordhidepassconf("hide")}
                              ></i>
                            ) : (
                              <i
                                class="bi bi-eye-fill"
                                onClick={() => passwordhidepassconf("show")}
                              ></i>
                            )}
                          </div>
                        </div>
                      </div>
                      {ConfirmpasswordErr == true ? (
                        <p className="text-danger">
                          {" "}
                          {validationErr.Confirmpassword}{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="login_button_00 ">
                      {buttonLoader == false ? (
                        <Button
                          className="signin-btn header_btn"
                          onClick={changepassword}
                        >
                          Change Password
                        </Button>
                      ) : (
                        <Button className="signin-btn header_btn">
                          Loading
                        </Button>
                      )}
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
