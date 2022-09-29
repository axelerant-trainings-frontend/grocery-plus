import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  count: number;
}

export interface CartState {
  items: CartItem[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  items: [
    { id: 1, title: 'Soap', count: 1 },
    { id: 2, title: 'shampoo', count: 1 },
  ],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    addToCart: (state, action) => {
      const itemInCart = state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (itemInCart) {
        if (itemInCart.count > 1) {
          itemInCart.count--;
        } else {
          state.items.pop();
        }
      }
    },
  },
});

export const selectCart = (state) =>
  state.cart.items.map((cartitem) => cartitem);
export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
