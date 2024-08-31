import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Inputs";
import Aside from "./Components/Aside";
import Project from "./Components/Project";

function App() {

  const [mainState, setMainState] = useState({
    currentProjectId:undefined,
    projects:[{id:Math.random(),date:"2024-08-06", description: "React helps you build web applications, react native which is based on react helps you build mobile Apps",title:"Learn React",tasks:["Learn Components","Learn useState()","Learn useRef()","Learn forwardRef","Learn useImperativeHandler()","Learn portals","Learn Tailwind css"]}]
})

  function showInput(){
    setMainState(prevState=>{
      return{
        ...prevState,
        projects:[...prevState.projects],
        currentProjectId:"input"
      }
    })
  }

  function cancelInput(){
    setMainState(prevState=>{
      return{
        ...prevState,
        projects:[...prevState.projects],
        currentProjectId:undefined
      }
    })
  }

  function addProject(newProject){
    setMainState(prevState=>{
      return {
        ...prevState,
        projects:[...prevState.projects,{...newProject}]
      }
    })
  }

  function showProject(id){
    console.log(mainState.projects)
    setMainState(prevState=>{
      return{
        ...prevState,
        projects:[...prevState.projects],
        currentProjectId:id
      }
    })
  }

  function deleteProject(id){
    setMainState(prevState=>{
      return{
        ...prevState,
        projects:prevState.projects.filter(i=>i.id!==id),
        currentProjectId:undefined

      }
    })
}


function addTask(id,task){
  const index = mainState.projects.findIndex(i=>i.id===id)
  const updatedState = {
    ...mainState,
    projects:[...mainState.projects]
  }
  if(!updatedState.projects[index].tasks){
    updatedState.projects[index].tasks=[]
    updatedState.projects[index].tasks.push(task)
  }
  else{
    updatedState.projects[index].tasks=[...mainState.projects[index].tasks,task]
  }
  setMainState(updatedState)
}

function deleteTask(id,task){
  const index = mainState.projects.findIndex(i=>i.id===id)
  const updatedState = {
    ...mainState,
    projects:[...mainState.projects]
  }
  updatedState.projects[index].tasks = mainState.projects[index].tasks.filter(i=>i!==task)
  
  setMainState(updatedState)
}

let main
if(mainState.currentProjectId===undefined){
  main = <Header handleClick={showInput} projectsExist={mainState.projects.length!==0}/>
}
else if(mainState.currentProjectId==="input"){
  main = <Input  handleCancel={cancelInput} addProject={addProject}/>
}
else{
  const id = mainState.currentProjectId
  const project = mainState.projects.find(i=>i.id===id)
  main = <Project project={project} handleDeleteProject={deleteProject}  handleAddTask={addTask} handleDeleteTask={deleteTask} />
}
  
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
    <Aside showInput={showInput} projectId={mainState.currentProjectId} projects={mainState.projects} showProject={showProject}/>
    {main}
    </main>
    </>
  );
}

export default App;
