import React from 'react'
import Counter from './Components/Counter'

import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <>

    <Router>

      <div className='bg-slate-500 p-4 min-screen flex  items-center justify-around'>

        <div className='flex items-center justify-center'>
          <h1 className='text-2xl font-bold'>Redux</h1>
        </div>

        <div className='flex items-center justify-around gap-4 text-xl font-semibold'>
          <p className=''><Link to="/">Home</Link></p>
          <p className=''><Link to="/about">About</Link></p>
          <p className=''><Link to="/counter">Counter</Link></p>
        </div>

      </div>

      <Routes>

        <Route path="/counter" element={<Counter/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App