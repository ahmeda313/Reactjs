import Player from "./components/Player.jsx"
import Gameboard from "./components/Gameboard.jsx"
import Log from "./components/Log.jsx"
import Gameover from "./components/Gameover.jsx"

import { useState } from "react"

import { WINNING_COMBINATIONS } from "./winning-combinations.js"


// do not setState by directly manipulating state variable in useState (since it is scheduled---> eg Player.jsx onNameChange) instead pass a callback 
// do not use similar states in multiple components instead lift up the state


function App() {
  const [player, setPlayer] = useState({X:"PLAYER 1",O:"PLAYER 2"})
  const [turns, setTurn] = useState([])

  let winner
  let draw
    
  
  function handleClick(rowI,colI){
    setTurn(prevTurns=>{
      
        let currentPlayer = "X"

        if(prevTurns.length>0 && prevTurns[0].player==="X"){
          currentPlayer = "O"
        }

        return [{square:{row:rowI,col:colI},player:currentPlayer},...prevTurns]
      })

  }

  const currentBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  for(const turn of turns){
    const {square,player} = turn
    currentBoard[square.row][square.col]=player
  }


  for(const combination of WINNING_COMBINATIONS){
    const firstMark = currentBoard[combination[0].row][combination[0].column]
    const secondMark = currentBoard[combination[1].row][combination[1].column]
    const thirdMark = currentBoard[combination[2].row][combination[2].column]

    if(firstMark && firstMark ===secondMark && secondMark === thirdMark ){
        winner = player[firstMark]
        break;
    }
  }

  if(!winner && turns.length===9){
    draw = true
  }

  function reMatch(){
    setTurn([])
  }

  function handleNameChange(symbol,playername){
    setPlayer(prevVal=>{
      return {
        ...prevVal,
        [symbol]:playername
      }
    })
  }

  

  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player  initialPlayerName={player.X} playerSymbol="X" isActive={turns.length==0 ?true: turns[0].player==="O" } onNameChange={handleNameChange}/>
        <Player  initialPlayerName={player.O} playerSymbol="O" isActive={turns.length==0 ?false: turns[0].player==="X" } onNameChange={handleNameChange}/>
      </ol>
      {(winner || draw) && <Gameover winner={winner}  reMatch={reMatch}/>}
      <Gameboard handleSelect={handleClick} board={currentBoard}/>
    </div>
    <Log logs={turns}/>
  </main>
  )
}

export default App
