import { useState, useEffect } from "react"

export default function ProgressBar({time, onTimelapse, mode}){
    const [ remainingTime, setRemainingTime] = useState(time)

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            // console.log("setting timeout")
            onTimelapse(null)
        },time)
        return ()=>{
            console.log("clearing timeout")
            clearTimeout(timeOut)
        }
    },[time,onTimelapse])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(prevTime=>prevTime-100)
        },100)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return(
        <progress value={remainingTime} max={time} className={mode} />
    )
}