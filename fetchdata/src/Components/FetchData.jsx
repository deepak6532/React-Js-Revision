import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        console.log("Result", result.data.products);
        setData(result.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-slate-500 min-h-screen flex flex-wrap justify-center items-center p-4 rounded'>
      {
        data.map((item, index) => (
          <div key={index} className='border-2 border-black bg-gray-400 m-4 p-4 w-74 h-100'>
            <img src={item.image}
            alt="image"
            className='w-full h-60 object-cover'></img>
            <h1 className='text-white text-xl font-bold'>ID: {item.id}</h1>
            
            <p className='text-white font-semibold'>Price: {item.price}</p>
            <p className='text-white'>Brand: {item.brand}</p>
            <p className='text-white'>Model: {item.model}</p>
            
          </div>
        ))
      }
    </div>
  );
};

export default FetchData;
