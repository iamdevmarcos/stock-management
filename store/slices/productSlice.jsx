import { createSlice } from "@reduxjs/toolkit";

import data from "../../data/product";

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {},
});

export default slice.reducer;
