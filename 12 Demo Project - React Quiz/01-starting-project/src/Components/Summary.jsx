import Questions from "../../questions.js"
import summaryImg from "../assets/quiz-complete.png"

export default function Summary({userAnswers}){

    const nullAnswers = userAnswers.filter(i=>i===null)
    const correctAnswers = userAnswers.filter((i,j)=>i===Questions[j].answers[0])

    const nullAnswersShare = Math.round((nullAnswers.length/userAnswers.length)*100)
    const correctAnswersShare = Math.round((correctAnswers.length/userAnswers.length)*100)
    const wrongAnswersShare = 100-nullAnswersShare-correctAnswersShare

    return(
        <div id="summary">
        <img src={summaryImg} alt="quiz complete" />
        <h2>Quiz completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{nullAnswersShare}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswersShare}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{wrongAnswersShare}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((ans,i)=>{
                let cssClass = "user-answer"
                if(ans===Questions[i].answers[0]){
                    cssClass+=" correct"
                }else if(ans===null){
                    cssClass+=" skipped"
                }
                else{
                    cssClass+=" wrong"
                }
                return(
                    <li key={"ans"+i}>
                        <h3>{i+1}</h3>
                        <p className="question">{Questions[i].text}</p>
                        <p className={cssClass}>{ans??"Skipped"}</p>
                    </li>
                )
            })}
        </ol>
        </div>
    )
}