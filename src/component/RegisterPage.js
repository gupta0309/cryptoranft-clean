import React, {useState, useEffect} from "react";
import {Button} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slider from "react-slick";
import {postMethod} from '../service/api'
import {getMethod} from '../service/api'
import apiService from '../service/serviceUrl'
import {toastAlert} from "../lib/toastAlert";
import { Link, useNavigate } from "react-router-dom";

import hand from "../image/newimg/hand.png"
import nft1 from "../image/newimg/nft1.png"
import nft2 from "../image/newimg/nft2.png"
import nft3 from "../image/newimg/nft3.png"
import nft4 from "../image/newimg/nft4.png"


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
    firstName: "",
    emailAddress: "",
    password: "",
    isTerms: "",
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
  
  const {firstName,emailAddress,password, isTerms} = formValue;
  const navigate = useNavigate();
  
  useEffect(() => {
  
  },[0]);

  const handleUserInput = async (e) => {
    try {
      e.preventDefault();
      const {name, value} = e.target;
      let formData = {...formValue, ...{[name]: value}};
      setFormValue(formData);
      validate(e.target.name, e.target.value);
    } catch (error) {
    }

  }


  const handleCheckBox = async(e) => {
    const { name, checked } = e.target;
    if(checked == false){
      setTerms(false);
    }else{
      setTerms(true);
    }
    let formData = { ...formValue, ...{ [name]: checked } }
    setFormValue(formData);

  }

  const submitVlidation = async (formValue) => {
    if(firstName == ""){
      setgetErrorName("Full name is Required");
    }
    if(activeType == "Email"){
      if(emailAddress == ""){
        setgetErrorEmail("Email is Required");
      }
    }else{
      if(MobileValue == "" || MobileValue == undefined   ){
        setgetErrorMobile("Phone Number is Required");
      }else{
        setgetErrorMobile("");
      }
    }
  
    if(password == ""){
      setgetErrorPassword("Password is Required");
    }
    if(Terms == false){
      settermError("Please accept terms and conditions!");
    }
  }


  const validate = (name, value) => {

    switch (name) {
      case "firstName":
          if (!value) {
            setgetErrorName("Name is Required")
              return "Name is Required";
          } 
          else if (value.length < 3 || value.length > 40) {
            setgetErrorName("Please fill at least 3 character or more than 40 character only");
            return "Please fill at least 3 character or more than 40 character only";
          }
          // else if(!value.match(/^[a-zA-Z]+$/g)){
          //   setgetErrorName("Please enter valid first name")
          //     return "Please enter valid first name";
          // } 
          else {
            setgetErrorName("")
              return "";
          }
      case "emailAddress":
          if (!value) {
            setgetErrorEmail("Email is Required")
          return "Email is Required";
          } else if (
          !value.match(/^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i)
          ) {
            setgetErrorEmail("Enter a valid email address")
          return "Enter a valid email address";
          } else {
            setgetErrorEmail("")
          return "";
          }
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

  const register  = async () => {
    try {
      submitVlidation(formValue)
      if(getErrorName.length ==0  && getErrorEmail.length == 0 && getErrorPassword.length == 0 && Terms == true  && getErrorMobile.length == 0){
        if(Terms == true){
          settermError('');
          formValue["PhoneNumber"] = MobileValue;
          formValue["type"] = activeType;

          localStorage.setItem('userType', activeType);
          localStorage.setItem('Email', formValue.emailAddress);
          localStorage.setItem('Phone', MobileValue);

          var data = {
            apiUrl: apiService.signup,
            payload: formValue,
          };
          
          setdisableButton(true);
          var resp = await postMethod(data);
          setdisableButton(false);
          if(resp.status){
            toastAlert("success", resp.Message);
            navigate("/activiation");
          }else{
            toastAlert("error", resp.Message);
          }
        }else{
          settermError('Please accept terms and conditions!');
        }
      }else{
        console.log('Not Valid')
      }

    } catch (error) {
      
    }

  }

  const registerType = (type) => {
    if(type == "Email"){
      setactiveType('Email')
      setgetErrorMobile("");
    }else{
      setactiveType('Phone')
      setgetErrorEmail("");
    }
  }

  const passwordHide = (data) => {
    if(data == "hide"){
      setPasshide(true);
      setinputType("text");
    }else{
      setPasshide(false);
      setinputType("password");
    }
  }

  return (
    <>
      <Header />
      <main className="pading-landin">
        <div className=" clasnew_registre">
          <div className="register_bg_page">
            <div className="form_section">
              <div className="getstatyr">
                <h3>Create. Connect. Earn</h3>
                <p>
                  <img
                    src={hand}
                    alt=""
                    className=""
                  />
                  Hello, Welcome  to our marketplace.
                </p>
                {/* <Button className="googlr_sign">
                  <img
                    src={require("../image/newimg/googlei.png").default}
                    className=""
                  />
                  Sign Up with Google
                </Button> */}
              </div>
              <p className="or_email">
                <span>Sign Up with Email </span>
              </p>

              <form className="register_form">
                
                
                <div className="form-group ">
                  <label className="control-label">
                    Full Name
                  </label>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="firstName"
                      value={firstName}
                      placeholder="Full Name"
                      onChange={handleUserInput}
                    />
                  </div>
                  <span className="text-danger">{getErrorName.length > 0 ? getErrorName : ""  }</span>

                </div>


                <div className="form-group ">
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
                </div>
                <div className="form-group ">
                  <div className="d-flex justify-content-between">
                    <label className="control-label">
                      Password
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
                      type={inputType}
                      value={password}
                      placeholder="Enter Password"
                      onChange={handleUserInput}

                    />
                    <div className="input-group-addon"  >
                      {
                        passHide == false ?
                        <i className="bi bi-eye-slash-fill" onClick={()=>passwordHide('hide')} ></i> 
                        :
                        <i className="bi bi-eye-fill" onClick={()=>passwordHide('show')} ></i>
                        
                      }
                    </div>
                  </div>
                  <span className="text-danger">{getErrorPassword.length > 0 ? getErrorPassword : ""  }</span>

                </div>
                <div className="tacbox">
                  <input id="checkbox"  type="checkbox"      
                  value={isTerms}
                  name="isTerms" 
                  onChange={handleCheckBox} checked={isTerms} />
                  <label>
                    {" "}
                    I accepted <a href="#">Terms and Conditions</a>.
                  </label>
                </div>

                {
                Terms == false ?  ( <p className= "text-danger"> {termError}  </p> ): ""
                }
                <div className="login_button_00">
                  {
                    disableButton == true ?  
                    (
                    <Button className="signin-btn header_btn" >
                   Loading...
                  </Button>
                    ) : 
                    <Button className="signin-btn header_btn" onClick={register} >
                   Sign Up
                  </Button>
                  }
                  
                </div>
              </form>
              <div className="button_text_sectuon">
                <p>
                  Already Have an account ?<Link to="/loginPage">Login</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="slidesection">
            <Slider {...settings}>
              <div>
                <div className="sliderow">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                      <div className="row">
                        <div className="col-lg-6 pr-0 pt-5">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft1
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft3
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 pl-0">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft2
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft4
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="content_slider">
                        <h4>
                          Discover, Collect & Sell <br />
                          Awesome <span>NFTS</span>
                        </h4>
                        <p>
                          Digital art is an artistic or practice that uses
                          <br /> digital technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="sliderow">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                      <div className="row">
                        <div className="col-lg-6 pr-0 pt-5">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft1
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft3
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 pl-0">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft2
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft4
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="content_slider">
                        <h4>
                          Discover, Collect & Sell <br />
                          Awesome <span>NFTS</span>
                        </h4>
                        <p>
                          Digital art is an artistic or practice that uses
                          <br /> digital technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="sliderow margingslider_maa">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                      <div className="row">
                        <div className="col-lg-6 pr-0 ">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft1
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 pl-0 pt-5">
                          <div className="nft-items">
                            <Link
                              to=""
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                            >
                              <img
                                src={
                                  nft2
                                }
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="content_slider">
                        <h4>
                          Make History in a new <br />
                          Digital <span>World</span>
                        </h4>
                        <p>
                          The techniques of digital art used by the mainstream{" "}
                          <br />
                          media in advertisements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
