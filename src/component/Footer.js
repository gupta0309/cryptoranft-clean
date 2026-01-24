// import React,{useEffect} from "react";
// import useState from "react-usestateref";
// import {Link} from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import logoN from "../image/capage/logo.png";

// import { Button } from "@material-ui/core";
// import logo_white from "../image/logo/nft logo.png"
// import facebook from "../image/newimg/facebook.png"
// import twitterwhite from "../image/newimg/twitterwhite.png"
// import linkedin from "../image/newimg/linkedin.png"

// import Terms from "../image/pdf/xVerse-TermsOfService.pdf";
// import Privacy from "../image/pdf/xVerse-PrivacyPolicy.pdf";
// import {checkAuth} from "../service/axios";

// function Footer() {

//   const [userActive, setuserActive] = useState(false);
//   const [authToken, setAuthToken] = useState(false);
//   const [account,setAccount,accountref] = useState("");

//   useEffect(() => {
//     setAuthToken(checkAuth());
//     var wallet = localStorage.getItem("walletAddress");
//     if (wallet != undefined && wallet != null && wallet != "") {
//       setuserActive(true);
//       setAccount(wallet);
//     } else {
//       setuserActive(false);
//     }
//   }, [0]);
//   return (
//     <div>
//       <div className="footer">
//         <footer className="container-fluid">
//           <div className="footer_padin">
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="log_section">
//                   <img
//                     src={logo_white}
//                     alt=""
//                     className="prodile"
//                   />
//                    {/* <img
//                     src={require("../image/newimg/fc@2x.png").default}
//                     className="prodile"
//                   /> */}
//                   <p>
//                     The world’s fast & best marketplace for Non-fungible Tokens
//                     (NFT’s).Buy,Sell,& discover exclucive digital items .
//                   </p>
//                   {/* <div className="social_link_">
//                     <Link className="" to="">
//                       <i class="fab fa-facebook"></i>
//                     </Link>
//                     <Link className="" to="">
//                       <i class="fab fa-twitter"></i>
//                     </Link>

//                     <Link className="" to="">
//                       <i class="fab fa-youtube"></i>
//                     </Link>
//                   </div>

//                   <div className="language_selectio">
//                     <label>Language</label>
//                     <select>
//                       <option>English</option>
//                     </select>
//                   </div> */}
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="link_footer">
//                   <label>Marketplace</label>
//                   <ul>
//                     <li>
//                     <Link className="" to="/explore">
//                       Explore
//                       </Link>
//                       </li>

//                     <li>
//                       <Link className="" to="/explore">
//                         Create NFT
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="" to="/explore">
//                       Collection
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="" to="/explore">
//                       Rankings
//                       </Link>
//                     </li>
//                     {/* <li>
//                       <Link className="" to="/explore">
//                       Careers
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="" to="/explore">
//                       Blog
//                       </Link>
//                     </li> */}
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="link_footer">
//                   <label>Company</label>
//                   <ul>
//                     <li>
//                       <Link className="" to="">
//                         About Us
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="" to="">
//                         Careers
//                       </Link>
//                     </li>
//                  </ul>
//                 </div>
//               </div> 
//               <div className="col-lg-2">
//                 <div className="link_footer">
//                   <label>Stats</label>
//                   <ul>
//                     <li>
//                     {authToken == false ? (
//                     <Link className="" to="/loginPage">
//                     My Activity
//                   </Link>
//                   ) : userActive == true ? (
//                     <Link className="" to={`/profile/${accountref.current}`}>
//                         My Activity
//                       </Link>
//                   ) : (
//                     <Link className="" to="/walletConnect">
//                         My Activity
//                       </Link>
//                   )}
//                     </li>
//                     <li>
//                     {authToken == false ? (
//                     <Link className="" to="/loginPage">
//                     History
//                   </Link>
//                   ) : userActive == true ? (
//                     <Link className="" to="/history">
//                         History
//                       </Link>
//                   ) : (
//                     <Link className="" to="/walletConnect">
//                         History
//                       </Link>
//                   )}
                      
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             {/* <Grid container spacing={2} justify="space-around">
//               <div className="footer_clas_flex">
//                 <div>
//                   <div className="log_section">
//                     <img src={logoN} className="logo" />
//                     <p>
//                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                       Modi nobis iusto hic veritatis deserunt sed iure vero
//                       minima minus error
//                     </p>
//                     <p>&copy; CHOLA TOKEN, All Rights Reserved</p>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="link_footer">
//                     <label>MintedPix</label>
//                     <ul>
//                       <li>
//                         <a href="http://3.142.69.169/ico/"></a>Open App
//                       </li>

//                       <li>
//                         <Link className="" to="">
//                           Tokenomics
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="link_footer">
//                     <label>General</label>
//                     <ul>
//                       <li>
//                         <Link className="" to="">
//                           Mission
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="" to="">
//                           Roadmap
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div></div>
//                 <div>
//                   <div className="link_footer">
//                     <label>Join Newsletter</label>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Porro maiores veritatis, consectetur molestiae in atque.
//                     </p>
//                     <ul>
//                       <li>
//                         <Link className="" to="">
//                           Twitter
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="" to="">
//                           Telegram
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="" to="">
//                           Linkedin
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </Grid> */}
//           </div>
//           <div className="container-fluid bordere">
//             <div className="row">
//               <div className="col-lg-4">
//                 <ul className="footer-linksss">
//                   <li className="markre-none">
//                     <a href="" target="_blank">
//                       Terms of Use
//                     </a>
//                   </li>
//                   <li>
//                     <a href="" target="_blank">
//                       Privacy
//                     </a>
//                   </li>
//                   {/* <li>
//                     <a href="" target="_blank">
//                       Articles
//                     </a>
//                   </li>
//                   <li>
//                     <a href="" target="_blank">
//                       Sitemap
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>
//               <div className="col-lg-4">
//                 <ul className="socialas">
//                   <li>
                    

