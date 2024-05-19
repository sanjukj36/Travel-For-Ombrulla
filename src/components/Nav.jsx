import React, { useContext, useState } from 'react';
import logo from "../assets/Logo.png";
import { NavContext } from '../contexts/NavContext';

function Nav() {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Discover', link: '#discover' },
        { name: 'Special Deals', link: '#special-Deals' },
        { name: 'Contact', link: '#contact' }
    ];

    // const [open, setOpen] = useState(false); 
    const {open, setOpen} = useContext(NavContext);
    return (
        <nav role="navigation" className='shadow-m w-full fixed top-0 left-0'>
            <div id='navBar' className='md:flex item-center justify-between bg-transparent py-4 md:px-10 px-7'>
                <div>
                    <img src={logo}  className="lazyload shrink-0 self-start w-100 aspect-[1.03] fill-[linear-gradient(281deg,#5D50C6_7.11%,#F85E9F_93.54%)]" alt="Logo" loading="lazy" />
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>
                <div className={`flex ${open ? "top-20 opacity-100 " : "top[-490px] md:opacity-100 opacity-0"}`}>
                    <ul style={{ marginRight: "200px" }} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z- [-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in justify-center`} >
                        {Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex absolute right-8 lg:flex lg:relative">
                        <button className="justify-center px-8 py-4 text-gray-800 bg-transparent hover:bg-indigo-600  hover:text-zinc-100 rounded-[100px] max-md:px-5 duration-500">Log In</button>
                        <button className="justify-center px-8 py-4 bg-indigo-600 rounded-[100px] text-zinc-100  hover:bg-transparent hover:text-gray-800 max-md:px-5 duration-500">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;
