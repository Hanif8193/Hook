
"use client"
import React,{useState} from 'react'
import { Button } from "@/components/ui/button"



  


function Home() {
  const [count,setCount] = useState(0);
  function increment () {
    setCount(count + 1);
  }
 function decrement  () {
  setCount(count - 1);
 }

   
  return (
    <div className='flex justify-center items-center h-screen gap-5'>
    <Button onClick={increment} variant={"default"} className='text-2xl rounded-3xl py-6'>Increment</Button>
     <Button onClick={decrement}variant={"destructive"} className='text-2xl rounded-3xl py-6'>Decrement</Button>
     
       <p> count= {count} </p> 
    
    </div>
      
  )
}

export default Home
