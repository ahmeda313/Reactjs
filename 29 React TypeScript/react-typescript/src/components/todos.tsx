import { TodoContext } from "../store/todo-context"
import TodoItem from "./todo"
import classes from "./Todos.module.css"
import {useContext} from "react"

const Todos: React.FC = (props)=>{

    const {items,removeTodos} = useContext(TodoContext)

    return <ul className={classes.todos}>
        {
            items.map(i=><TodoItem key={i.id} text={i.text} removeTodoFn={()=>removeTodos(i.id)}/>)
        }
    </ul>

}

export default Todos