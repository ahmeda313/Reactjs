import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get("mode") || "login"
  const data = await request.formData()

  const authData = {
    email:data.get("email"),
    password:data.get("password")
  }

  const response = await fetch("http://localhost:8080/"+mode,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(authData)
  })

  const resData = await response.json()

  localStorage.setItem("token",resData.token)
  
  const expiryDate = new Date()
  expiryDate.setHours(expiryDate.getHours()+1)
  localStorage.setItem("expiryDate",expiryDate.toISOString())
  
  if(response.status===422 || response.status===401){
    return response
  }

  if(!response.ok){
    throw json({message:"could on authenticate"},{ status:500})
  }

  // authenticate

  return redirect("/")
}