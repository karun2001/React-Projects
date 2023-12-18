// styled with vanilla css
import notebookImg from '../19468018.jpg';
import { styled } from 'styled-components';

const Button = styled.button`
    color: #DCDCDC;
    background-color:  #3B3C36; 
    padding: 10px 15px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
`;
export default function HomeScreen({handleAddProject}){
    return(
        <div id="homeScreen">
            <img width="100px" src={notebookImg} alt="pen and notebook" />
            <h3>No project selected</h3>
            <p>Select a project or get started with new one</p>
            <Button onClick={handleAddProject}>Create New Project</Button>
        </div>
    );
}

