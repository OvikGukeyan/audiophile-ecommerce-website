import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { RootState } from '../store';



export const fetchItems = createAsyncThunk('itema/fetchItems', async (category?: string) => {
    const { data } = await axios.get(`https://635fcafd3e8f65f283bba8bc.mockapi.io/audiophile?${category !== null ? `category=${category}` : ''}`)
    return data
});


export type imageType = {
    mobile: string;
    tablet: string;
    desktop: string;
    tabletGor: string;

};
type incledesItem = {
    quantity: number;
    item: string;
};
export type otherType = {
    id: number
    slug: string;
    name: string;
    image: imageType;
}
export type ItemType = {
    id: number;
    slug: string;
    name: string;
    image: imageType;
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: incledesItem[];
    gallery: {
        first: imageType;
        second: imageType;
        third: imageType;
    };
    others: otherType[];
}

interface itemsSliceState {
    itemsArray: ItemType[];
    isLoaded: boolean;
    loadingRejected: boolean;
}

const initialState: itemsSliceState = {
    itemsArray: [],
    isLoaded: false,
    loadingRejected: false
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.itemsArray = [];
            state.isLoaded = false;
            state.loadingRejected = false;
        });

        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.isLoaded = true;
            state.itemsArray = action.payload;
        });

        builder.addCase(fetchItems.rejected, (state) => {
            state.itemsArray = [];
            state.isLoaded = true;
            state.loadingRejected = true;
        });
    }
});

export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;