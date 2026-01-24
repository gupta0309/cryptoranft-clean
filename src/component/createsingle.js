import React, { useState, useEffect } from "react";
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
import { isEmpty } from '../component/empty'
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { contractAbi }  from '../abi';
import axios from "axios";
// import { useHistory } from "react-router";
import { useNavigate } from 'react-router-dom';
import { toastAlert } from "../lib/toastAlert";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import api from "../utils/api/index";
import { maticAbi }  from '../maticAbi';


const initialFormValue = {
  'amount': '',
  'image': '',
}

function Home(props) {

  const {value} = {props}

  const [formValue, setFormValue] = useState(initialFormValue);
    const [nftName, setNftName] = useState("");
    const [file, setFile] = useState();
    const [royalty, setRoyalty] = useState("");
    const [onSale, setOnSale] = useState(false);
    const [coverImage, setCoverImage] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [initialPrice, setIntialPrice] = useState();
    const [tokenId, setTokenId] = useState("");
    const [txHash, setTxHash] = useState("");
    const [nftMessage, setNftMessage] = useState("Loading...");
    const [image, setImage] = useState();
    const [imageLoading, setImageLoading] = useState();
    const [progress, setProgress] = useState();
    const [nftError, setnftError] = useState(false);
    const [descriptionError, setdescriptionError] = useState(false);
    const [loadButton, setLoadButton] = useState(false);
    const [nftPrice, setNftPrice] = useState("");
    const [nftpriceError, setnftpriceError] = useState(false);
    const [bindAudio, setBindAudio] = useState();
    const [coverImages, setCoverImages] = useState("");
    const [startDuration, setstartDuration] = useState(0);
    const [endDuration, setendDuration] = useState(2);
    const [loadingActivate, setloadingActivate] = useState(false);
    const [cutterfile, setcutterFile] = useState("");
    const [Unlock, setUnlock] = useState(false);
    const [collectible, setcollectible] = useState([]);
    const [openTrimmer, setOpenTrimmer] = useState(false);
    const [trimCheck, settrimCheck] = useState(false);
    const [nftType, setnftType] = useState("Image");
    const [loginCheck, setLoginCheck] = useState(false);
    const [coverImageCeck, setcoverImageCeck] = useState(false);
    const [cloudImage, setcloudImage] = useState("");
    const [cloudUrl, setcloudUrl] = useState("");
    const [networkcurrent, setNetwork] = useState("");
    const [Nftnetwork, setNftnetwork] = useState("");
    const [royaltyError, setroyaltyError] = useState(false);
    const [fileError, setfileError] = useState(false);


    const navigate = useNavigate();


    useEffect(() => { 

      var tokenCheck = localStorage.getItem("wallet");
      if(tokenCheck == null || tokenCheck == undefined){
        setLoginCheck(false);
        toastAlert('error','Connect your wallet');
        navigate('/');
      }else{
        setLoginCheck(true);
      }

      var currentnetwork = "";
      if (localStorage.getItem("chainId") == 97) {
        currentnetwork = "BNB";
      } else if (localStorage.getItem("chainId") == 80001) {
        currentnetwork = "MATIC";
      }
      setNetwork(currentnetwork);

     }, []);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

const options = [
{ value: "Image", label: "Art" },
{ value: "Music", label: "Audio", className: "myOptionClassName" },
{ value: "Video", label: "Video" },
{ value: "Trading Cards", label: "Trading Cards" },
{ value: "Virtual worlds", label: "Virtual worlds" },
{ value: "Gaming", label: "Gaming" }
];

const network_options = [
  { value: "BNB", label: "BSC" },
  { value: "MATIC", label: "POLYGON"}
  ];

const defaultOption = options[3];

const onSelect = async (option) => {
  if(option.value == "Music"){
    setcoverImageCeck(true);
  }else{
    setcoverImageCeck(false);
  }
  setnftType(option.value)
  setFile("");
  setCoverImages("");

}

const onSelectnetwork = async (option) => {
  if(option.value == networkcurrent){
    setNftnetwork(option.value)
  }else{
    Changenetwork(option.value)
  }
}

  const nftNames  =  (e) => {

    setNftName(e);
    let checknfrname =   isEmpty(e);
    setnftError(checknfrname == false ? true : false );

}

const nftPrices  =  (e) => {
  setNftPrice(e);

  
  let checknftprice =   isEmpty(e);
  setnftpriceError(checknftprice == false ? true : false );

}

const Description  =  (e) => {
  setDescription(e);

  let descriptioncheck =   isEmpty(e);
  setdescriptionError(descriptioncheck == false ? true : false );
}

const Royalty  =  (e) => {
  setRoyalty(e);

  let royaltycheck =   isEmpty(e);
  setroyaltyError(royaltycheck == false ? true : false );
}

const Changenetwork = async (network) => {
  var current_chain = await window.web3.eth.getChainId();
  const chainId = localStorage.getItem("chainId");

  if(chainId == 97 || chainId == 80001)
  {
  var id = "";
  if (network == "BNB") {
    id = "0x61";
  } else {
    id = "0x13881";
  }
  console.log("network change",network);
  window.ethereum
  .request({
    method: "wallet_switchEthereumChain",
    params: [{chainId: id}], // chainId must be in hexadecimal numbers
  })
  .then((res) => {
    console.log("network change res===", res);
    alert("Network changed");
    // window.location.href = "/";
    setNetwork(network);
    var chain_id = (network=="BNB")?97:80001;
    console.log("chain network==",network);
    console.log("chain_id==",chain_id);
    localStorage.setItem("chainId",chain_id);
  })
  .catch((err) => {
    if (err.code == 4902) {
      alert("Please add " + network + " to metamask");
    } else {
      alert("Something went wrong, please try again");
    }
  });
  // var res  = await window.ethereum.request({
  //     method: "wallet_switchEthereumChain",
  //     params: [{chainId: id}], // chainId must be in hexadecimal numbers
  //   });
  //   if(res==null)
  //   {
  //     toastAlert("success","Network Changed");
  //     // window.location.href = "/";
  //     setNetwork(network);
  //     var chain_id = (network=="BNB")?97:80001;
  //     console.log("chain network==",network);
  //     console.log("chain_id==",chain_id);
  //     localStorage.setItem("chainId",chain_id);
  //   }
  //   else
  //   {

  //   }
  }
  else
  {
    toastAlert("error","Please connect BSC or MATIC network in your metamask")
  }
};



// const onFormSubmit  = async  (e) => {
// if(trimCheck == true){
//     toastAlert('error','Please trim your file then create NFT')
// }else{
// let checknfrname =  await isEmpty(nftName);
// setnftError(checknfrname == false ? true : false );
// let descriptioncheck =  await isEmpty(description);
// setdescriptionError(descriptioncheck == false ? true : false );

// // let pricecheck =  await isEmpty(nftPrice);

// //if(nftError == true || nftpriceError == true || file == undefined){ 
// if(nftError == true || file == undefined){ 

//   toastAlert('error', "Please give valid details");

// }else{
// // setLoadButton(true);
// toastAlert('success', "Please wait Your NFT creating being process...");

//   let creator;
//   let token_created_id;
//   if (window.ethereum) {
//       await window.ethereum.send("eth_requestAccounts");
//       window.web3 = new Web3(window.ethereum);
//       const accounts = await window.web3.eth.getAccounts();
//       creator = accounts[0];
//     }
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("myImage", file);

//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     setLoadButton(true);

//     axios
// .post(api.baseURL+"/upload", formData, config)

// .then((res) => {
//   setLoadButton(false)
//   // return 

//   const myData = {
//     name: nftName,
//     creator: creator,
//     description: description,
//     imagePath: res.data,
//     cover: coverImage,
//     type: "Music",
//     royalty: royalty,
//     //initialPrice: nftPrice,
//     trimmerFile  : cutterfile
//   };

//   var current_chain = localStorage.getItem("chainId");
//     var network = "";
//     var contract_address = "";
//     var abi = "";
//     if(current_chain == 97){
//       network = "BNB"
//       contract_address = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9"
//       abi = contractAbi
//     }
//     else
//     {
//       network = "MATIC"
//       contract_address = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9"
//       abi = maticAbi
//     }

//   axios({
//     method: "POST",
//     url: api.baseURL+"/create_meta_data",
//     data: myData,
//   })
//     .then(async (res) => {
//       const nft = await createNewNft(
//         res.data.imageHash,
//         res.data.metaDataURI,
//         contract_address
//       );
//       setTokenId(nft.events.Transfer.returnValues.tokenId);
//       token_created_id = nft.events.Transfer.returnValues.tokenId;
//       setTxHash(nft.transactionHash);

//       let myNftMusic = `https://ipfs.io/ipfs/${res.data.imageHash}`;
      
//       const myData = {
//         owner: nft.from,
//         tokenId: nft.events.Transfer.returnValues.tokenId,
//         txHash: nft.transactionHash,
//         //initialPrice: nftPrice,
//         music: myNftMusic,
//         onSale: onSale,
//         coverImage: coverImage,
//         name: nftName,
//         ownerImage: localStorage.getItem("profile_image"),
//         creatorImage: localStorage.getItem("profile_image"),
//         description: description,
//         royalty: royalty,
//         NFTtype:nftType,
//         trimmerFile  : cutterfile,
//         Unlock       : Unlock,
//         type: 'single',
//         network: network


//       };

//       // return
//       axios({
//         method: "POST",
//         url: api.baseURL+"/add_token_info",
//         //url: "http://localhost:3003/add_token_info",
//         data: myData,
//       })
//         .then(async (res) => {
//           setLoadButton(false);
//           console.log("inisde here after add token info", res);
//           if (res.data) {
//             localStorage.setItem('NftType','Single');
//             if (onSale) {
//               console.log("putting on sale");
//               // setCurrentHeading("Putting on Sale");
//               if (window.ethereum) {
//                 console.log("inisde here haha");
//                 await window.ethereum.send("eth_requestAccounts");
//                 window.web3 = new Web3(window.ethereum);
//                 // const accounts = await window.ethereum.request({
//                 //   method: "eth_requestAccounts",
//                 // });
//                 const accounts = await window.web3.eth.getAccounts();

//                 window.contract = await new window.web3.eth.Contract(
//                   abi,
//                   contract_address
//                 );
//                 console.log(token_created_id, "this is token Id");

//                 // axios({
//                 //   url:"http://3.14.88.24:5000/get"
//                 // })

//                 const theOwner = await window.contract.methods
//                   .approve(
//                     contract_address,
//                     token_created_id
//                   )
//                   .send({ from: accounts[0] })
//                   .on("transactionHash", function (hash) {
//                     console.log(hash, "this is approve hash");
//                     // setCurrentHeading("Done");
//                     setNftMessage(
//                       `Nft Created Successfully.. Your tokenId: ${token_created_id}`
//                     );
//                     navigate(`/mynft-details/${res.data.tokenId}`);
//                     setLoading(false);
//                   });
//               }
//             } else {
//               setNftMessage(
//                 `Nft Created Successfully.. Your tokenId: ${token_created_id}`
//               );
//               navigate(`/mynft-details/${res.data.tokenId}`);
//               // setCurrentHeading("Minted successfully");
//               setLoading(false);
//             }
//           }
//         })
//         .catch((e) => {
//           console.log(e, "this is error");
//           alert("some error occurred!!");
//         });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// })
// .catch((error) => {
//   console.log(error);
// });            
// }

// }


// }


const validate_file = async (file) => {
  var filetype = file.type;
  console.log("filetype====",filetype);
  console.log("nftType====",nftType);
  if(nftType=="Image" || nftType=="Virtual worlds" || nftType=="Trading Cards" || nftType == "Gaming" )
  {
    if(filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png" || filetype == "image/gif" || filetype == "image/giff" || filetype == "image/webp")
    {
      console.log("call here")
      upload_cloud(file);
    }
    else
    {
      console.log("call there")
      toastAlert("error","Please upload only jpg, jpeg, giff, png, webp formats");
    }
  }
  else if(nftType=="Music" )
  {
    if(filetype == "audio/mpeg")
    {
      upload_cloud(file);
    }
    else
    {
      toastAlert("error","Please upload only mp3 format");
    }
  }
  else if(nftType=="Video" )
  {
    if(filetype == "video/mp4")
    {
      upload_cloud(file);
    }
    else
    {
      toastAlert("error","Please upload only mp4 format");
    }
  }
}

const upload_cloud = async (file) => {
  setFile(file);
  let filecheck =  (file == undefined)?true:false;
  setfileError(filecheck == true ? true : false );
  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET)
  data.append("cloud_name",process.env.REACT_APP_CLOUDINARY_FOLDER)
  fetch("  https://api.cloudinary.com/v1_1/"+process.env.REACT_APP_CLOUDINARY_FOLDER+"/auto/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
    console.log("cloudinary result===",cloudUrl);
    setcloudUrl(data.secure_url);
    if(nftType=="Image" || nftType=="Virtual worlds" || nftType=="Trading Cards" || nftType == "Gaming" )
    {
      setCoverImage(data.secure_url);
      setCoverImages(data.secure_url)
    }
  })
  .catch(err => { 
    console.log(err)
  })
}

