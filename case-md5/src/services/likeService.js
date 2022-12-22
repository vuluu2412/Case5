import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const likeBlog = createAsyncThunk(
    'likes/likeBlog',
    async (data) => {
        const res = await axios.post("http://localhost:8080/post-like/add", data);
        return res.data;
    }
)
export const getLikes = createAsyncThunk(
    'likes/getLikes',
    async () => {
        const res = await axios.get("http://localhost:8080/post-like");
        return res
    }
)