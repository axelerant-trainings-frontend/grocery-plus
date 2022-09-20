import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  value: number;
}

const initialState: CartState = {
  value: 12,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCart = (state) => state.cart.value;
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
