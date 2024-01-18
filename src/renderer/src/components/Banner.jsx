import React, { useState } from 'react'
// import banner from '../assets/images/first-banner.webp'
// import banner1 from '../assets/images/banner.webp'
// import banner2 from '../assets/images/abc.jpg'

import '../App.css'
import Carousal from './Carousal'
const slider =[
//   banner,
//   banner1,
//   banner2
]


const FirstBanner = () => {
    
  return (
        
        // <div className='lg:w-[800px] md:w-[800px]  w-[500px] h-screen p-10   z-40 fixed '>
        //   <div className=''>
        //     <div id='banner' className="  h-[500px] mt-10 flex justify-center items-center ">
        //     <img src={banner2} className='' alt="" />
        //     </div>
        //   </div> 
          
        // </div>
        <div>
          <div className='max-w-lg'>
          <Carousal autoSlide={true} autoSlideInterwel={1000}>
            {/* {slider.map((s,i)=>((
             (i == slider.length-1)?
                <img src={s}/>:false
            )
            ))} */}
          </Carousal>

            
          </div>
        </div>
  )
}

export default FirstBanner