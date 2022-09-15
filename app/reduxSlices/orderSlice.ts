import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface OrderState {
  value: number
}

const initialState: OrderState = {
  value: 10,
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // define your required reducers here.
  },
})

// Action creators are generated for each case reducer function
// Export your actions here.
// export const { } = orderSlice.actions

export default orderSlice.reducer