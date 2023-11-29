import { useState } from "react";
import TableContent from "./components/TableContent"; 
function App(){
   const[inputs, setInputs] = useState({ 
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0  
   });
   function handleChange(identifier, value){
    setInputs((prevState)=>{
        let newObj = {...prevState};
        console.log("old object", newObj);
        newObj[identifier] = value;
        console.log("new object",newObj);
        return {...newObj}
    }); 
   }

return (
        <>
            <header>
                <h1>Investment Calculator</h1>
                <img src="" alt=""/>
            </header>
            <main>
                <section id="inputs">
                    <div id="input-div">
                        <article>
                            <label htmlFor="#input1" >Initial Investment</label>
                            <input id="input1" type="text" value={inputs['initialInvestment']} onChange={(event)=> handleChange('initialInvestment', event.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="input2" >Annual Investment</label>
                            <input name="input2" type="text" value={inputs['annualInvestment']} onChange={(event)=> handleChange('annualInvestment', event.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="input3" >Expected Return</label>
                            <input name="input3" type="text" value={inputs['expectedReturn']} onChange={(event)=> handleChange('expectedReturn', event.target.value)}/>
                        </article>
                        <article>
                            <label htmlFor="input4">Duration</label>
                            <input name="input4" type="text" value={inputs['duration']} onChange={(event)=> handleChange('duration', event.target.value)} />
                        </article>
                    </div>
                </section>
                <section id="table">
                    <div id="table-div">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" >Year</th>
                                    <th scope="col" >Investment Value</th>
                                    <th scope="col" >Intrest (year)</th>
                                    <th scope="col" >Total Intrest</th>
                                    <th scope="col" >Invested Capital</th>
                                </tr>
                            </thead>
                            <tbody>
                               <TableContent inputValues={inputs}/>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
)
}

export default App;