import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx"

export default function TimeChallenge({title, targetTime}){
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)


    const timeStarted = timeRemaining !== targetTime*1000

    if(timeRemaining<=0){
        handleStop()
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTime=>prevTime-10)
        },10)
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000)
    }

    function handleStop(){
        clearInterval(timer.current)
        dialog.current.open()
    }


    return(
        <>
        {<ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime>1?"s":""}</p>
            <button onClick={timeStarted?handleStop:handleStart}>{timeStarted?"Stop":"Start"} now</button>
            <p className={timeStarted?"active":undefined}>{timeStarted?"Time is running...":"timer inactive"} </p>
        </section>
        </>
    )
}