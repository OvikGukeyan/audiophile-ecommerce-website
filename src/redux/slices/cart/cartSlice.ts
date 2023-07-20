import {  createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { CartSliceState } from "./types";
import { getCartFromLS, getTotalAmount, getTotalCount } from "./utils";


const {cartItems, totalCount, totalAmount} = getCartFromLS();

const initialState: CartSliceState = {
    cartItems,
    totalCount,
    totalAmount
};

const cartSlise = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            !state.cartItems[action.payload.id] ?
                state.cartItems[action.payload.id] = action.payload :
                state.cartItems[action.payload.id].count = state.cartItems[action.payload.id].count + action.payload.count;
            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalCount = getTotalCount(state.cartItems);

        },
        clearCartItems: (state) => {
            state.cartItems = {};
            state.totalCount = 0;
            state.totalAmount = 0;
        },
        itemMinus: (state, action) => {
            state.cartItems[action.payload].count > 1 ? state.cartItems[action.payload].count = state.cartItems[action.payload].count - 1 :
                delete state.cartItems[action.payload];
            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalCount = getTotalCount(state.cartItems);
        },
        itemPlus: (state, action) => {
            state.cartItems[action.payload].count = state.cartItems[action.payload].count + 1;
            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalCount = getTotalCount(state.cartItems);

        },

    }
})

export const { addCartItem, clearCartItems, itemMinus, itemPlus } = cartSlise.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlise.reducer;