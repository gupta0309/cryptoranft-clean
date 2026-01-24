// import React, { useState } from "react";
// import { Button } from "@material-ui/core";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Countdown from "react-countdown";
// import Footer from "./Footer";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import Slider from "react-slick";
// import { postMethod } from '../service/api'
// import { getMethod } from '../service/api'
// import apiService from '../service/serviceUrl'
// import { toastAlert } from "../lib/toastAlert";
// import hand from "../image/newimg/hand.png"
// import nft1 from "../image/newimg/nft1.png"
// import nft2 from "../image/newimg/nft2.png"
// import nft3 from "../image/newimg/nft3.png"
// import nft4 from "../image/newimg/nft4.png"

// function LandingPage() {
//   const [MobileValue, setMobileValue] = useState();

//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };



//   const initialFormValue = {
//     emailAddress: "",
//     password: "",
//   };



//   const [formValue, setFormValue] = useState(initialFormValue);
//   var [getErrorName, setgetErrorName] = useState("");
//   var [getErrorEmail, setgetErrorEmail] = useState("");
//   var [getErrorPassword, setgetErrorPassword] = useState("");
//   const [disableButton, setdisableButton] = useState(false);
//   const [Terms, setTerms] = useState(false);
//   const [termsValidation, setTermsValidation] = useState(false);
//   const [termError, settermError] = useState("");
//   const [activeType, setactiveType] = useState('Email');
//   const [getErrorMobile, setgetErrorMobile] = useState("");
//   const [passHide, setPasshide] = useState(false);
//   const [inputType, setinputType] = useState('password');

//   const { emailAddress, password } = formValue;


//   const navigate = useNavigate();

//   const registerType = (type) => {
//     if (type == "Email") {
//       setactiveType('Email')
//       setgetErrorMobile("");
//     } else {
//       setactiveType('Phone')
//       setgetErrorEmail("");
//     }
//   }

//   const handleUserInput = async (e) => {
//     try {
//       e.preventDefault();
//       const { name, value } = e.target;
//       let formData = { ...formValue, ...{ [name]: value } };
//       setFormValue(formData);
//       // validate(e.target.name, e.target.value);
//     } catch (error) {
//     }

//   }

//   const submitVlidation = async (formValue) => {

//     if (activeType == "Email") {
//       if (emailAddress == "") {
//         setgetErrorEmail("Email is Required");
//       } else {
//         setgetErrorEmail("");
//       }
//     } else {
//       if (MobileValue == "" || MobileValue == undefined) {
//         setgetErrorMobile("Phone Number is Required");
//       } else {
//         setgetErrorMobile("");
//       }
//     }

//     if (password == "") {
//       setgetErrorPassword("Password is Required");
//     } else {
//       setgetErrorPassword("");
//     }
//   }

//   const register = async () => {
//     try {
//       submitVlidation(formValue)
//       if (getErrorEmail.length == 0 && getErrorPassword.length == 0) {

//         formValue["PhoneNumber"] = MobileValue;
//         formValue["type"] = activeType;
//         localStorage.setItem('userTypeLogin', activeType);
//         localStorage.setItem('EmailLogin', formValue.emailAddress);
//         localStorage.setItem('PhoneLogin', MobileValue);

//         localStorage.setItem('userType', activeType);
//         localStorage.setItem('Email', formValue.emailAddress);
//         localStorage.setItem('Phone', MobileValue);

//         var data = {
//           apiUrl: apiService.signin,
//           payload: formValue,
//         };
//         setdisableButton(true);
//         var resp = await postMethod(data);
//         setdisableButton(false);
//         if (resp.status) {
//           toastAlert("success", resp.Message);
//           localStorage.setItem("user_token", resp.token);
//           localStorage.setItem("socket_token", resp.socketToken);
//           navigate("/walletconnect");
//         } else {
//           // localStorage.setItem("user_token", resp.token);
//           // localStorage.setItem("socket_token", resp.socketToken);
//           navigate("/activiation");
//           toastAlert("error", resp.Message);
//         }
//       } else {
//         console.log('Not Valid')
//       }

//     } catch (error) {

//     }

//   }



