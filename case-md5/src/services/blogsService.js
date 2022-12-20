import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await axios.get('http://localhost:8080/posts')
        return res
    }
)
export const addBlogs = createAsyncThunk(
    'blogs/addBlogs',
    async (data) => {
        const res = await axios.post('http://localhost:8080/posts/add',data)
        console.log(data,'data1')
        return data
    }
)
export const deleteBlogs = createAsyncThunk(
    'blogs/deleteBlogs',
    async (data) => {
        const res = await axios.delete(`http://localhost:8080/posts/${data}`)
        return data
    }
)