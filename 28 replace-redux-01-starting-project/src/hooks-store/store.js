import { useEffect, useState } from "react"


let globalState = {}
let listeners = []
let actions = {}


export function useStore(){
    const setState = useState(globalState)[1]

    useEffect(()=>{
        listeners.push(setState)

        return ()=>{
            listeners = listeners.filter(l=>l!==setState)
        }
    },[])

    const dispatch = (actionIdentifier, prodId)=>{
        const newState = actions[actionIdentifier](globalState,prodId)
        globalState = {...globalState, ...newState}

        for(const listener of listeners){
            listener(globalState)
        }
    }

    return [globalState, dispatch]
}

export function initStore(userActions, initialState){
    if(initialState){
        globalState = { ...globalState, ...initialState }
    }
    actions = { ...actions, ...userActions }
}