import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "finance",
  initialState: {
    revenue: 3,
    expense: 5,
  },
  reducers: {
    get: (state) => {
      alert(`REVENUE: ${state.revenue} | EXPENSE: ${state.expense}`);
    },
  },
});

export const { get } = slice.actions;
export default slice.reducer;
