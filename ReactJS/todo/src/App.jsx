import React, { useEffect, useState } from 'react'
import "./App.css"
export default function App() {

  const [task,setTask]  = useState('');
  const [tasks,setTasks] = useState([])

  const [count,setCount] = useState(0)

  
 

  useEffect( ()=> {
    setTimeout(()=>{
      setCount((count) => count+1)
    },1000)
  },[count])

  const handleInpChange  = (e) => {
     setTask(e.target.value);

  }

  const handleSubmit = (e)=> {
    e.preventDefault()
     if (task.trim() === "") return;           

    setTasks([...tasks, task]);              
    setTask("");        
  }
  return (
    <>
      <div className='flex  flex-col justify-center items-center mx-auto bg-blue-300'>
        <h1 className='font-bold'>Todo App</h1>
      </div>

      <form onSubmit={handleSubmit}>
          <div className='flex  flex-col gap-4'>
            <label htmlFor="inp1">Add Tasks:</label>
          <input onChange={handleInpChange}
          className='border-1
          rounded outline-none ' type="text" placeholder='Enter your tasks' value={task}/>

          <button className='bg-blue-300 w-[10%] hover:bg-red-300 cursor-pointer' >Add me</button>
          </div>
        </form>

        
        <div className='bg-red-300 mt-10'>
          <ul>
            {tasks.map((t,index) => (
              
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>

        {/* <h1>Timer: {count} </h1> */}
    </>
  )
}
