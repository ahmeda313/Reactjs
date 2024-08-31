
export default function Input({labelName, onValueChange, inputValue}){

    function handleChange(e){
        const obj ={
            [e.target.id]:+e.target.value
        }
        onValueChange(obj)

    }

    const id = labelName.split(" ").join("")

    return(
        <p>
            <label htmlFor={labelName}>{labelName}</label>
            <input type="number" id={id} value={inputValue[id]} onChange={handleChange}/>
        </p>
    )
}