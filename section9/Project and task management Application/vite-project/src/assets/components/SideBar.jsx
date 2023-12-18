import ProjectList from './ProjectsList';
import { styled } from 'styled-components';

const Button = styled.button`
    color: #DCDCDC;
    background-color: #3B3C36; 
    padding: 10px 15px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
`;
export default function sideBar({handleAddProject, projectList, handleEdit }){
    return(
        <aside id="sideBar">
            <h2>YOUR PROJECTS</h2> 
            <Button onClick={handleAddProject} >+ Add Project</Button>
            <ProjectList projectList={ projectList} handleEdit={handleEdit} />
        </aside>
    )
}