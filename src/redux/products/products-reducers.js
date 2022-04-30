import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getProductsRequest,
  getProductSuccess,
  getProductError,
  filterProductsByName,
  filterProductsByPrice
} from "./products-actions";

const productsReducer = createReducer([], {
  [getProductSuccess]: (_, action) => action.payload,
  [filterProductsByName]: (state, action) => state.sort((a, b) => a.name.localeCompare(b.name)),
  [filterProductsByPrice]: (state, action) => state.sort((a, b) => a.price - b.price),
});

const productsReducerError = createReducer("", {
  [getProductError]: (_, action) => action.payload,
});

export default combineReducers({
  listProducts: productsReducer,
  errors: productsReducerError,
});
