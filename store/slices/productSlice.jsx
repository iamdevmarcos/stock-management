import { createSlice } from "@reduxjs/toolkit";

const data = [{ productName: "burguer" }, { productName: "test" }];

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {},
});

export default slice.reducer;
