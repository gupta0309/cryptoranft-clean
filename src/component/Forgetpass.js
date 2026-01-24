import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {postMethod} from '../service/api'
import {getMethod} from '../service/api'
import apiService from '../service/serviceUrl'
import {toastAlert} from "../lib/toastAlert";
import OtpInput from "react-otp-input";
import forgot_pass from "../image/newimg/forgot-password.png"


function LandingPage() {
  const [MobileValue, setMobileValue] = useState();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const initialFormValue = {
    emailAddress: "",
    password : ""
  };
  

  const [formValue, setFormValue] = useState(initialFormValue);
  var [getErrorName, setgetErrorName] = useState("");
  var [getErrorEmail, setgetErrorEmail] = useState("");
  var [getErrorPassword, setgetErrorPassword] = useState("");
  const [disableButton, setdisableButton] = useState(false);
  const [Terms, setTerms] = useState(false);
  const [termsValidation, setTermsValidation] = useState(false);
  const [termError, settermError] = useState("");
  const [activeType, setactiveType] = useState('Email');
  const [getErrorMobile, setgetErrorMobile] = useState("");
  const [passHide, setPasshide] = useState(false);
  const [inputType, setinputType] = useState('password');
  const [activeForgot, setactiveForgot] = useState(false);
  const [OTP, setOTP] = useState("");


  const {emailAddress, password} = formValue;


  const navigate = useNavigate();

  const registerType = (type) => {
    if(type == "Email"){
      setactiveType('Email')
      setgetErrorMobile("");
    }else{
      setactiveType('Phone')
      setgetErrorEmail("");
    }
  }


  const handleUserInput = async (e) => {
    try {
      e.preventDefault();
      const {name, value} = e.target;
      let formData = {...formValue, ...{[name]: value}};
      setFormValue(formData);
      // validate(e.target.name, e.target.value);
    } catch (error) {
    }

  }

  

  const submitVlidation = async (formValue) => {
 
    if(activeType == "Email"){
      if(emailAddress == ""){
        setgetErrorEmail("Email is Required");
      }else{
        setgetErrorEmail("");
      }
    }else{
      if(MobileValue == "" || MobileValue == undefined  ){
        setgetErrorMobile("Phone Number is Required");
      }else{
        setgetErrorMobile("");
      }
    }
  }

  const validate = (name, value) => {

    switch (name) {
      case "password":
          if (!value) {
            setgetErrorPassword("Password is Required");
          return "Password is Required";
          } else if (value.length < 8 || value.length > 25) {
            setgetErrorPassword("Please fill at least 8 character or more than 25 character only");
          return "Please fill at least 8 character";
          } else if (!value.match(/[a-z]/g)) {
            setgetErrorPassword("Please enter at least lower character.");
          return "Please enter at least lower character.";
          } else if (!value.match(/[A-Z]/g)) {
            setgetErrorPassword("Please enter at least upper character.");
          return "Please enter at least upper character.";
          } else if (!value.match(/[0-9]/g)) {
            setgetErrorPassword("Please enter at least one digit.");
          return "Please enter at least one digit.";
          } else {
            setgetErrorPassword("");
          return "";
          }
      default: {
          return "";
      }
  }
  }

  const resetPassword  = async () => {
    try {
    if(activeType == "Email" && formValue.emailAddress != ""){
      var obj = {
        type : "Email",
        email : formValue.emailAddress
      }
      localStorage.setItem('type', 'Email');
      localStorage.setItem('Email',formValue.emailAddress );
      var data = {
        apiUrl: apiService.resetPassOTP,
        payload: obj,
      };
        setdisableButton(true);
        var resp = await postMethod(data);
        setdisableButton(false);
        if(resp.status){
          toastAlert("success", resp.Message);
          setactiveForgot(true);
        }else{
          toastAlert("error", resp.Message);
        }
    }
    if(activeType == "Phone" && MobileValue != "" && MobileValue != undefined){
      console.log(MobileValue,'=-=-=-=-PhoneInputCountry=-=-');
      var obj = {
        type : "Phone",
        phoneNumber : MobileValue
      }
      localStorage.setItem('type', 'Phone');
      localStorage.setItem('Phone', MobileValue);
      var data = {
        apiUrl: apiService.resetPassOTP,
        payload: obj,
      };
      
        setdisableButton(true);
        var resp = await postMethod(data);
        setdisableButton(false);
        if(resp.status){
          toastAlert("success", resp.Message);
          setactiveForgot(true);
        }else{
          toastAlert("error", resp.Message);
        }
    }

    } catch (error) {
      
    }

  }


  const activiation = async () => {
    validate("password",formValue.password);
    var getType = localStorage.getItem('type');
    var values
    if(getType == "Email"){
      values =  localStorage.getItem('Email');
    }
    if(getType == "Phone"){
      values =  localStorage.getItem('Phone');
    }
    var obj = {
      type     : getType,
      identify : values,
      otp      : OTP,
      password : formValue.password
    }

    var data = {
      apiUrl: apiService.resetPassword,
      payload: obj,
    };
    if(getErrorPassword.length == 0 && formValue.password != ""){
      var resp = await postMethod(data);
      if(resp.status){
        toastAlert("success", resp.Message);
        navigate('/loginPage');
      }else{
        toastAlert("error", resp.Message);
      }
    }

  }

  const resendOTP = async () => {
    var getType = localStorage.getItem('type');
    if(getType == "Email"){
      var obj = {
        type : "Email",
        email : localStorage.getItem('Email')
      }
      var data = {
        apiUrl: apiService.resetPassOTP,
        payload: obj,
      };
        setdisableButton(true);
        var resp = await postMethod(data);
        setdisableButton(false);
        if(resp.status){
          toastAlert("success", resp.Message);
        }else{
          toastAlert("error", resp.Message);
        }
    }
    if(getType == "Phone"){
      var obj = {
        type : "Phone",
        phoneNumber : localStorage.getItem('Phone')
      }

      var data = {
        apiUrl: apiService.resetPassOTP,
        payload: obj,
      };
      
        setdisableButton(true);
        var resp = await postMethod(data);
        setdisableButton(false);
        if(resp.status){
          toastAlert("success", resp.Message);
        }else{
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
            <div className="row d-flex align-item-center flex-wrap-reverse">
              <div className="col-lg-6">
                <img
                  src={forgot_pass}
                  alt=""
                  className=""
                />
              </div>
              <div className="col-lg-6">
                <div className="forgetpass">
                  <h3>Forgot password</h3>
                  <div className="input_forgwr">
                    {/* <p>
                      You can reset your password
                      <br />
                    </p> */}
                    
    
                  {
                    activeForgot == false ?
                    <form className="register_form">
                         <p>
                      Enter Email  and you can reset your password.
                      <br />
                    </p>
                    <div className="form-group register_form">
                    <ul className="nav nav-tabs">
                    <li>
                      <a data-toggle="tab" href="#Email" className="active"  onClick={()=> registerType('Email')} >
                        Email
                      </a>
                    </li>
                    {/* <span>/</span>
                    <li className="">
                      <a data-toggle="tab" href="#Phone" onClick={()=> registerType('Phone')} >
                        Phone Number
                      </a>
                    </li> */}
                    </ul>
                    <div className="tab-content">
                    <div id="Email" className="tab-pane fade in active show">
                      <div className="form-group ">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="bi bi-envelope-fill"></i>
                          </div>
                          <input
                            className="form-control"
                            id="email"
                            name="emailAddress" 
                            type="text"
                            value={emailAddress}
                            placeholder="Enter Email"
                            onChange={handleUserInput}
                            
                          />
                        </div>
                        <span className="text-danger">{getErrorEmail.length > 0 ? getErrorEmail : ""  }</span>

                      </div>
                    </div>

                    <div id="Phone" className="tab-pane fade in">
                    <div className="input-group">
                      <div className="input-group-addon ifonetee">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <PhoneInput
                      defaultCountry="IN"
                        placeholder="Enter phone number"
                        value={MobileValue}
                        onChange={setMobileValue}
                      />
                    </div>
                    <span className="text-danger">{getErrorMobile.length > 0 ? getErrorMobile : ""  }</span>
                    </div>

                    </div>
                    <div className="login_button_00">
                    {
                    disableButton == true ?  
                    (
                    <Button className="signin-btn header_btn" >
                    Loading...
                    </Button>
                    ) : 
                    <Button className="signin-btn header_btn" onClick={resetPassword} >
                    Password Reset
                    </Button>
                    }

                    </div>

                    </div>
                    </form> : 
                    <form className="register_form">
                      <p>
                      Enter OTP and reset your password.
                      <br />
                      {/* change your password. */}
                    </p>
                    <span>
                        <div className="text-forger">
                              <OtpInput
                                  value={OTP}
                                  onChange={setOTP}
                                  numInputs={6}
                                  otpType="number"
                                  autoFocus
                                  separator={<span>-</span>}
                              />
                        </div>

                        <div className="form-group ">
                            <div className="d-flex justify-content-between">
                              <label className="control-label">
                               New Password
                              </label>
                              {/* <Link to="">Forgot Password?</Link> */}
                            </div>
                            <div className="input-group">
                              <div className="input-group-addon">
                                <i className="bi bi-lock-fill"></i>
                              </div>
                              <input
                                className="form-control"
                                id="email"
                                name="password"
                                type="password"
                                value={password}
                                placeholder="Enter Password"
                                onChange={handleUserInput}
                              />

                            </div>
                            <span className="text-danger">{getErrorPassword.length > 0 ? getErrorPassword : ""  }</span>

                          </div>

                          
                    

                              <div className="login_button_00">
                                <Button className="signin-btn header_btn" onClick={activiation} >
                                Submit
                                </Button>
                              </div>

                      <div className="button_text_sectuon">
                      <p className="dataforheget">
                        Didn’t Recieve ? <a onClick={resendOTP}>Resend OTP</a> 
                      </p>
                        </div>
                      </span>
                      </form>
                  }
                   


                      
                   
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
