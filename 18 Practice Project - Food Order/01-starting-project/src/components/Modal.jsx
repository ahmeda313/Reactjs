import { createPortal} from 'react-dom'
import { forwardRef, useEffect, useImperativeHandle,useContext, useRef} from 'react'

import { UserProgressContext} from "../store/user-progress-context"

export const Modal = forwardRef(({children,open,...props},ref) => {
    const {progress,hideModal} = useContext(UserProgressContext)

    const dialog = useRef()

    // useImperativeHandle(ref,()=>{
    //     return {
    //         open:()=>{
    //             dialog.current.showModal()
    //         }
    //     }
    // })
    useEffect(()=>{
        const modal = dialog.current
        if(open){
            modal.showModal()
        }
        return ()=>modal.close()
    },[open])

  return (createPortal(
    <dialog className='modal' ref={dialog} onClose={progress==="cart"?hideModal:null} {...props}>
        {children}
    </dialog>,
    document.getElementById('modal'))
  )
})

