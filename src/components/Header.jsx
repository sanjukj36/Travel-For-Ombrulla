import React from 'react'
import Nav from './Nav'
import headerRightSide from "../assets/headeRightSide.png"
import bag from "../assets/bag.png"
import playCircle from "../assets/play-circle.png"





function Header() {
    return (
        <>
            <Nav />
            <div className='container mt-6 py-5 '>
                <div class="flex justify-between landing">
                    <div class="flex ord1">
                        <header className='HeaderContent  mt-64'>
                            <div className="bag flex gap-4 px-8 py-4 text-sm font-bold text-pink-500 bg-white shadow-xl rounded-[100px] ml-10">
                                <p className="my-auto">Explore the world!</p>
                                <img src={bag} className="lazyload shrink-0 w-6 aspect-square" loading="lazy" />
                            </div>
                            <div className='hw'>
                                <h1 className='text-7xl font-bold mt-10 ml-10 box-decoration-clone' >Travel <span className='text-pink-500 text-7xl font-bold'>top destination</span> of the world</h1>
                            </div>
                            <div className='my-10 ml-10 text-lg text-gray-900 text-opacity-50'>
                                <p>We always make our customer happy by providing  as many choices</p>
                            </div>
                            <div className="flex absolute lg:flex lg:relative">
                                <button className="mr-5 ms-20 justify-center px-8 py-4 bg-indigo-600 rounded-[100px] text-zinc-100 hover:bg-transparent hover:text-gray-800 max-md:px-5 duration-500">Get Started</button>
                                <button className="flex justify-center px-8 py-4 text-gray-800 bg-transparent hover:bg-indigo-600 hover:text-zinc-100 rounded-[100px] max-md:px-5 duration-500"><img className='m-1 lazyload' src={playCircle} alt=""  loading="lazy"/> Watch Demo</button>
                            </div>

                        </header>
                    </div>

                    

                        <img src={headerRightSide} className="lazyload w-full right-0 mx-auto mt-16 ord2"  loading="lazy"/>

                    

                </div>

            </div>
        </>
    )
}

export default Header