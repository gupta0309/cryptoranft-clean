import React, { useState, useEffect } from "react";
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

import props from "../image/newimg/prpos.png"
import level from "../image/newimg/level.png"
import start from "../image/newimg/start.png"
import locks from "../image/newimg/locks.png"
import explict from "../image/newimg/explict.png"

import Token1 from "../image/toker1.png";
import { Button } from "@material-ui/core";
import Listmenusec from "./Innernenu";
import Countdown from "react-countdown";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import SwitchExample from "./Checkswitch";
import Switch from "react-switch";


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

  const formOne = {
    Name: "",
    externalLink: "",
    Description: "",
  };

  const [file, setFile] = useState();
  const [formDataOne, setformDataOne] = useState(formOne);
  const [selectedTypes, setselectedTypes] = useState("Select Public or Private");
  const [Collection, setCollection] = useState("Select Collection");
  const [nameValidate, setnameValidate] = useState(false);
  const [ImageValidate, setImageValidate] = useState(false);
  const [validationnErr, setvalidationnErr] = useState("");




  const { Name, character, Description } = formDataOne;


  const handleFormOne = async (e) => {
    try {
      e.preventDefault();
      const { name, value } = e.target;
      let fitstFormData = { ...formDataOne, ...{ [name]: value } };
      console.log(fitstFormData, '=-==-fitstFormData=-=');
      setformDataOne(fitstFormData);
    } catch (error) { }
  };


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
                  <div className="edit-prodile_card createstep2">
                    <div className="upload_img_">
                      <h5>Create New Item</h5>
                      <div className="pading_section_s">
                        <div
                          className="prpetiede"
                          data-toggle="modal"
                          data-target="#Propertiesneepage"
                        >
                          <div className="first_image_conteen">

                            <img
                              src={props}
                              alt=""
                              className=""
                            />
                            <div className="colo-_newxt_imgs">
                              <p>Properties </p>
                              <small>
                                Textual traits that show up as rectangles
                              </small>
                            </div>
                          </div>

                          <span>
                            <i
                              class="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                        <div className="after_fill_">
                          <h2>
                            <small>Character</small>male
                          </h2>
                        </div>
                      </div>
                      <div className="pading_section_s">
                        <div
                          className="prpetiede"
                          data-toggle="modal"
                          data-target="#Levels"
                        >
                          <div className="first_image_conteen">

                            <img
                              src={level}
                              className=""
                              alt=""
                            />
                            <div className="colo-_newxt_imgs">
                              <p>Levels </p>
                              <small>
                                Numerical traits that show as a progress bar
                              </small>
                            </div>
                          </div>
                          <span>
                            <i
                              class="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                        <div className="after_fill_">
                          <label>Levels name</label>
                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span class="sr-only">70% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pading_section_s">
                        <div
                          className="prpetiede"
                          data-toggle="modal"
                          data-target="#Stats"
                        >
                          <div className="first_image_conteen">

                            <img
                              src={start}
                              className=""
                              alt=""
                            />
                            <div className="colo-_newxt_imgs">
                              <p>Stats </p>
                              <small>
                                Textual traits that show up as rectangles
                              </small>
                            </div>
                          </div>
                          <span>
                            <i
                              class="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                        <div className="after_fill_">
                          <h2 className="w-100 rade-dd">
                            <small>Character</small> <small>3 of 5</small>
                          </h2>
                        </div>
                      </div>
                      <div className="pading_section_s">
                        <div className="prpetiede">
                          <div className="first_image_conteen">

                            <img
                              src={locks}
                              alt=""
                              className=""
                            />
                            <div className="colo-_newxt_imgs">
                              <p>Unlockable Content </p>
                              <small>
                                Include unlockable content that can only be
                                revealed by the owner of the item
                              </small>
                            </div>
                          </div>
                          <span>
                            <SwitchExample />
                          </span>
                        </div>
                      </div>
                      <div className="pading_section_s">
                        <div className="prpetiede">
                          <div className="first_image_conteen">

                            <img
                              src={
                                explict
                              }
                              alt=""
                              className=""
                            />
                            <div className="colo-_newxt_imgs">
                              <p>Explicit & Sensitive Content </p>
                              <small>
                                Set this item as explicit and sensitive content
                              </small>
                            </div>
                          </div>
                          <span>
                            <SwitchExample />
                          </span>
                        </div>
                      </div>
                      <div className="pading_section_s">
                        <div className="bottm_buttn pt-0">
                          <Button className="signin-btn header_btn">
                            {" "}
                            <Link to=""> Next</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="modal" id="Propertiesneepage">
            <div class="modal-dialog modal-sm modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Add Properties</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <div className="addnew_section">

                    <div class="form-group form_create radiou">
                      <div className="d-flex justify-content-between"></div>
                      <label>Type</label>
                      <div class="input-group">
                        <input
                          class="form-control"
                          className="form-control"
                          placeholder="Character"
                          name="character"
                          value={character}
                          onChange={handleFormOne}
                        />
                      </div>
                    </div>

                    <div class="form-group form_create radiou">
                      <div className="d-flex justify-content-between"></div>
                      <label> Name </label>
                      <div class="input-group">
                        <input
                          class="form-control"
                          className="form-control"
                          placeholder="Male"
                          name="Name"
                          value={Name}
                          onChange={handleFormOne}
                        />
                      </div>
                    </div>


                    <Button>Save</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
