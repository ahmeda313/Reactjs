import { useState } from "react";

export default function useInput(initialValue,validationFn){
    const [value, setValue] = useState(initialValue)
    
    const [didEdit, setDidEdit] = useState(false)
  
    function handleValueChange(e){
      setDidEdit(false)
      setValue(e.target.value)
    }
    function handleBlur(){
        setDidEdit(true)
    }

    return {
        value,
        handleBlur,
        handleValueChange,
        hasError: didEdit && !validationFn(value) 
    }
}