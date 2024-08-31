import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter"
import authSlice from "./auth"


const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store

// ----------- without @redux/toolkit
// function reducer(state=initialState,action){
//     if(action.type==="INCREASE"){
//         return {
//             ...state,
//             counter:state.counter+1
//         }
//     }
//     if(action.type==="increaseBy5"){
//         return {
//             ...state,
//             counter:state.counter+action.amount
//         }
//     }
//     if(action.type==="toggle"){
//         return{
//             ...state,
//             showCounter:!state.showCounter
//         }
//     }
//     if(action.type==="DECREASE"){
//         return {
//             ...state,
//             counter:state.counter-1
//         }
//     }
//     return state
// }

// const store = createStore(reducer)

// const store = createStore(counterSlice.reducer) adding multiple slices is hard 

