import {createSlice, current} from "@reduxjs/toolkit";
import {login} from "../../services/userService";

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
export default userSlice.reducer