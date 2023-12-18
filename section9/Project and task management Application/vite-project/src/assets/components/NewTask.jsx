import {styled} from "styled-components";
const Div = styled.div`
    display: flex;
    flex-directon: row;
    background-color: #e3e4df;
    justify-content: space-between;
    padding: 5px 10px;
    color: #57534e; 
`;
const Li = styled.li`
    font-size: 0.9rem;
    font-weight: 300;
`;
const Button = styled.button`
    padding: 0 10px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    background-color: #e3e4df;
    color: #57534e; 
    height: 1.7rem;  

    &:hover{
        color: #1c1917;
    }
`;
export default function NewTask({task, removeTask, index, taskIndex}){

    return(
        <Div>
          <Li id={index} key={Math.random()}>{task}</Li>
          <Button onClick={()=> removeTask(index, taskIndex) }>Clear</Button>
        </Div>
    )
}