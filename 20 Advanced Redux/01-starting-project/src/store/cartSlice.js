import {createSlice} from "@reduxjs/toolkit"


const initalCartState = {
items:[{name:"Test",description:"This is a first product - amazing!",price:6, quantity:3}],
showCart:false,
change:false
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initalCartState,
    reducers:{
        replaceCart(state,action){
            state.items = action.payload
        },
        toggleCartModal(state){
            state.showCart = !state.showCart
        },
        addProduct(state,actions){
            const index = state.items.findIndex(i=>i.name===actions.payload)
            state.change = true
            if(index>-1){
                state.items[index].quantity++
            }else{
                state.items.push(actions.payload)
            }
        },
        removeProduct(state,actions){
            const index = state.items.findIndex(i=>i.name===actions.payload)
            state.change = true
            if(state.items[index].quantity===1){
                state.items = state.items.filter(i=>i.name!==actions.payload)
            }else{
                state.items[index].quantity--
            }

        }
    }
})


export default cartSlice