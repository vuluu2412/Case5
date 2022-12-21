import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await axios.post('http://localhost:8080/auth/login', data)
        console.log(data,'dayladata')
        return res
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data) => {
        const res = await axios.post('http://localhost:8080/auth/register', data)
        return data
    }
)