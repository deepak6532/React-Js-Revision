import React from 'react'

import { BrowserRouter as Router , Routes,Route,Link } from 'react-router-dom'

import Signup from './Components/Signup'
import Login from './Components/Login'
import DataFetch from './Components/DataFetch'



const App = () => {
  return (
   <>

   <Router>

    <nav className='min-screen  bg-black flex items-center justify-around p-4'>

      <h2 className='text-2xl text-yellow-600 font-bold'>Navbar</h2>

      <div className='flex items-center jsutify-center gap-5 text-yellow-500  text-semibold'>


        <h1><Link to="/signup">Signup</Link></h1>
        <h1><Link to="/login">Login</Link></h1>
      <h1><Link to="/datafetch" >Data</Link></h1>
        
      </div>
    </nav>

    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path="/datafetch" element={
          
            <DataFetch/>
        
        }/>
 

    </Routes>
   </Router>
   
   </>
  )
}

export default App