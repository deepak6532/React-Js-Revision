import React from 'react'

const Logout = () => {


    const handelSubmit = (e) =>{

        e.preventDefault()

        localStorage.removeItem("data")


    }
  return (
    <>

    <div className='min-h-screen p-6 '>

        <button type="button"
        onClick={handelSubmit}
        className=' bg-red-500 px-4 py-2 text-white font-semibold hover:bg-red-600 text-center rounded '>Logout</button>
    </div>
    
    
    </>
  )
}

export default Logout