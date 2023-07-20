export type CartItemType = {
    [key: number]: { id: number; name: string; price: number; image: string; count: number }
}



export interface CartSliceState {
    cartItems: CartItemType;
    totalCount: number;
    totalAmount: number
}