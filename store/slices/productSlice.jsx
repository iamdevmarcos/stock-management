import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import data from "../../data/product";

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {
    insert: (state, action) => {
      if (action.payload.productName) {
        let newState = [...state];
        newState.push({
          id: uuid(),
          productName: action.payload.productName,
          category: action.payload.category,
          totalValue: action.payload.totalValue,
          dateMade: action.payload.dateMade,
        });
        return newState;
      }
    },
    del: (state, action) => {
      if (action.payload.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id != action.payload.id);
        return newState;
      }
    },
    order: (state) => {
      let newState = [...state];
      newState = newState.sort((a, b) =>
        a.productName > b.productName ? 1 : -1
      );
      return newState;
    },
  },
});

export const { insert, del, order } = slice.actions;
export default slice.reducer;
