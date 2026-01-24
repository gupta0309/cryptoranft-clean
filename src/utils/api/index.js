import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
// const baseURL = "http://3.108.114.108";
//const baseURL = "https://api.xverse.to";

//

const getURL = () => {

  const res = process.env.REACT_APP_BASEURL;
  
// const res = "http://3.108.114.108";
//const res = "https://api.xverse.to";

  //
  return res;
};

const homePageApi = (network) => {
  //const res = axios.get(`${baseURL}/top_nft?network=` + `${network}`);
  console.log("process env baseurl===",process.env.REACT_APP_BASEURL);
  const res = axios.get(`${baseURL}/top_nft`);
  return res;
};

// get top users
const getTopUsersApi = () => {
  const res = axios.get(`${baseURL}/top_users`);

  return res;
};

//get user specfic data
const getTopSpecificUsersApi = (data) => {
  const res = axios.post(`${baseURL}/get_user_details`, data);
  return res;
};

// get More Auctions
const getMoreAuctionsApi = () => {
  const res = axios.get(`${baseURL}/get_more_auction`);
  return res;
};

const sendEmailApi = (data) => {
  const res = axios.post(`${baseURL}/send_email`, data);
  return res;
};

const recentAuction = (network) => {
  const res = axios.get(`${baseURL}/auctionNft?network=` + `${network}`);
  return res;
};

const api = {
  homePageApi,
  getTopUsersApi,
  getTopSpecificUsersApi,
  getMoreAuctionsApi,
  sendEmailApi,
  getURL,
  recentAuction,
  baseURL,
};

export default api;
