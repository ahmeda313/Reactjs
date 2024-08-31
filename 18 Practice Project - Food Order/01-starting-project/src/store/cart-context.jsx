import { createContext, useReducer, useState } from "react"

export const CartContext = createContext({
    items:[],
    addToCart:()=>{},
    updateCart:()=>{},
    clearCart:()=>{}
})

function cartReducer(state,action){
    if(action.type==="ADD_ITEM"){
        const itemIndex = state.findIndex(i=>i.name===action.itemName)
        if(itemIndex>=0){
            const newItems = [...state]
            newItems[itemIndex].quantity++
            console.log(newItems[itemIndex].quantity)
            return newItems
        }else{
            return [...state,{
                name:action.itemName,
                quantity:1,
                price:action.itemPrice
            }]
        }

    }
    if(action.type==="UPDATE_ITEM"){
        const itemIndex = state.findIndex(i=>i.name===action.itemName)
        const newItems = [...state]
        const newQuantity = newItems[itemIndex].quantity+(action.value)
        if(newQuantity===0){
            return newItems.filter(i=>i.name!==action.itemName)
        }else{
            newItems[itemIndex].quantity = newQuantity
            console.log(newItems[itemIndex].quantity)
            return [...newItems]
        }

    }
    if(action.type==="CLEAR_CART"){
        return []
    }
    return state

}

export const CartContextProvider = function ({children}){

    const [cart, dispatchCartAction] = useReducer(cartReducer,[])

    function addItemToCart(item,price){
        dispatchCartAction({type:"ADD_ITEM",itemName:item,itemPrice:price})
    }
  
    function updateItemsInCart(item,value){
        dispatchCartAction({type:"UPDATE_ITEM",itemName:item,value:value})
    }

    function clearCart(){
        dispatchCartAction({type:"CLEAR_CART"})
    }
  
    const ctxValue ={
      items:cart,
      addToCart:addItemToCart,
      updateCart:updateItemsInCart,
      clearCart
    }
  
    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )
}