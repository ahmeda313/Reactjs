import { createContext, useState } from "react"

export const UserProgressContext = createContext({
    progress:"",
    showCart:()=>{},
    showCheckout:()=>{},
    hideModal:()=>{}
})


export const UserProgressContextProvider = function({children}){
    const [progress, setProgress] = useState("")

    function showCart(){
        setProgress("cart")
    }
    function showCheckout(){
        setProgress("checkout")
    }
    function hideModal(){
        setProgress("")
    }

    const userProgressCtx = {
        progress,
        showCart,
        showCheckout,
        hideModal
    }

    return(
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}