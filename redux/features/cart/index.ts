import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import contentfulClient from '../../../utils/contentfulClient';
export const getPhotos = createAsyncThunk('products/getProducts', async () => {
  const { getProducts } = contentfulClient();
  const products = await getProducts();
  console.log(products);
});

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
  items: [
    {
      id: 1,
      title: 'Soap',
      image: 'https://picsum.photos/200/300.jpg',
      price: 300,
      count: 1,
      discountPercentage: 20,
      discountedPrice: 300 - (300 * 20) / 100,
    },
    {
      id: 2,
      title: 'shampoo for Men',
      image: 'https://picsum.photos/200/300.jpg',
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
