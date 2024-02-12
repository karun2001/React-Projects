export default function GameLevels({selectLevel}){

    return(
        <nav>
            <ul id="game-levels-list">
                <li>Difficulty</li>
                <li><button onClick={()=>{selectLevel('easy')}}>Easy</button></li>
                <li><button onClick={()=>selectLevel('medium')}>Medium</button></li>
                <li><button onClick={()=>selectLevel('hard')}>Hard</button></li>
            </ul>
            
        </nav>
    )
}
