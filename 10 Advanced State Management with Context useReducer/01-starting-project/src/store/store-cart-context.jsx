import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CreateContext = createContext({
    items:[],
    addToCart:()=>{},
    updateCart:()=>{}
})


function shoppingCartReducer(state,action){
    if(action.type === "ADD_ITEM"){
        
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
          updatedItems.push({
            id: action.payload.id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
          items: updatedItems,
        };

    }

    if(action.type === "UPDATE_CART"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          items: updatedItems,
        };
    
    }

    return state
}


export default function CartContextProvider({children}){

    const [shoppingCartState, dispatchShoppingCart] = useReducer(shoppingCartReducer,{
        items: [],
      })

    
      function handleAddItemToCart(id) {
        dispatchShoppingCart({
            type:"ADD_ITEM",
            payload:{
                id
            }
        })
      }
    
    
      function handleUpdateCartItemQuantity(productId, amount) {
            dispatchShoppingCart({
                type:"UPDATE_CART",
                payload:{
                    productId,
                    amount
                }
            })
      }

    const ctxValue = {
        items:shoppingCartState.items,
        addToCart:handleAddItemToCart,
        updateCart:handleUpdateCartItemQuantity
      }

    return(
        <CreateContext.Provider value={ctxValue}>
            {children}
        </CreateContext.Provider>
    )
}