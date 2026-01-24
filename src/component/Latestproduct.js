import React from 'react'
import Sideber from './Sidebar'
import Header from './Header'
import Twitter from '../image/twitter.svg'
import Plane from '../image/plane.svg'
import News from '../image/new_ww.svg'
import NFT from '../image/nft_new.svg'
import games from '../image/games.svg'
import defi from '../image/defi.svg'
import {Link} from "react-router-dom";





import inter from '../image/internet.svg'

import Token1 from '../image/toker1.png'
import { Button } from '@material-ui/core'

import Select from 'react-select'



const options = [
    { value: 'Defaultsorting', label: 'Default sorting' },
    { value: 'Defaultsorting', label: 'Default sorting' },
    { value: 'Defaultsorting', label: 'Default sorting' }
  ]



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
                       <div className='home_header latest_header'>
                           <h1>Latest Sales</h1>
                           <div className='menu_sec'>
                           <div className='view_btn'>
                               {/* <a href='createsale'> */}
                               <Link to="/createsale">
                               <Button className='button_primery'>CREATE SALE</Button>
                               </Link>
                               {/* </a> */}
                               
                             </div>
                             <a href=''><i class="fas fa-th-large"></i></a>
                             <a href=''><i class="fas fa-list"></i></a>
                             {/* <Select options={options} /> */}
                             <div>
                                 <select>
                                     <option>Default sorting</option>
                                 </select>
                             </div>
                           
                           </div>
                        </div> 

                     





                        <div className="product_section_">
                            <div className='row'>
                                <div className='col-md-12 col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Promoted ✨</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "25%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-md-12  col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                    <p>Best Seller 👍</p>
                                    <div className='dicount_label'>
                                        10%
                                    </div>

                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "55%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-md-12 col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Popular 🔥</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-md-12 col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Popular 🔥</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "95%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-md-12 col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Popular 🔥</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "15%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-md-12 col-lg-4'>
                                <div className='card'>
                                    <div className='label_section'>
                                        <p>Popular 🔥</p>
                                    </div>
                                    <div className='prodect_primer_info'>
                                        <div>
                                            <img src={Token1} alt='' className='img-fluid' />
                                        </div>
                                        <div>
                                            <h4>KOD</h4>
                                            <p>KodyToken</p>
                                        </div>
                                    </div>
                                    <div className='token_status'>
                                        <div className='tokaen_data'>
                                                <p>Status:</p>
                                                <span className='text-green'>LIVE</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale starts:</p>
                                                <span className=''>20 Nov - 19:00 PM</span>
                                        </div>
                                        <div className='tokaen_data'>
                                                <p>Sale ends:</p>
                                                <span className=''>24 Nov - 19:00 PM</span>
                                        </div>
                                    </div>

                                    <div className='bar_sewction'>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "5%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='already_sold_section'>
                                        <p>Already sold: <span>20%</span></p>
                                    </div>

                                    <div className='card_footer'>
                                        <div className='social_i'>
                                        <a href=''>
                                            <img src={Twitter} alt='' className='img-fluid'/>
                                        </a>
                                        <a href=''>
                                            <img src={Plane} alt='' className='img-fluid' />
                                        </a>
                                        <a href=''>
                                            <img src={inter} alt='' className='img-fluid' />
                                        </a>
                                        </div>
                                        <div className='view_btn'>
                                            <Button className='button_primery'>
                                            <Link to="/details">View</Link>
                                            </Button>
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
