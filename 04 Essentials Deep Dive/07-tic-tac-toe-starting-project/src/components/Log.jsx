export default function Log({logs}){
    return(
        <ol id="log">
            {logs.map(({square,player},i)=><li key={square.row +""+square.col}>{player} selected {square.row}, {square.col}</li>)}
        </ol>
    )
}