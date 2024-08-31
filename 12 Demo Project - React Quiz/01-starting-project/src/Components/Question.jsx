import Questions from "../../questions.js"
import ProgressBar from "./ProgressBar.jsx"
import Answers from "./Answers.jsx"
import { useState } from "react"

export default function Question({onSelect,currentQuestionIndex}){
    const [answerState,setAnswerState] = useState({
        answer:"",
        isCorrect:null
    })

    let time = 10000
    if(answerState.answer){
        time=1000
    }
    if(answerState.isCorrect!==null){
        time=2000
    }
    
    function handleAnswerBtn(answer){
        if(answer===null){
            onSelect(answer)
            return
        }
        setAnswerState({
            answer:answer,
            isCorrect:null
        })
        
        setTimeout(()=>{
            setAnswerState({
                answer:answer,
                isCorrect:answer===Questions[currentQuestionIndex].answers[0] ? "correct":"wrong"
            })
            setTimeout(()=>{
                onSelect(answer)
            },2000)
        },1000)

    }


    let isAnswerCorrect =""
    if(answerState.answer!=="" && answerState.isCorrect===null){
        isAnswerCorrect="answered"
    }
    if(answerState.answer && answerState.isCorrect){
        isAnswerCorrect=answerState.isCorrect
    }

    return(
        <div id="questions">
        <ProgressBar key={time} time={time} onTimelapse={answerState.answer===""?handleAnswerBtn:null} mode={isAnswerCorrect}/>
        <h1>{Questions[currentQuestionIndex].text}</h1>
        <Answers answer={answerState.answer} handleAnswerBtn={handleAnswerBtn} answered={isAnswerCorrect} answersArr={[...Questions[currentQuestionIndex].answers]}/>
        </div>
    )
}