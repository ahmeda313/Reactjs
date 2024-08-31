import Input from "./Input.jsx"


export default function Inputs({onChange,Inputs}){

    return(
        <div id="user-input">
            <div className="input-group">
            <Input onValueChange={onChange} inputValue={Inputs} labelName="Initial Investment"/>
            <Input onValueChange={onChange} inputValue={Inputs} labelName="Annual Investment"/>
            </div>

            <div className="input-group">
            <Input onValueChange={onChange} inputValue={Inputs} labelName="Expected Return"/>
            <Input onValueChange={onChange} inputValue={Inputs} labelName="Duration"/>
            </div>

        </div>
    )
}