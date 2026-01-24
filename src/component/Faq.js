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

        <section className="craetesingle">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-5">
                <div className="">
                  <div className="single_title_section faq flex-column pb-5">
                    <span>LEARN HOW TO GET STARTED</span>
                    <h1>Frequently asked questions</h1>
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, commodi <a href="">Contact Support</a>
                    </p> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 create_single_cardd pt-0">
                <div className="faq_bottomss">
                  <p>General</p>
                  <p>Governance</p>
                  <p>Support</p>
                  <p>Updates</p>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="create_single p-0 pt-3">
                  <div
                    class="accordion md-accordion"
                    id="accordionEx"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div class="card">
                      <div class="card-header" role="tab" id="headingOne1">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          <h5 class="mb-0">
                          How to create an NFT? {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseOne1"
                        class="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne1"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        Apply as a creator on the platform and click on create once the application is approved to mint an NFT. 
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" role="tab" id="headingTwo2">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          <h5 class="mb-0">
                          How do I submit an application as a creator? {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseTwo2"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo2"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        Click on apply as a creator tab and enter details like username, email, bio, country, proofs,social profiles, and click on submit application. 
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree3">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree3"
                          aria-expanded="false"
                          aria-controls="collapseThree3"
                        >
                          <h5 class="mb-0">
                          How will I be informed about my application status?{" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseThree3"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree3"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        You will receive an email from our side once the application is approved! 
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree4">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree4"
                          aria-expanded="false"
                          aria-controls="collapseThree4"
                        >
                          <h5 class="mb-0">
                          How do I purchase an NFT? {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseThree4"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree4"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        Click on the discover section to browse through the available options, pick the NFT you would like to purchase, and hit on the purchase. You can view the NFT under your collectibles!  
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree5">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree5"
                          aria-expanded="false"
                          aria-controls="collapseThree5"
                        >
                          <h5 class="mb-0">
                          Can I transfer my purchase to someone else?  {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseThree5"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree5"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        Yes you can! Click on transfer, enter the wallet address,and approve the transfer on metamask. 
                        </div>
                      </div>
                    </div>



                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree6">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree6"
                          aria-expanded="false"
                          aria-controls="collapseThree6"
                        >
                          <h5 class="mb-0">
                          What is NFT?   {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseThree6"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree6"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        NFT is a digital asset. Token represents ownership. It can be art, music, video, cards or anything that is unique and that can be digitized. 
                        </div>
                      </div>
                    </div>


                    <div class="card">
                      <div class="card-header" role="tab" id="headingThree7">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordionEx"
                          href="#collapseThree7"
                          aria-expanded="false"
                          aria-controls="collapseThree7"
                        >
                          <h5 class="mb-0">
                          What networks does xVerse support?    {" "}
                            <i class="fas fa-angle-down rotate-icon"></i>
                          </h5>
                        </a>
                      </div>

                      <div
                        id="collapseThree7"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree7"
                        data-parent="#accordionEx"
                      >
                        <div class="card-body">
                        You can pick between Binance and Polygon. We will have more options soon! 
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ScrollingProvider>
  );
}

export default Home;
