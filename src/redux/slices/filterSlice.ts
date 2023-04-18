import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CategoryType = {
    name: string;
    image: string;
} 

interface filtersSliceState {
    category: CategoryType | null;
}

const initialState: filtersSliceState  = {
    category: null
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        }
    }
});

export const selectFilters = (state: RootState) => state.filters;
export const {setCategory} = filterSlice.actions; 

export default filterSlice.reducer;
