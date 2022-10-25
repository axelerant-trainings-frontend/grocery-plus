import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  image: string;
  count: number;
  price: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

export interface CartState {
  items: CartItem[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  items: [],
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
    addItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.count > 1) {
        item.count--;
      } else {
        state.items.pop();
      }
    },
    incrementItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count--;
      }
    },
    calculateCartItems: (state) => {
      state.amount = state.items.length;
      state.total = state.items.reduce(
        (total, item) => (total += item.count * item.price),
        0,
      );
    },
  },
});

export const selectCart = (state) => state.cart;
export const {
  clearCart,
  removeItem,
  incrementItem,
  decrementItem,
  addItem,
  calculateCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