const onFormSubmit  = async  (e) => {
  // if(trimCheck == true){
  //     toastAlert('error','Please trim your file then create NFT')
  // }else{
  let checknfrname =  await isEmpty(nftName);
  setnftError(checknfrname == false ? true : false );
  let descriptioncheck =  await isEmpty(description);
  setdescriptionError(descriptioncheck == false ? true : false );
  let royaltycheck = await isEmpty(royalty);
  setroyaltyError(royaltycheck == false ? true : false );
  let filecheck =  (file == undefined)?true:false;
  setfileError(filecheck == true ? true : false );
  
  // let pricecheck =  await isEmpty(nftPrice);
  
  //if(nftError == true || nftpriceError == true || file == undefined){ 
  if(file != undefined && nftName != "" && description != "" && royalty != 0){
  // setLoadButton(true);
  toastAlert('success', "Please wait Your NFT creating being process...");
  
    let creator;
    let token_created_id;
    if (window.ethereum) {
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        const accounts = await window.web3.eth.getAccounts();
        creator = accounts[0];
      }
      setLoading(true);
  
      const formData = new FormData();
      formData.append("myImage", file);
  
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      setLoadButton(true);
  
      axios
  .post(api.baseURL+"/upload", formData, config)
  
  .then((res) => {
    setLoadButton(false)
    // return 
  
    const myData = {
      name: nftName,
      creator: creator,
      description: description,
      imagePath: res.data.myPath,
      cover: coverImage,
      type: "Music",
      royalty: royalty,
      //initialPrice: nftPrice,
      //trimmerFile  : cutterfile,
      fileIPFS : res.data.fileIPFS
      
    };
  
    var current_chain = localStorage.getItem("chainId");
      var network = "";
      var contract_address = "";
      var abi = "";
      if(current_chain == 97){
        network = "BNB"
        contract_address = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9"
        abi = contractAbi
      }
      else
      {
        network = "MATIC"
        contract_address = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9"
        abi = maticAbi
      }
  
    axios({
      method: "POST",
      url: api.baseURL+"/create_meta_data",
      data: myData,
    })
      .then(async (res) => {
        const nft = await createNewNft(
          res.data.imageHash,
          res.data.metaDataURI,
          contract_address
        );
        setTokenId(nft.events.Transfer.returnValues.tokenId);
        token_created_id = nft.events.Transfer.returnValues.tokenId;
        setTxHash(nft.transactionHash);
  
        let myNftMusic = `${res.data.imageHash}`;
        
        const myData = {
          owner: nft.from,
          tokenId: nft.events.Transfer.returnValues.tokenId,
          txHash: nft.transactionHash,
          //initialPrice: nftPrice,
          music: myNftMusic,
          onSale: onSale,
          coverImage: coverImage,
          name: nftName,
          ownerImage: localStorage.getItem("profile_image"),
          creatorImage: localStorage.getItem("profile_image"),
          description: description,
          royalty: royalty,
          NFTtype:nftType,
          trimmerFile  : cutterfile,
          Unlock       : Unlock,
          type: 'single',
          network: network,
          cloudUrl: cloudUrl
  
  
        };
  
        // return
        axios({
          method: "POST",
          url: api.baseURL+"/add_token_info",
          //url: "http://localhost:3003/add_token_info",
          data: myData,
        })
          .then(async (res) => {
            setLoadButton(false);
            console.log("inisde here after add token info", res);
            if (res.data) {
              localStorage.setItem('NftType','Single');
              if (onSale) {
                console.log("putting on sale");
                // setCurrentHeading("Putting on Sale");
                if (window.ethereum) {
                  console.log("inisde here haha");
                  await window.ethereum.send("eth_requestAccounts");
                  window.web3 = new Web3(window.ethereum);
                  // const accounts = await window.ethereum.request({
                  //   method: "eth_requestAccounts",
                  // });
                  const accounts = await window.web3.eth.getAccounts();
  
                  window.contract = await new window.web3.eth.Contract(
                    abi,
                    contract_address
                  );
                  console.log(token_created_id, "this is token Id");
  
                  // axios({
                  //   url:"http://3.14.88.24:5000/get"
                  // })
  
                  const theOwner = await window.contract.methods
                    .approve(
                      contract_address,
                      token_created_id
                    )
                    .send({ from: accounts[0] })
                    .on("transactionHash", function (hash) {
                      console.log(hash, "this is approve hash");
                      // setCurrentHeading("Done");
                      setNftMessage(
                        `Nft Created Successfully.. Your tokenId: ${token_created_id}`
                      );
                      navigate(`/mynft-details/${res.data.tokenId}/${res.data.network.toLowerCase()}`);
                      setLoading(false);
                    })
                }
              } else {
                setNftMessage(
                  `Nft Created Successfully.. Your tokenId: ${token_created_id}`
                );
                navigate(`/mynft-details/${res.data.tokenId}/${res.data.network.toLowerCase()}`);
                // setCurrentHeading("Minted successfully");
                setLoading(false);
              }
            }
          })
          .catch((e) => {
            console.log(e, "this is error");
            alert("some error occurred!!");
          });
      })
      .catch((e) => {
        console.log(e);
        console.log("reject response",e);
        if(e.code==4001)
        {
          console.log("call here")
          window.location.reload(true);
        }
      });
  })
  .catch((error) => {
    console.log(error);
  });            
  }
  else
  {
    toastAlert('error', "Please fill all the fields");
  }
  
  //}
  
  
  }

    
