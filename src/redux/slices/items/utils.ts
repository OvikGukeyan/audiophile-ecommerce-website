import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk('itema/fetchItems', async (category?: string) => {
    const { data } = await axios.get(`https://635fcafd3e8f65f283bba8bc.mockapi.io/audiophile?${category !== null ? `category=${category}` : ''}`)
    return data
});