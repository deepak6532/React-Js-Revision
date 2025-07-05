import React from 'react'
import Card from './Components.jsx/Card'

const App = () => {

  const obj ={
    name:"yash",
    age:20,
    position:"Graphics designer"
  }
  return (
    <>
    <div className='flex min-h-screen bg-gray-500 items-center justify-around'>
    <Card  name="Deepak" course="Mern Stack"/>
 

     <Card  myobj={obj}/>

     </div>


    </>
  )
}

export default App