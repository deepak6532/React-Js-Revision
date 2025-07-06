import React, { useState } from 'react'

const Counter = () => {

    const [count,setCounter] =  useState(0)

    const increase =()=>{
        setCounter(count+1)
    }
    const decrease =()=>{
        setCounter(count - 1)
    }
    const reset = ()=>{
        setCounter(0)
    }
  return (
    <>
    <div className='bg-slate-500 min-h-screen flex items-center justify-center p-4'>
        
        <div className='bg-white min-w-sm border-2 border-black p-6 rounded-lg space-y-6'>

            <h1 className='text-center text-2xl font-bold'>Count: {count}</h1>

            <div className='flex items-center justify-between w-full  bg-gray-100 p-2'>
                <button onClick={decrease} className='bg-black text-yellow-400 p-2 px-3 rounded text-xl  cursor-pointer hover:text-yellow-500'>Decrease</button>
                <button  onClick={reset} className='bg-black text-yellow-400 p-2 px-3 rounded text-xl cursor-pointer hover:text-yellow-500 '>Reset</button>
                <button  onClick={increase}  className='bg-black text-yellow-400 p-2  px-3 rounded text-xl cursor-pointer hover:text-yellow-500  '>Increase</button>
            </div>
        </div>
    </div>

        
    </>
  )
}

export default Counter