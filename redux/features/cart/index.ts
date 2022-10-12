import { createSlice } from '@reduxjs/toolkit';
import product01_img from '../../../public/image-product-01.png';
import product02_img from '../../../public/image-product-02.png';

type StaticImageData = {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
};

interface CartItem {
  id: number;
  title: string;
  img: string | StaticImageData;
  count: number;
  price: number;
  discount?: number;
  discountedPrice?: number;
}

export interface CartState {
  items: CartItem[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  items: [
    {
      id: 1,
      title: 'Soap',
      img: product01_img,
      price: 300,
      count: 1,
      discount: 20,
      discountedPrice: 300 - (300 * 20 / 100)
    },
    {
      id: 2,
      title: 'shampoo for Men',
      img: product02_img,
      price: 250,
      count: 1,
    },
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
      const itemId = action.payload;
      const item = state.items.find((item) => item.id !== itemId);
      if (item && item.count > 1) {
        item.count--;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
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
