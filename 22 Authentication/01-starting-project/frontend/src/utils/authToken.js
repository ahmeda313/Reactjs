import { redirect } from "react-router-dom"

export function getTokenDuration(){
    const expiryDate = localStorage.getItem("expiryDate")
    const expiration = new Date(expiryDate)
    const now = new Date()
    const duration = expiration.getTime() - now.getTime()
    return duration
}

export function getAuthToken(){

    const duration = getTokenDuration()

    if(duration < 0){
        return "EXPIRED"
    }
    return localStorage.getItem("token")
}

export function loadToken(){
    const token = getAuthToken()
    if(token==="EXPIRED"){
        return null
    }
    return token
}

export function checkAuthLoader(){
    const token = getAuthToken()
    if(!token){
        return redirect("/auth")
    }
    return null
}