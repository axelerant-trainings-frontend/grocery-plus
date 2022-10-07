import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './features/order';
import cartReducer from './features/cart';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
