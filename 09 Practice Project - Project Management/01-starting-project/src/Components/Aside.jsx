export default function Aside({projects,showInput,showProject,projectId}){


    return(
        <aside className="h-screen w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={showInput}>+ Add projects</button>

            <ul className="mt-8">
            {projects.map(i=>{
                let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                if(i.id===projectId){
                    classes += " bg-stone-800 text-stone-200 "
                }
               return(<button className={classes} key={i.id} onClick={()=>showProject(i.id)}> {i.title}</button>)
            })}
            </ul>
        </aside>
    )
}