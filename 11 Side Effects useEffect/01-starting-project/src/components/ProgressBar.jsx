import { useEffect, useState } from "react";

export default function ProgressBar(){

    const [timeRemaining , setTimeRemaining] = useState(3000)

    useEffect(()=>{
      const timeInterval = setInterval(()=>{
        console.log("time interval running")
        setTimeRemaining(prevTime=>prevTime-10)
      },10)
  
      return ()=>{
        console.log("clearing time interval")
        clearInterval(timeInterval)
      }
    },[])


    return(
      <progress value={timeRemaining} max={3000}/>

    )
}