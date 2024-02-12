import { useState } from 'react'
import './App.css'
import GameBoard from './Components/GameBoard'
import GameLevels from './Components/GameLevels'
import {GAME_DATA} from './Components/Data'

const INITIAL_GAMEBOARD = [[null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],
                           [null,null,null,null,null,null,null,null,null],];

function App() {
  const [turns, setTurns] = useState([]);
  const [activeLevel, setActiveLevel]= useState('')
  
  function returnGameValues(level){
    let gameValues = [];
    
    if(level == 'hard'){
      setActiveLevel('hard');
      gameValues = GAME_DATA[2];
    } 
    else if(level == 'medium'){
      gameValues = GAME_DATA[1];
      setActiveLevel('medium');
    }
    else{
      gameValues = GAME_DATA[0];
      setActiveLevel('easy');
    }
    setTurns(gameValues);
}

  function handleSelectSquare(rowIndex, colIndex, value){
    setTurns((prevTurns)=>{
      const updatedTurns = [{square: {row:rowIndex, col: colIndex, val: value}}, ...prevTurns];
      return updatedTurns;
    })
  } 
  
  function deriveGameboard(){
    let gameBoard = [...INITIAL_GAMEBOARD.map((array) => [...array])];
    
    for(const turn of turns){
      let {square} = turn;
      let {row , col, val} = square;
      gameBoard[row][col] = val;
    } 
    return gameBoard;
  }
  let gameBoard = deriveGameboard();
  
  return (
    <>
      <GameLevels selectLevel={returnGameValues} />
      {activeLevel=="easy" && <GameBoard board={gameBoard} selectedSquare={handleSelectSquare} />}
      {activeLevel=="medium" && <GameBoard board={gameBoard} selectedSquare={handleSelectSquare} />}
      {activeLevel=="hard" && <GameBoard board={gameBoard} selectedSquare={handleSelectSquare} />}
    </>
  )  
}

export default App
