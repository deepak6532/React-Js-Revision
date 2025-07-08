import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo.jpg'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <nav className="shadow-md bg-white text-black w-full relative z-30">
                <div className='max-w-7xl mx-auto  px-4  py-3'>

                    <div className="flex justify-between items-center">

                        <div className="p-1 text-center rounded-lg ">
                            {/* <h1 className='text-black font-bold text-2xl'>Navbar</h1> */}
                            <img src={logo} className=' w-25  rounded-lg object-cover'></img>
                        </div>

                        <div className='hidden md:flex items-center  font-semibold gap-8'>

                            <p className='text-black text-xl text-center  hover:text-blue-700 cursor-pointer duration-300 '>Home</p>
                            <p className='text-black text-xl text-center  hover:text-blue-700 cursor-pointer duration-300 '>About</p>
                            <p className='text-black text-xl text-center  hover:text-blue-700 cursor-pointer duration-300 '>Service</p>
                            <p className='text-black text-xl text-center  hover:text-blue-700 cursor-pointer duration-300 '>Contact</p>
                            <p className='text-black text-xl text-center hover:text-blue-700 cursor-pointer duration-300  '>Signup</p>

                        </div>
                    {/* </div> */}
                



                <button
                    onClick={() => setOpen(!isOpen)}
                    className="text-3xl md:hidden text-black font-bold"
                >

                    {isOpen ? <HiX /> : <HiMenuAlt3 />}

                </button>
            </div>
            </div>



{/* mobile menu */}
                {

                    isOpen && (
                        <div className="md:hidden bg-gray-100 text-black px-6 py-4 hover:text-yellow-400 cursor-pointer">

                            <div className="flex flex-col gap-4">
                             <p className='text-black text-xl text-start font-semibold  hover:text-blue-700 cursor-pointer duration-300 '>Home</p>
                            <p className='text-black text-xl text-start font-semibold  hover:text-blue-700 cursor-pointer duration-300 '>About</p>
                            <p className='text-black text-xl text-start font-semibold  hover:text-blue-700 cursor-pointer duration-300 '>Service</p>
                            <p className='text-black text-xl text-start font-semibold  hover:text-blue-700 cursor-pointer duration-300 '>Contact</p>
                            <p className='text-black text-xl text-start font-semibold hover:text-blue-700 cursor-pointer duration-300  '>Signup</p>
                            </div>

                        </div>
                    )
                }



            </nav>
        </>
    )
}

export default Navbar