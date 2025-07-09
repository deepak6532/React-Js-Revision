import React, { useState } from 'react'


const Counter = () => {

    const [count,setCount] = useState(0)

    const descrease =() =>setCount(count - 1)
    const increase =() => setCount(count + 1)
    const reset = () => setCount(0)


  return (
    <div>

        <div className='min-h-screen  flex items-center flex-col justify-center border-2 border-black p-6'>
            <h2 className='text-xl font-bold'>{count}</h2>
            <div className='flex items-center justify-between p-4'>       
                 <button onClick={descrease} className='bg-gray-400 px-5 py-2 text-center font-white '>Descrease (-)</button>
                <button onClick={increase} className='bg-gray-400 px-5 py-2 text-center font-white '>Increase (+)</button>
             </div>
        <button onClick={reset} className='bg-gray-400 px-5 py-2 text-center font-white '>Reset</button>


   </div>
 
    </div>
  )
}

export default Counter