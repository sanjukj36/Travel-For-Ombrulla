import React from 'react'
import logo1 from "../assets/LogoBanner/Group1.png";
import logo2 from "../assets/LogoBanner/Group 2.png";
import logo3 from "../assets/LogoBanner/Group 3.png";
import logo4 from "../assets/LogoBanner/Group 4.png";
import logo5 from "../assets/LogoBanner/Group 5.png";



function LogoBanner() {
  return (
    <section className='my-10'>
        <div className='flex justify-between md:mx-36 logolist'>
            <img src={logo1} alt="" className='lazyload hover:bg-indigo-600' loading="lazy"/>
            <img src={logo2} alt=""  className='im1 lazyload' loading="lazy"/>
            <img src={logo3} alt=""  className='im1 lazyload' loading="lazy"/>
            <img src={logo4} alt=""  className='im1 lazyload' loading="lazy"/>
            <img src={logo5} alt=""  className='im1 lazyload' loading="lazy"/>
        </div>
    </section>
  )
}

export default LogoBanner