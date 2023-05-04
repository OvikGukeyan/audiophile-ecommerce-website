import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";
import items from './slices/itemsSlice';
import filters from './slices/filterSlice';
import cart from './slices/cartSlice'

const store = configureStore({
    reducer: {
        items,
        filters,
        cart
    }
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch ;

export type RootState = ReturnType<typeof store.getState>;
export default store;