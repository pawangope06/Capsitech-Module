import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime] = useState(new Date())

    const handleSubmit = (e) => {
        alert('hello')
    }

    useEffect( ()=> {
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)

        return () => clearInterval(timer)
    },[])
  return (
    <>
        <div className='flex justify-center bg-gray-300 border-blue-400 mt-20'>
            <p className='text-2xl font-extrabold'>Current Time is: <span className='text-white'>{time.toLocaleTimeString()}</span></p>

            <button className='bg-blue-600 ml-5 text-white rounded p-2 hover:decoration-pink-300' onClick={() => alert('clicked')}>Click me</button>
        </div>
        <form onSubmit={handleSubmit}></form>
    </>
  )
}

export default Clock