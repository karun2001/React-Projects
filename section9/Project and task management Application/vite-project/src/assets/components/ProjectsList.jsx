import { styled } from "styled-components";
const Button = styled.button`
    color: #DCDCDC;
    background-color: #171717; 
    font-size: 0.9rem;
    border: none;
    width: 100%;
    border-radius: 5px;
    text-align: left;
    padding: 10px 15px;

    &: hover{
        background-color: #3B3C36;
    }
`;
export default function ProjectList({projectList, handleEdit}){     
    

    return(
        <ul style={{width:"100%", padding:"20px"}}>
            { projectList["values"].map( object => <li 
                style={{ listStyle:"none", marginBottom:"1.5rem", width:"100%"}} 
                key={object.title} >
                    <Button onClick = {()=> handleEdit(object.title) }>
                        {object.title}
                    </Button>
                </li> )}
        </ul>
    )
}