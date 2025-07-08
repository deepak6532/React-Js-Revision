import React from 'react'
import heroimage from "../assets/heroimage.jpg"

import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <div className="bg-gray-100 text-black">

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8">

            
            <div className="order-1 sm:order-2 p-10">
                <img 
                src={heroimage}
                alt="hero image "
                className=' max-h-[580px] w-full object-contain rounded-full  drop-shadow-[2px_20px_6px_rgba(0,0,0,0.30)] hover:scale-102 duration-300' >

                </img>
            </div>



            <div className="order-2 sm:order-1 space-y-5 sm:pr-10 text-center sm:text-left">
                <h1 className="text-3xl lg:text-6xl text-slate-800 font-semibold font-serif">The Best Look Anytime Anywhere </h1>
                <p className="text-xl text-black">
                     Refresh your style with on-trend pieces from clothing collection.

                </p>

                <button className="flex items-center gap-2 px-10 py-2 rounded-lg bg-orange-500 text-xl text-white hover:bg-orange-600 duration-300 cursor-pointer">
                    Shop Now
                    <FaArrowRightLong />
                </button>
    
            </div>

        </div>

    </div>
    </>
  )
}

export default Hero

