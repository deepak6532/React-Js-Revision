import React, { useEffect, useState } from 'react'

import axios from "axios"

const Useeffect = () => {

    const [data ,setData] =useState([])
    const [btn ,setButton] = useState(false)


    // useEffect(  ()=>{
    //     // fetchData()

    // },[])

    const fetchData = async() =>{

        const result = await axios.get("https://fakestoreapi.in/api/products?limit=10")

        setData(result.data.products)
        console.log(">>>result:",result.data.products)
        setButton(true)


    }


   
    
  return (
    <div>

       <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center  "
      >
        Show All  Data
      </button>

    
    <h1 className="text-center text-2xl font-bold inline-block">All Data</h1>
      <div className='flex p-4 flex-wrap m-4 gap-4 items-center justify-center font-bold '>
      
      {data.map((item, index) => (
        
        

        <div key="index" className="p-6 w-60 h-60 border-2 border-black">
            
          <h1>ID:  {item.id}</h1>
          <h2>Brand :{item.brand}</h2>
          <h2>Category :{item.category}</h2>
          <h2>Category :{item.color}</h2>
        </div>

           

          ))}
      </div>
    </div>
  )
}

export default Useeffect