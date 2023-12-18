// styled with styled-components
import { useRef } from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
    color: #DCDCDC;
    background-color:  #3B3C36; 
    padding: 10px 15px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
`;
const Div = styled.div`
    width: 50%;
    position: relative;
    top: 10vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`; 
const WrapDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;  
    margin-bottom: 20px;
`;
const Label = styled.label`
    color: #171717;
    font-size: 0.8rem;
    font-weight: 700;
`;
const Input = styled.input`
    margin: 5px 0 20px 0 ;
    padding: 5px;
    display: block;
    width: 100%;
    height: 1.7rem;
    font-size: 0.8rem;
    background-color: #e3e4df;
    border: none;
    `;
const TextArea = styled.textarea`
    margin: 5px 0 20px 0 ;
    padding: 5px;
    display: block;
    width: 100%;    
    height: 4rem;
    font-size: 0.85rem;
    background-color: #e3e4df;
    border: none;
`;

export default function AddProject( {addStateToProject} ){
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const formRef = useRef();

    function handleClick(event){
        event.preventDefault();
        addStateToProject(firstRef.current.value, secondRef.current.value, thirdRef.current.value);
    }
    console.log("outputting to check if it reexecutes");
    return(
        <Div id="addProject">
            <form ref={formRef}>
                <WrapDiv id="setButton" >
                    <Button id="cancel-bt" onClick ={(event)=>{ event.preventDefault();
                        formRef.current.reset()}} >Cancel</Button> 
                    <Button type="submit" onClick={handleClick}>Save</Button>
                </WrapDiv>
                <Label htmlFor="#title">TITLE
                    <Input 
                        ref={firstRef} 
                        type="text" 
                        id="title" 
                        required />
                </Label>
                <Label htmlFor="#desc">DESCRIPTION
                    <TextArea 
                        ref={secondRef} 
                        type="text" 
                        id="desc"
                        required/>
                </Label>
                <Label htmlFor="#date">DATE
                    <Input 
                        ref={thirdRef} 
                        type="date" 
                        id="date"
                        required />
                </Label>
            </form>
        </Div>
    )
}