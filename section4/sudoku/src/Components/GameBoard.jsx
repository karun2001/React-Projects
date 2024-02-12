import { useState } from "react";
export default function GameBoard({board, selectedSquare}){

    const [selected, setSelect] = useState({row:-1,col:-1,lowR:9,lowC:9})
    console.log("gameboard",board);
    function highlightSquares(rowIndex, colIndex){
        console.log("highlighting squares");
        let lowR = (rowIndex<3?-1:(rowIndex<6?2:5))
        let lowC = (colIndex<3?-1:(colIndex<6?2:5))
        setSelect({row: rowIndex,
                   col: colIndex,
                   lowR: lowR,
                   lowC: lowC});
    }
    
    function handleChange(event){
        
    }

    return( 
    <div id="game-board">   
    <ol id="ol1">
    {  
        board.map((row, rowIndex)=>(
            <li key={rowIndex}>
                <ol id="ol2">
                {
                    row.map((value, colIndex)=>(
                        <li key={colIndex} >
                            <button onClick={()=>highlightSquares(rowIndex, colIndex)}>
                                <input 
                                    type="text" 
                                    value={ board[rowIndex][colIndex]}
                                    style={{ backgroundColor: 
                                        (selected.row==rowIndex && selected.col==colIndex)? '#1ca9c9'
                                            :(selected.row==rowIndex || selected.col==colIndex)?'#B0E0E6'
                                                :(rowIndex>selected.lowR && rowIndex<(selected.lowR+4) &&
                                                 (colIndex>selected.lowC && colIndex<(selected.lowC+4)) ) ? '#B0E0E6': "white"
                                    }} 
                                    onChange={()=>{selectedSquare(rowIndex, colIndex, value)}}
                                />
                            </button>
                        </li>
                    ))
                }
                </ol>
            </li>
        ))
    }
    </ol>
        <div id="hbar"></div>
        <div id="hbar"></div>
        <div id="hbar"></div>
        <div id="hbar"></div>
        
        <div id="vbar" ></div>
        <div id="vbar" ></div>
        <div id="vbar" ></div>
        <div id="vbar" ></div>

    </div>  );
}


