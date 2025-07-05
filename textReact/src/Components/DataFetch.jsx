import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("Data"));

    
    if (!loginData) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    
    const fetchData = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        setData(result.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className='bg-slate-500 min-h-screen flex flex-wrap justify-center items-center p-4 rounded'>
      {
        data.map((item, index) => (
          <div key={index} className='border-2 border-black bg-slate-600 rounded-lg m-4 p-4 w-74 h-110'>
            <img src={item.thumbnail} alt="product" className='w-full h-60 object-cover' />
            <h1 className='text-white text-xl font-bold'>ID: {item.id}</h1>
            <p className='text-white font-semibold'>Price: {item.price}</p>
            <p className='text-white'>Brand: {item.brand}</p>
            <p className='text-white'>Category: {item.category}</p>
            <p className='text-white'>Title: {item.title}</p>
            <p className='text-white'>Rating: {item.rating}</p>
          </div>
        ))
      }
    </div>
  );
};

export default DataFetch;
