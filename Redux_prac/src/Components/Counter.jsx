import React from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { increment,decrement } from '../Feature/CounterSlice'

const Counter = () => {

  const count  = useSelector((state) => state.counter.value)
  const dispatch =  useDispatch()
  return (
    
    <>
    
    <div className='bg-gray-400 p-6  flex items-center justify-center min-h-screen'>
            <div className='bg-white  w-md rounded-lg p-8 space-x-2.5'>

                <h1>Count:{count}</h1>

                <button onClick={()=>dispatch(increment())} className='p-2 border-2 border-black'>increment</button>
                <button onClick={()=>dispatch(decrement())} className='p-2 border-2 border-black'>decrement</button>
                {/* <button onClick={reset}>reset</button> */}

                <h1>Gupta ji</h1>

            </div>
    </div>
    </>
  )
}

export default Counter