import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrdersState {
  data: Array<{ id: number; title: string }>;
}

const initialState: OrdersState = {
  // define initial state of orders here
  data: [{ id: 1, title: "My first Order" }],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // define actions here
  },
});

// Action creators are generated for each case reducer function
// export your actions here
// export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
