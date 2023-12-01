import { useState } from "react";
import TableContent from "./components/TableContent"; 

function App(){
   const[inputs, setInputs] = useState({ 
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null  
   });

   function handleChange(identifier, value){
    setInputs((prevState)=>{
        let newObj = {...prevState};
        newObj[identifier] = +value;
        return newObj;
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
                            <label>Initial Investment</label>
                            <input type="number" 
                                   value = {inputs['initialInvestment']>0 ? inputs['initialInvestment']: null } 
                                   onChange = {(event)=> handleChange('initialInvestment', event.target.value)} 
                                   reuired 
                            />
                        </article>
                        <article>
                            <label>Annual Investment</label>
                            <input type="number" 
                                   value = {inputs['annualInvestment']>0 ? inputs['annualInvestment'] : null} 
                                   onChange = {(event)=> handleChange('annualInvestment', event.target.value)}   
                                   required 
                            />
                        </article>
                        <article>
                            <label>Expected Annual Intrest</label>
                            <input type="number" 
                                   value = { inputs['expectedReturn']>0 ? inputs['expectedReturn']: null} 
                                   onChange = {(event)=> handleChange('expectedReturn', event.target.value)} 
                                   required
                            />
                        </article>
                        <article>
                            <label>Duration</label>
                            <input type="number" 
                                   value = {inputs['duration']>0 ? inputs['duration']: null} 
                                   onChange = {(event)=> handleChange('duration', event.target.value)} 
                                   required 
                            />
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
                               <TableContent {...inputs} />
                            </tbody>
                            
                        </table>
                    </div>
                </section>
            </main>
        </>
)
}

export default App;