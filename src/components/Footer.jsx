import React, { useState } from 'react'
import logo from "../assets/Logo.png";

import facebook from "../assets/Footer/facebook.png";
import twitter from "../assets/Footer/twitter.png";
import instagram from "../assets/Footer/instagram.png";


function Footer() {

    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Discover', link: '/' },
        { name: 'Special Deals', link: '/' },
        { name: 'Contact', link: '/' }
    ];


    const [company, setCompany] = useState(false); 
    const [contact, setContact] = useState(false); 
    const [meet, setMeet] = useState(false); 



    return (
        <div id='contact' class="flex flex-col md:flex-col lg:flex-row">
            <div class="p-5 flex-1">
                <div>
                    <img src={logo} className="w-100" alt="Logo" />
                    <p className='text-gray-900 text-opacity-50 mt-5'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It
                        has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className='flex p-5'>
                        <img src={facebook} alt="" />
                        <img className="ms-5" src={twitter} alt="" />
                        <img className='ms-5' src={instagram} alt="" />


                    </div>
                </div>
            </div>
            <div class="p-4 hidden lg:block flex-1">

                <div className='flex justify-between'>
                    <ul className='text-center '>
                        <li className='head-title font-bold mb-5'> Company</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>About</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Career</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Mobile</li>
                    </ul>
                    <ul className='text-center ms-10'>
                        <li className='head-title font-bold mb-5'> Contact</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Why travlog?</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>partner with us</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>FAQ's</li>
                        <li className='mb-5 text-gray-900 text-opacity-50' >Blog</li>
                    </ul>
                    <ul className='text-center ms-10'>
                        <li className='head-title font-bold mb-5'> Meet Us</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>+00 92 1234 56789</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>info@travlog.com</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>205. R Street, New York <br />BD23200</li>
                    </ul>
                </div>

            </div>
            <div class="p-4 hidden md:block lg:hidden">
                <div className='flex justify-between'>
                    <ul className='text-center '>
                        <li className='head-title font-bold mb-5'> Company</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>About</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Career</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Mobile</li>
                    </ul>
                    <ul className='text-center ms-10'>
                        <li className='head-title font-bold mb-5'> Contact</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>Why travlog?</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>partner with us</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>FAQ's</li>
                        <li className='mb-5 text-gray-900 text-opacity-50' >Blog</li>
                    </ul>
                    <ul className='text-center ms-10'>
                        <li className='head-title font-bold mb-5'> Meet Us</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>+00 92 1234 56789</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>info@travlog.com</li>
                        <li className='mb-5 text-gray-900 text-opacity-50'>205. R Street, New York <br />BD23200</li>
                    </ul>
                </div>
            </div>

            <div class="p-4 hidden sm:block md:hidden">
                <div className='flex justify-between'>
                    <h1 className="font-bold text-2xl">Company</h1>
                    <button className='hover:bg-indigo-600 rounded-full w-10 border border-zinc-950 h-10 ' onClick={() => setCompany(!company)}>
                        <ion-icon name={company ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
                    </button>

                </div>
                <div className={`flex ${company ? "top-20 opacity-100 " : "top[-490px] md:opacity-100 opacity-0"}`}>
                    <ul className={`items-center mb-5 bg-white  w-full duration-500 justify-center`} >
                        <div className={`${company?"block":"hidden"} duration-500`}>
                            <li className='mb-5 mt-5 text-gray-900 text-opacity-50'>About</li>
                            <li className='mb-5 text-gray-900 text-opacity-50'>Career</li>
                            <li className='text-gray-900 text-opacity-50'>Mobile</li>
                        </div>
                    </ul>
                </div>


                <div className='flex justify-between'>
                    <h1 className="font-bold text-2xl">Contact</h1>
                    <button className='hover:bg-indigo-600 rounded-full w-10 border border-zinc-950 h-10' onClick={() => setContact(!contact)}>
                        <ion-icon name={contact ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
                    </button>

                </div>
                <div className={`flex ${contact ? "top-20 opacity-100 " : "top[-490px] md:opacity-100 opacity-0"}`}>
                    <ul className={`items-center mb-5 bg-white  w-full duration-500 justify-center`} >
                        <div className={`${contact ?"block":"hidden"} duration-500`}>
                            <li className='mb-5 mt-5 text-gray-900 text-opacity-50'>Why travlog?</li>
                            <li className='mb-5 text-gray-900 text-opacity-50'>partner with us</li>
                            <li className='mb-5 text-gray-900 text-opacity-50'>FAQ's</li>
                            <li className='text-gray-900 text-opacity-50'>Blog</li>
                        </div>
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <h1 className="font-bold text-2xl">Meet Us</h1>
                    <button className='hover:bg-indigo-600 rounded-full w-10 border border-zinc-950 h-10' onClick={() =>  setMeet(!meet)}>
                        <ion-icon name={meet ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
                    </button>

                </div>
                <div className={`flex ${meet ? "top-20 opacity-100 " : "top[-490px] md:opacity-100 opacity-0"}`}>
                    <ul className={`items-center mb-5 bg-white  w-full duration-500 justify-center`} >
                        <div className={`${meet ?"block":"hidden"} duration-500`}>
                            <li className='mb-5 mt-5 text-gray-900 text-opacity-50'>+00 92 1234 56789</li>
                            <li className='mb-5 text-gray-900 text-opacity-50'>info@travlog.com</li>
                            <li className='text-gray-900 text-opacity-50'>205. R Street, New York <br />BD23200</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
