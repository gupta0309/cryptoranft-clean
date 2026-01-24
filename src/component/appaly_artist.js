import React, { Component, useEffect, useState } from "react";
import Sideber from "./Sidebar";
import Header from "./Header";

import selectoption from "../image/capage/4C9F1DFE-3D54-4D0E-8ACE-B0A0E1E3AF7E.png";
import Switch from "@material-ui/core/Switch";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";

import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Scrollbars} from "react-custom-scrollbars";

import inter from "../image/internet.svg";

import Token1 from "../image/toker1.png";
import {Button} from "@material-ui/core";

import Footer from "./Footer";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toastAlert } from '../lib/toastAlert';
import countries from '../countries.json'
import api from "../utils/api/index";

function Home() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  // const handleChange = (event) => {
  //   setState({...state, [event.target.name]: event.target.checked});
  // };

  const handleChange = (e) => {
    // e.preventDefault();
    // const { name, value } = e.target;
    const { name, value } = e.target;
    let formData = { ...formValue, ...{ [name]: value } }
    setFormValue(formData);
    console.log("formData===",formData)
}

  const initialFormValue = {
    'name': '',
    'bio': '',
    'country':'',
    'experience':'',
    'myfile': '',
    'proof': '',
    'twitter':'',
    'dribble':'',
    'facebook':'',
    'instagram':'',
    'email': '',
    'customURL': ''

}

const [formValue, setFormValue] = useState(initialFormValue);

const [onSale, setOnSale] = useState(false);

const [loading, setLoading] = useState(true);
const [data, setData] = useState();
const [profileImage, setProfileImage] = useState("");
const [kyc, setKyc] = useState("");
const [image, setImage] = useState();
const [progress, setProgress] = useState();
const [imageLoading, setImageLoading] = useState(false);
const [firstLoading, setFirstLoading] = useState(true);
const [profileName, setProfileName] = useState("");
const [bio, setBio] = useState("");
const [instagram, setInstagram] = useState("");
const [twitter, setTwitter] = useState("");
const [facebook, setFacebook] = useState("");
const [dribble, setDribble] = useState("");
const [country, setCountry] = useState("");
const [experience, setExperience] = useState("");
const [ntfimage, setNftimage] = useState('');
const [myfile, setProfile] = useState();
const [updating, setupdating] = useState(false);
const [customURL,setcustomURL] = useState("");
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [previewImage, setPreview] = useState("");
const [previewImage_kyc, setPreviewKYC] = useState("");
const [bionames, setbionames] = useState(false)
const [names, setnames] = useState(false)
const [profiles, setprofiles] = useState(false)
const [proofs, setproofs] = useState(false)
const [countrys, setcountrys] = useState(false)
const [exps, setexps] = useState(false)
const [emails, setemails] = useState(false)
const [validationnErr, setvalidationnErr] = useState("");
const [file, setFile] = useState();
const [cloudprofile, setcloudProfile] = useState("");
const [cloudproof, setcloudProof] = useState("");
const [buttontext, setButton] = useState("Submit application");

// const uploadImage = (val,name) => {
//   console.log("image upload===",val);
//   const formData = new FormData();
//   formData.append("myImage", val);
//   console.log(formData,'formDataformDataformData')
  

//   const config = {
//     headers: {
//       "content-type": "multipart/form-data",
//     },
//   };
//   axios.post(api.baseURL+"/upload", formData, config)
//   .then((res) => {
//     console.log("image upres",res);
//     setProfile(res.data);
//     setProfileImage(res.data);
//     formValue[name] = res.data;
//     var splitImage = api.baseURL+"/"+res.data.split('public')[1];
//     if(name=="proof")
//     {
//       setPreviewKYC(splitImage)
//     }
//     else
//     {
//       setPreview(splitImage);
//     }
    
//     console.log(splitImage,'----splitImage-----splitImage-----splitImage');
//   });
// }

const uploadImage = async (file,name) => {
  setFile(file);
  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET)
  data.append("cloud_name",process.env.REACT_APP_CLOUDINARY_FOLDER)
  fetch("  https://api.cloudinary.com/v1_1/"+process.env.REACT_APP_CLOUDINARY_FOLDER+"/auto/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
    var cloudImage = data.secure_url;
    formValue[name] = data.secure_url;
    if(name=="proof")
    {
      setPreviewKYC(cloudImage)
    }
    else
    {
      setPreview(cloudImage);
    }
  })
  .catch(err => { 
    console.log(err)
  })
}

