import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='w-sm h-60 bg-white border-2 border-black rounded-lg font-bold text-xl p-4'>
        {props.name && <h1>Name: {props.name}</h1>}
        {props.course && <h2>Course: {props.course}</h2>}
        

        {/* access object through props */}
        {props.myobj && (
          <>
            <h1>Name: {props.myobj.name}</h1>
            <h2>Age: {props.myobj.age}</h2>
            <h2>Position: {props.myobj.position}</h2>
          </>
        )}


      </div>
    </>
  )
}

export default Card
