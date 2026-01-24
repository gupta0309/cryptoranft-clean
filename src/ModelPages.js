import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Datetime from "react-datetime";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "react-datetime/css/react-datetime.css";
import { getMethod } from "../src/service/api";
import apiService from "../src/service/serviceUrl";


function ModelPages() {
  const options = ["Choose Category", "two", "three"];

  const [nftcollection, Setnftcollection] = useState([]);

  useEffect(() => {
    nftsubcatagories();
  }, []);

  const nftsubcatagories = async () => {
    try {
      var data = {
        apiUrl: apiService.nftsubCategories,
      };
      var resp = await getMethod(data);
      Setnftcollection(resp.data);
      console.log("=-=-=-=-=", resp.data);

      console.log("=-=-=-=-=", resp);
    } catch (error) {}
  };


  return (
    <>
      <div class="modal" id="addNew">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Select Category</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <ul className="nav nav-tabs">
                {nftcollection &&
          nftcollection.map((item, i) => {
            return (
                  <li>
                    <a data-toggle="tab" href="#Art" className="">
                      {/* <img
                        src={require("../src/image/newimg/art.png").default}
                        className=""
                      /> */}
                      {item.categories}
                    </a>
                  </li>

);
})}
                  {/* <li>
                    <a data-toggle="tab" href="#Video">
                      <img
                        src={require("../src/image/newimg/vedio.png").default}
                        className=""
                      />
                      Video
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Audio">
                      <img
                        src={require("../src/image/newimg/music.png").default}
                        className=""
                      />
                      Audio
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Model">
                      <img
                        src={require("../src/image/newimg/3dmodel.png").default}
                        className=""
                      />
                      3D Model
                    </a>
                  </li> */}
            
                </ul>
                {/* <Button>Next</Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="privatepub">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Select type</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <ul className="nav nav-tabs">
                  <li>
                    <a data-toggle="tab" href="#Art" className="">
                      Public
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Video">
                      Private
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="selectcollection">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Select Collection</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <ul className="nav nav-tabs">
                  <li>
                    <a data-toggle="tab" href="#Collection1" className="">
                      Collection 01
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Collection2">
                      Collection 02
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Collection3">
                      Collection 03
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Collection4">
                      Collection 04
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Collection5">
                      Collection 05
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="createcollection">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Create category</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <div class="form-group form_create">
                  <div className="d-flex justify-content-between"></div>
                  <div class="input-group">
                    <input
                      class="form-control"
                      className="form-control"
                      placeholder="Enter categrory name"
                    />
                  </div>
                </div>
                <Button>Create</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="Propertiesnee">
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
                  <div class="input-group">
                    <input
                      class="form-control"
                      className="form-control"
                      placeholder="Character"
                    />
                  </div>
                </div>
                <div class="form-group form_create radiou">
                  <div className="d-flex justify-content-between"></div>
                  <div class="input-group">
                    <input
                      class="form-control"
                      className="form-control"
                      placeholder="Male"
                    />
                  </div>
                </div>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="Levels">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Levels</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <div class="form-group form_create radiou">
                  <div className="d-flex justify-content-between"></div>
                  <div class="input-group">
                    <input
                      class="form-control"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="d-flex classss_inputrr">
                  <div class="form-group form_create radiou">
                    <div className="d-flex justify-content-between"></div>
                    <div class="input-group">
                      <input
                        class="form-control"
                        className="form-control"
                        placeholder="Value"
                      />
                    </div>
                  </div>
                  <span>Of</span>
                  <div class="form-group form_create radiou">
                    <div className="d-flex justify-content-between"></div>
                    <div class="input-group">
                      <input
                        class="form-control"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="Stats">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Stats</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="addnew_section">
                <div class="form-group form_create radiou">
                  <div className="d-flex justify-content-between"></div>
                  <div class="input-group">
                    <input
                      class="form-control"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="d-flex classss_inputrr">
                  <div class="form-group form_create radiou">
                    <div className="d-flex justify-content-between"></div>
                    <div class="input-group">
                      <input
                        class="form-control"
                        className="form-control"
                        placeholder="Value"
                      />
                    </div>
                  </div>
                  <span>Of</span>
                  <div class="form-group form_create radiou">
                    <div className="d-flex justify-content-between"></div>
                    <div class="input-group">
                      <input
                        class="form-control"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="createditem">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                You have created
                <br />
                Digital Art
              </h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="created-img">
                <img
                  src={require("../src/image/newimg/created_imga.png").default}
                  className=""
                />
              </div>
              <div className="bottom_social_d">
                <p>Share to...</p>
                <ul>
                  <li>
                    <a href="">
                      <img
                        src={
                          require("../src/image/newimg/facebookicon.svg")
                            .default
                        }
                        className=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={
                          require("../src/image/newimg/instagram-w.svg").default
                        }
                        className=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={
                          require("../src/image/newimg/twiter_www.svg").default
                        }
                        className=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="createdcollection">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Collection</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="uploadimg_section_commection">
                <div className="img">
                  <img
                    src={
                      require("../src/image/newimg/created_imga.png").default
                    }
                    className=""
                  />
                </div>
                <div>
                  <label>Upload your collection picture</label>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customInput"
                      required
                    />
                    <label class="custom-file-label" for="customInput">
                      Choose file...
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group ">
                <label>
                  Display Name <small>(required)</small>
                </label>
                <div className="d-flex justify-content-between"></div>
                <div class="input-group">
                  <input
                    class="form-control"
                    className="form-control"
                    placeholder="Enter Token Name"
                    name="Name"
                  />
                </div>
              </div>
              <div class="form-group ">
                <label>
                  Symbol<small>(required)</small>
                </label>
                <div className="d-flex justify-content-between"></div>
                <div class="input-group">
                  <input
                    class="form-control"
                    className="form-control"
                    placeholder="Enter Token Symbol"
                    name="Name"
                  />
                </div>
              </div>
              <div class="form-group ">
                <label>
                  Description<small>(required)</small>
                </label>
                <div className="d-flex justify-content-between"></div>
                <div class="input-group">
                  <input
                    class="form-control"
                    className="form-control"
                    placeholder="Spread some words about token collection"
                    name="Name"
                  />
                </div>
              </div>
              <div class="form-group ">
                <label>Short url</label>
                <div className="d-flex justify-content-between"></div>
                <div class="input-group">
                  <input
                    class="form-control"
                    className="form-control"
                    placeholder=""
                    name="Name"
                  />
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Create Collection~</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="placeabid">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Place a bid</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to place a bid for</p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>by</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <h1>Your bid</h1>
                  <div className="drob_dowmn_select">
                    <input type="text" placeholder="Enter Amount" />
                    <Dropdown
                      options={options}
                      placeholder="Select an option"
                      className="classs_radion"
                    />
                  </div>
                  <h1>
                    Enter Quantity <small>(5 Avilable)</small>
                  </h1>
                  <div className="drob_dowmn_select">
                    <input
                      type="text"
                      placeholder="Enter Amount"
                      className="w-100"
                    />
                  </div>
                  <div className="content_cls_oo">
                    <small>Your Balanace</small> <span>0 ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>Service Fee</small> <span>0.1% ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>You Will Pay</small> <span>0.00001 ETH</span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Place a Bid</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="acceptbid">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Accept bid</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to Accept a bid for Photo </p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>From</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <div className="content_cls_oo">
                    <small>Service Fee in %</small> <span>0 ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>Service Fee ETH</small> <span>0.1% ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>You Will Pay</small> <span>0.00001 ETH</span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  accept_bid_flex">
                <Button className="header_btn">
                  <a href="">Cancel</a>
                </Button>
                <Button className="header_btn">
                  <a href="">Accept Bid</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="putonsale">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Put on Sale</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to place a Order for photo</p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>by</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <h1>Enter Price</h1>
                  <div className="drob_dowmn_select">
                    <input type="text" placeholder="e.g 10" />
                    <Dropdown
                      options={options}
                      placeholder="Select an option"
                      className="classs_radion"
                    />
                  </div>

                  <div className="content_cls_oo">
                    <small>Service Fee</small> <span>0.1% ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>You Will Pay</small> <span>0.00001 ETH</span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Sign Sell Order</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="Fixed">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Fixed Price</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to place a Order for photo</p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>by</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <h1>Enter Price</h1>
                  <div className="drob_dowmn_select">
                    <input type="text" placeholder="e.g 10" />
                  </div>

                  <div className="content_cls_oo">
                    <small>Service Fee</small> <span>0.1% ETH</span>
                  </div>
                  <div className="content_cls_oo">
                    <small>You Will Recieve</small> <span>0.00001 ETH</span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Sign Sell Order</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="Timed">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Timed Aution</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to place a Order for photo</p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>by</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <h1>Enter The Minimum Bid Value</h1>
                  <div className="drob_dowmn_select">
                    <input type="text" placeholder="e.g 10" />
                  </div>

                  <div className="content_cls_oo">
                    <small>Starting Date</small>{" "}
                    <span>
                      {" "}
                      <Datetime />
                    </span>
                  </div>
                  <div className="content_cls_oo">
                    <small>Expiration Date</small>{" "}
                    <span>
                      {" "}
                      <Datetime />
                    </span>
                  </div>
                  <div className="note">
                    You want to bid more then 1% from the previous bid
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Bid Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="On_going">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">On Going Aution</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <p>Your about to place a Order for photo</p>
                <div className="colo-img">
                  <img
                    src={require("../src/image/newimg/itemimg4.png").default}
                  />
                  <span>by</span>
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <h1>Enter The Minimum Bid Value</h1>
                  <div className="drob_dowmn_select">
                    <input type="text" placeholder="e.g 10" />
                  </div>

                  <div className="content_cls_oo">
                    <small>Starting Date</small>{" "}
                    <span>
                      <Datetime />
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Bid Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="pickdate">
        <div class="modal-dialog modal-sm modal-dialog-centered ">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Choose date</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <Datetime open={true} />
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Done</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="Cancel_order">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Cancel Order</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body create_collectiion_body">
              <div className="content_bid">
                <div className="colo-img">
                  <p>kjsdfjhdgfuyafuysd8568758ds76asdasdsdsds</p>
                </div>
                <div className="buy-detaise">
                  <div className="content_cls_oo">
                    <small>Token Price</small> <span>0.001 ETH</span>
                  </div>
                </div>
              </div>
              <div class="form-group bottm_buttn  ">
                <Button className="header_btn">
                  <a href="">Sign Sell Order</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelPages;
