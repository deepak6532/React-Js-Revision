import React, { useState } from 'react'

const Signup = () => {

    const  [name,setName] = useState("")
    const  [email,setEmail] = useState("")
    const  [password,setPassword] = useState("")


    const handelSubmit = (e) =>{
       
        e.preventDefault()


       

        const data ={"name":name,"email":email,"password":password}

        console.log(data)

        localStorage.setItem("data", JSON.stringify(data))

        setName(" ")
        setEmail(" ")
        setPassword(" ")


    }
  return (
    
    <>
    
    <div className='bg-gray-300 min-h-screen flex items-center justify-center p-6'>
        <div className='bg-gray-100 border-2 border-black w-100 p-4 rounded'>
            <h1 className='text-2xl text-center font-bold '>Signup</h1>

            <form onSubmit={handelSubmit} className='space-y-4 mt-4'>

                <input type="text"
                name="name"
                value={name}
                placeholder='Enter Name'
                autoFocus
                onChange={e => setName(e.target.value)}
                className='w-full px-4 py-2 border-2 border-black rounded-lg '>

                </input>
                <input type="text"
                name="email"
                value={email}
                placeholder='Enter  Email'
                onChange={e => setEmail(e.target.value)}
                className='w-full px-4 py-2 border-2 border-black rounded-lg '>

                </input>

                <input type="password"
                name="password"
                value={password}
                placeholder='Enter password'
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-2 border-2 border-black rounded-lg '>

                </input>

                <button type="submit"

                className='w-full bg-blue-500  text-white font-bold  transition duration-300 rounded-lg p-2 hover:bg-blue-600 cursor-pointer '
                >Submit</button>


            </form>
        </div>

    </div>
    
    </>
  )
}

export default Signup