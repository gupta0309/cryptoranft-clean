import React, {useState, useEffect} from "react";
import Sideber from "./Sidebar";
import Header from "./Header";

import selectoption from "../image/capage/4C9F1DFE-3D54-4D0E-8ACE-B0A0E1E3AF7E.png";
import Switch from "@material-ui/core/Switch";
import homei_4 from "../image/capage/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";

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
import Slider from "react-slick";

import Footer from "./Footer";
import axios from "axios";
import {toastAlert} from "../lib/toastAlert";
import api from "../utils/api/index";
import {isEmpty} from "../component/empty";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {data} from "./chart/Chart";
import ReactAudioPlayer from "react-audio-player";

function Home() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };
  const split_arr = (arr) => {
    var array_last_five;
    if (arr.length >= 5) {
      array_last_five = arr.slice(-4);
    } else {
      array_last_five = arr;
    }
    return array_last_five;
  };

  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,

          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  const [artists, setArtist] = useState("");
  const [loading, setLoading] = useState(true);
  const [btnText, setbtnText] = useState("Follow");

  const [followloading, setFollow] = useState(false);
  const [btnItem, setbtnItem] = useState("");
  const [itemId, setitemId] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [ownWallet, setOwnWallet] = useState("");
  const [followText, setFollowText] = useState("");
  const [followData, setfollowData] = useState("");
  const [salesData, sersalesData] = useState("");

  const [searchNFTdata, setNftsearch] = useState("");
  const [datas, setData] = useState("");
  const [datas1, setData1] = useState("");
  const [follwdata, setfollowdata] = useState("");

  const [open, searchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [network, setNetwork] = useState("");
  const [topBuyer, sertopBuyer] = useState([]);
  const [topseller, settopseller] = useState([]);
  const [topper, setTopper] = useState(true);
  const [searchTextnew, setSearchTextnew] = useState("");
  const [onlysearch, setonlysearch] = useState(true);
  const [optionChoose, setoptionChoose] = useState("");
  const [followrsData, setfollowrsData] = useState("");
  const [sortDatas, setSortDatas] = useState("");
  const [nocall, setnocall] = useState(true);
  const [datanew, setDatanew] = useState("");

  const getAllartists = async () => {
    try {
      setLoading(true);

      axios
        .get(api.baseURL + "/get_more_users")
        //.get("http://localhost:3003/get_more_users")
        .then((res) => {
          setLoading(false);
          let userData = res.data.topUsers;
          console.log("userData==", userData);
          let sellerz = res.data.topUsers;
          let buyerz = res.data.topUsers;

          if (userData) {
            setData(userData);
            setData1(userData);
            setArtist(userData);
            setNftsearch(userData);
            localStorage.setItem("craterDatas", userData);

            setfollowdata(userData);
            setTopper(true);
            var sortDatas;
            for (var i = 0; i < userData.length; i++) {
              sortDatas = userData[i];
            }

            var histset = Math.max(sortDatas.nfts.length);
            if (histset == sortDatas.nfts.length) {
              sersalesData(sortDatas);
            }
            var histset = Math.max(sortDatas.followers.length);
            if (histset == sortDatas.followers.length) {
              setfollowData(sortDatas);
            }
            var sortDatasTop;
            for (var i = 0; i < userData.length; i++) {
              sortDatasTop = userData[i];
            }
            var BuyerCount = userData.sort(function (a, b) {
              return b.buyCount - a.buyCount;
            });
            sertopBuyer(BuyerCount);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  };

  const getAllartistsNew = async () => {
    try {
      axios
        .get(api.baseURL + "/get_more_users")
        //.get("http://localhost:3003/get_more_users")
        .then((res) => {
          setLoading(false);
          let createrDatas = res.data.topUsers;
          if (createrDatas) {
            setDatanew(createrDatas);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  };

  useEffect(() => {
    var current_chain = localStorage.getItem("chainId");
    var net = "BNB";
    if (current_chain == 80001) {
      net = "MATIC";
    } else {
      net = "BNB";
    }
    setNetwork(net);

    var tokenCheck = localStorage.getItem("wallet");
    if (tokenCheck == null || tokenCheck == undefined) {
      setLoginCheck(false);
    } else {
      setLoginCheck(true);
      setOwnWallet(tokenCheck);
    }
    getAllartists();
    getAllartistsNew();
  }, []);

  const follow = async (params, item) => {
    setFollow(true);
    setbtnItem(item);
    setitemId(params._id);
    axios({
      method: "POST",
      url: api.baseURL + "/follow",
      //url: "http://localhost:3003/follow",
      data: {
        follow_wallet: params.wallet_address,
        follow_image: params.profile_image,
        owner_wallet: localStorage.getItem("wallet"),
        owner_profile: localStorage.getItem("profile_image"),
      },
    })
      .then((res) => {
        getAllartistsNew();
        //  getAllartists();
        //  setFollow(false);
        //   setFollowText(res.response_text);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loginToCont = () => {
    try {
      toastAlert("error", "Please connect wallet!");
    } catch (error) {
      toastAlert("error", "Please refresh the page");
    }
  };

  const handleSearch = (value) => {
    let checknfrname = isEmpty(value);
    if (checknfrname == true) {
      searchOpen(true);
    } else {
      searchOpen(false);
    }
    setSearchTextnew(value);
    // filterDatanew(value);
  };

  const options = [
    {value: "Followers", label: "Followers"},
    {value: "Sales", label: "Sales", className: "myOptionClassName"},
  ];

  const defaultOption = options[2];

  const onSelect = async (option) => {
    // setTopper(true)
    setonlysearch(false);
    var arraDatafoll = [];
    var arraDatasale = [];
    if (option.label == "Followers") {
      setoptionChoose(option.label);
      arraDatafoll.push(followData);
      var foll = [];
      for (var i = 0; i < datanew.length; i++) {
        foll = datanew[i];
      }
      var highFollowers = datanew.sort(function (a, b) {
        return b.followers.length - a.followers.length;
      });
      // setData(highFollowers);
      setfollowrsData(highFollowers);
    } else if (option.label == "Sales") {
      setoptionChoose(option.label);

      arraDatasale.push(salesData);
      for (var i = 0; i < datanew.length; i++) {
        foll = datanew[i];
      }
      var hightseller = datanew.sort(function (a, b) {
        return b.nfts.length - a.nfts.length;
      });
      // setData(hightseller);
      setSortDatas(hightseller);
    }
    // setnftType(option.value)
  };

  const optionsTop = [
    {value: "buyer", label: "buyer"},
    {value: "seller", label: "seller", className: "myOptionClassName"},
  ];

  const topdefaultOption = optionsTop[2];
  const onSelecttop = async (option) => {
    // setnocall(false);

    setTopper(true);
    if (option.label == "buyer") {
      var sortDatasSell;
      for (var i = 0; i < artists.length; i++) {
        sortDatasSell = artists[i];
      }
      var BuyerCount = artists.sort(function (a, b) {
        return b.buyCount - a.buyCount;
      });
      sertopBuyer(BuyerCount);
    } else if (option.label == "seller") {
      setTopper(false);
      var sortDatasSell;
      for (var i = 0; i < artists.length; i++) {
        sortDatasSell = artists[i];
      }
      var sellCount = artists.sort(function (a, b) {
        return b.sellCount - a.sellCount;
      });

      settopseller(sellCount);
    }
  };

  const filterDatanew = (value) => {
    setSearchTextnew(value);
    // var aquaticCreatures =  datas1.filter(function(creature) {
    //   return creature.profile_name == value.toString();
    // });
    axios
      .get(api.baseURL + "/get_more_users?search=" + value)
      .then((res) => {
        let userData = res.data.topUsers;
        if (userData) {
          setDatanew(userData);
        }
      })
      .catch((e) => {
        console.log("filter exception===", e);
      });
    // if(aquaticCreatures.length <= 0){
    //   setDatanew(datas1);
    // }else{
    //   setDatanew(aquaticCreatures);
    // }
  };

  return (
    <ScrollingProvider>
      <div className="main_pading">
        <Header />

        <section className="craetesingle bg_gray_new">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-5">
                <div className="_select_drob_boen">
                  <label>Popular</label>
                  <Dropdown
                    options={optionsTop}
                    onChange={(o) => onSelecttop(o)}
                    value={topdefaultOption}
                    placeholder="Buy"
                  />
                </div>
              </div>
              {/* <div className="col-lg-6 pt-5">
                <div className="slect_buttond">
                  <div className="input_section mb-3">
                    <label>TIMEFRAME</label>
                    <div>
                      <select>
                        <option>1 day</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}
              {loading ? (
                <div style={{height: "80vh"}}>
                  <center style={{paddingTop: "200px"}}>
                    <div class="fa-3x mt-5 pt-5">
                      <i class="fas fa-spinner fa-spin"></i>
                    </div>
                  </center>
                </div>
              ) : (
                <div className="col-lg-12 create_single_cardd pt-0">
                  <Slider {...settings}>
                    {topper == true
                      ? topBuyer &&
                        topBuyer.map((item, i) => {
                          return item ? (
                            <div>
                              <a
                                className="content_section"
                                href={`/profile/${item.wallet_address}`}
                              >
                                <div className="sellecr_card">
                                  <div className="seller_first">
                                    <p>#{i + 1}</p>
                                    {/* <div className="seller_2">
                                  <i class="fas fa-plus"></i>
                                  <i class="fas fa-arrow-up"></i>
                                </div> */}
                                  </div>
                                  <div>
                                    {item && item.profile_image ? (
                                      <img
                                        src={item.profile_image}
                                        alt="profimg"
                                      />
                                    ) : (
                                      <img src={homei_4} alt="test" />
                                    )}
                                  </div>
                                  <div>
                                    {item && item.profile_name ? (
                                      <p>{item.profile_name}</p>
                                    ) : (
                                      <p>
                                        {item.wallet_address.substring(0, 15)}
                                        ...
                                      </p>
                                    )}

                                    {/* <small>
                                  2.456<span>BNB</span>
                                </small> */}
                                  </div>
                                </div>
                              </a>
                            </div>
                          ) : (
                            ""
                          );
                        })
                      : topseller &&
                        topseller.map((item, i) => {
                          return item ? (
                            <div>
                              <a
                                className="content_section"
                                href={`/profile/${item.wallet_address}`}
                              >
                                <div className="sellecr_card">
                                  <div className="seller_first">
                                    <p>#{i + 1}</p>
                                    {/* <div className="seller_2">
                            <i class="fas fa-plus"></i>
                            <i class="fas fa-arrow-up"></i>
                          </div> */}
                                  </div>
                                  <div>
                                    {item && item.profile_image ? (
                                      <img src={item.profile_image} alt="" />
                                    ) : (
                                      <img src={homei_4} alt="" />
                                    )}
                                  </div>
                                  <div>
                                    {item && item.profile_name ? (
                                      <p>{item.profile_name}</p>
                                    ) : (
                                      <p>
                                        {item.wallet_address.substring(0, 15)}
                                        ...
                                      </p>
                                    )}

                                    {/* <small>
                            2.456<span>BNB</span>
                          </small> */}
                                  </div>
                                </div>
                              </a>
                            </div>
                          ) : (
                            ""
                          );
                        })}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="padin_sss_nw_seller">
          <div className="container">
            <h1 className="mb-4">Creators</h1>
            <div className="row">
              <div className="col-lg-3 class_newwewewe">
                <div className="">
                  <div className="input_section mb-3">
                    <label>Search</label>
                    <div>
                      <input
                        type="text"
                        placeholder="e.g. full name"
                        className="text"
                        value={searchTextnew}
                        onChange={(e) => filterDatanew(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="input_section mb-3">
                    <label>SORT</label>
                    <div>
                      <Dropdown
                        options={options}
                        onChange={(o) => onSelect(o)}
                        value={defaultOption}
                        placeholder="Sorting"
                      />
                      {/* <select>
                      <option>Select</option>
                        <option>Followers</option>
                        <option>Sales</option>
                      </select> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {datanew &&
                  datanew.map((iteml, i) => {
                    var current_chain = localStorage.getItem("chainId");
                    var currentnet = "BNB";
                    if (current_chain == 80001) {
                      currentnet = "MATIC";
                    } else {
                      currentnet = "BNB";
                    }
                    //console.log("currentnetcurrentnet",currentnet);
                    return iteml ? (
                      <div>
                        {ownWallet != iteml.wallet_address ? (
                          <div className="seller_whol_card">
                            {
                              <div className="new_seller_ss">
                                {iteml && iteml.profile_image ? (
                                  <a
                                    className="content_section"
                                    href={`/profile/${iteml.wallet_address}`}
                                  >
                                    <img src={iteml.profile_image} />
                                  </a>
                                ) : (
                                  <img src={homei_4} alt="" />
                                )}
                                <div className="seller_name_section">
                                  <p>{iteml.profile_name}</p>
                                  <small>
                                    {iteml.followers.length} followers
                                  </small>
                                  {loginCheck == false ? (
                                    <Button onClick={() => loginToCont()}>
                                      {" "}
                                      Follow{" "}
                                    </Button>
                                  ) : (
                                    <Button onClick={() => follow(iteml, i)}>
                                      {" "}
                                      {iteml.followers.length > 0
                                        ? "Following"
                                        : "Follow"}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            }

                            {split_arr(iteml.nfts) &&
                              split_arr(iteml.nfts).map((item1, i) => {
                                // console.log("item1====",item1.network)
                                // console.log("currentnetcurrentnet",currentnet);
                                // console.log("item1.NFTtype",item1.NFTtype);
                                return item1 ? (
                                  <div className="img_seller_product">
                                    {item1 &&
                                    item1.network == currentnet &&
                                    item1.NFTtype == "Music" ? (
                                      <a
                                        className="content_section music"
                                        href={`/mynft-details/${item1.token_id}/${item1.network.toLowerCase()}`}
                                      >
                                        <img
                                          src={
                                            api.baseURL +
                                            "/" +
                                            item1.cover_image.split("public")[1]
                                          }
                                            alt=""
                                        />
                                        <ReactAudioPlayer
                                          src={item1 && item1.cloudUrl}
                                          controls
                                          controlsList="nodownload"
                                          className="audio_player"
                                        />
                                      </a>
                                    ) : item1.network == currentnet &&
                                      item1.NFTtype == "Image" ? (
                                      <a
                                        className="content_section"
                                        href={`/mynft-details/${item1.token_id}/${item1.network.toLowerCase()}`}
                                      >
                                        <img src={item1.cloudUrl} alt=""  />
                                      </a>
                                    ) : item1.network == currentnet &&
                                      item1.NFTtype == "Video" ? (
                                      <a
                                        className="content_section"
                                        href={`/mynft-details/${item1.token_id}/${item1.network.toLowerCase()}`}
                                      >
                                        <video
                                          width="100%"
                                          height="300"
                                          controls
                                          controlsList="nodownload"
                                        >
                                          <source
                                            src={item1.cloudUrl}
                                            type="video/mp4"
                                          />
                                        </video>
                                      </a>
                                    ) : (
                                      <a
                                        className="content_section"
                                        href={`/mynft-details/${item1.token_id}/${item1.network.toLowerCase()}`}
                                        title={`${item1.cloudUrl}`}
                                      >
                                        <img src={item1.cloudUrl} alt="" />
                                      </a>
                                    )}
                                  </div>
                                ) : (
                                  <div className="img_seller_product">
                                    <img src={homei_4} alt="" />
                                    <img src={homei_4} alt="" />
                                    <img src={homei_4} alt="" />
                                    <img src={homei_4} alt="" />
                                  </div>
                                );
                              })}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    );
                  })}
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
