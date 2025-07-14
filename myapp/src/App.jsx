import React from 'react'

import { BrowserRouter as Router ,Routes,Route, Link } from 'react-router-dom'
import Home from './Components/Home'
// import About from './Components/About'
// import Service from './Components/Service'
// import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Counter from './Components/Counter'
import Useeffect from './Components/Useeffect'

const App = () => {
  return (
    <>
    <Router>
          <nav className="bg-gray-800 min-screen p-4 flex justify-around items-center text-white ">
            <div className='text-2xl items-center '>
              <p className='hover:text-blue-400 cursor-pointer transition duration-300 '>Navbar</p>
            </div>
 
            <div className='flex items-center justify-between space-x-8 font-semibold'>
              <p><Link to="/"   className='hover:text-blue-400 cursor-pointer transition duration-300 '>Home</Link></p>
              <p><Link to="/signup" className='hover:text-blue-400 cursor-pointer transition duration-300 ' >Signup</Link></p>
              <p><Link to="/login" className='hover:text-blue-400 cursor-pointer transition duration-300 ' >Login</Link></p>
              <p><Link to="/logout" className='hover:text-blue-400 cursor-pointer transition duration-300 ' >Logout</Link></p>
              <p><Link to="/counter" className='hover:text-blue-400 cursor-pointer transition duration-300 ' >Counter</Link></p>
              <p><Link to="/useeffect" className='hover:text-blue-400 cursor-pointer transition duration-300 ' >Useeffect</Link></p>
            </div>

          </nav>


      <Routes>

        <Route path="/" element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/> */}

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/useeffect" element={<Useeffect/>}/>

      </Routes>

    </Router>
    
    
  
    </>
  )
}

export default App


