import { useAccordianContext } from "./Accordian"

export default function AccordianItem({id,className,children, title}){
    const {openId, toggleAccordion} = useAccordianContext()

    const isOpen = openId===id

    
    return (
        <li className={className}>
            <h2 className="accordion-item-title" onClick={()=>toggleAccordion(id)}>{title}</h2>
            <div className={isOpen?"accordion-item-content open":"accordion-item-content"}>
            {children}
            </div>
        </li>
    )
}