import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../reduxSlices/orderSlice'
import cartReducer from '../reduxSlices/cartSlice'
export const store = configureStore({
  reducer: {
    orders: orderReducer,
    cart: cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch