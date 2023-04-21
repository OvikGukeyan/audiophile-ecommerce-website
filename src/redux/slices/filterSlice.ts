import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ItemType } from './itemsSlice';

export type CategoryType = {
    name: string;
    image: string;
} 

export interface FiltersSliceState {
    category: CategoryType | null;
    currentItem: ItemType | null;
}

const initialState: FiltersSliceState  = {
    category: null,
    currentItem: null
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload
        }
    }
});

export const selectFilters = (state: RootState) => state.filters;
export const {setCategory, setCurrentItem} = filterSlice.actions; 

export default filterSlice.reducer;
