import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await axios.get('http://localhost:3001/laptops')
        return res
    }
)
export const addBlogs = createAsyncThunk(
    'blogs/addBlogs',
    async (data) => {
        const res = await axios.post('http://localhost:3001/laptops',data)
        return data
    }
)