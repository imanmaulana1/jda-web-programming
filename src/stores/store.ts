import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slices";
import productReducer from "./product-slices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
