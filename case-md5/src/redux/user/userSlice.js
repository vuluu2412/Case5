import {createSlice, current} from "@reduxjs/toolkit";
import {login} from "../../services/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload.data
            console.log(action,'userslice')
            localStorage.setItem('user',JSON.stringify(action.payload.data))
        })
    }
})
export default userSlice.reducer