//   const passwordHide = (data) => {
//     if (data == "hide") {
//       setPasshide(true);
//       setinputType("text");
//     } else {
//       setPasshide(false);
//       setinputType("password");
//     }
//   }


//   return (
//     <>
//       <Header />
//       <main className="pading-landin">
//         <div className=" clasnew_registre">
//           <div className="register_bg_page positon_rel">
//             <Button className="back-btn">
//               <Link className="" to="">
//                 {" "}
//                 <i class="bi bi-arrow-left-short"></i>
//               </Link>
//             </Button>
//             <div className="form_section">
//               <div className="getstatyr">
//                 <h3>Hello,Welcome Back !</h3>
//                 <p>
//                   <img
//                     src={hand}
//                     alt=""
//                     className=""
//                   />
//                   Hello, Welcome back to our marketplace.
//                 </p>
//                 {/* <Button className="googlr_sign">
//                   <img
//                     src={require("../image/newimg/googlei.png").default}
//                     className=""
//                   />
//                   Sign Up with Google
//                 </Button> */}
//               </div>
//               <p className="or_email">
//                 <span>Sign Up with Email </span>
//               </p>

//               <form className="register_form">


//                 <div className="form-group ">
//                   <ul className="nav nav-tabs">
//                     <li>
//                       <a data-toggle="tab" href="#Email" className="active" onClick={() => registerType('Email')} >
//                         Email
//                       </a>
//                     </li>
//                     {/* <span>/</span>
//                     <li className="">
//                       <a data-toggle="tab" href="#Phone" onClick={()=> registerType('Phone')} >
//                         Phone Number
//                       </a>
//                     </li> */}
//                   </ul>
//                   <div className="tab-content">
//                     <div id="Email" className="tab-pane fade in active show">
//                       <div className="form-group ">
//                         <div className="input-group">
//                           <div className="input-group-addon">
//                             <i className="bi bi-envelope-fill"></i>
//                           </div>


//                           <input
//                             className="form-control"
//                             type="email"
//                             id="email"
//                             name="emailAddress"
//                             value={emailAddress}
//                             placeholder="Enter Email"
//                             onChange={handleUserInput}
//                           />
//                         </div>
//                         <span className="text-danger">{getErrorEmail.length > 0 ? getErrorEmail : ""}</span>

//                       </div>
//                     </div>
//                     {/* <div id="Phone" className="tab-pane fade in">
//                       <div className="input-group">
//                         <div className="input-group-addon ifonetee">
//                           <i className="bi bi-telephone-fill"></i>
//                         </div>
//                         <PhoneInput
//                         defaultCountry="IN"
//                           placeholder="Enter phone number"
//                           value={MobileValue}
//                           onChange={setMobileValue}
//                         />
//                       </div>
//                       <span className="text-danger">{getErrorMobile.length > 0 ? getErrorMobile : ""  } </span>
//                     </div> */}
//                   </div>
//                 </div>

//                 <div class="form-group ">
//                   <div className="d-flex justify-content-between">
//                     <label class="control-label " for="email">
//                       Password
//                     </label>
//                     <Link to="/forgetpass">Forgot Password?</Link>
//                   </div>
//                   <div class="input-group">
//                     <div class="input-group-addon">
//                       <i class="bi bi-lock-fill"></i>
//                     </div>
//                     <input
                       
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       type={inputType}
//                       value={password}
//                       placeholder="Enter Password"
//                       onChange={handleUserInput}
//                     />
//                     <div className="input-group-addon"  >
//                       {
//                         passHide == false ?
//                           <i className="bi bi-eye-slash-fill" onClick={() => passwordHide('hide')} ></i>
//                           :
//                           <i className="bi bi-eye-fill" onClick={() => passwordHide('show')} ></i>

//                       }
//                     </div>

//                   </div>

//                 </div>
//                 <span className="text-danger">{getErrorPassword.length > 0 ? getErrorPassword : ""}</span>

