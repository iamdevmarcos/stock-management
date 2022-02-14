import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "finance",
  initialState: {
    revenue: 0,
    expense: 0,
  },
  reducers: {
    setRevenue: (state, action) => {
      return { ...state, revenue: action.payload };
    },
    setExpense: (state, action) => {
      return { ...state, expense: action.payload };
    },
  },
});

export const { setRevenue, setExpense } = slice.actions;
export default slice.reducer;
