import { useNavigate } from "react-router-dom"
import classes from "./Modal.module.css"

export default function Modal({children}){

    const navigate = useNavigate()

    function onClose(){
        navigate("..")
    }

    return(
        <>
        <div className={classes.backdrop} onClick={onClose}/>
        <dialog className={classes.modal} open>
            {children}
        </dialog>
        </>
    )
}