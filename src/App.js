import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/component/Home";

import "../src/styles/Custom.css";

import Latest from "../src/component/Latestproduct";
import Liqudity from "./component/liqudity";
import Cratepair from "./component/cratepair";
import Removepair from "./component/removepair";
import Liquditytable from "./component/liquditytable";

import Admin from "../src/component/AdminPage";
import Manage from "../src/component/managewallet";
import Details from "../src/component/discountdetails";
import YourDetails from "../src/component/yourdiscountdetails";
import CreateSale2 from "../src/component/createSaleS2";
import CreateSale3 from "../src/component/createSaleS3";

import CreateOption from "../src/component/createoption";
import CreateSingle from "../src/component/createsingle";
import CreateMulti from "../src/component/createmultiple";
import Applyartist from "../src/component/appaly_artist";
import Creator from "../src/component/creator";
import Creatornft from "../src/component/creatorNFT";

import DiscoverNew from "../src/component/discoverNew";
import FAQ from "../src/component/Faq";

import Info from "../src/component/info";
import { ToastContainer } from "react-toastify";

import apiService from "../src/service/serviceUrl";
import { getMethod, postMethod } from "../src/service/api";

import Landing from "./component/LandingPage";
//import Landing from "./component/LandingPageimg";

import Register from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";
import Forgetpass from "./component/Forgetpass";
import Changepass from "./component/Changepass";
import Connect_wlle from "./component/Connect_wlle";
import Profile from "../src/component/Profile";
import EditProfile from "../src/component/EditProfile";
import EditProfileOTP from "../src/component/EditProfileOTP";
// import CreateNewItem from "../src/component/CreateNewItem";
import CreateNewItemtwo from "../src/component/CreateNewItemtwo";
import CreateNewItemthree from "../src/component/CreateNewItemthree";
import Dashboard from "../src/component/Dashboard";
import SearchResult from "../src/component/SearchResult";
import Explore from "../src/component/Explore";
import Collection from "../src/component/Collection";
import NFTDetails from "../src/component/NFT-details";
import CollectionProfile from "../src/component/CollectionProfile";
import History from "../src/component/History";

import Activiation from "../src/component/Activiation";
import CollectionNFTS from "../src/component/CollectionNFTS";
import Favorites from "../src/component/Favorites";
import ActiveBids from "../src/component/ActiveBids";
import { removeToken } from "../src/service/axios";

import AOS from "aos";
import "aos/dist/aos.css";
import AdminUsers from "./component/AdminUsers";
import Movies from "./component/Movies";
// import AdminCreateMovie from "./component/AdminCreateMovie";
import AdminCreateJoner from "./component/AdminCreateJoner";
import AdminCreateCategory from "./component/AdminCreateCategory";
import AdminMovieList from "./component/AdminMovieList";
import AdminCreateNFTCategory from "./component/AdminCreateNFTCategory";
// import AdminCreateNFTCollection from "./component/AdminCreateNFTCollection";
import AdminDashboard from "./component/AdminDashboard";
import AdminRevenueAddFund from "./component/AdminRevenueAddFund";
import AdminRightsDistribution from "./component/AdminRightsDistribution";

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
// import { sepolia } from '@reown/appkit/networks'
import { polygon } from '@reown/appkit/networks'
import UserRevenue from "./component/UserRevenue";


const projectId = 'dff4b9b2224b49bbc7d668a794877986'

// 2. Set the networks
const networks = [polygon]

