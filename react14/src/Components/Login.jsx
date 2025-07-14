import React ,{ useState } from "react"

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const localData = JSON.parse(localStorage.getItem("Data"))

    const handelsubmit = ()=>{

        if(email === localData.email && password === localData.password)
        {
            alert("Login Success")
        }
        else{
            alert("email password does not match")
        }
    }

  return (
    <>
   <div className='bg-slate-300 min-h-screen p-4 flex items-center justify-center '>
    <div className='w-md border-2 bg-white  border-black rounded-lg p-5'>

      <h1 className='text-blue-600 text-xl text-center'>Login</h1>

        <form onSubmit={handelsubmit} className='space-y-4 m-4'>

          <input type="text"
          value={email}
          placeholder='Enter email'
          onChange={e => setEmail(e.target.value)}
          className='w-full border-1 outline-none px-4 py-2 rounded-lg'
          ></input>

          <input type="password"
          value={password}
          placeholder='Enter password'
          onChange={e => setPassword(e.target.value)}
          className='w-full border-1 outline-none px-4 py-2 rounded-lg'
          ></input>
            
          <button type="submit"
             className='w-full  text-xl text-white border-1 bg-blue-600 hover:bg-blue-700 cursor-pointer outline-none px-4 py-2 rounded-lg'>
            Submit
        </button>
          
        </form>
    </div>
   </div>
   
   
   
   
   </>
  )
}

export default Login