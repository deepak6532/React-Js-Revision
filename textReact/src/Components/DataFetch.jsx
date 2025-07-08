import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// 

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    
    // const loginData = JSON.parse(localStorage.getItem("Data"));

    
    // if (!loginData) {
    //   alert("Please login first");
    //   navigate("/login");
    //   return;
    // }

    
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

  const filterData = data.filter(d =>(
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.category.toLowerCase().includes(search.toLowerCase()) ||
    d.description.toLowerCase().includes(search.toLowerCase()) 

  ))


  return (

    <div className='p-5'>

     <input type='text'
        name="search"
        value={search}
        placeholder='Search'
        onChange={e => setSearch(e.target.value)}
        className='w-sm px-4 py-2 border-2 border-black rounded-lg outline-none '
      ></input>    
      
      <div className='bg-slate-500 min-h-screen mt-2 flex flex-wrap justify-center items-center p-4 rounded'>

     
      {
        filterData.map((item, index) => (
          <div key={index} className='border-1 border-black bg-white rounded-lg m-4 p-4 w-74 h-110'>
            
            <LazyLoadImage

            alt={item.title}
            effect='blur'
            wrapperProps={{styel:{transitionDelay : '2s'}}}
            src={item.thumbnail}
            className='w-full h-60 object-cover'
            />
            
            
            {/* <img src={item.thumbnail} alt="product" className='w-full h-60 object-cover' /> */}
            
            
            <h1 className='text-black text-xl font-bold'>ID: {item.id}</h1>
            <p className='text-black font-semibold'>Price: {item.price}</p>
            <p className='text-black'>Brand: {item.brand}</p>
            <p className='text-black'>Category: {item.category}</p>
            <p className='text-black'>Title: {item.title}</p>
            <p className='text-black'>Rating: {item.rating}</p>
          </div>
        ))
      }
    </div>
    </div>

  );
};


export default DataFetch;
