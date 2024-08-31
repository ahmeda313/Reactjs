import { useState } from "react";
import Input from "./Input.jsx";
import {isNotEmpty, hasMinLength, isEmail} from "../util/validation.js"
import useInput from "../hooks/useInput.js";

export default function Login() {

  // const email = useRef()
  // const password = useRef()
  const {value:email, handleBlur:handleEmailBlur, handleValueChange:handleEmailChange, hasError:emailHasError} = useInput('',(val)=>isEmail(val))
  const {value:password, handleBlur:handlePasswordBlur, handleValueChange:handlePasswordChange, hasError:passwordHasError} = useInput('',(val)=>isNotEmpty(val) && hasMinLength(val,6))


  function handleSubmit(e){
    e.preventDefault()
    if(emailHasError||passwordHasError) return
    // const fd = new FormData(e.target)
    // console.log(Object.fromEntries(fd.entries()))
    // console.log(fd.get("email"))
    // console.log(email.current.value,password.current.value)
    console.log(email, password)
  }

  function handleBlur(identifier){
    setDidEdit((prevEdit)=>{
      return {
        ...prevEdit,
        [identifier]:true
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label={"Email"} id="email" type="email" name="email" value={email} onBlur={handleEmailBlur} onChange={handleEmailChange} error={emailHasError && "please enter valid e-mail"}/>
        <Input label={"password"} id="password" type="password" name="password" value={password} onBlur={handlePasswordBlur} onChange={handlePasswordChange} error={passwordHasError && "please enter valid password"}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
