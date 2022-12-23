import {createSlice} from "@reduxjs/toolkit";
import {getLikes, likeBlog} from "../../services/likeService";


const initialState = {
    likes: []
}
const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(likeBlog.fulfilled, (state, action) => {
            state.likes.push(action.payload)
        });
        builder.addCase(getLikes.fulfilled, (state, action) => {
            state.likes = action.payload.data
            console.log('state.likes', state.likes)
        });
        // builder.addCase(deleteLikes.fulfilled, (state, action) => {
        //     state.likes = action.payload.data
        //     console.log('state.likes', state.likes)
        // });
    }
})
export default likesSlice.reducer
