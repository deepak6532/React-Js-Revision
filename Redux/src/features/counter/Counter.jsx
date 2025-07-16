import React from 'react'
import { increment, decrement,reset, multiply, divide } from '../counter/counterSlice'

import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    
    const dispatch = useDispatch();

    function handelincrement() {
        dispatch(increment())
    }

    function handeldecrement() {
        dispatch(decrement())
    }
    function handelreset(){
        dispatch(reset())
    }

    function handelmultiply(){
        dispatch(multiply())
    }

    function handeldivide(){
        dispatch(divide())
    }
    return (
        <>

            <div className='bg-slate-800 min-h-screen flex items-center justify-center p-4'>

        
                <div className='w-lg bg-gray-100  text-center p-4 rounded-lg'>

                    <h1 className='text-black font-semibold text-xl p-1 m-2'>Count: {count}</h1>
                    
                    <div className='flex items-cener justify-around mt-5'>

                        <button className="bg-green-500 px-3 py-2 rounded-lg text-white " onClick={handelincrement}> Increase (+) </button>
                        <button className="bg-gray-500 px-3 py-2 rounded-lg text-white " onClick={handelreset}> Reset </button>

                        <button onClick={handeldecrement} className="bg-red-600 px-3 py-2 rounded-lg text-white "> decrease (-)</button>
                        <button onClick={handelmultiply} className="bg-blue-400 px-3 py-2 rounded-lg text-white "> multiply </button>
                        <button onClick={handeldivide} className="bg-blue-400 px-3 py-2 rounded-lg text-white "> divide </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter