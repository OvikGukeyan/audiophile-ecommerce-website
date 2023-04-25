import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ItemType } from './itemsSlice';

export type CategoryType = {
    name: string;
    image: string;
} 

export interface FiltersSliceState {
    category: CategoryType | null;
    currentItemId: number | null;
}

const initialState: FiltersSliceState  = {
    category: null,
    currentItemId: null
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setCurrentItem: (state, action) => {
            state.currentItemId = action.payload
        }
    }
});

export const selectFilters = (state: RootState) => state.filters;
export const {setCategory, setCurrentItem} = filterSlice.actions; 

export default filterSlice.reducer;
