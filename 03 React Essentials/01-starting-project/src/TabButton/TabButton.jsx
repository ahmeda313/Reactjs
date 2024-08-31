export default function TabButton({isSelected,children, ...props}){
    return(
        <button className={isSelected ? "active" : ""} {...props}> {children} </button>
    )
}