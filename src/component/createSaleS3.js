import React, {useState} from 'react'
import Sideber from './Sidebar'
import Header from './Header'
import Twitter from '../image/twitter.svg'
import Plane from '../image/plane.svg'
import News from '../image/new_ww.svg'
import NFT from '../image/nft_new.svg'
import games from '../image/games.svg'
import defi from '../image/defi.svg'


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";




import inter from '../image/internet.svg'

import Token1 from '../image/toker1.png'
import { Button ,Link } from '@material-ui/core'


import Select from 'react-select'




const options = [
    { value: 'Promotion', label: 'Promotion' },
    { value: 'Promotion', label: 'Promotion' },
    { value: 'Promotion', label: 'Promotion' }
  ]




function Home() {

    
const [startDate, setStartDate] = useState(new Date());



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
                    <h1>Create sale</h1>
                    </div> 
                     {/* step 1 */}

                     <div>
                     <div className='row'>
                           <div className='col-lg-7'>
                                <div className='steps-create mb-4 mt-3'>
                                    <span className='active'>Step 1</span>
                                    <span className='active'>Step 2</span>
                                    <span className='active'>Step 3</span>

                                </div> 
                               


                                <div className='for_new_po'>
                                    <div className='form-group mb-4'>
                                    <label>Telegram</label>
                                        <div className=' input_flex_clas'>
                                        <input placeholder='Exampe: 0x4c11249814f11b9346808179cf06e71ac328c1b5' /> 
                                   
                                        </div>
                                        </div>
                                        <div className='form-group mb-4'>
                                    <label>Twitter</label>
                                        <div className=' input_flex_clas'>
                                        <input placeholder='Exampe: FlyToken' /> 
                                   
                                        </div>
                                        </div>
                                        <div className='form-group mb-4'>
                                    <label>Website</label>
                                        <div className=' input_flex_clas'>
                                        <input placeholder='Exampe:  FLY' /> 
                                   
                                        </div>
                                        </div>
                                        
                                        
                                        <div className='form-group mb-4'>
                                        {/* <Select options={options} /> */}
                                        <select>
                                            <option>
                                                Default Sorting
                                            </option>
                                        </select>
                                        </div>

                                        <div className='view_btn'>
                                        <Button className='button_primery'>Next</Button>
                                        </div>
                                </div>



                            </div> 
                            <div className='col-lg-5'>
                                <div className='note_section'>
                                    <h3>Here we can place rules</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                                <div className='note_section'>
                                    <h3>Or recomendations</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                                <div className='note_section'>
                                    <h3>Or anything else</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
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