const createNewNft = async (assetHash, metaDataURI, contract_address) => {
    if (window.ethereum) {
      var current_chain = localStorage.getItem("chainId");
      var network = "";
      var contract_address = "";
      var abi = "";
      if(current_chain == 97){
        network = "BNB"
        contract_address = "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9"
        abi = contractAbi
      }
      else
      {
        network = "MATIC"
        contract_address = "0x53c6f3f4b28efb97dc47d91f3150724bad231aa9"
        abi = maticAbi
      }
      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);

      const accounts = await window.web3.eth.getAccounts();
      window.contract = await new window.web3.eth.Contract(
        abi,
        contract_address
      );
      // window.contract = await new window.web3.eth.Contract(
      //   contractAbi,
      //   "0x43E712785a89DD4Dd198DE41B97561326b39Fa0e"
      // );
      

      let result;
      setBindAudio(metaDataURI);
      const mynewNumber = await window.contract.methods
        .createCollectible(metaDataURI, royalty)
        .send({ from: accounts[0] })
        .on("transactionHash", function (hash) {
          console.log(hash, "this is awardItem hash");
        })
        .on("receipt", function (receipt) {
          result = receipt;
          console.log(receipt, "this is award Item receipt");
        });

      return result;
    } else {
      const provider = new WalletConnectProvider({
        // infuraId: "22b3a9c2b68f42abb593b0582461ed6d",
        rpc: {
          97: process.env.REACT_APP_MORALIS_END_POINT, // moralis api for nft
          
        },
      });
      const web3 = new Web3(provider);

      await provider.enable();

      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(
        contractAbi,
        "0x70e552bd182b9b3bf61b523d8e3aa7f9b1a70ba9"
      );


      // const accounts = await web3.eth.getAccounts();
      // const contract = new web3.eth.Contract(
      //   contractAbi,
      //   "0x43E712785a89DD4Dd198DE41B97561326b39Fa0e"
      // );
      
      

      let result;
      var balance = await web3.eth.getBalance(accounts[0]);

      const mynewNumber = await contract.methods
        .createCollectible(metaDataURI, royalty)
        .send({ from: accounts[0] })
        .on("transactionHash", function (hash) {
          console.log(hash, "this is awardItem hash");
        })
        .on("receipt", function (receipt) {
          result = receipt;
        });


      return result;
    }
  };


  const imageUpload = (val) => {
    // setFile(val)
    var filetype = val.type;
    if(filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png")
    {
    const formData = new FormData();
    formData.append("myImage", val);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(api.baseURL+"/image_upload", formData, config)
    .then((res) => {
      setCoverImage(res.data);
      var splitImage = api.baseURL+"/"+res.data.split('public')[1];
      setCoverImages(splitImage)
      
    });
   }
   else
  {
      toastAlert("error","Please upload cover images only in jpeg, jpg and png format")
  }
  }



  return (
    <ScrollingProvider>
      <div className="main_pading">
        <Header />

        {
            loading ? (
              <div style={{ height: "80vh" }}>
                
              <center style={{ paddingTop: "200px" }}>
                <div class="fa-3x mt-5 pt-5">
                  <i class="fas fa-spinner fa-spin"></i>
                  <p class="loading_text">Please wait Your NFT creation is being process</p>
                </div>
              </center>
            </div>
             ) :    <section className="craetesingle">
             <div className="container">
               <div className="row">
                 <div className="col-lg-8">
                   <div className="create_single">
                     <div className="">
                       <div className="single_title_section">
                         <h1>
                           Create single <br />
                           collectible
                         </h1>
                         <Button className="nutton_choose_mul">
                          
                           <Link to="/createMulti" > Switch to Multiple  <i class="fas fa-plus"></i></Link>

                         </Button>
                       </div>
                     </div>
   
                     <div className="form_section">
                       <div className="input_section mb-3">
                         <label>Category </label>
                         <div>

                         <Dropdown
                        options={options}
                        onChange={(o)=> onSelect(o)}
                        value="Art"
                        placeholder="NFT Types"
                      />
                           {/* <select>
                             <option>Art</option>
                             <option>Audio</option>
   
                             <option>Video</option>
                           </select> */}
                         </div>
                       </div>
                       <div className="input_section mb-3">
                         <p className="headein">Upload NFT</p>
                         <label>Drag or choose your file to upload</label>
   
                         <div className="upload_files">
                         <input type="file" className="file" onChange={(e) => validate_file(e.target.files[0])}  />
                         
                           <div className="upload_content">
                             <i class="fas fa-upload"></i>
                             <p>JPG, JPEG, PNG, GIF, WEBP, MP4 or MP3. MAX 1GB</p>
                           </div>
                         </div>
                         
                       </div>
                       {fileError && <p className= "text-danger"> NFT is required </p>}
                       {
                         coverImageCeck == true && 
                     

                       <div className="input_section mb-3">
                         <p className="headein">Upload Cover Image</p>
                         <label>Drag or choose your file to upload</label>
   
                         <div className="upload_files">
                           <input type="file" className="file"  onChange={(e) => imageUpload(e.target.files[0])}   />
                           <div className="upload_content">
                             <i class="fas fa-upload"></i>
                             <p>PNG,JPEG,JPG,SVG. MAX 1GB</p>
                           </div>
                         </div>
                         {/* {fileError && <span className="validationError"> NFT is required </span>} */}
                       </div>
                        }


                       <div className="input_section mb-3">
                         <p className="headein">Item Details</p>
                         <label>Item Name</label>
                         <div>
                           <input
                             type="text"
                             placeholder="Enter NFT Name"
                             className="text" required="required"  onChange={(e) => nftNames(e.target.value)}
                           />
   
                         </div>
                       </div>
                       {nftError && <p className= "text-danger"> Name is required </p>}

                       <div className="input_section mb-3">
                         <label>Description</label>
                         <div>
                           <input
                             type="text"
                             placeholder="Enter Description"
                             className="text" onChange={(e) => Description(e.target.value)}
                           />
                           
                         </div>
                       </div>
                       {descriptionError && <p className= "text-danger"> Description is required </p>}
                       <div className="row">
                         <div className="col-lg-4">
                           <div className="input_section mb-3">
                             <label>Royalties</label>
                             <div>
                             <input
                             type="number"
                             placeholder="Enter royality"
                             className="text" onChange={(e) => Royalty(e.target.value)}
                           />
                             </div>
                           </div>
                         </div>
                         {/* <div className="col-lg-4">
                           <div className="input_section mb-3">
                             <label>Price</label>
                             <div>
                               <input
                                 type="number"
                                 placeholder="e.g Size"
                                 className="text w-100"  name="price"  placeholder="Enter Price"  required="required"  onChange={(e) => nftPrices(e.target.value)}
                               />
                                  {nftpriceError && <span className="validationError"> Price is required </span>}
   
                             </div>
                           </div>
                         </div> */}
                       </div>
                       {royaltyError && <p className= "text-danger"> Royalty is required </p>}
                       {/* <div className="put_on_sale mt-3">
                         <div>
                           <p>Put on sale</p>
                           <span className="currr">
                             You'll recieve bid on this item
                           </span>
                         </div>
                         <div>
                           <Switch
                             checked={state.checkedB}
                             onChange={handleChange}
                             color="primary"
                             name="checkedB"
                             inputProps={{"aria-label": "primary checkbox"}}
                           />
                         </div>
                       </div> */}
                       <div className="input_section mb-3">
                         <label>Select Network</label>
                         <div>

                         <Dropdown
                        options={network_options}
                        onChange={(o)=> onSelectnetwork(o)}
                        value={networkcurrent}
                        placeholder="Network"
                      />
                         </div>
                       </div>
   
                       <div className="crate_btn">
                         {
                           loginCheck == true ? 
                           <Button className="p-button" onClick = {() => onFormSubmit()}>
                           Create Mint <i class="fas fa-arrow-right"></i>
                         </Button>
                         :

                         <Button className="p-button">
                          Connect Wallet <i class="fas fa-arrow-right"></i>
                         </Button>

                         }
                      

                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="col-lg-4 create_single_cardd">
                   <div className="refernc_cad">
                     <div className="imge_with_1">
                       <div className="imge_with_2">
                         {/* <img alt="" src={selectoption} /> */}
                            {
                                coverImage == "" ? <img alt="" src={selectoption} /> : <img alt="" src={coverImages} />
                            }                         
                       </div>
                     </div>
                     {/* <div className="bottom_content">
                       <div className="titirle_ss">
                         <p>Amazing Art</p>
                         <span className="label_card">{} ETH</span>
                       </div>
                       <div className="profile_namess">
                         <div className="inner_contenyteee">
                           <img alt="" src={selectoption} />
                           <h6>E Cole.</h6>
                         </div>
                         <h5>3 mints left</h5>
                       </div>
                       <div className="final_price">
                         <p>
                           <span>0.03 ETH</span>405
                         </p>
                       </div>
                     </div> */}
                   </div>
                 </div>
               </div>
             </div>
           </section>
        }


    

        <Footer />
      </div>
    </ScrollingProvider>
  );
}

export default Home;
