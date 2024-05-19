import React from 'react'
import feature1 from "../assets/KeyFeatures/feature1.png"
import feature2 from "../assets/KeyFeatures/feature2.png"
import feature3 from "../assets/KeyFeatures/feature3.png"
import mainImg from "../assets/KeyFeatures/Key-feature-mainImg.png"



function KeyFeatures() {
    return (
        <section id='special-Deals' class="flex flex-col-reverse md:flex-row">
            <div class="flex-1 p-4">
                <div className='m-20' >
                    <h1 className='text-3xl text-pink-500 font-bold'>KEY FEATURES</h1>
                    <p className='text-5xl font-bold mt-2'>We offer best services</p>
                    <p className='text-lg text-gray-900 text-opacity-50 my-5'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div class="flex flex-col ">
                        <div class="flex flex-col md:flex-row p-4 shadow-2xl  border border-solid border-gray-900 border-opacity-10 rounded-[32px] mb-5 hover:p-5  hover:bg-indigo-600 hover:text-zinc-100 duration-500">
                            <div className='flex '><img className='lazyload' src={feature1} alt="" loading="lazy"/></div>
                            <div className='flex-1  flex-col ms-2 '>
                                <h1 className='mt-5 font-bold'>Best Tour Guide</h1>
                                <p className='mt-5 text-zinc-800'>What looked like a small patch of purple grass, above five feet</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row p-4 shadow-2xl  border border-solid border-gray-900 border-opacity-10 rounded-[32px] mb-5 hover:p-5 hover:bg-indigo-600 hover:text-zinc-100 duration-500">
                            <div className='flex '><img className='lazyload' src={feature2} alt="" loading="lazy"/></div>
                            <div className='flex-1  flex-col ms-2 '>
                                <h1 className='mt-5 font-bold'>Schedule your trip</h1>
                                <p className='mt-5 text-zinc-800'>It has roots in a piece of classical</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row p-4 shadow-2xl border border-solid border-gray-900 border-opacity-10 rounded-[32px] mb-5 hover:p-5 hover:bg-indigo-600 hover:text-zinc-100 duration-500">
                            <div className='flex '><img className='lazyload' src={feature3} alt=""  loading="lazy"/></div>
                            <div className='flex-1  flex-col ms-2 '>
                                <h1 className='mt-5 font-bold'>Get discounted coupons</h1>
                                <p className='mt-5 text-zinc-800'>Lorem lpsum is not simply random text</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="flex-1 p-4">
                <img  className='lazyload' src={mainImg} alt=""  loading="lazy"/>
            </div>
        </section>
    )
}

export default KeyFeatures