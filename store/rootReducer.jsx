import countReducer from "./slices/countSlice";
import productReducer from "./slices/productSlice";
import financeReducer from "./slices/financeSlice";

export default {
  count: countReducer,
  product: productReducer,
  finance: financeReducer,
};
