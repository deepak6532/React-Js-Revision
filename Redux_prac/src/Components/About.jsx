import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const dataState = useSelector((state) => state.home.value)

  return (
    <div className="min-h-screen bg-blue-400 p-4">
      <h1 className='text-2xl text-center font-semibold'>About section</h1>
      <div className='bg-gray-300 border-2 border-amber-500 rounded-lg flex flex-wrap justify-around p-4 gap-4 '>
        {
          dataState.map((item, index) => (
            item.category === "audio"  ? (
              <div className='bg-white max-w-md max-h-md border-1 border-black rounded-lg p-4' key={index}>
                <img src={item.image} className='w-full h-30 object-fit' alt="Product" />
                <p>Id: {item.id}</p>
                <p>Category: {item.category}</p>
                <p>Color: {item.color}</p>
                <p>Price: {item.price}</p>
              </div>
            ) : null
          ))
        }
      </div>
    </div>
  )
}

export default About
