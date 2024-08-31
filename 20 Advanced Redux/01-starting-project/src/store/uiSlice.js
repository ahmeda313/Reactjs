import {createSlice} from "@reduxjs/toolkit"


const uiSlice = createSlice({
    name:"UI",
    initialState:{notification:false},
    reducers:{
        setNotification(state,actions){
            state.notification = actions.payload
        }
    }
})

export default uiSlice