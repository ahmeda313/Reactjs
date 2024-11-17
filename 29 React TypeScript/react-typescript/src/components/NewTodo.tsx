import { useContext, useRef } from "react"
import classes from "./NewTodo.module.css"
import { TodoContext } from "../store/todo-context"

const NewTodo: React.FC = (props)=>{

    const {addTodos} = useContext(TodoContext)

    const inputRef = useRef<HTMLInputElement>(null)

    function submitHandler(e: React.FormEvent){
        e.preventDefault()

        const inputText = inputRef.current!.value

        if(inputText.trim()===""){
            return
        }

        addTodos(inputText)
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={inputRef}/>
            <button>Add</button>
        </form>
    )
}

export default NewTodo