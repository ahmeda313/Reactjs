
import { createSlice } from "@reduxjs/toolkit"


const initialAuthState = {
    isAuthenticated:false
}

const authSlice = createSlice({
    name:"Auth",
    initialState:initialAuthState,
    reducers:{
        logIn(state){
            state.isAuthenticated = true
        },
        logOut(state){
            state.isAuthenticated = false
        }
    }
})



export default authSlice
