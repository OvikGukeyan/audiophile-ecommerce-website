import { CartItemType } from "./types";

export const getTotalAmount = (obj: CartItemType) => Object.values(obj).reduce((sum, val) => val.price * val.count + sum, 0);
export const getTotalCount = (obj: CartItemType) => Object.values(obj).length;



export const getCartFromLS = () => {
    const cartData = localStorage.getItem('cart');
    const cartItems = cartData ? JSON.parse(cartData) : {};
    const totalAmount = getTotalAmount(cartItems);
    const totalCount =  getTotalCount(cartItems);
    return {
        cartItems,
        totalAmount,
        totalCount
    }
};
