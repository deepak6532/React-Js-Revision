import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// laxy load 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState('')

    // const [order,setOrder]  = useState('');


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
        console.log(result.data.products)
        setData(result.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [navigate]);


    const filterData = data.filter(d => 
          d.title.toLowerCase().includes(search.toLowerCase()) ||
          d.category.toLowerCase().includes(search.toLowerCase()) ||
          d.description.toLowerCase().includes(search.toLowerCase())

          
  )

  return (

    <div className='p-5'>

    <input type="text"
    name="search"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="search"
    className='px-4 py-2 w-sm border-2 border-black outline-none  rounded-lg '
    ></input>

    {/* <button onClick={setOrder('asc')} >Low to high </button>
    <button onClick={setOrder('asc')} >High to low </button> */}


    <div className='bg-slate-500 min-h-screen flex flex-wrap justify-center items-center p-4 rounded'>
      {
         filterData.map((item, index) => (
          <div key={index} className='border-1 border-black bg-white rounded-lg m-4 p-4 w-74 h-110'>

            <LazyLoadImage

                  alt={item.title}
                  effect="blur"
                  // effect="black-and-white"
                  // effect="opacity"
                  wrapperProps={{
                      style: {transitionDelay: "1s"},
                  }}
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
