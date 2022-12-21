import {createSlice, current} from "@reduxjs/toolkit";
import {login, register} from "../../services/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload.data
            console.log(action.payload.data, 'login')
                localStorage.setItem('user', JSON.stringify(action.payload.data))
        });
        builder.addCase(register.fulfilled, (state, action) => {
            // console.log(action.payload, 're')
            state.currentUser = action.payload
            // console.log(action, 'register')
        })
    }
})
export default userSlice.reducer