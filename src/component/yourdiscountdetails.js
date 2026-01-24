import React from 'react'
import Sideber from './Sidebar'
import Header from './Header'
import Twitter from '../image/twitter.svg'
import Plane from '../image/plane.svg'
import News from '../image/new_ww.svg'
import NFT from '../image/nft_new.svg'
import games from '../image/games.svg'
import defi from '../image/defi.svg'
import Countdown from 'react-countdown'





import inter from '../image/internet.svg'

import Token1 from '../image/toker1.png'
import { Button } from '@material-ui/core'

import {Link} from "react-router-dom";
// Random component
const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='timer-sect'>
          <span>{hours}</span> :
          <span>{minutes}</span> :

          <span>{seconds}</span>

      
      </div>
    );
  }
};

function Home() {
    return (
        <div>
        <div  id="wrapper" className='d-flex'>
        {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
        <div className='border-end bg-white collapse navbar-collapse ' id="sidebar-wrapper">

         <Sideber />
        </div>
        <div id="page-content-wrapper">
           <Header />

           <div>
               <div>
                   <div className='container'>
                       <div className='home_header'>
                           <h1>Your Disount Sale </h1>
                        </div> 
                        <div className='admin_tabs'>
                     

                        <div class="tab-content p-0 h-auto">
                           <div className='details_header_'>
                               <div>
                                <img src={Token1} alt='' />
                               </div>
                               <div className='token_name_s'>
                                    <h3>GHT</h3>
                                    <p>GunHunter</p>
                               </div>
                               <div className='token_details'>
                                <h4>Discount - <span>30%</span></h4>
                                <p>Status: <span className='text_green'>LIVE</span></p>
                               </div>
                            </div>  
                            <div className='row'>
                                <div className='col-lg-6'>
                                <div className='admin_header_details'>
                            <div className='button_section'>
                                <Button><Link to=''><img src={Twitter} alt='' />Twitter</Link></Button>
                                <Button><Link to=''><img src={Plane} alt='' />Telegram</Link></Button>

                                <Button><Link to=''><img src={inter} alt='' />Website</Link></Button>

                            </div>
                            <div className='content'>
                            <p>GHT mission is simple: to be the leading fantasy NFT PvP and P2E gaming ecosystem on the Solana blockchain. We built our game around adorable SolChick NFT collectibles, where players use their SolChicks as their characters in a unique gaming metaverse.</p>
                            </div>
                                            <div className='additional_content'>
                                             <p className='whilist_p'>Whitelist Enabled: <span className='active'>YES</span><span >NO</span></p>   
                                            <Link to='' ><i class="far fa-eye"></i> View/Manage Whitelist</Link>
                                            </div>

                                        <div className='view_btn'>
                                        <Button className='button_primery'>CONTRIBUTE</Button>
                                        </div>
                                        <div className='view_btn'>
                                        <Button className='button_primery red'>Cancel Discount Sale</Button>
                                        </div>
                                        <div className='view_btn'>
                                        <Button className='button_primery burn'>Burn Tokens</Button>
                                        </div>
                                        <div className='statics'>
                                            <h6>Statistics</h6>
                                        <div className='discount_name'>

                                <p><span>Sold Tokens:</span><span className='color-black'>500,000</span></p>
                                <p><span>Balance Tokens left in contract:</span><span className='color-black'>5,000</span></p>
                                <p><span>Total Amount Raised:</span><span className='color-black'>20 BNB</span></p>
                                <p><span>Total Amount Used to Buy Back:</span><span className='color-black'>18 BNB</span></p>
                               






                            </div>
                                        </div>

                                    
                            </div> 
                                </div>
                                <div className='col-lg-6'>
                                <div className='admin_header_details'>
                                <div className='discount_name'>
                                <p><span>Discount Sale Address :</span><span>0xxxcxxxlkkerere</span></p>
                                <p><span>Token Address:</span><span>0xxc3339993d</span></p>
                                <p><span>Number of Tokens Allocated For Discount:</span><span className='color-black'>10,000,000</span></p>
                                <p><span>Number of Tokens Sold:</span><span className='color-black'>5,000,000</span></p>
                                <p><span>Number of Tokens Available:</span><span className='color-black'>5,000,000</span></p>
                                <p><span>Start Date:</span><span className='color-black'>15-11-2021  9:00 PM</span></p>
                                <p><span>End Date:</span><span className='color-black'>16-11-2021  9:00 PM</span></p>

                                <p><span>Burn Enabled:</span><span className='color-black'>YES</span></p>
                                <p><span>Manual Buy Back Enabled:</span><span className='color-black'>YES</span></p>

                                <p><span>Pancakeswap BuyBack %:</span><span className='color-black'>10%</span></p>
                                <p><span>Wallet Adress of Discount Created:</span><span >0xxxxxxxxx</span></p>

                                <p><span>Minimum Tokens to Buy:</span><span className='color-black'>20,000</span></p>
                                <p><span>Maximum Tokens to Buy:</span><span className='color-black'>500,000</span></p>






                            </div>
                            </div> 
                                </div>
                            </div>  
                   
                        
                        </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Home
