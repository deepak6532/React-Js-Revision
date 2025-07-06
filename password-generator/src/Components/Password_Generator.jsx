import React, { useState,  useEffect } from 'react'

const Password_Generator = () => {

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [char, setChar] = useState(false)

    useEffect(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz"

        if (number) str += "0123456789"
        if (char) str += "``!@#$%^&*"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, number, char])


 
    return (
        <>

            <div className='min-h-screen bg-slate-500 flex items-center justify-center p-4'>

                <div className='bg-gray-100 w-md borde-2 border-black p-4 rounded-lg '>

                    <h1 className='text-2xl text-center text-slate-900 font-mono mb-4 font-bold '>Password Generator</h1>

                    <div className='flex item-center justify-between '>
                        <input type="text"
                            value={password}
                            placeholder='Password'
                            className='w-3/3 px-3 py-2 font-semibold border-1 border-black  rounded-lg outline-none'
                        >
                        </input>
                        {/* <button type="submit"
                            className='w-1/3 bg-blue-600 p-2 rounded-l-lg rounded-r-xl text-white text-xl font-semibold'>Copy
                            </button> */}
                    </div>

                    <div className='flex text-sm gap-x-2'>
                        
                        <div className='flex items-center mt-2 gap-x-1'>
                            <input type="range"
                                min={6}
                                max={100}
                                value={length}
                                onChange={e => setLength(e.target.value)}
                                className='cursor-pointer '>

                            </input>
                            <label className='font-bold'>Length:{length}</label>
                        </div>

                        <div className='flex items-center mt-2 gap-x-1'>
                            <input type="checkbox"
                                defaultChecked={number}
                                onChange={() => {
                                    setNumber((prev) => !prev)
                                }}
                            ></input>
                            <label className='font-bold'>Numbers</label>

                        </div>


                        <div className='flex items-center mt-2 gap-x-1'>
                            <input type="checkbox"
                                defaultChecked={char}
                                onChange={() => {
                                    setChar((prev) => !prev)
                                }}
                            ></input>
                            <label className='font-bold'>Character</label>

                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Password_Generator