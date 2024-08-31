import { useRef } from "react"
import Modal from "./Modal"


export default function Input({handleCancel, addProject}){

    const modal = useRef()

    const inputTitle = useRef()
    const inputDesc = useRef()
    const inputDate = useRef()

    function handleSave(){
        if(inputTitle.current.value.trim() === "" || inputDesc.current.value.trim() === "" || inputDate.current.value.trim() === ""){
            modal.current.open()
            return 
        }

        const obj = {
            title :inputTitle.current.value,
            description :inputDesc.current.value,
            date : inputDate.current.value,
            id : Math.random()
        }
        addProject(obj)
        inputTitle.current.value=""
        inputDesc.current.value=""
        inputDate.current.value=""
    }

    return(
        <>
        <Modal ref={modal}>
            <h1 className="text-3xl font-bold text-stone-800 ">Error</h1>
            <p className="text-stone-700 my-8 mx-8">please do not submit empty values</p>
        </Modal>
        <main className="w-2/3 h-screen my-8 flex flex-col">
            <menu className="flex items-center justify-end gap-4 my-1">
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleSave}>Save</button>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-300 text-stone-800 hover:bg-stone-400 hover:text-stone-800" onClick={handleCancel} >Cancel</button>
            </menu>

            <p className="flex flex-col my-4">
            <label className="text-sm font-bold uppercase text-stone-500" htmlFor="title">Title</label>
            <input ref={inputTitle} className="p-1 border-b-2 rounded-sm border-stone-300  bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" id="title" />
            </p>
            <p className="flex flex-col my-4">
            <label className="text-sm font-bold uppercase text-stone-500" htmlFor="desc">Description</label>
            <textarea ref={inputDesc} className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" id="desc"></textarea>
            </p>

            <p className="flex flex-col my-4">

            <label className="text-sm font-bold uppercase text-stone-500" htmlFor="date">Date</label>
            <input ref={inputDate} className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" id="date" type="date" />
            </p>
        </main>
        </>
    )
}