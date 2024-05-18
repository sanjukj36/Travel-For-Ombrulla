import React from 'react'
import destination from "../assets/Services/destination 1.png"
import booking from "../assets/Services/booking 2.png"
import cloudy from "../assets/Services/cloudy 3.png"



function Services() {
    return (
        <div className='flex service-Body justify-between my-20'>
            <div className='m-20' >
                <h1 className='text-3xl text-pink-500 font-bold'>SERVICES</h1>
                <p className='text-5xl font-bold mt-2'>Our top value categories for you</p>
            </div>
            <div>
                <div className='flex service-content-container'>
                    <div className='service-content flex flex-col items-center box-border h-56 w-52 p-4 shadow border-gray-50 rounded-t-lg rounded-b-lg m-4 hover:bg-indigo-600 hover:text-zinc-100 duration-500'>
                        <img className='object-center w-' src={destination} alt="" />
                        <h1 className='mt-5 font-bold'>Best Tour Guide</h1>
                        <p className='mt-5 text-zinc-800'>What looked like a small patch of purple grass, above five feet</p>
                    </div>
                    <div className='service-content flex flex-col items-center box-border h-56 w-52 p-4 shadow border-gray-50 rounded-t-lg rounded-b-lg m-4 hover:bg-indigo-600 hover:text-zinc-100 duration-500'>
                        <img className='object-center w-' src={booking} alt="" />
                        <h1 className='mt-5 font-bold'>Easy Booking</h1>
                        <p className='mt-5 text-zinc-800'>Square,was moving across the sand in their direction.</p>
                    </div>
                    <div className='service-content flex flex-col items-center box-border h-56 w-52 p-4 shadow border-gray-50 rounded-t-lg rounded-b-lg m-4 hover:bg-indigo-600 hover:text-zinc-100 duration-500'>
                        <img className='object-center w-' src={cloudy} alt="" />
                        <h1 className='mt-5 font-bold'>Weather Forecast</h1>
                        <p className='mt-5  text-zinc-800'>What looked like a small patch of purple grass, above five feet</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Services
