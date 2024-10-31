"use client"
import React from 'react'
import banner from "../images/iphoneimage.png"
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between w-full  h-auto px-4 sm:px-8 lg:px-[160px] font-inter bg-gradient-to-br from-[#211c24] to-[#39303d] text-white">
            {/* Text Content */}
            <div className="text-center lg:text-left  lg:mb-0">
                <h3 className="text-sm sm:text-lg lg:text-xl uppercase lg:flex mt-9 opacity-30 font-normal tracking-tight text-[25px] items-center">Pro.Beyond.</h3>
                <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl my-5 font-bold">iPhone 14 <span className="text-purple-500">Pro</span></h1>
                <h6 className="text-lg sm:text-xl mt-4 mb-6 opacity-30 font-normal tracking-tight">Created to change everything for the better. For everyone.</h6>
                <button className="border border-white text-white py-2 px-6 max-w-[191px] hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                </button>
            </div>

            {/* Banner Image */}
            <div className="w-full lg:w-auto">
                <Image src={banner} alt="banner" className="xl:w-full lg:w-auto object-cover w-96 m-auto" />
            </div>
        </div>
    )
}

export default Banner
