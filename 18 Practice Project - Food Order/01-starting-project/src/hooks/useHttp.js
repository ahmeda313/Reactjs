import { useCallback, useEffect, useState } from "react"

async function sendHttpRequest(url, config){
    const response = await fetch(url, config)
    const resData = await response.json()

    if(!response.ok){
        throw new Error(resData.message||"unable to fetch")
    }

    return resData
}


export default function useHttp(url,config,initialValue){
    const [data, setData] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    function clearData(){
        setData(initialValue)
    }

    const sendRequest = useCallback(async function sendRequest(reqBody){
        setIsLoading(true)
        try{
            const resData = await sendHttpRequest(url,{...config,body:reqBody})
            setData(resData) 
        }catch(error){
            setError(error.message||"something went wrong")
        }
        setIsLoading(false) 
    },[url,config])

    useEffect(()=>{
        if(config.method!=="POST"){
            sendRequest()
        }
    },[sendRequest,url,config])

    return{
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }

}