import React from 'react'
import Sideber from './Sidebar'
import Header from './Header'
import Twitter from '../image/twitter.svg'
import Plane from '../image/plane.svg'
import News from '../image/new_ww.svg'
import NFT from '../image/nft_new.svg'
import games from '../image/games.svg'
import defi from '../image/defi.svg'





import inter from '../image/internet.svg'

import Token1 from '../image/toker1.png'
import { Button ,Link } from '@material-ui/core'

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
                           <h1>View/Manage Whitelisted Wallets</h1>
                        </div> 
                        <div className='admin_tabs'>
                     

                        <div class="tab-content">
                       
                        <div  class="">
                            <div className='foerm_s for_new_po'>
                            <div className='row'>
                            <div className='col-lg-6'>
                            <div className='discount_name'>
                                <p><span>Discount Sale Address :</span><span>0xxxcxxxlkkerere</span></p>
                                <p><span>Token Address:</span><span>0xxc3339993d</span></p>

                            </div>

                                
                            <div className='form-group mb-4 input_height'>
                                    <label>Add Wallet Address to Whitelist:</label>
                                        <div className=' input_flex_clas'>
                                        
                                    <textarea>

                                    </textarea>
                                        </div>
                                        </div>

                              <div className='option_bottom'>

                                  <a href='' className='green_text'><i class="fas fa-plus"></i> Add category</a>
                                  <a href='' className='red_text'><i class="far fa-trash-alt"></i> Remove category</a>
                                  <a href='' className='text_blue'><i class="fas fa-eye"></i>View categories</a>


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
        </div>
    )
}

export default Home