const validate = async (values) => {
  console.log("values validation===",values);
  const errors = {};
  if (values.bio  == "") {
    errors.bio = 'This field is requird!';
    setbionames(true);
  }
  if (values.name  == "") {
    errors.name = 'This field is required!';
    setnames(true);
  }

  if (values.profile == "") {
    errors.profile = 'This field is required!';
    setprofiles(true);
  }

  if (values.proof  == "") {
    errors.proof = 'This field is required!';
    setproofs(true);
  }

  if (values.country  == "") {
    errors.country = 'This field is required!';
    setcountrys(true);
  }
  if (values.experience  == "") {
    errors.experience = 'This field is required!';
    setexps(true);
  }

  if (values.email  == "") {
    errors.email = 'This field is required!';
    setemails(true);
  }

  setvalidationnErr(errors);
  return errors;
}

const onSubmit = async () => {
console.log("formValue====",formValue);
  try {
    validate(formValue);
    // if(formValue.bio == '' || formValue.name == '' ||
    // formValue.profile == '' || formValue.proof == ''  || formValue.country == ''  || formValue.experience == '' || formValue.email == ''  ){
    //   alert("Please fill all the required fields");
    // }
    // else{
      if(formValue.bio != '' &&  formValue.profile != '' && formValue.proof != ''  && formValue.country != ''  && formValue.experience != '' && formValue.email != ''  ){
      var user = localStorage.getItem("wallet");
      console.log(formValue,'formValueformValue')
      setupdating(true);
        const formData = new FormData();
        formData.append("myImage", myfile);      
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
          formValue['user'] = user;

        //   return false
          axios({
              method: "POST",
              url: api.baseURL+"/edit_profile",
            // url: "http://localhost:3003/edit_profile",
              data : formValue
          }).then((res) => {
            setupdating(false);
            console.log('Pofile updated',res);
              if(res.status){
                     toastAlert('success', res.data.message);
              }else{
                toastAlert('error', res.data.message);
              };
          });
        }
        else
        {
          console.log("please fill all the fields",formValue)
        }
        
    //}
  } catch (error) {
      console.log('----');
  }

}

