import { productReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  products: productReducer,
  selectedProduct: selectedProductReducer,
});
