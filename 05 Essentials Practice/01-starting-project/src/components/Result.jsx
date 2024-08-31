import { formatter} from "../util/investment"


export default function Result({data}){


    const initialInvestment  = data[0].valueEndOfYear - data[0].annualInvestment - data[0].interest

    return(
        <table id="result">
            <thead>
                <tr>
                <td>Year</td>
                <td>Investment value</td>
                <td>Intrest (Year)</td>
                <td>Total Intrest</td>
                <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>

            {data.map(({annualInvestment,interest,valueEndOfYear,year},i)=>{

                const totalIntrest = valueEndOfYear - annualInvestment * year - initialInvestment
                const totalAmountInvested = valueEndOfYear - totalIntrest

                    return(
                        <tr key={i}>
                        <td>{year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>)

            })}

            </tbody>
        </table>
    )
}