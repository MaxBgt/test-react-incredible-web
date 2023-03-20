import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app";
import categoryFilterReducer from "./category.reducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
    category: categoryFilterReducer,
  },
});

export default store;
