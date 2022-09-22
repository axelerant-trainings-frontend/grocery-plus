import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: Array<{ id: number; title: string; count: number }>;
}

const initialState: CartState = {
  cart: [
    { id: 1, title: "Soap", count: 1 },
    { id: 2, title: "shampoo", count: 1 },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (itemInCart) {
        if (itemInCart.count > 1) {
          itemInCart.count--;
        } else {
          state.cart.pop();
        }
      }
    },
  },
});

export const selectCart = (state) =>
  state.cart.cart.map((cartitem) => cartitem);
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
