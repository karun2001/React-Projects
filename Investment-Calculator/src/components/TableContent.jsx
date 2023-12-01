export default function TableContent({initialInvestment, annualInvestment, expectedReturn, duration}){

    let initialValues = {
        investedValue : [initialInvestment],
        intrest : [0],
        totalIntrest : [0],
        investedCapital : [initialInvestment]
    }
    const tableData = [];

    function outputTable(iniValues){
        let {investedValue, intrest, totalIntrest, investedCapital} = {...iniValues};
        for(let i=1; i<=duration; i++){
            investedCapital[i] = investedCapital[i-1]+annualInvestment*i;
            intrest[i] = investedCapital[i-1] *expectedReturn/100;
            totalIntrest[i] = totalIntrest[i-1]+intrest[i];
            investedValue[i] = totalIntrest[i] + investedCapital[i];
            tableData.push(
                <tr>
                    <td>{i}</td>
                    <td>{formatter.format(investedValue[i])}</td>
                    <td>{formatter.format(intrest[i])}</td>
                    <td>{formatter.format(totalIntrest[i])}</td>
                    <td>{formatter.format(investedCapital[i])}</td>
                </tr>);
        }
    }

    outputTable(initialValues);
    
    return(
        <>{tableData}</>
    )
}

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });