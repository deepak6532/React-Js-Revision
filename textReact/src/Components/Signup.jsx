import React, { useState } from 'react'

const Signup = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handelSubmit =(e) =>{
         e.preventDefault()

         const data = {
            name,email,password
         }

         localStorage.setItem("Data",JSON.stringify(data))
         alert("Signup success!")

         setName("")
         setEmail("")
         setPassword("")
    }

  return (
    <>

    <div className='min-h-screen bg-slate-500 flex items-center justify-center p-5'>

        <div className='bg-gray-300 w-sm h-md p-4 border-2 border-black rounded-lg'>
            <h1 className='text-xl text-gray text-center font-bold'>Signup</h1>

            <form onSubmit={handelSubmit} className='space-y-6 mt-5'>



                <input type="text"
                name="name"
                placeholder='Enter name'
                autoFocus
                className='w-full border-2 border-black outline-none px-4 py-2 rounded-lg '
                onChange={e => setName(e.target.value)}
                ></input>

                <input type="text"
                name="email"
                placeholder='Enter Email'
                onChange={e => setEmail(e.target.value)}
                
                className='w-full border-2 border-black outline-none px-4 py-2 rounded-lg '
                ></input>

                <input type="password"
                name="password"
                placeholder='Enter Password'
                onChange={e => setPassword(e.target.value)}
                className='w-full border-2 border-black outline-none px-4 py-2 rounded-lg '
                ></input>

                <button type="submit"
                className='w-full rounded-lg p-2 font-bold bg-blue-600 text-center text-white hover:bg-blue-700'

                >Submit</button>
            </form>


        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Signup