import { useRef } from "react";
import { styled } from "styled-components";
import NewTask from "./NewTask";

const Div = styled.div`
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    padding: 20px 40px;
`; 

const Divs = styled.div`
    display: flex;
    flex-direction : row;
    margin-top: 1rem;

    & textarea{
        margin: 5px 0 20px 0 ;
        padding: 5px;
        display: block;
        width: 80%;
        height: 1.7rem;
        font-size: 0.85rem;
        background-color: #e3e4df;
        border: none;
        
    }

    & button{
        padding: 10px;
        font-size: 0.9rem;
        border: none;
        border-radius: 5px;
        background-color: #F8F8FF;
        color: #57534e; 
        height: 1.7rem;  

        &:hover{
            color: #1c1917;
        }
    }
`;
export default function Tasks({index, addTask, project, removeTask}){
    const taskRef = useRef();
    function handleClick(){   
        console.log("button clcked!...")
        addTask(index, taskRef.current.value);
        taskRef.current.value= '';
    }
    
    return(
        <Div>
            <h2 style={{color:"#57534e"}}>Tasks</h2>
            <Divs>
                <textarea ref={taskRef} type="text" required />
                <button onClick={handleClick}>Add Task</button>
            </Divs> 
            <ul style={{listStyle:"none"}}>
               { project["tasks"].map((task, taskIndex) => {
                    return (<NewTask 
                                task={task} 
                                index={index} 
                                taskIndex={taskIndex} 
                                removeTask={removeTask} 
                            />
                           )
                    })
               } 
            </ul>
        </Div>
    )
}

