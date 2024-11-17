import { useRef, useState } from "react"

export default function SearchList({items, children}){
    const searchTimeout = useRef()

    const [searchTerm, setSearchTerm] = useState('')


    const searchRes = items.filter(i=>JSON.stringify(i).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(e){
        if(searchTimeout.current){
            clearTimeout(searchTimeout.current)
        }

        searchTimeout.current = setTimeout(()=>{
            searchTimeout.current = null
            setSearchTerm(e.target.value)
            
        },500)
    }


    return(
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchRes.map(item=><li key={item.id}>{children(item)}</li>)}
            </ul>
        

        </div>
    )
}