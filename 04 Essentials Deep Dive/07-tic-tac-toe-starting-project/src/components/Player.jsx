import { useState } from "react"


export default function Player({initialPlayerName, playerSymbol, isActive, onNameChange}){

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialPlayerName)

    function handleClick(){
        setIsEditing(edit=>!edit)
        // console.log(isEditing)
        if(isEditing){
            onNameChange(playerSymbol,playerName)
        }
    }

    function handleNameChange(e){
        setPlayerName(e.target.value)
    }


    return (
    <li className={isActive?"player active":"player"}>
        <span>
            {!isEditing ?<span className="player-name">
                {playerName}
            </span>: <input type="text" value={playerName} onChange={handleNameChange}/>}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={handleClick} >{!isEditing? "Edit" : "Save"}</button>
    </li>
    )
}