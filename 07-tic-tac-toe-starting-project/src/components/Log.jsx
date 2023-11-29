export default function Log({turns}){
    
    let logItems = null;
    logItems =  turns.map((turn) => 
        <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected row {turn.square.row}, col {turn.square.col}.
        </li>)
    return <ol id="log">
        {logItems}
    </ol>    
}