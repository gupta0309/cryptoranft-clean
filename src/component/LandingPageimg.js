import React, {useEffect} from "react";
import useState from "react-usestateref";

import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Header from "./Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import {postMethod} from "../service/api";
import {getMethod} from "../service/api";
import apiService from "../service/serviceUrl";
import {checkAuth} from "../service/axios";
import LandingImg from "../image/newimg/net-page.svg";

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

  return (
    <>
      <Header />
      <main className="pading-landin overdfff">
        <div>
          <img src={LandingImg} className="img_widtha" />
        </div>
        <div className="new_landing">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default LandingPage;
