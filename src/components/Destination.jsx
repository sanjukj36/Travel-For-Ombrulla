import React from 'react'
import Rectangle1 from '../assets/Destination/Rectangle1.png'
import Rectangle2 from '../assets/Destination/Rectangle2.png'
import Rectangle3 from '../assets/Destination/Rectangle3.png'



function Destination() {
    return (
        <>




            <div id='special-Deals' className='mb-10'>
                <div className='m-20 justify-between lg:flex md:flex-row' >
                    <div>
                        <h1 className='text-3xl text-pink-500 font-bold'>TOP DESTINATION</h1>
                        <p className='text-5xl font-bold mt-2'>Explore top destination</p>
                    </div>
                    <div  className='flex md:justify-center justify-between  mt-5 md:mt-10'>
                        <button className='rounded-full  bg-white hover:text-white hover:bg-indigo-800 h-20 w-20 border-solid border-2 border-inherit'><ion-icon className="font-bold" name="arrow-back-outline"></ion-icon></button>
                        <button className='rounded-full bg-indigo-800 text-white hover:text-black hover:bg-white hover:border-solid border-2 border-inherit h-20 w-20 ms-5'><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </div>
                </div>
            </div>

            <div className='md:flex'>
                <div className='md:w-1/3 p-4'>
                    <div className='shadow-2xl rounded-md'>
                        <img width={"500px"} className='img-card' src={Rectangle1} alt='no' />
                        <div className='mt-5'>
                            <div className='flex justify-between items-center px-5'>
                                <h3 className='text-xl font-bold'>Paradise Beach,<br />Bantayan Island</h3>
                                <h3 className='text-xl font-bold text-pink-500'>$550.16</h3>
                            </div>
                            <p className='px-5 mt-5'>Rome, Italy</p>
                            <p className='px-6 text-orange-600 flex items-center'>
                                4.8 <ion-icon name="star-outline"></ion-icon>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 p-4'>
                    <div className='shadow-2xl rounded-md'>
                        <img width={"500px"} className='img-card' src={Rectangle2} alt='no' />
                        <div className='mt-5'>
                            <div className='flex justify-between items-center px-5'>
                                <h3 className='text-xl font-bold'>Paradise Beach,<br />Bantayan Island</h3>
                                <h3 className='text-xl font-bold text-pink-500'>$550.16</h3>
                            </div>
                            <p className='px-5 mt-5'>Rome, Italy</p>
                            <p className='px-6 text-orange-600 flex items-center'>
                                4.8 <ion-icon name="star-outline"></ion-icon>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 p-4'>
                    <div className='shadow-2xl rounded-md'>
                        <img width={"500px"} className='img-card' src={Rectangle3} alt='no' />
                        <div className='mt-5'>
                            <div className='flex justify-between items-center px-5'>
                                <h3 className='text-xl font-bold'>Paradise Beach,<br />Bantayan Island</h3>
                                <h3 className='text-xl font-bold text-pink-500'>$550.16</h3>
                            </div>
                            <p className='px-5 mt-5'>Rome, Italy</p>
                            <p className='px-6 text-orange-600 flex items-center'>
                                4.8 <ion-icon name="star-outline"></ion-icon>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Destination
