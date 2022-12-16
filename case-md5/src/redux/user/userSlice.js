import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    currentUser:{

    }
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload.data
        })
    }
})