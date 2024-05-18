import React from 'react'
import logo1 from "../assets/logs/Group1.png";
import logo2 from "../assets/logs/Group 2.png";
import logo3 from "../assets/logs/Group 3.png";
import logo4 from "../assets/logs/Group 4.png";
import logo5 from "../assets/logs/Group 5.png";



function LogoBanner() {
  return (
    <div className='my-10'>
        <div className='flex justify-between md:mx-36 logolist'>
            <img src={logo1} alt="" className='im1'/>
            <img src={logo2} alt=""  className='im1'/>
            <img src={logo3} alt=""  className='im1'/>
            <img src={logo4} alt=""  className='im1'/>
            <img src={logo5} alt=""  className='im1'/>
        </div>
    </div>
  )
}

export default LogoBanner