// 3. Create a metadata object - optional
const metadata = {
  name: 'CineNFT',
  description: 'CineNFT',
  url: 'https://cineNFT.com', // origin must match your domain & subdomain
  icons: ['https://avatars.cineNFT.com/']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  AOS.init();
  const classes = useStyles();

  function RequireAuth({ children }) {
    var data = localStorage.getItem("user_token");
    return data ? children : removeToken();
  }



  const [UserDatas, setUserDatas] = useState("");

  const getProfile = async () => {
    try {
      var data = {
        apiUrl: apiService.profiledatas,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        // console.log(resp, "-=-==-=-=-=-=----=-=-=_____-=-=-resp-=-=-");
        setUserDatas(resp.Message);
        // console.log(resp.Message.userRole, "role ss")
      } else {
      }
    } catch (error) { }
  };

  useEffect(() => {
    // getProfile();
  }, [])
  // const UserDatas.userRole =="admin" = UserDatas.userRole == "admin";


  return (


    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/activiation" element={<Activiation />} />

        <Route
          path="/Changepass"
          element={
            <RequireAuth>
              <Changepass />
            </RequireAuth>
          }
        />
        <Route
          path="/walletconnect"
          element={
            <RequireAuth>
              <Connect_wlle />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:wallet"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/collectionProfile"
          element={<CollectionProfile />}
        />

        <Route
          path="/editprofile"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/editprofileotp"
          element={
            <RequireAuth>
              <EditProfileOTP />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/createNewItem"
          element={
            <RequireAuth>
              <CreateNewItem />
            </RequireAuth>
          }
        /> */}
        <Route path="/createNewItemtwo" element={<CreateNewItemtwo />} />
        <Route
          path="/createNewItemthree"
          element={<CreateNewItemthree />}
        />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/collection"
          element={
            <RequireAuth>
              <Collection />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            UserDatas.userRole == "admin" ?
              <Navigate to="/AdminDashboard" />
              :
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
          }
        />

        {/* <Route
          path="/dashboard"
          element={
            <RequireAuth>
              {
                UserDatas.userRole == "admin" ?<Navigate to="/AdminDashboard">: <Dashboard />
              }
            </RequireAuth>
          }
        /> */}
        <Route
          path="/movies"
          element={
            <RequireAuth>
              <Movies />
            </RequireAuth>
          }
        />
        <Route
          path="/NFTDetails"
          element={
            <RequireAuth>
              <NFTDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/activebids"
          element={
            <RequireAuth>
              <ActiveBids />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path="/NFTDetails/:token_id/:network"
          element={
            <RequireAuth>
              <NFTDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/collection/nfts/:collection_id/:network"
          element={
            <RequireAuth>
              <CollectionNFTS />
            </RequireAuth>
          }
        />

        {/* <Route path="/createoption" element={<CreateOption />} />

          <Route path="/createsingle" element={<CreateSingle />} />
          <Route path="/createMulti" element={<CreateMulti />} />
          <Route path="/mynft-details" element={<Info />} />
          <Route path="/mynft-details/:token_id/:network" element={<Info />} />
          <Route path="/profile/:user" element={<Admin />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/artist" element={<Applyartist />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/creatornft" element={<Creatornft />} />

          <Route path="/discoverNew" element={<DiscoverNew />} /> */}


        <Route path="/latest" element={<Latest />} />
        <Route path="/Liqudity" element={<Liqudity />} />
        <Route path="/Cratepair" element={<Cratepair />} />
        <Route path="/Removepair" element={<Removepair />} />
        <Route path="/Liquditytable" element={<Liquditytable />} />

        <Route path="/createsalestep2" element={<CreateSale2 />} />
        <Route path="/createsalestep3" element={<CreateSale3 />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/managewallet" element={<Manage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/yourdetails" element={<YourDetails />} />
        <Route path="/UserRevenue" element={<UserRevenue />} />


        {/* <Route path="/AdminCreateMovie" element={<AdminCreateMovie />} /> */}


        {/* <Route
          path="/AdminCreateMovie"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminCreateMovie />
              </RequireAuth>
          }
        /> */}
        <Route
          path="/AdminUpdateMovie/:movieIdforUpdat"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                {/* <AdminCreateMovie /> */}
              </RequireAuth>
          }
        />

        <Route path="/AdminCreateJoner"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminCreateJoner />
              </RequireAuth>
          } />
        <Route
          path="/AdminCreateCategory"
          element={
            // UserDatas.userRole == "user" ?
            //     <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminCreateCategory />
              </RequireAuth>
          }
        />
        <Route path="/AdminMovieList"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminMovieList />
              </RequireAuth>
          } />
        <Route
          path="/AdminCreateNFTCategory"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminCreateNFTCategory />
              </RequireAuth>
          }
        />
        {/* <Route
          path="/AdminCreateNFTCollection"
          element={
            // UserDatas.userRole == "user" ?
            //   <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminCreateNFTCollection />
              </RequireAuth>
              }
        /> */}
        <Route
          path="/AdminDashboard"
          element={
            // UserDatas.userRole == "user" ?
            // <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminDashboard />
              </RequireAuth>
          }



        />
        <Route
          path="/AdminRevenueAddFund"
          element={
            // UserDatas.userRole == "user" ?
            //   <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminRevenueAddFund />
              </RequireAuth>
          }
        />

        <Route
          path="/adminusers"
          element={
            // UserDatas.userRole == "user" ?
            //   <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminUsers />
              </RequireAuth>
          }
        />
        <Route
          path="/AdminRightsDistribution/:movieId/:movieName"
          // path="/AdminRightsDistribution"
          element={
            // UserDatas.userRole == "user" ?
            //   <Navigate to="/dashboard" />
            //   : 
              <RequireAuth>
                <AdminRightsDistribution />
              </RequireAuth>
          }
        />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
