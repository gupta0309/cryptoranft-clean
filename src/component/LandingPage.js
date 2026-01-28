import React, {useEffect} from "react";
import useState from "react-usestateref";

import {Button} from "@material-ui/core";
import {Link,NavLink,useNavigate} from "react-router-dom";
import Header from "../component/Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import {postMethod} from "../service/api";
import {getMethod} from "../service/api";
import apiService from "../service/serviceUrl";
import { checkAuth } from "../service/axios";

import group_1 from "../image/newimg/group-15627@2x.png"
import grectangle_18 from "../image/newimg/rectangle-185@2x.png"
import fluent_people from "../image/newimg/fluent_people-community-24-filled.png"
import section_33 from "../image/newimg/section_33.png"
import Star1 from "../image/newimg/Star1.png"
import mask_group from "../image/newimg/mask-group@2x.png"
import notethanungz from "../image/newimg/notethanungz-ovddpvd0unsplash-9@2x.png"
import line_frame from "../image/newimg/line1.png"
import ic_baseline from "../image/newimg/ic_baseline-discord.png"
import cib_telegram from "../image/newimg/cib_telegram-plane.png"
import symbols_brightness from "../image/newimg/material-symbols_brightness-medium.png"
import mdi_twitter from "../image/newimg/mdi_twitter.png"
 
import landingBg from "../image/bg.jpg"; 
import twosec from "../image/twosec1.jpg";
import community from "../image/community.jpg";
import creator from "../image/creater11.jpg";
import fanse from "../image/creater1.jpg";
import vision from "../image/vision.jpg";
import startted from "../image/startted.png";
import roadmap from "../image/roadmap1.png";

const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
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
  const navigate = useNavigate();

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
    } catch (error) {}
  };

  const navPage = async () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <main className="pading-landin">
        <section className="home_first_section" style={{
    backgroundImage: `url(${landingBg})`,
    backgroundSize: "cover",       // ensures the image covers the entire section
    backgroundPosition: "center",  // centers the image
    backgroundRepeat: "no-repeat",
    height: "100vh",               // makes the section take full viewport height
  }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="landing_content"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h1>
                  Discover, Collect, and Trade Exclusive NFTs <span>While Empowering Creative Communities.</span>
                  </h1>
                  <p>
                   Connect with Artists, Collect Rare NFTs, and Showcase Your Digital World.
                    <br />
                   Experience, Own, and Trade One-of-a-Kind Digital Art Collections Today.
                  </p>
                  {authToken === false ? (
                  <Button onClick={navPage}>Join us</Button>
                  ) : ("")}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="image_banner">

            <img
              src={group_1}
              alt=""
              className=""
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div> */}
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
                  src={twosec}
                  alt=""
                  id="twosecimg"
                  className="h-100 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </div>
              <div className="col-lg-9">
                <div
                  className="box_for_what"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="first_child1">
                    <img
                      src={creator}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="title_for_what">
                    <h3>NFT Creators</h3>
                    <p>
                     Empowering creators in Web 3.0 with ownership and monetization. Launch your NFTs on Cryptora to showcase digital art, music, or collectibles, and grow your audience while earning directly from your work.
                    </p>
                  </div>
                  {authToken === false ? (
                  <div className="button_sections">
                    <Button onClick={navPage}>Join Now</Button>
                  </div>
                  ) : ("")}
                </div>
                <div
                  className="box_for_what"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="first_child1">
                    <img
                      src={fanse}
                      alt=""
                      className="clas_img_i"
                    />
                  </div>
                  <div className="title_for_what">
                    <h3>NFT Fans</h3>
                    <p>
                     Collect, support, and engage! Unlock exclusive NFTs, participate in fan challenges, and enjoy special rewards as you connect with your favorite creators in the Cryptora ecosystem.
                    </p>
                  </div>
                  {authToken === false ? (
                  <div className="button_sections">
                    <Button onClick={navPage}>Join Now</Button>
                  </div>
                  ) : ("")}
                </div>
                <div
                  className="box_for_what"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="first_child1">
                    <img
                      src={community}
                      alt=""
                      className=""
                    />
                    {/* <i className="fa-regular fa-user"></i> */}
                  </div>
                  <div className="title_for_what">
                    <h3>NFT Community</h3>
                    <p>
                    Connect, share, and discover. Join a vibrant community where creators tell the stories behind their NFTs, fans engage meaningfully, and everyone grows together in the world of Web 3.0.
                    </p>
                  </div>
                  {authToken === false ? (
                  <div className="button_sections">
                    <Button onClick={navPage}>Join Now</Button>
                  </div>
                  ) : ("")}
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
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src={vision}
                    alt=""
                    className="vision_img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contnetee_d"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                   our vision is to create a vibrant digital ecosystem where creators, collectors, and communities thrive together. We aim to empower artists by giving them ownership of their work while providing fans with unique ways to engage, support, and discover digital assets. We believe NFTs are more than just collectibles—they are tools for creative expression, community building, and meaningful engagement. Our platform bridges the gap between creators and their audiences, making it easy to showcase talent, monetize creativity, and participate in an inclusive digital world.
                  </p>
                  <div className="our_focus">
                    <h4>Our Focus</h4>
                    <ul>
                      <li>
                        <i class="fa-regular fa-star"></i>
                        NFT Creation{" "}
                      </li>
                      <li>
                       <i class="fa-regular fa-star"></i>
                        Fan Engagement
                      </li>
                      <li>
                       <i class="fa-regular fa-star"></i>
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
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Link to="/register">
                  <img
                    src={startted}
                    alt=""
                    className="filterimg_ssss"
                  />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contet_how_word"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <ul>
                    <li>
                      <h2>Create your Account</h2>
                      <p>
                        Users must register with an email address or phone
                        number, or by using a crypto wallet like Metamask or
                        Trust. Keep your niche profile always updated.
                      </p>
                    </li>
                    <li>
                      <h2>Create NFTs</h2>
                      <p>
                        Think your art needs to be celebrated and shared? Mint
                        it on the blockchain and create an NFT out of it.
                      </p>
                    </li>
                    <li>
                      <h2>Engage and Trade</h2>
                      <p>
                        We don't mint art, but we help artists like you by
                        selling them! We help creators convert their craft into
                        NFTs. Interested in selling your art? Write to us!
                      </p>
                    </li>
                  </ul>
                  {authToken === false ? (
                  <Button onClick={navPage}>Register Now</Button>
                  ) : ("")}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionnee button_looffaaa bg_coloeee">
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
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src={
                      roadmap
                    }
                    alt=""
                    className="roadmap_img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="road_map_fram d-flex"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
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
        <section className="sectionnee">
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
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
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
                  data-aos="fade-up"
                  data-aos-duration="3000"
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
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss Medium"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
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
                <a
                  href="https://twitter.com/Fantically__"
                  target="_blank"
                  className="button_like_clss twiter"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
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

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
