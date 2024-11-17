import classes from "./TodoItem.module.css"


const TodoItem: React.FC<{text:string, removeTodoFn:()=>void}> = (props)=>{

    function clickHandler(){
        props.removeTodoFn()
    }

    return <li className={classes.item} onClick={clickHandler}>{props.text}</li>
}


export default TodoItem