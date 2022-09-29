import { createSlice } from '@reduxjs/toolkit';

export interface OrderItem {
  id: number;
  title: string;
  count: number;
}

export interface OrderState {
  items: OrderItem[];
  amount: number;
}

const initialState: OrderState = {
  items: [],
  amount: 0,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export const selectOrder = (state) => state.orders.value;
export default orderSlice.reducer;
