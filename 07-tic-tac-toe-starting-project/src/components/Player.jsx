import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
        setIsEditing(isEditing => !isEditing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }       
    let editablePlayerName = <span className="playerName">{playerName}</span>

    if(isEditing){
        editablePlayerName = (
            <input type="text" value={playerName} required onChange={handleChange} />        
        )
    }
    
    return(
        <li className={isActive? 'active' : undefined} >
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick} >{isEditing? "Save": "Edit"}</button>
        </li>
    );
}