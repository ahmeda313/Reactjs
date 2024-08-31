import { useRef } from "react"

export default function Project({project,handleDeleteProject,handleAddTask,handleDeleteTask}){

    const inputTask = useRef()

    const formattedDate = new Date(project.date).toDateString()

    return(
    <main className="w-2/3 h-screen my-1 flex flex-col gap-8">
            <menu className="flex items-center justify-end gap-4 my-1">
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-300 text-stone-800 hover:bg-stone-400 hover:text-stone-800" onClick={()=>handleDeleteProject(project.id)}>Delete</button>
            </menu>
        <header className="pb-4 mb-1 border-b-2 border-stone-300">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
        <p className="text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-stone-600 mb-4">{project.description}</p>
        </header>
        <h2 className="text-xl font-bold text-stone-700 ">Tasks</h2>
        <div>
            <input className="w-64 px-2 py-1 mx-5 rounded-sm bg-stone-200" ref={inputTask}/>
            <button className="px-4 py-1 text-xs md:text-base rounded-md bg-stone-300 text-stone-800 hover:bg-stone-400 hover:text-stone-800" onClick={(e)=>{
                
                handleAddTask(project.id,inputTask.current.value)
                inputTask.current.value=""
            }}>Add</button>
        </div>
        <div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {project.tasks && project.tasks.map((i,j)=>{
            return(
            <li className="flex justify-between my-4" key={j}>
                <p className="text-stone-800 mb-2">{i}</p>
                <button className="text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" onClick={()=>handleDeleteTask(project.id,i)}>clear</button>
            </li>
            )
        })}  
        </ul>
        </div>
    </main>
    )
}