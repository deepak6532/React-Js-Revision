import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [category, setCategory] = useState(''); // for selected category

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
  }, []);



  const allCategories = () => {
    const categories = data.map(item => item.category);
    return [...new Set(categories)];
  };




  const filterData = data.filter(d => {

    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase()) ||
                          d.category.toLowerCase().includes(search.toLowerCase()) ||
                          d.description.toLowerCase().includes(search.toLowerCase());

    const category_match = category ? d.category === category : true;

    return matchesSearch && category_match;
  });



  const sortData = () => {
    if (order === 'asc') {
      return [...filterData].sort((a, b) => a.price - b.price);
    } else if (order === 'dsc') {
      return [...filterData].sort((a, b) => b.price - a.price);
    }
    return filterData;
  };


  return (
    <div className='p-5'>
      {/* Search Bar */}
      <input
        type='text'
        name="search"
        value={search}
        placeholder='Search'
        onChange={e => setSearch(e.target.value)}
        className='w-sm px-4 py-2 border-2 border-black rounded-lg outline-none'
      />

      {/* Sorting Buttons */}
      <button onClick={() => setOrder('asc')} className='bg-gray-400 font-bold p-2 rounded-lg m-2'>
        Low to high
      </button>
      <button onClick={() => setOrder('dsc')} className='bg-gray-400 font-bold p-2 rounded-lg m-2'>
        High to low
      </button>
      <button onClick={() => { setOrder(''); setCategory(''); }} className='bg-gray-400 font-bold p-2 rounded-lg m-2'>
        Clear Filters
      </button>

      {/* Category Buttons */}
      <div className='flex flex-wrap mt-4 mb-4 bg-red-300'>
        {/* "All" Category Button */}
        <button
          onClick={() => setCategory('')}
          className={`bg-blue-400 text-white font-semibold px-4 py-2 rounded-lg m-1 ${category === '' ? 'bg-blue-600' : ''}`
        }
        >
          All
        </button>

        {/* Dynamic Category Buttons */}
        {allCategories().map((category, idx) => (
          <button
            key={idx}
            onClick={() => setCategory(category)}
            className={`bg-blue-400 text-white font-semibold px-4 py-2 rounded-lg m-1 ${
              category === category ? 'bg-blue-600' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Product Cards */}
      <div className='bg-slate-100 min-h-screen mt-2 flex flex-wrap justify-center items-center p-1 rounded'>
        {sortData().map((item, index) => (
          <div key={index} className='border-1 border-black bg-white rounded-lg m-4 p-4 w-64 h-110'>
            
            <LazyLoadImage
              alt={item.title}
              effect='blur'
              wrapperProps={{ style: { transitionDelay: '1s' } }}
              src={item.thumbnail}
              className='w-full h-60 object-cover'
            />
            
            <h1 className='text-black text-xl font-bold'>ID: {item.id}</h1>
            <p className='text-black font-semibold'>Price: ${item.price}</p>
            <p className='text-black'>Brand: {item.brand}</p>
            <p className='text-black'>Category: {item.category}</p>
            <p className='text-black'>Title: {item.title}</p>
            <p className='text-black'>Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetch;
