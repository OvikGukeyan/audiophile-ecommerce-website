import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { itemsSliceState } from './types';
import { fetchItems } from './utils';



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