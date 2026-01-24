import React, { useEffect } from "react";
import useState from "react-usestateref";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { checkAuth } from "../service/axios";

import group_1 from "../image/newimg/group-15627@2x.png"
import grectangle_18 from "../image/newimg/rectangle-185@2x.png"
import creator from "../image/newimg/creator.png"
import fanse from "../image/newimg/fanse.png"
import fluent_people from "../image/newimg/fluent_people-community-24-filled.png"
import section_33 from "../image/newimg/section_33.png"
import Star1 from "../image/newimg/Star1.png"
import mask_group from "../image/newimg/mask-group@2x.png"
import notethanungz from "../image/newimg/notethanungz-ovddpvd0unsplash-9@2x.png"
import line_frame from "../image/newimg/line_frame.png"
import ic_baseline from "../image/newimg/ic_baseline-discord.png"
import cib_telegram from "../image/newimg/cib_telegram-plane.png"
import symbols_brightness from "../image/newimg/material-symbols_brightness-medium.png"
import mdi_twitter from "../image/newimg/mdi_twitter.png"
import thunder from "../image/newimg/thunder.png"
import itemimg from "../image/newimg/itemimg.png"
import itemimg2 from "../image/newimg/itemimg2.png"
import itemimg3 from "../image/newimg/itemimg3.png"
import itemimg4 from "../image/newimg/itemimg4.png"
import profileImage from "../image/profileImage.jpeg"


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
function LandingPage() {
  const [Artists, setArtists, Artistsref] = useState("");
  const [Collections, setCollections, Collectionsref] = useState("");
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    setAuthToken(checkAuth());
    homedashboard();
  }, []);

  const homedashboard = async () => {
    try {
      var data = {
        apiUrl: apiService.getdashboard,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        setCollections(resp.collections);
        setArtists(resp.users);
        // console.log(resp.users, "landpage");

        // console.log(resp.collections, "landpage");
      } else {
      }
    } catch (error) { }
  };

  return (
    <>
      <Header />
      <main className="pading-landin">
        <section className="home_first_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="landing_content">
                  <h1>
                    Engaging Fans and Communities to boost
                    <br />
                    the growth of the Creators
                  </h1>
                  <p>
                    Fantically is a platform for creators to build and grow
                    their communities. Our vision isto create a seamless user
                    experience
                    <br />
                    which lowers the transaction costs as well asbarriers to
                    entry for mass adoption.
                  </p>
                  <Button>Join us</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="image_banner">
            <img
              src={group_1}
              alt=""
              className=""
            />
          </div>
        </section>
        <section className="sectionne home_second_section">
          <div className="container">
            <div
              className="title_conten"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="headeing_boreder">For</h2>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3">

                <img
                  src={grectangle_18}
                  alt=""
                  className="h-100"
                />
              </div>
              <div className="col-lg-9">
                <div className="box_for_what">
                  <div className="first_child1">

                    <img
                      src={creator}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="title_for_what">
                    <h3>Creators</h3>
                    <p>
                      Creating an inclusive creator economy in Web 3.0 is all
                      about creators. If you are acreator and looking to
                      monetise your craft through new channels, launch your NFTs
                      onFantically to supercharge your growth in the web 3.0
                      space.
                    </p>
                  </div>
                  <div className="button_sections">
                    <Button>Join Now</Button>
                  </div>
                </div>
                <div className="box_for_what">
                  <div className="first_child1">

                    <img
                      src={fanse}
                      alt=""
                      className="clas_img_i"
                    />
                  </div>
                  <div className="title_for_what">
                    <h3>Fans</h3>
                    <p>
                      Support your favourite creator by engaging with them
                      through online fan contests andsocial games and exciting
                      merchandise from Fantically. The more you engage
                      andcontribute to grow the Fantically ecosystem the more
                      you can be rewarded.
                    </p>
                  </div>
                  <div className="button_sections">
                    <Button>Join Now</Button>
                  </div>
                </div>
                <div className="box_for_what">
                  <div className="first_child1">

                    <img
                      src={
                        fluent_people
                      }
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="title_for_what">
                    <h3>Community</h3>
                    <p>
                      Building trust and relationships are what community is all
                      about. Encouraging creatorsto share an experience or story
                      of theirs and how that ties in with our vision. We wantthe
                      creators to share personal stories on how a certain item
                      added value to their life orwhy they chose to be
                      interested in a particular hobby. These genuine stories
                      willresonate with fans and engage other people in a
                      meaningful way.
                    </p>
                  </div>
                  <div className="button_sections">
                    <Button>Join Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionne button_looff">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">Our Vision</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contanddd_ff">

                  <img
                    src={section_33}
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contnetee_d">
                  <p>
                    Fantically is a platform designed for creators, fans and
                    their communities. We believe build a future where creators
                    can utilize Virtual Digital Assets (NFTs)to help them grow
                    increating an equitable world that benefits creators and the
                    fans equally.
                    <br />
                    Our vision is to build a future where creators can utilize
                    NFTs to help them grow their communities. A future where
                    fans can support their favorite creators and be a part of
                    brands. NFTs are utility tokens that encapsulate creators,
                    communities & brands. They provide a way for communities to
                    be monetized and for fans to have an unparalleled
                    experience.
                  </p>
                  <div className="our_focus">
                    <h4>Our Focus</h4>
                    <ul>
                      <li>

                        <img
                          src={Star1}
                          alt=""
                          className=""
                        />
                        NFT Creation{" "}
                      </li>
                      <li>
                        <img
                          src={Star1}
                          alt=""
                          className=""
                        />
                        Fan Engagement
                      </li>
                      <li>
                        <img
                          src={Star1}
                          alt=""
                          className=""
                        />
                        Community Building{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionne button_looffaaa">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">How it works?</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contanddd_ff">

                  <img
                    src={mask_group}
                    alt=""
                    className="filterimg_ssss"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contet_how_word">
                  <ul>
                    <li>
                      <h2>Create your Account</h2>
                      <p>
                        Users must register with an email address or phone
                        number, or by using a crypto walletlike Metamask or
                        Trust. Keep your niche profile always updated.
                      </p>
                    </li>
                    <li>
                      <h2>Create NFTs</h2>
                      <p>
                        Think your art needs to be celebrated and shared? Mint
                        it on the blockchain and createan NFT out of it.
                      </p>
                    </li>
                    <li>
                      <h2>Engage and Trade</h2>
                      <p>
                        We don't mint art, but we help artists like you by
                        selling them!We help creators convert their craft into
                        NFTs. Interested in selling your art? Write to us!
                      </p>
                    </li>
                  </ul>
                  <Button>Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionne button_looffaaa">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">Roadmap</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contanddd_ff">
                  <img
                    src={
                      notethanungz
                    }
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="road_map_fram">
                  <div>


                    <img
                      src={line_frame}
                      alt=""
                      className="imag_colrr"
                    />
                  </div>
                  <div className="datat_frame">
                    <div className="contnte_dtata">
                      <h4>Phase 1</h4>
                      <ul>
                        <li>Onboarding the core team and engineers.</li>
                        <li>Designing the UI/UX of the Website</li>
                        <li>Web 3 Integration</li>
                      </ul>
                    </div>
                    <div className="contnte_dtata">
                      <h4>Phase 2</h4>
                      <ul>
                        <li>Testing the architecture of the Marketplace</li>
                        <li>Release of Fantically Litepaper</li>
                        <li>Launch of Fantically Beta in Q1 of 2023</li>
                      </ul>
                    </div>
                    <div className="contnte_dtata">
                      <h4>Phase 3</h4>
                      <ul>
                        <li>Community event in Q2 of 2023</li>
                        <li>
                          Onboarding Web 3 influencers to promote the Community
                        </li>
                        <li>Release of Fantically Whitepaper</li>
                        <li>Launch of Fantically in Q2 of 2023</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionne">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="text_ovefr_wriye">
                  <h3>_Community</h3>
                  <span>
                    Join the Fantically <br />
                    Community{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <a href="" target="_blank" className="button_like_clss">
                  {" "}

                  <img
                    src={
                      ic_baseline
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Discord Server</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss Telegram"
                >
                  {" "}

                  <img
                    src={
                      cib_telegram
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Telegram Group</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a href="" target="_blank" className="button_like_clss Medium">
                  {" "}

                  <img
                    src={
                      symbols_brightness
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Medium Group</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a href="" target="_blank" className="button_like_clss twiter">
                  {" "}

                  <img
                    src={mdi_twitter}
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Join Twitter</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bannersection">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="banner-content"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <small>
                    {/* Best NFT Marketplace for Creators & Fans{" "} */}
                    Unleash the power of your craft with Fantically


                    <img
                      src={thunder}
                      alt=""
                      className=""
                    />
                  </small>
                  <h1 className="headeing_boreder">
                    {/* Discover, collect, and sell <br />
                    Awesome NFTs */}
                    Super Charging the growth of the artists via Fanbase and
                    Community
                  </h1>
                  <p>
                    {/* Supercharging the growth of the Artists via Fandom &
                    Royalties* */}
                    Join our community to trade your art NFTs and Build a
                    collection that you can be proud of with zero platform fees
                    and royalties for everyone!
                  </p>
                  <div className="button_baneer">
                    <Button className="header_btn">
                      {authToken == false ? (
                        <Link to="/register">Get started!</Link>
                      ) : (
                        <Link to="/dashboard">Get started!</Link>
                      )}
                    </Button>
                    {/* <Button className="header_btn">
                      <Link to="">Explore More</Link>
                    </Button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="nft-items">
                  <Link
                    to=""
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >

                    <img
                      src={itemimg}
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
                      src={itemimg2}
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
                      src={itemimg3}
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
                      src={itemimg4}
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bannersection bg_2">
          <div className="container">
            <div
              className="title_conten"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="headeing_boreder">Discover How it Works</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="card-section_2">
                  <div className="count">1</div>
                  <h4>Create your space</h4>
                  <p>
                    Users must register with an email address or phone number,
                    or by using a crypto wallet like Metamask or Trust. Keep
                    your niche profile always updated.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="card-section_2">
                  <div className="count">2</div>
                  <h4>Create NFTs</h4>
                  <p>
                    Think your art needs to be celebrated and shared? Mint it on
                    the blockchain and create an NFT out of it.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="card-section_2">
                  <div className="count">3</div>
                  <h4>Engage and Buyout</h4>
                  <p>
                    We don't mint art, but we help artists like you by selling
                    them! We are minting CryptoCollectibles. Interested in
                    selling your art? Drop us a line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bannersection bg_3">
          <div className="container">
            <div
              className="title_conten"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2 className="headeing_boreder">Trending Live Auctions</h2>
            </div>
            <div className="row pt-4">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <div className="card-Trending">
                  <div className="positionreel">
                    <div className="countown">
                      {" "}
                      <Countdown
                        date={Date.now() + 1212122000}
                        renderer={renderer}
                      />
                    </div>
                    <Link to="" className="imgconyeea">
                      <img
                        src={require("../image/newimg/geomatry.png").default}
                        className=""
                      />
                    </Link>

                    <div className="byebtn">
                      <span>
                        {" "}
                        <i class="bi bi-play-circle"></i>
                      </span>
                      <button>Place Bid</button>
                    </div>
                  </div>
                  <p>
                    <span className="name_item">
                      Geometry
                      <img
                        src={
                          require("../image/newimg/uil_comment-verify.png")
                            .default
                        }
                        className=""
                      />
                    </span>

                    <span className="liks">140 Likes</span>
                  </p>
                  <h5>Georunners</h5>
                  <div className="currencyc">
                    <small>Current Bid</small>
                    <span>
                      <img
                        src={require("../image/newimg/eth.png").default}
                        className=""
                      />
                      10.01<small>ETH</small>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <div className="card-Trending">
                  <div className="positionreel">
                    <div className="countown">
                      {" "}
                      <Countdown
                        date={Date.now() + 1212122000}
                        renderer={renderer}
                      />
                    </div>
                    <Link to="" className="imgconyeea">
                      <img
                        src={require("../image/newimg/geomatry.png").default}
                        className=""
                      />
                    </Link>

                    <div className="byebtn">
                      <span>
                        {" "}
                        <i class="bi bi-play-circle"></i>
                      </span>
                      <button>Place Bid</button>
                    </div>
                  </div>
                  <p>
                    <span className="name_item">
                      Geometry
                      <img
                        src={
                          require("../image/newimg/uil_comment-verify.png")
                            .default
                        }
                        className=""
                      />
                    </span>

                    <span className="liks">140 Likes</span>
                  </p>
                  <h5>Georunners</h5>
                  <div className="currencyc">
                    <small>Current Bid</small>
                    <span>
                      <img
                        src={require("../image/newimg/eth.png").default}
                        className=""
                      />
                      10.01<small>ETH</small>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <div className="card-Trending">
                  <div className="positionreel">
                    <div className="countown">
                      {" "}
                      <Countdown
                        date={Date.now() + 1212122000}
                        renderer={renderer}
                      />
                    </div>
                    <Link to="" className="imgconyeea">
                      <img
                        src={require("../image/newimg/geomatry.png").default}
                        className=""
                      />
                    </Link>

                    <div className="byebtn">
                      <span>
                        {" "}
                        <i class="bi bi-play-circle"></i>
                      </span>
                      <button>Place Bid</button>
                    </div>
                  </div>
                  <p>
                    <span className="name_item">
                      Geometry
                      <img
                        src={
                          require("../image/newimg/uil_comment-verify.png")
                            .default
                        }
                        className=""
                      />
                    </span>

                    <span className="liks">140 Likes</span>
                  </p>
                  <h5>Georunners</h5>
                  <div className="currencyc">
                    <small>Current Bid</small>
                    <span>
                      <img
                        src={require("../image/newimg/eth.png").default}
                        className=""
                      />
                      10.01<small>ETH</small>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <div className="d-flex justify-content-center">
                  <Button className="header_btn">
                    <Link to="">View All</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bannersection bg_4">
          <div className="container">
            <div className="title_conten">
              <h2 className="headeing_boreder">
                Top collections over last 24 hours
              </h2>
            </div>
            <div className="row pt-4">
              {Collectionsref.current &&
                Collectionsref.current.map((item, i) => {
                  return (
                    <div className="col-lg-4">
                      <div className="top-collection">
                        <Link to="">
                          {" "}
                          {item && item.image != "" ? (
                            <img src={item.image} className="prodile" />
                          ) : (
                            <img
                              src={
                                require("../image/newimg/africls.png").default
                              }
                              className="prodile"
                            />
                          )}
                          <div className="top-conteht">
                            <p>
                              <span className="titlw_top">{item.name}</span>
                              {/* <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span> */}
        {/* </p> */}
        {/* <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div> */}
        {/* </div>
                        </Link>
                      </div>
                    </div>
                  );
                })} */}
        {/* <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/top1.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top">Realistic Digital Art</span>
                        <span className="price-top">
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01
                        </span>
                      </p>
                      <div className="creator-name">
                        <small>Sam moore</small>
                        <span className="text-green">+59.05%</span>
                      </div>
                    </div>
                  </Link>
                </div> */}
        {/* </div> */}
        {/* <div className="col-lg-12 pt-5">
                <div className="d-flex justify-content-center">
                  <Button className="header_btn">
                    <Link to="">Go to Rankings</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="bannersection bg_3">
          <div className="container">
            <div
              className="title_conten justify-content-start mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="headeing_boreder">Explore Art</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-9"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <ul class="nav nav-tabs explore-option">
                  <li class="active">
                    <a data-toggle="tab" href="#Art" class="active">
                      <img
                        src={require("../image/newimg/art.png").default}
                        className=""
                      />
                      Art
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Gaming">
                      <img
                        src={require("../image/newimg/game.png").default}
                        className=""
                      />
                      Gaming
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Software">
                      <img
                        src={require("../image/newimg/soft.png").default}
                        className=""
                      />
                      Software
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Software">
                      <img
                        src={require("../image/newimg/vedio.png").default}
                        className=""
                      />
                      Video
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Software">
                      <img
                        src={require("../image/newimg/contet.png").default}
                        className=""
                      />
                      Content
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#Software">
                      <img
                        src={require("../image/newimg/music.png").default}
                        className=""
                      />
                      Music
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-3 flexwss"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                <Button className="header_btn">
                  <Link to="">Filter</Link>
                </Button>
              </div>
            </div>
            <div class="tab-content">
              <div id="Art" class="tab-pane fade in active show p-0">
                <div className="row ">
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center">
                      <Button className="header_btn">
                        <Link to="">View All</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Gaming" class="tab-pane fade">
                <div className="row ">
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="d-flex justify-content-center"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-easing="ease-out-cubic"
                    >
                      <Button className="header_btn">
                        <Link to="">View All</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Software" class="tab-pane fade">
                <div className="row ">
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-Trending">
                      <div className="positionreel">
                        <Link to="" className="imgconyeea">
                          <img
                            src={
                              require("../image/newimg/geomatry.png").default
                            }
                            className=""
                          />
                        </Link>

                        <div className="byebtn">
                          <span>
                            {" "}
                            <i class="bi bi-play-circle"></i>
                          </span>
                          <button>Place Bid</button>
                        </div>
                      </div>
                      <p>
                        <span className="name_item">
                          Geometry
                          <img
                            src={
                              require("../image/newimg/uil_comment-verify.png")
                                .default
                            }
                            className=""
                          />
                        </span>

                        <span className="liks">140 Likes</span>
                      </p>
                      <h5>Georunners</h5>
                      <div className="currencyc">
                        <small>Current Bid</small>
                        <span>
                          <img
                            src={require("../image/newimg/eth.png").default}
                            className=""
                          />
                          10.01<small>ETH</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center">
                      <Button className="header_btn">
                        <Link to="">View All</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bannersection bg_4">
          <div className="container">
            <div className="title_conten">
              <h2 className="headeing_boreder">Top Artists</h2>
            </div>
            <div className="row pt-4">
              {Artistsref.current.length > 0 &&
                Artistsref.current.map((item, i) => {
                  return item.walletAddress != null &&
                    item.walletAddress != "" ? (
                    <div className="col-lg-4">
                      <div className="top-collection cardddddd">

                        <Link to="">
                          {item && item.profileImage != "" ? (
                            <img src={item.profileImage} className="prodile" />
                          ) : (


                            <img
                              src={
                                profileImage
                              }
                              alt=""
                              className="prodile"
                            />
                          )}
                          {/* <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    /> */}
                          <div className="top-conteht">
                            <p>
                              <span className="titlw_top newewewe">
                                {item.username}
                              </span>
                            </p>
                            <div className="creator-name">
                              <small className="followw">
                                {item.followers.length} Followers
                              </small>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              {/* <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-collection cardddddd">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../image/newimg/profilee.png").default}
                      className="prodile"
                    />
                    <div className="top-conteht">
                      <p>
                        <span className="titlw_top newewewe">
                          Leslie Alexanser
                        </span>
                      </p>
                      <div className="creator-name">
                        <small className="followw">1.2M Followers</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div> */}

              {/* <div className="col-lg-12 pt-5">
                <div className="d-flex justify-content-center">
                  <Button className="header_btn">
                    <Link to="">Go to Rankings</Link>
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="bannersection bg_2 step_section_000">
          <div className="container">
            <div
              className="title_conten flex_title_center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="headeing_boreder">Our Product</h2>
              <p>
                Our NFT marketplace provides exclusive opertunities and a world
                of possibilities to increase your fan base. get instant exposure
                and grow your brand
              </p>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="card-section_2">
                  <div className="count">1</div>
                  <h4>Become a Patron</h4>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="card-section_2">
                  <div className="count">2</div>
                  <h4>Support Artists like you</h4>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="card-section_2">
                  <div className="count">3</div>
                  <h4>Own art that you love</h4>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="card-section_2">
                  <div className="count">4</div>
                  <h4>Unlock collectibles & exclusive content</h4>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="card-section_2">
                  <div className="count">5</div>
                  <h4>Get Royalty</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bannersection bg_3 step_section_000">
          <div className="container">
            <div
              className="title_conten flex_title_center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="headeing_boreder">FAQ</h2>
              {/* <p>
                Our NFT marketplace provides exclusive opertunities and a world
                of possibilities to increase your fan base. get instant exposure
                and grow your brand
              </p> */}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="image_faq"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <img
                    src={require("../image/newimg/Faq.png").default}
                    className="prodile"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  id="main"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <div class="container">
                    <div class="accordion" id="faq">
                      <div class="card">
                        <div class="card-header" id="faqhead1">
                          <a
                            href="#"
                            class="btn btn-header-link"
                            data-toggle="collapse"
                            data-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            What is Fantically?
                          </a>
                        </div>

                        <div
                          id="faq1"
                          class="collapse show"
                          aria-labelledby="faqhead1"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            Fantically is a collection of smart contracts that
                            enables users to create digital items on the
                            Ethereum and Polygon blockchains without any prior
                            knowledge of coding or programming. The Fantically
                            marketplace allows you to browse, bid, and purchase
                            digital items that live on the blockchain. Items you
                            purchase are deposited into your wallet.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="faqhead2">
                          <a
                            href="#"
                            class="btn btn-header-link collapsed"
                            data-toggle="collapse"
                            data-target="#faq2"
                            aria-expanded="true"
                            aria-controls="faq2"
                          >
                            Why Fantically?
                          </a>
                        </div>

                        <div
                          id="faq2"
                          class="collapse"
                          aria-labelledby="faqhead2"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            Fantically makes it easy to convert your digital
                            content (file types like JPEGs, PNGs, MP4s, PDFs,
                            etc.) into digital items (NFTs) that go live on the
                            blockchain! These can be images, musical tracks,
                            videos, novels/books or more complex digital files
                            from programs. Simply fill in the details that
                            describe your item, and Fantically will use the
                            blockchain to get your digital item to the masses.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="faqhead3">
                          <a
                            href="#"
                            class="btn btn-header-link collapsed"
                            data-toggle="collapse"
                            data-target="#faq3"
                            aria-expanded="true"
                            aria-controls="faq3"
                          >
                            What is an NFT?
                          </a>
                        </div>

                        <div
                          id="faq3"
                          class="collapse"
                          aria-labelledby="faqhead3"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            NFTs are unique tokens that exist on a blockchain
                            like Ethereum. Unlike cryptocurrencies like bitcoin,
                            each NFT token contains unique data, which means
                            that NFTs are not interchangeable with each other.
                            This non-fungible nature of the tokens means that
                            their use cases differ greatly from those of their
                            fungible counterparts.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="faqhead4">
                          <a
                            href="#"
                            class="btn btn-header-link collapsed"
                            data-toggle="collapse"
                            data-target="#faq4"
                            aria-expanded="true"
                            aria-controls="faq4"
                          >
                            Which NFTs will Fantically support?
                          </a>
                        </div>

                        <div
                          id="faq4"
                          class="collapse"
                          aria-labelledby="faqhead4"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            Whether you're a professional or a hobbyist, NFTs
                            allow you to showcase and sell your favorite
                            creations. NFT marketplaces can be used for all
                            types of art, including paintings, sculptures,
                            photographs, and much more. Fantically supports all
                            kinds of arts that can be turned into non-fungible
                            tokens (NFTs), such as art, dance, music,
                            photography, script writing, fashion, and
                            architecture.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="faqhead5">
                          <a
                            href="#"
                            class="btn btn-header-link collapsed"
                            data-toggle="collapse"
                            data-target="#faq5"
                            aria-expanded="true"
                            aria-controls="faq5"
                          >
                            How to register and use Fantically?
                          </a>
                        </div>

                        <div
                          id="faq5"
                          class="collapse"
                          aria-labelledby="faqhead5"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            Whether you're a professional or a hobbyist, NFTs
                            allow you to showcase and sell your favorite
                            creations. NFT marketplaces can be used for all
                            types of art, including paintings, sculptures,
                            photographs, and much more. Fantically supports all
                            kinds of arts that can be turned into non-fungible
                            tokens (NFTs), such as art, dance, music,
                            photography, script writing, fashion, and
                            architecture.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="faqhead6">
                          <a
                            href="#"
                            class="btn btn-header-link collapsed"
                            data-toggle="collapse"
                            data-target="#faq6"
                            aria-expanded="true"
                            aria-controls="faq6"
                          >
                            How to join the community?
                          </a>
                        </div>

                        <div
                          id="faq6"
                          class="collapse"
                          aria-labelledby="faqhead6"
                          data-parent="#faq"
                        >
                          <div class="card-body">
                            Joining the Fantically community is easy - simply
                            register with an email address or phone number, or
                            with a cryptocurrency wallet such as Metamask or
                            Trust. You can then create a profile outlining your
                            niche and keep it updated as needed. If you want to
                            ensure that your art makes you good money, you can
                            mint it on the blockchain and create an NFT out of
                            it. Once the minting is done, we can help you sell
                            your art on our platform.
                          </div>
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
      </main>
    </>
  );
}

export default LandingPage;