useEffect(() => {

  var getWalletToken = localStorage.getItem('wallet');
  if(getWalletToken != null && getWalletToken != undefined){

    axios({
      method: "POST",
      url: api.baseURL+"/get_user_details",
      //url: "http://localhost:3003/get_user_details",
      data: {
        user: localStorage.getItem("wallet")
      },
    })
      .then((res) => {
          console.log(res,'USER PRORULWE');
        setData(res.data);
        if(res.data.kyc_status==0)
        {
          toastAlert('error', "Please submit your profile details to create nft");
        }
        else if(res.data.kyc_status==1)
        {
          toastAlert('error', "Please wait, your profile verification still pending");
        }
        else if(res.data.kyc_status==3)
        {
          toastAlert('error', "Your profile verification is rejected please reupload your details");
        }
        else if(res.data.kyc_status==2)
        {
          setButton("Update application")
        }
        if (res.data.facebook) {
          console.log("inside fb");
          setFacebook(res.data.facebook);
          formValue["facebook"] = res.data.facebook;
        } else {
          setFacebook("");
        }
        if (res.data.instagram) {
          console.log("insta");
          setInstagram(res.data.instagram);
          formValue["instagram"] = res.data.instagram;
        } else {
          setInstagram("");
        }
        if (res.data.twitter) {
          setTwitter(res.data.twitter);
          formValue["twitter"] = res.data.twitter;
        } else {
          setTwitter("");
        }
        if (res.data.dribble) {
          setDribble(res.data.dribble);
          formValue["dribble"] = res.data.dribble;
        } else {
          setDribble("");
        }
        if (res.data.profile_image) {
          setProfileImage(res.data.profile_image);
          formValue["profile"] = res.data.profile_image;
        }
        if (res.data.kyc_proof) {
          setKyc(res.data.kyc_proof);
          formValue["proof"] = res.data.kyc_proof;
        }
        if (res.data.profile_name) {
          console.log("we are here");
          setProfileName(res.data.profile_name);
          formValue["name"] = res.data.profile_name;
        }
        if (res.data.bio) {
          setBio(res.data.bio);
          formValue["bio"] = res.data.bio;
        }
        if (res.data.experience) {
          setExperience(res.data.experience);
          formValue["experience"] = res.data.experience;
        }
  
        if (res.data.country) {
          setCountry(res.data.country);
          formValue["country"] = res.data.country;
        }
  
        if (res.data.customURL) {
          setcustomURL(res.data.customURL);
          formValue["customURL"] = res.data.customURL;
        }
  
        setLoading(false);
      })
      .catch((err) => alert("error occurred!"));
  }else{
    toastAlert('error','Connect your wallet');
    navigate('/');
  }

  axios({
    method: "POST",
    url: api.baseURL+"/get_user_details",
    //url: "http://localhost:3003/get_user_details",
    data: {
      user: localStorage.getItem("wallet")
    },
  })
    .then((res) => {
        console.log(res,'USER PRORULWE');
      setData(res.data);
      if(res.data.kyc_status==0)
      {
        toastAlert('error', "Please submit your profile details to create nft");
      }
      else if(res.data.kyc_status==1)
      {
        toastAlert('error', "Please wait, your profile verification still pending");
      }
      else if(res.data.kyc_status==3)
      {
        toastAlert('error', "Your profile verification is rejected please reupload your details");
      }
      if (res.data.facebook) {
        console.log("inside fb");
        setFacebook(res.data.facebook);
        formValue["facebook"] = res.data.facebook;
      } else {
        setFacebook("");
      }
      if (res.data.instagram) {
        console.log("insta");
        setInstagram(res.data.instagram);
        formValue["instagram"] = res.data.instagram;
      } else {
        setInstagram("");
      }
      if (res.data.twitter) {
        setTwitter(res.data.twitter);
        formValue["twitter"] = res.data.twitter;
      } else {
        setTwitter("");
      }
      if (res.data.dribble) {
        setDribble(res.data.dribble);
        formValue["dribble"] = res.data.dribble;
      } else {
        setDribble("");
      }
      if (res.data.profile_image) {
        setProfileImage(res.data.profile_image);
        formValue["profile"] = res.data.profile_image;
      }
      if (res.data.kyc_proof) {
        setKyc(res.data.kyc_proof);
        formValue["proof"] = res.data.kyc_proof;
      }
      if (res.data.profile_name) {
        console.log("we are here");
        setProfileName(res.data.profile_name);
        formValue["name"] = res.data.profile_name;
      }
      if (res.data.bio) {
        setBio(res.data.bio);
        formValue["bio"] = res.data.bio;
      }
      if (res.data.experience) {
        setExperience(res.data.experience);
        formValue["experience"] = res.data.experience;
      }

      if (res.data.country) {
        setCountry(res.data.country);
        formValue["country"] = res.data.country;
      }

      if (res.data.customURL) {
        setcustomURL(res.data.customURL);
        formValue["customURL"] = res.data.customURL;
      }

      if (res.data.email) {
        setEmail(res.data.email);
        formValue["email"] = res.data.email;
      }

      setLoading(false);
    })
    .catch((err) => 
    //alert("error occurred!")
    console.log("error occurred!")
    );
}, []);

  return (
    <ScrollingProvider>
      <div className="main_pading">
        <Header />

        <section className="craetesingle pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="single_title_section flex-column">
                    <h1>Apply as an creator</h1>
                    <p className="text_pppaaa">
                      Xverse strive to provide the best creator by invitation
                      and approval only. We have specific guidelines on the
                      approval process based on your social media presence,
                      creativity, portfolio, influence and other factors from
                      our creative team that ranges from art professors,
                      artists, influencers, and much more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="create_single p-2">
                  <form className="form_section">
                    <div className="input_section mb-3">
                      <h1 className="headein">About you</h1>
                      <label>Full Name </label>
                      
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="text" name="name"  onChange={handleChange} defaultValue={profileName}
                        />
                        {
                names == true ? ( <p className= "text-danger"> {validationnErr.name} </p> ) : ""
               }
                      </div>
                    </div>


                    <div className="input_section mb-3">
                      <label>Email</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          className="text" name="email"  onChange={handleChange} defaultValue={email}
                        />
                        {
                emails == true ? ( <p className= "text-danger"> {validationnErr.email} </p> ) : ""
               }
                      </div>
                    </div>
                    
                    <div className="input_section mb-3">
                      <label>Bio</label>
                      <div>
                        <input
                          type="text"
                          placeholder="About yourself in a few words"
                          className="text" name="bio"  onChange={handleChange} defaultValue={bio}
                        />
                          {
                bionames == true ? ( <p className= "text-danger"> {validationnErr.bio} </p> ) : ""
               }
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Country LocationItem Name</label>
                      <div>
                        <select name="country"  onChange={handleChange} defaultValue={country}>
                          <option value="">Select Country</option>
                          {countries.map((data) => (
                            <option value={data} selected={country == data}>{data}</option>
                            ))}
                        </select>
                        {
                countrys == true ? ( <p className= "text-danger"> {validationnErr.country} </p> ) : ""
               }
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>
                        How many years of experience as a
                        designer/artist/creator? *
                      </label>
                      <div>
                        <select name="experience"  onChange={handleChange} defaultValue={experience}>
                        <option value="">Select Experience</option>
                          <option value="0.5" selected={experience == 0.5}>Less than a year</option>
                          <option value="1" selected={experience == 1}>1 year</option>
                          <option value="2" selected={experience == 2}>2 years</option>
                          <option value="3" selected={experience == 3}>3 years</option>
                          <option value="4" selected={experience == 4}>4 years</option>
                          <option value="5" selected={experience == 5}>5 years</option>
                          <option value="5.5" selected={experience == 5.5}>5+ years</option>
                        </select>
                        {
                exps == true ? ( <p className= "text-danger"> {validationnErr.experience} </p> ) : ""
               }
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <p className="headein">Upload Profile Image</p>

                     
                      <label>Drag or choose your file to upload</label>

                      {
                        data && data.profile_image == "" ? 
                        ""
                        :
                        <img src={ data &&  data.profile_image }  className="imageSize" alt="" width="80" height="80" />

                      }

                       {
                        previewImage && previewImage != "" && previewImage != undefined ? 
                        <img src={ previewImage  }  className="imageSize" alt="" width="80" height="80" />
                        :
                        ""

                      }

                      <div className="upload_files">
                        <input type="file" className="file" name="myImage" id="inputGroupFile01"   onChange={(e) => uploadImage(e.target.files[0],'profile')}/>
                        {
                profiles == true ? ( <p className= "text-danger"> {validationnErr.profile} </p> ) : ""
               }
                        <div className="upload_content">
                          <i class="fas fa-upload"></i>
                          <p>PNG, GIF, WEBP, MP4 or MP3. MAX 1GB</p>
                        </div>
                      </div>
                    </div>

                    <div className="input_section mb-3">
                      <p className="headein">Upload Proof</p>

                      
                      <label>Drag or choose your file to upload</label>

                      {
                        data && data.kyc_proof == undefined ? 
                        ""
                        :
                        <img src={ data &&  data.kyc_proof }  className="imageSize" alt="" width="80" height="80" />

                      }

                       {
                        previewImage_kyc && previewImage_kyc != "" && previewImage_kyc != undefined ? 
                        <img src={ previewImage_kyc  }  className="imageSize" alt="" width="80" height="80" />
                        :
                        ""
                      }

                      <div className="upload_files">
                        <input type="file" className="file" name="proof" onChange={(e) => uploadImage(e.target.files[0],'proof')}/>
                        {
                proofs == true ? ( <p className= "text-danger"> {validationnErr.proof} </p> ) : ""
               }
                        <div className="upload_content">
                          <i class="fas fa-upload"></i>
                          <p>PNG, GIF, WEBP, MP4 or MP3. MAX 1GB</p>
                        </div>
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <p className="headein">Social</p>
                      <label>Portfolio or Website</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text"name="customURL" onChange={handleChange} defaultValue={customURL}
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Twitter</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text" name="twitter"  onChange={handleChange} defaultValue={twitter}
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Dribble</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text" name="dribble"  onChange={handleChange} defaultValue={dribble}
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Facebook</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text" name="facebook"  onChange={handleChange} defaultValue={facebook}
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Instagram</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text" name="instagram"  onChange={handleChange} defaultValue={instagram}
                        />
                      </div>
                    </div>
                    <p className="final_submint">
                      By submitting this form you agree that the information
                      here are true.
                    </p>
                    <div className="crate_btn">
                      {
                        updating == false ?  <Button className="p-button" onClick={() => onSubmit()} >{buttontext}</Button> 
                        :
                        <Button className="p-button" >Updating...</Button>
                      }
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="col-lg-4 create_single_cardd">
                <div className="refernc_cad">
                  <div className="imge_with_1">
                    <div className="imge_with_2">
                      <img src={selectoption} />
                    </div>
                  </div>
                  <div className="bottom_content">
                    <div className="titirle_ss">
                      <p>Amazing Art</p>
                      <span className="label_card">2.5 ETH</span>
                    </div>
                    <div className="profile_namess">
                      <div className="inner_contenyteee">
                        <img src={selectoption} />
                        <h6>E Cole.</h6>
                      </div>
                      <h5>3 mints left</h5>
                    </div>
                    <div className="final_price">
                      <p>
                        <span>0.03 ETH</span>405
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ScrollingProvider>
  );
}

export default Home;
