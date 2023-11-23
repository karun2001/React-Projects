import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";


function deriveActivePlayer(gameTurns){
  let activePlayer = 'X';
  if( gameTurns.length > 0 &&  gameTurns[0].player === 'X'){
    activePlayer = 'O';
  }
  return activePlayer; 
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer =  deriveActivePlayer(gameTurns);

  let winner = null;      

  let gameBoard = initialGameBoard;
  for(const turn of gameTurns) {
      const { square, player} = turn;
      const { col, row } = square;
      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
      firstSymbol && 
      firstSymbol == secondSymbol && 
      firstSymbol == thirdSymbol){
        winner = <li>{firstSymbol} is the Winner...!!</li>
    }
  }
  

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => { 
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName="Player 1" 
          symbol="X" 
          isActive={activePlayer === "X"}
        />
        <Player 
          initialName="Player 2" 
          symbol="O" 
          isActive={activePlayer === "O"}
        />
      </ol>
      {winner}
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board={gameBoard} 
      />
    </div>
    <Log turns = {gameTurns} />  
  </main>
  );
}

export default App