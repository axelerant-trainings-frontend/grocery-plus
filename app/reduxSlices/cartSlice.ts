import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: number
}

const initialState: CartState = {
  value: 12,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const { } = orderSlice.actions

export default cartSlice.reducer