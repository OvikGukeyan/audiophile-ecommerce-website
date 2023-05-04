import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ItemType } from "./itemsSlice";

export type CartItemType = {
    [key: number]: { name: string; price: number; image: string; count: number }
}



interface CartSliceState {
    cartItems: CartItemType;
    totalCount: number;
    totalAmount: number
}

const initialState: CartSliceState = {
    cartItems: {},
    totalCount: 0,
    totalAmount: 0
};

const cartSlise = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ItemType>) => {
            !state.cartItems[action.payload.id] ?
                state.cartItems[action.payload.id] = { name: action.payload.name, price: action.payload.price, image: action.payload.image.desktop, count: 0 } :
                state.cartItems[action.payload.id].count = state.cartItems[action.payload.id].count + 1;
        }
    }
})

export const { addCartItem } =  cartSlise.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlise.reducer;