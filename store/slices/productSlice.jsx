import { createSlice } from "@reduxjs/toolkit";

import data from "../../data/product";

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {
    del: (state, action) => {
      if (action.payload.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id != action.payload.id);
        return newState;
      }
    },
  },
});

export const { del } = slice.actions;
export default slice.reducer;
