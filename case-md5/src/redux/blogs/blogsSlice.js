import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addBlogs, deleteBlogs, getBlogs} from "../../services/blogsService";

const initialState = {
    blogs: []
}
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload.data
        });
        builder.addCase(addBlogs.fulfilled, (state, action) => {
            console.log(action.payload, 'blogslice')
            state.blogs.push(action.payload)
        });
        builder.addCase(deleteBlogs.fulfilled, (state, action) => {
            state.blogs = state.blogs.filter(item => item.id != action.payload)
        });
    }
})
export default blogsSlice.reducer;