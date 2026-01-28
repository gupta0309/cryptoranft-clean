



import React, { useEffect } from "react";
import useState from "react-usestateref";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import Pagination from "react-js-pagination";

import Sidebar from "./Sidebar";
import Header from "./Headerafterlogin";
import Listmenusec from "./Innernenu";

// import "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d09rKGN6TOS6uuowoImBDKgAoKqf2b1Jug&s" from "../image/newimg/geomatry.png";
import commentVerifyImg from "../image/newimg/uil_comment-verify.png";
import maticImage from "../image/newimg/icon_1.png";
import ethImage from "../image/newimg/eth.png";

/* ---------------- Countdown Renderer ---------------- */
const Completionist = () => <span />;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) return <Completionist />;

  return (
    <div className="timer-sect">
      <span>{days}d</span> :
      <span>{hours}h</span> :
      <span>{minutes}m</span> :
      <span>{seconds}s</span>
    </div>
  );
};

/* ---------------- Component ---------------- */
function ActiveBids() {
  const navigate = useNavigate();

  const [nfts, setNfts, nftsRef] = useState([]);
  const [likedNfts, setLikedNfts, likedNftsRef] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 12;
  const pageRange = 3;

  /* ---------------- Load Dummy Data ---------------- */
  useEffect(() => {
    loadDummyNFTs();
  }, []);

  const loadDummyNFTs = () => {
    const dummy = [
      {
        _id: "1",
        Name: "Neon Geometry",
        cloudUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d09rKGN6TOS6uuowoImBDKgAoKqf2b1Jug&s",
        txHash: "0x111",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.45",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 86400000).toISOString(),
        BidTime: 86400,
        likes: [{}, {}],
        user_id: { username: "GeoLabs", kycstatus: 1 },
      },
      {
        _id: "2",
        Name: "Cyber Samurai",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzYlyopGZm6_0gjdWAZjTqhK72BTuSTzRLQ&s",
        txHash: "0x222",
        network: "Polygon",
        onSale: 1,
        Price: "1.25",
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.80",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 43200000).toISOString(),
        BidTime: 43200,
        likes: [{}],
        user_id: { username: "NeoTokyo", kycstatus: 1 },
      },
      {
        _id: "3",
        Name: "Meta Skull X",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XRDKLaLD7MIzsJ2ZxFdEjn2_u64BJ7FvXA&s",
        txHash: "0x333",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.62",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 21600000).toISOString(),
        BidTime: 21600,
        likes: [],
        user_id: { username: "MetaVerse", kycstatus: 1 },
      },
        {
        _id: "1",
        Name: "Neon Geometry",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d09rKGN6TOS6uuowoImBDKgAoKqf2b1Jug&s",
        txHash: "0x111",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.45",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 86400000).toISOString(),
        BidTime: 86400,
        likes: [{}, {}],
        user_id: { username: "GeoLabs", kycstatus: 1 },
      },
      {
        _id: "2",
        Name: "Cyber Samurai",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzYlyopGZm6_0gjdWAZjTqhK72BTuSTzRLQ&s",
        txHash: "0x222",
        network: "Polygon",
        onSale: 1,
        Price: "1.25",
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.80",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 43200000).toISOString(),
        BidTime: 43200,
        likes: [{}],
        user_id: { username: "NeoTokyo", kycstatus: 1 },
      },
      {
        _id: "3",
        Name: "Meta Skull X",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XRDKLaLD7MIzsJ2ZxFdEjn2_u64BJ7FvXA&s",
        txHash: "0x333",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.62",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 21600000).toISOString(),
        BidTime: 21600,
        likes: [],
        user_id: { username: "MetaVerse", kycstatus: 1 },
      },
        {
        _id: "1",
        Name: "Neon Geometry",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d09rKGN6TOS6uuowoImBDKgAoKqf2b1Jug&s",
        txHash: "0x111",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.45",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 86400000).toISOString(),
        BidTime: 86400,
        likes: [{}, {}],
        user_id: { username: "GeoLabs", kycstatus: 1 },
      },
      {
        _id: "2",
        Name: "Cyber Samurai",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzYlyopGZm6_0gjdWAZjTqhK72BTuSTzRLQ&s",
        txHash: "0x222",
        network: "Polygon",
        onSale: 1,
        Price: "1.25",
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.80",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 43200000).toISOString(),
        BidTime: 43200,
        likes: [{}],
        user_id: { username: "NeoTokyo", kycstatus: 1 },
      },
      {
        _id: "3",
        Name: "Meta Skull X",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XRDKLaLD7MIzsJ2ZxFdEjn2_u64BJ7FvXA&s",
        txHash: "0x333",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.62",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 21600000).toISOString(),
        BidTime: 21600,
        likes: [],
        user_id: { username: "MetaVerse", kycstatus: 1 },
      },
        {
        _id: "1",
        Name: "Neon Geometry",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d09rKGN6TOS6uuowoImBDKgAoKqf2b1Jug&s",
        txHash: "0x111",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.45",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 86400000).toISOString(),
        BidTime: 86400,
        likes: [{}, {}],
        user_id: { username: "GeoLabs", kycstatus: 1 },
      },
      {
        _id: "2",
        Name: "Cyber Samurai",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzYlyopGZm6_0gjdWAZjTqhK72BTuSTzRLQ&s",
        txHash: "0x222",
        network: "Polygon",
        onSale: 1,
        Price: "1.25",
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.80",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 43200000).toISOString(),
        BidTime: 43200,
        likes: [{}],
        user_id: { username: "NeoTokyo", kycstatus: 1 },
      },
      {
        _id: "3",
        Name: "Meta Skull X",
        cloudUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XRDKLaLD7MIzsJ2ZxFdEjn2_u64BJ7FvXA&s",
        txHash: "0x333",
        network: "Ethereum",
        onSale: 0,
        onAuction: 1,
        auction_type: "timed",
        Bidprice: "0.62",
        Bidstartdate: new Date().toISOString(),
        Bidenddate: new Date(Date.now() + 21600000).toISOString(),
        BidTime: 21600,
        likes: [],
        user_id: { username: "MetaVerse", kycstatus: 1 },
      },
    ];

    setNfts(dummy);
    setLikedNfts(["1"]);
  };

  /* ---------------- Helpers ---------------- */
  const formatDate = (date) => new Date(date).getTime();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const favorite = (id) => {
    if (likedNftsRef.current.includes(id)) {
      setLikedNfts(likedNftsRef.current.filter((x) => x !== id));
    } else {
      setLikedNfts([...likedNftsRef.current, id]);
    }
  };

  /* ---------------- JSX ---------------- */
  return (
    <div id="wrapper" className="d-flex">
      <div className="border-end bg-white collapse navbar-collapse" id="sidebar-wrapper">
        <Sidebar />
      </div>

      <div id="page-content-wrapper">
        <Header />

        <div className="container">
          <div className="home_header latest_header">
            <h1>Active Bids</h1>
            <Listmenusec />
          </div>

          <div className="row">
            {nftsRef.current.length === 0 && (
              <p className="text-center">No Active Bids Found</p>
            )}

            {nftsRef.current.map((item) => (
              <div key={item._id} className="col-xl-2 col-lg-3 col-md-4 col-6">
                <div className="card-Trending">
                  <div className="positionreel">
                    <div className="countown">
                      <Countdown
                        date={formatDate(item.Bidenddate)}
                        renderer={renderer}
                      />
                    </div>

                    <div
                      className="imgconyeea"
                      onClick={() =>
                        navigate(`/NFTDetails/${item.txHash}/${item.network}`)
                      }
                    >
                      <img src={item.cloudUrl} alt={item.Name} />
                    </div>

                    <div className="byebtn">
                      <button>Place Bid</button>
                    </div>
                  </div>

                  <p>
                    <span className="name_item">
                      {item.user_id.username}
                      <img src={commentVerifyImg} alt="verified" />
                    </span>
                    <span className="liks">{item.likes.length} Likes</span>
                  </p>

                  <h5>{item.Name}</h5>

                  <div className="currencyc">
                    <small>Current Bid</small>
                    <span>
                      <img
                        src={item.network === "Polygon" ? maticImage : ethImage}
                        alt=""
                      />
                      {item.Bidprice}
                    </span>
                  </div>

                  <div className="like-share">
                    <i
                      className={
                        likedNftsRef.current.includes(item._id)
                          ? "bi bi-suit-heart-fill"
                          : "bi bi-suit-heart"
                      }
                      onClick={() => favorite(item._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={currentPage}
            itemsCountPerPage={recordPerPage}
            totalItemsCount={nfts.length}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ActiveBids;
