import { useRef, forwardRef, useImperativeHandle } from "react"
 import { createPortal } from "react-dom"

const ResultModal = forwardRef(function ResultModal({targetTime, timeRemaining, onReset},ref){
    const dialog = useRef()   

    useImperativeHandle(ref,()=>({
        open:()=>{
            dialog.current.showModal()
        }
    }))



    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            <h2>You {timeRemaining<=0 ? "Lost" :` Score is ${((1 - timeRemaining/(targetTime*1000))*100).toFixed(2)}`}</h2>
            <p>Your target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{(timeRemaining/1000).toFixed(2)} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
})

export default ResultModal