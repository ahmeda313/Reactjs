export default function Header({handleClick, projectsExist}){
    return(
        <main className=" w-screen h-screen my-8 flex flex-col items-center gap-8">
            <img className="w-16 h-16 object-contain" src="logo.png" />
            {!projectsExist && <h2 className="text-xl font-bold text-stone-700 my-4">No projects</h2>}
            <p className="text-stone-600 mb-4">Create project or select one</p>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleClick}>Create new project</button>
        </main>
        
    )
}