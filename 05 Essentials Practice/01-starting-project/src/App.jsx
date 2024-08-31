import Inputs from "./components/Inputs"
import Result from "./components/Result"
import { useState } from "react"
import { calculateInvestmentResults} from "./util/investment"


function App() {

  const [values, setValues] = useState({
    InitialInvestment:10000,
    AnnualInvestment:1200,
    ExpectedReturn:6,
    Duration:1,
  })

  const isValid = values.Duration >=1

  function onValueChange(obj){
    setValues(prevObjs=>{
      return {...prevObjs,...obj}
  })
  }

  const inputData = {
    initialInvestment:values.InitialInvestment,
    annualInvestment:values.AnnualInvestment,
    expectedReturn:values.ExpectedReturn,
    duration:values.Duration
  } 

  const annualData = calculateInvestmentResults(inputData)

  return (
    <>
        <Inputs onChange={onValueChange} Inputs={values}/>
        
        {!isValid && <p className="center">Duration must be greater than or equal to 1</p>}
        {isValid && <Result data={annualData}/>}
    </>
  )
}

export default App
