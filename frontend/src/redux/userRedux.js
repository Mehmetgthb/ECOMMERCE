import {createSlice} from "@reduxjs/toolkit"


const userSlice=createSlice({
    name:"User",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },

    reducers:{  
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSucces:(state,action)=>{
            state.isFetching=false
            state.currentUser=action.payload

        },
        loginFailure:(state)=>{
           state.isFetching=false
            state.error=true
        },
        loginQuit:(state)=>{
            state.currentUser=null
        },
    },
})


export const {loginStart,loginSucces,loginFailure,loginQuit}=userSlice.actions
export default userSlice.reducer