//                 {/* <div class="tacbox">
//                   <input id="checkbox" type="checkbox" />
//                   <label for="checkbox">
//                     {" "}
//                     I accepted <a href="#">Terms and Conditions</a>.
//                   </label>
//                 </div> */}
//                 <div className="login_button_00">
//                   {
//                     disableButton == true ?
//                       (
//                         <Button className="signin-btn header_btn" >
//                           Loading...
//                         </Button>
//                       ) :
//                       <Button className="signin-btn header_btn" onClick={register} >
//                         Sign In
//                       </Button>
//                   }

//                 </div>
//               </form>
//               <div className="button_text_sectuon">
//                 <p>
//                   Already Have an account ?<Link to="/register">Sign Up</Link>
//                 </p>
//               </div>
//             </div>
//           </div>

          
//           <div className="slidesection">
//             <Slider {...settings}>
//               <div>
//                 <div className="sliderow">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-10 ">
//                       <div className="row">
//                         <div className="col-lg-6 pr-0 pt-5">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
                              

//                               <img
//                                 src={
//                                   nft1
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
                              
//                               <img
//                                 src={
//                                   nft3
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 pl-0">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
                             
//                               <img
//                                 src={
//                                   nft2
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
                              
//                               <img
//                                 src={
//                                   nft4
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-10">
//                       <div className="content_slider">
//                         <h4>
//                           Discover, Collect & Sell <br />
//                           Awesome <span>NFTS</span>
//                         </h4>
//                         <p>
//                           Digital art is an artistic or practice that uses
//                           <br /> digital technology.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="sliderow">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-10 ">
//                       <div className="row">
//                         <div className="col-lg-6 pr-0 pt-5">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft1
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft3
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 pl-0">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft2
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft4
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-10">
//                       <div className="content_slider">
//                         <h4>
//                           Discover, Collect & Sell <br />
//                           Awesome <span>NFTS</span>
//                         </h4>
//                         <p>
//                           Digital art is an artistic or practice that uses
//                           <br /> digital technology.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="sliderow margingslider_maa">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-10 ">
//                       <div className="row">
//                         <div className="col-lg-6 pr-0 ">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft1
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 pl-0 pt-5">
//                           <div className="nft-items">
//                             <Link
//                               to=""
//                               data-aos="fade-up"
//                               data-aos-easing="ease-out-cubic"
//                               data-aos-duration="2000"
//                             >
//                               <img
//                                 src={
//                                   nft2
//                                 }
//                                 alt=""
//                                 className=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-10">
//                       <div className="content_slider">
//                         <h4>
//                           Make History in a new <br />
//                           Digital <span>World</span>
//                         </h4>
//                         <p>
//                           The techniques of digital art used by the mainstream{" "}
//                           <br />
//                           media in advertisements.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>

//         <Footer />
//       </main>
//     </>
//   );
// }

// export default LandingPage;






import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slider from "react-slick";
import { toastAlert } from "../lib/toastAlert";
import hand from "../image/newimg/hand.png";
import nft1 from "../image/newimg/nft1 (2).png";
import nft2 from "../image/newimg/nft2 (1).png";
import nft3 from "../image/newimg/nft3 (2).png";
import nft4 from "../image/newimg/nft4 (2).png";

