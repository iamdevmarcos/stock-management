import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "count",
  initialState: {
    total: 1,
  },
  reducers: {
    increment: (state) => {
      return { ...state, total: state.total + 1 };
    },
    decrement: (state) => {
      if (state.total > 1) {
        return { ...state, total: state.total - 1 };
      }
    },
    reset: (state) => state.total,
  },
});

export const { increment, decrement, reset } = slice.actions;
export default slice.reducer;
