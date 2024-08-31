
export default function Gameboard({handleSelect, board }){

    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((symbol,colIndex)=><li key={colIndex}>  <button onClick={()=>handleSelect(rowIndex,colIndex)} disabled={symbol?true:false}> {symbol} </button> </li>)}
                </ol>
            </li>)}
      </ol>
    )
}