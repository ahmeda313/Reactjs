import { useState, useRef }  from "react"

export default function Player() {

  const [name, setName] = useState(null)

  const playerName = useRef()

  function handleClick(){
    setName(playerName.current.value)
  }


  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