function LandingPage() {
  const navigate = useNavigate();

  const [MobileValue, setMobileValue] = useState("");
  const [activeType, setactiveType] = useState("Email");
  const [disableButton, setdisableButton] = useState(false);
  const [passHide, setPasshide] = useState(false);
  const [inputType, setinputType] = useState("password");

  const initialFormValue = {
    emailAddress: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialFormValue);

  const [getErrorEmail, setgetErrorEmail] = useState("");
  const [getErrorMobile, setgetErrorMobile] = useState("");
  const [getErrorPassword, setgetErrorPassword] = useState("");

  const { emailAddress, password } = formValue;

  const registerType = (type) => {
    setactiveType(type);
    setgetErrorEmail("");
    setgetErrorMobile("");
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const submitValidation = () => {
    let valid = true;

    if (activeType === "Email") {
      if (!emailAddress) {
        setgetErrorEmail("Email is Required");
        valid = false;
      } else {
        setgetErrorEmail("");
      }
    } else {
      if (!MobileValue) {
        setgetErrorMobile("Phone Number is Required");
        valid = false;
      } else {
        setgetErrorMobile("");
      }
    }

    if (!password) {
      setgetErrorPassword("Password is Required");
      valid = false;
    } else {
      setgetErrorPassword("");
    }

    return valid;
  };

  const register = async () => {
    if (!submitValidation()) return;

    setdisableButton(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API delay

    // Mock login response
    const resp = {
      status: true,
      Message: "Login Successful",
      token: "dummy_token",
      socketToken: "dummy_socket_token",
    };

    setdisableButton(false);

    if (resp.status) {
      toastAlert("success", resp.Message);
      localStorage.setItem("user_token", resp.token);
      localStorage.setItem("socket_token", resp.socketToken);
      localStorage.setItem("userTypeLogin", activeType);
      localStorage.setItem("EmailLogin", formValue.emailAddress);
      localStorage.setItem("PhoneLogin", MobileValue);
      navigate("/walletconnect");
    } else {
      toastAlert("error", resp.Message);
      navigate("/activation");
    }
  };

  const passwordHide = () => {
    setPasshide(!passHide);
    setinputType(passHide ? "password" : "text");
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <main className="pading-landin">
        <div className="clasnew_registre">
          <div className="register_bg_page positon_rel">
            <div className="form_section">
              <div className="getstatyr">
                <h3>Hello, Welcome Back!</h3>
                <p>
                  <img src={hand} alt="" /> Hello, Welcome back to our marketplace.
                </p>
              </div>

              <p className="or_email">
                <span>Sign In with Email</span>
              </p>

              <form className="register_form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group ">
                  <ul className="nav nav-tabs">
                    <li>
                      <a
                        className={activeType === "Email" ? "active" : ""}
                        onClick={() => registerType("Email")}
                      >
                        Email
                      </a>
                    </li>
                    {/* Uncomment if Phone login is needed */}
                    {/* <li>
                      <a
                        className={activeType === "Phone" ? "active" : ""}
                        onClick={() => registerType("Phone")}
                      >
                        Phone Number
                      </a>
                    </li> */}
                  </ul>

                  {activeType === "Email" && (
                    <div id="Email" className="tab-pane fade in active show">
                      <div className="form-group ">
                        <div className="input-group">
                          <div className="input-group-addon">
                            <i className="bi bi-envelope-fill"></i>
                          </div>
                          <input
                            className="form-control"
                            type="email"
                            name="emailAddress"
                            value={emailAddress}
                            placeholder="Enter Email"
                            onChange={handleUserInput}
                          />
                        </div>
                        <span className="text-danger">{getErrorEmail}</span>
                      </div>
                    </div>
                  )}

                  {/* Uncomment if Phone login is needed */}
                  {/* {activeType === "Phone" && (
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
                      <span className="text-danger">{getErrorMobile}</span>
                    </div>
                  )} */}
                </div>

                <div className="form-group ">
                  <div className="d-flex justify-content-between">
                    <label className="control-label" htmlFor="email">
                      Password
                    </label>
                    <Link to="/forgetpass">Forgot Password?</Link>
                  </div>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="bi bi-lock-fill"></i>
                    </div>
                    <input
                      className="form-control"
                      id="password"
                      name="password"
                      type={inputType}
                      value={password}
                      placeholder="Enter Password"
                      onChange={handleUserInput}
                    />
                    <div className="input-group-addon" onClick={passwordHide}>
                      {passHide ? (
                        <i className="bi bi-eye-fill"></i>
                      ) : (
                        <i className="bi bi-eye-slash-fill"></i>
                      )}
                    </div>
                  </div>
                  <span className="text-danger">{getErrorPassword}</span>
                </div>

                <div className="login_button_00">
                  <Button
                    className="signin-btn header_btn"
                    onClick={register}
                    disabled={disableButton}
                  >
                    {disableButton ? "Loading..." : "Sign In"}
                  </Button>
                </div>
              </form>

              <div className="button_text_sectuon">
                <p>
                  Already have an account? <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="slidesection">
            <Slider {...settings}>
              {[nft1, nft2, nft3, nft4].map((nft, i) => (
                <div key={i} className="sliderow">
                  <img src={nft} alt={`nft${i + 1}`} className="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
