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
    edit: (state, action) => {
      // loop to check if the id exists in my list, and then change the data according to the id
      for (let i in state) {
        if (state[i].id === action.payload.id) {
          state[i].productName = action.payload.productName;
          state[i].category = action.payload.category;
          state[i].totalValue = action.payload.totalValue;
        }
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

export const { insert, edit, del, order } = slice.actions;
export default slice.reducer;
