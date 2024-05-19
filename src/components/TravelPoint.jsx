import React from 'react'
import mainImg from '../assets/Travel-Point-leftSide.png'


function TravelPoint() {
    return (
        <section id='discover' className='flex flex-col lg:flex-row my-20 bg-mg background-image-containere'>
            <div className=''>
                <img className='w-320 lazyload' src={mainImg} alt="" loading="lazy"/>
            </div>
            <div className='m-20' >
                <h1 className='text-3xl text-pink-500 font-bold'>TRAVEL POINT</h1>
                <p className='text-5xl font-bold mt-2'>We helping you find your dream location</p>
                <p className='text-lg text-gray-900 text-opacity-50 my-5'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    roots in a piece of classical Latin literature from 45 BC.</p>

                <div class="flex flex-col lg:flex-row">
                    <div class="p-4  lg:w-1/2">
                        <div className='ms-5 px-5 py-5 flex-col justify-center place-items-center border border-solid border-gray-900 border-opacity-10 rounded-[32px] text-orange-600'>
                            <h1 className='text-4xl font-bold'>500+</h1>
                            <p className='text-lg text-gray-900'>Holiday Package</p>
                        </div>
                        <div className='ms-5 mt-5 px-5 py-5 flex-col justify-center place-items-center border border-solid border-gray-900 border-opacity-10 rounded-[32px] text-orange-600'>
                            <h1 className='text-4xl font-bold'>7</h1>
                            <p className='text-lg text-gray-900'>Premium Airlines</p>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                    <div className='ms-5 px-5 py-5 flex-col justify-center place-items-center border border-solid border-gray-900 border-opacity-10 rounded-[32px] text-orange-600'>
                            <h1 className='text-4xl font-bold'>100</h1>
                            <p className='text-lg text-gray-900'>Luxury Hotel</p>
                        </div>
                        <div className='ms-5 mt-5 px-5 py-5 flex-col justify-center place-items-center border border-solid border-gray-900 border-opacity-10 rounded-[32px] text-orange-600'>
                            <h1 className='text-4xl font-bold'>2k+</h1>
                            <p className='text-lg text-gray-900'>Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default TravelPoint
