export default function Gameover({winner,reMatch}){
  return (
    <div id="game-over">
        <h2>Game Over</h2>
        {winner? <p>{winner} won the game</p>: <p>Its a Draw</p>}
        <button onClick={reMatch}> Re-match</button>
    </div>
  )
}
