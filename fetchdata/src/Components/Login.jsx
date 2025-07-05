import React, { useState } from 'react'

const Login = () => {

  
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handelSubmit = (e) =>{
         
        e.preventDefault()

        const form ={
            email,password
        }

        const data = JSON.parse(localStorage.getItem("Data"))

        if(!data) {
            console.log("Data not found")
        }

        if(form.email.toLowerCase() === data.email.toLowerCase() && form.password === data.password)
        {
            alert("Login Successfull!")

        }
        else{
            alert("Email password does not mathc try again!")
        }

    
        setEmail("")
        setPassword("")
    }


  return (
   <>

   <div className='bg-slate-500 min-h-screen flex items-center justify-center p-4'>

    <div className='bg-slate-300 w-sm border-2 border-black rounded p-4'>
        <h1 className='text-center text-black text-2xl font-bold '>Login</h1>

        <form  onSubmit={handelSubmit} className='space-y-5 mt-4'>

        

            <input type="text"
            name="email"
            value={email}
            placeholder='Enter Email'
            autoFocus
            className='w-full border-2 border-black outline-none rounded-md p-2'
            onChange={e => setEmail(e.target.value)}
            ></input>

            <input type="password"
            name="password"
            value={password}
            placeholder='Enter Password'
            autoFocus
            className='w-full border-2 border-black outline-none rounded-md p-2'
            onChange={e => setPassword(e.target.value)}
            ></input>

            <button  type="submit"
            className=' w-full bg-blue-600 text-center text-2xl font-semibold p-1  text-white rounded-md hover:cursor-pointer hover:bg-blue-700 transition duration-300'>
                Submit
            </button>
        </form>
    </div>


   </div>



   </>
  )
}

export default Login