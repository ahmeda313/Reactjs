import { uiActions } from "./index"
import { cartActions } from "./index"

export function sendCartData(cartItems){
    
    return async(dispatch)=>{

        dispatch(uiActions.setNotification({status:"pending",title:"Please wait", message:"updating your cart..."}))

        async function updateCart(){
            const response = await fetch("https://transactiondetails-3f121-default-rtdb.firebaseio.com/cart.json",{
                method:"PUT",
                body:JSON.stringify(cartItems)
              })
        
              if(!response.ok){
                throw new Error("unable to update cart")
              }
        }

        try{
            await updateCart()
            dispatch(uiActions.setNotification({status:"success",title:"Added", message:"your cart updated"}))
        }catch(e){
            dispatch(uiActions.setNotification({status:"error",title:"Failed", message:"failed to update cart"}))
        }

  
    }
}

export function fetchCartData(){

    return async(dispatch)=>{

        async function fetchData(){
            const response = await fetch("https://transactiondetails-3f121-default-rtdb.firebaseio.com/cart.json")

            if(!response.ok){
                throw new Error("unable to fetch cart data")
            }
            const data = await response.json()
            console.log(data)
            return data || []
        }
        try{
            const data = await fetchData()
            dispatch(cartActions.replaceCart(data))
        }catch(err){
            dispatch(uiActions.setNotification({status:"error",title:"Failed", message:"failed to update cart"}))
        }
    }
}
