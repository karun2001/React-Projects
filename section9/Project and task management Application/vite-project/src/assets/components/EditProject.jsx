import {styled} from "styled-components";
import Tasks from "./Tasks";

const Div = styled.div`
    width: 30rem;
    margin: 4rem; 
    color: black;
`;
const Header = styled.header`
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom : 2px solid #a8a29e;
    padding: 20px 40px;

`;
const DivN = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const H1 = styled.h1`
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color:  #57534e;
    margin-bottom: 2rem;
`;
const Button = styled.button`
    padding: 10px 15px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    background-color: #F8F8FF;
    color: #57534e;   
    
    &:hover{
        color: #1c1917;
    }
`;
const P = styled.p`
    margin-bottom: 1rem;
    color: #a8a29e;
`;
const Ps = styled.p`
    color: #57534e;
    whitespace: pre-wrap;  
`;
export default function EditProject({project, index, addTask, removeProject, removeTask}){
    
    console.log("the selected object is",project);
    const formattedDate = new Date(project.date).toLocaleDateString('en-US',
    {
     year: 'numeric',
     month: 'short',
     day: 'numeric'
    });
    return(
        <Div>
            <Header>
                <DivN>
                    <H1>{project.title}</H1>
                    <Button onClick={()=> removeProject()}>Delete</Button>
                </DivN>
                <P>{formattedDate}</P>
                <Ps >{project.description}</Ps>
            </Header>
            <Tasks  index={index} addTask={addTask} project={project} removeTask={removeTask}/>
        </Div>
    )
}