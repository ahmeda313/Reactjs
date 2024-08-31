import { useRef } from "react"

export default function Answers({handleAnswerBtn,answered,answer,answersArr}){

    const arr = useRef()

    if(!arr.current){
        arr.current = answersArr.sort(()=>Math.random()-0.5)
    }

    return(
        <ul id="answers">
        {arr.current.map((i,j)=>{
            let cssClass = ""
            if(answered==="answered" && answer===i){
                cssClass="selected"
            }
            if((answered==="correct"||answered==="wrong") && answer===i){ 
                cssClass=answered
            }
            return(
            <li key={j} className="answer">
                <button onClick={()=>handleAnswerBtn(i)} className={cssClass} disabled={answered!==""}>{i}</button>
            </li>
            )
        })}
    </ul>
    )
}