import React from 'react'

import Signup from './Components/Signup'

import Login from './Components/Login'

import { BrowserRouter as Router , Routes ,Route,Link } from 'react-router-dom'
import FetchData from './Components/FetchData'
import FetchProduct from './Components/FetchProduct'

const App = () => {
  return (
    <>

    <Router >
      <div className='bg-black text-yellow-400 min-screen p-4 flex items-center justify-around '>

        <h1 className='text-white text-2xl font-bold'>React Js</h1>

        <div className='flex items-center justify-around gap-6 text-xl font-semibold'>
          
          
          <Link to="/" >Signup</Link>
          <Link to="/login" >Login</Link>
          <Link to="/fetchdata">FetchData</Link>
          <Link to="/fetchproduct">Products</Link>
          
        </div>

      </div>


      <Routes>
        
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/fetchdata" element={<FetchData/>}/>

        <Route path='/fetchproduct' element={<FetchProduct/>}/>
      </Routes>
    </Router>
    
    
    
    
    </>
  )
}

export default App