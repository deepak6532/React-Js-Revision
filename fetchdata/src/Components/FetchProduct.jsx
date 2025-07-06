import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchProduct = () => {

    const [products, setProducts] = useState([])

    // useEffect( () =>{

    const fetch = async () => {

        const result = await axios.get("https://dummyjson.com/products")

        console.log("result : ", result.data.products)

        setProducts(result.data.products)
    }
    // fetch()

    // },[])

    function handelsubmit() {     
        fetch()
    }
    return (
        <>
            <div className='min-h-screen bg-gray-200 p-5  iems-center flex '>

                <button type="submit"
                    onClick={handelsubmit}
                    className=' w-20 h-12 text-center bg-red-500 rounded-lg'>
                    Show Data</button>


                <div className='bg-gray-100 flex items-center flex-wrap justify-around gap-2 p-4'>


                    {
                        products.map((item, index) => (
                            <div key={index} className='bg-white border-2 border-black rounded-lg w-sm h-sm p-2'>

                                <img src={item.thumbnail}
                                    className='w-full h-60 '
                                ></img>


                                <h1 className='font-bold text-xl ml-5'>Title: {item.title}</h1>
                                <h1 className='font-bold text-xl ml-5'>Price: {item.price}</h1>
                                <h1 className='font-semibold text-2xl ml-5'>Id: {item.id}</h1>
                                <h1 className='font-semibold text-xl ml-5'>Brand: {item.brand}</h1>
                                <h1 className='font-semibold text-xl ml-5'>Rating: {item.rating}</h1>

                                <button type="submit"
                                    className='bg-blue-600 p-2 px-4 text-white text-center rounded-lg ml-5 mt-4 hover:bg-blue-700 cursor-pointer duration-300'>
                                    Add Now
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default FetchProduct