import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addBlogs, getBlogs} from "../../services/blogsService";
const initialState = {
    blogs:[]
}
const blogsSlice= createSlice({
    name:'blogs',
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(getBlogs.fulfilled,(state,action)=>{
            state.blogs = action.payload.data
        });
        builder.addCase(addBlogs.fulfilled,(state,action)=>{
            state.blogs.push(action.payload)
        });
    }
})
export default blogsSlice.reducer;