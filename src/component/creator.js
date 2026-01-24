import React from "react";
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

function Home() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

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
                      <label>Full Name</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Bio</label>
                      <div>
                        <input
                          type="text"
                          placeholder="About yourself in a few words"
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Country LocationItem Name</label>
                      <div>
                        <select>
                          <option>United States</option>
                        </select>
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>
                        How many years of experience as a
                        designer/artist/creator? *
                      </label>
                      <div>
                        <select>
                          <option>Less than a year</option>
                        </select>
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <p className="headein">Upload Profile Image</p>
                      <label>Drag or choose your file to upload</label>

                      <div className="upload_files">
                        <input type="file" className="file" />
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
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Twitter</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Dribble</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Facebook</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text"
                        />
                      </div>
                    </div>
                    <div className="input_section mb-3">
                      <label>Instagram</label>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter URL"
                          className="text"
                        />
                      </div>
                    </div>
                    <p className="final_submint">
                      By submitting this form you agree that the information
                      here are true.
                    </p>
                    <div className="crate_btn">
                      <Button className="p-button">Submit application</Button>
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
