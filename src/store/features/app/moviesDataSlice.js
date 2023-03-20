import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    setMoviesData: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export default moviesDataSlice.reducer;
export const { setMoviesData } = moviesDataSlice.actions;
