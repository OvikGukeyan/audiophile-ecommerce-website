import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FiltersSliceState } from './types';


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
        setCurrentItemId: (state, action) => {
            state.currentItemId = action.payload
        },
        setFilters: (state, action: PayloadAction<FiltersSliceState>) => {
            state.currentItemId = action.payload.currentItemId;
            state.category = action.payload.category;
        }
    }
});

export const selectFilters = (state: RootState) => state.filters;
export const {setCategory, setCurrentItemId, setFilters} = filterSlice.actions; 

export default filterSlice.reducer;