//                     <a href="" target="_blank">
//                       <img
//                         src={facebook}
//                         alt=""
//                         className="prodile"
//                       />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="" target="_blank">
//                       <img
//                         src={
//                           twitterwhite
//                         }
//                         alt=""
//                         className="prodile"
//                       />
//                     </a>
//                   </li>
//                   <li>
                   
//                     <a href="" target="_blank">
//                       <img
//                         src={linkedin}
//                         alt=""
//                         className="prodile"
//                       />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/* <div className="col-lg-4">
//                 <p className="pwwpwpe3">
//                   Copyright &#169; 2000- 2022 FANTICALLY
//                 </p>
//               </div> */}
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Footer;







// // import React from "react";
// // import "../styles/FooterNFT.css";
// // import logo from "../image/logo/nft logo.png"; 
// // import insta from "../image/newimg/facebook.png";
// // import tw from "../image/newimg/twitterwhite.png";
// // import github from "../image/newimg/linkedin.png";

// // const FooterNFT = () => {
// //   return (
// //     <div className="nft-footer-wrapper">
// //       <div className="nft-footer-container">
// //         <div className="row">
          
// //           {/* Logo Section */}
// //           <div className="col-lg-4 col-md-6">
// //             <div className="nft-footer-logo">
// //               <img src={logo} alt="NFT Logo" />
// //               <p>
// //                 Discover, collect, and trade unique NFTs on our secure and
// //                 decentralized marketplace powered by Web3 technology.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Marketplace */}
// //           <div className="col-lg-2 col-md-6">
// //             <div className="nft-footer-links">
// //               <label>Marketplace</label>
// //               <ul>
// //                 <li><a href="#">Explore</a></li>
// //                 <li><a href="#">Collections</a></li>
// //                 <li><a href="#">Ranking</a></li>
// //                 <li><a href="#">Create NFT</a></li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Resources */}
// //           <div className="col-lg-2 col-md-6">
// //             <div className="nft-footer-links">
// //               <label>Resources</label>
// //               <ul>
// //                 <li><a href="#">Help Center</a></li>
// //                 <li><a href="#">Partners</a></li>
// //                 <li><a href="#">Blog</a></li>
// //                 <li><a href="#">Newsletter</a></li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Company */}
// //           <div className="col-lg-2 col-md-6">
// //             <div className="nft-footer-links">
// //               <label>Company</label>
// //               <ul>
// //                 <li><a href="#">About Us</a></li>
// //                 <li><a href="#">Careers</a></li>
// //                 <li><a href="#">Privacy Policy</a></li>
// //                 <li><a href="#">Terms</a></li>
// //               </ul>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Bottom Section */}
// //       <div className="nft-footer-bottom">
// //         <div className="row align-items-center">
          

// //           <div className="col-md-6">
// //             <ul className="nft-footer-social">
// //               <li><img src={tw} alt="Twitter" /></li>
// //               <li><img src={insta} alt="Instagram" /></li>
// //               <li><img src={github} alt="LinkedIn" /></li>
// //             </ul>
// //           </div>
// //           <div className="col-md-6">
// //             <ul className="nft-footer-bottom-links">
// //               <li><a href="#">© 2026 NFT Platform</a></li>
// //               <li><a href="#">All Rights Reserved</a></li>
// //             </ul>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FooterNFT;














import React from "react";
import "../styles/FooterNFT.css";
import logo from "../image/logo/nft logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Cryptora NFT" />
            {/* <h2>Cryptora <span>NFT</span></h2> */}
          </div>
          <p>
            The world's fast & best marketplace for Non-fungible Tokens (NFT's).
            Buy, Sell, & discover exclusive digital items.
          </p>
        </div>

        {/* Marketplace */}
        <div className="footer-links">
          <h3>Marketplace</h3>
          <ul>
            <li>Explore</li>
            <li>Create NFT</li>
            <li>Collection</li>
            <li>Rankings</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Stats */}
        <div className="footer-links">
          <h3>Stats</h3>
          <ul>
            <li>My Activity</li>
            <li>History</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-terms">
          <span>Terms of Use</span>
          <span>•</span>
          <span>Privacy</span>
        </div>

        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
