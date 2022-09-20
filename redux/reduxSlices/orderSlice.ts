import { createSlice } from "@reduxjs/toolkit";

export interface OrderState {
  value: number;
}

const initialState: OrderState = {
  value: 10,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export const selectOrder = (state) => state.orders.value;
export default orderSlice.reducer;
