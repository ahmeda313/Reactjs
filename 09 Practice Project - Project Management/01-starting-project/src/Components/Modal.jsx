import { createPortal } from "react-dom"
import { useRef,forwardRef, useImperativeHandle } from "react"

const Modal = forwardRef(function Modal({children}, ref){
    const modal = useRef()
    useImperativeHandle(ref,()=>({
        open:()=>{
            modal.current.showModal()
        }
    }))

    return(
        createPortal(<dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="text-right">
                <button className="px-3 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Okay</button>
            </form>
        </dialog>,
        document.getElementById("modal-root"))
    )
})


export default Modal