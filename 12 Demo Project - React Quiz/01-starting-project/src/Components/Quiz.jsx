import Questions from "../../questions.js"
import { useState, useCallback} from "react"
import Question from "./Question.jsx"
import Summary from "./Summary.jsx"


export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([])

    const currentQuestionIndex = userAnswers.length

    const isQuizComplete = currentQuestionIndex===Questions.length

    const handleAnswerBtn = useCallback(function handleAnswerBtn(ans){
        setUserAnswers(prevAns=>[...prevAns,ans])
    },[])
    
    if(isQuizComplete){
        return(
            <Summary userAnswers={userAnswers}/>
        )
    }


    return(
        <div id="quiz">
            <Question answers={userAnswers} key={currentQuestionIndex} currentQuestionIndex={currentQuestionIndex} onSelect={handleAnswerBtn} />
        </div>
    )
}