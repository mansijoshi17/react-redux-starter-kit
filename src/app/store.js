import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../service/reducers/index";

export const store = configureStore({
  reducer: {
    cart: rootReducer,
  },
});
