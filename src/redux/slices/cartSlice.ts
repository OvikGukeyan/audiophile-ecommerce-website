import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ItemType } from "./itemsSlice";

const getTotalAmount = (obj: CartItemType) => Object.values(obj).reduce((sum, val) => val.price * val.count + sum, 0);
const getTotalCount = (obj: CartItemType) => Object.values(obj).length;

export type CartItemType = {
    [key: number]: { id: number; name: string; price: number; image: string; count: number }
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
                state.cartItems[action.payload.id] = { id: action.payload.id, name: action.payload.name, price: action.payload.price, image: action.payload.image.desktop, count: 1 } :
                state.cartItems[action.payload.id].count = state.cartItems[action.payload.id].count + 1;
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