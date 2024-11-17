import { useContext } from "react"
import { useState, createContext } from "react"
import AccordianItem from "./AccordianItem"

const AccordianContext = createContext()

export function useAccordianContext(){
    const ctx = useContext(AccordianContext)

    if(!ctx){
        throw new Error("useAccordianContext can be only used by components wrapped by <Accordian/>")
    }

    return ctx
}


export default function Accordian({children, className}){
    const [openId, setOpenId] = useState(null)

    function toggleAccordion(id){
        setOpenId(prev=> prev===id?null:id)
    }

    const ctxVal = {
        openId,
        toggleAccordion
    }

    return (
        <AccordianContext.Provider value={ctxVal}>
            <ul className={className}>
                {children}
            </ul>
        </AccordianContext.Provider>
    )
}

Accordian.Item = AccordianItem