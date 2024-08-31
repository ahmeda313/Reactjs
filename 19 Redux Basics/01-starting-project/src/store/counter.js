import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {counter:0,showCounter:true}


const counterSlice = createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increament(state){
            state.counter++
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        decreament(state){
            state.counter--
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice