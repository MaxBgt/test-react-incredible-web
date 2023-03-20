import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app";
import moviesDataReducer from "./features/app/moviesDataSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    moviesData: moviesDataReducer,
  },
});

export default store;
