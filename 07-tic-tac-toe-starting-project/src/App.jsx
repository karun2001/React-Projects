import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";



const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Plaer 1',
  O: 'Player 2'
}

function App() {

  const [players, setPlayers] = useState({
    'X': PLAYERS.X,
    'O': PLAYERS.O
  });

  const [gameTurns, setGameTurns] = useState([]);
  
  function deriveActivePlayer(gameTurns){
    let activePlayer = 'X';
    if( gameTurns.length > 0 &&  gameTurns[0].player === 'X'){
      activePlayer = 'O';
    }
    return activePlayer; 
  }
  
  function deriveGameBoard(gameTurns){
    
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
    for(const turn of gameTurns) {
      const { square, player} = turn;
      const { col, row } = square;
      gameBoard[row][col] = player;
    }
    return gameBoard;
  }

  function deriveWinner(gameBoard, players){
    let winner;      

    for(const combination of WINNING_COMBINATIONS){
      const firstSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

      if(
        firstSymbol && 
        firstSymbol === secondSymbol && 
        firstSymbol === thirdSymbol
      ){
        winner = players[firstSymbol];
      }
    }
    return winner;
  }

  function handleRestart(){
    setGameTurns([]);
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

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }
  

  let  gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  const activePlayer =  deriveActivePlayer(gameTurns);
  

  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName={PLAYERS.X} 
          symbol="X" 
          isActive={activePlayer === "X"}
          onChangeName={handlePlayerNameChange}
        />
        <Player 
          initialName={PLAYERS.O} 
          symbol="O" 
          isActive={activePlayer === "O"}
          onChangeName={handlePlayerNameChange}
        />
      </ol>
      {(winner || hasDraw) && <GameOver winner= {winner} onRestart={handleRestart}/>}
      <GameBoard 
        onSelectSquare={ handleSelectSquare } 
        board={ gameBoard } 
      />
    </div>
    <Log turns = {gameTurns}  />  
  </main>
  );
}

export default App