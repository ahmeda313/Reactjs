
import { createContext, useState} from "react"
import Todo from "../models/todo"

type TodosContextObj = {
    items:Todo[],
    addTodos:(text: string)=>void,
    removeTodos:(id:string)=>void
}

export const TodoContext = createContext<TodosContextObj>({
    items:[],
    addTodos:(text:string)=>{},
    removeTodos:(id:string)=>{}
})

const TodoContextProvider: React.FC<{children:any}> = (props)=>{

    const[todos, setTodos] = useState<Todo[]>([])

    console.log(todos)

    function addTodoFn(todo: string){
      const newTodo = new Todo(todo)
      
  
      setTodos(prevTodos=>{
        return [...prevTodos, newTodo]
      })
      

    }
  
    function removeTodoFn(id: string){
      setTodos(prevTodos=>{
        return prevTodos.filter(i=>i.id!==id)
      })
    }

    const todoCtx:TodosContextObj = {
        items:todos,
        addTodos:addTodoFn,
        removeTodos:removeTodoFn
    }


    return (
    <TodoContext.Provider value={todoCtx}>
        {props.children}
    </TodoContext.Provider>
    )
}

export default TodoContextProvider