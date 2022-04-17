import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getProductsRequest,
  getProductSuccess,
  getProductError,
} from "./products-actions";

const productsReducer = createReducer([], {
  [getProductSuccess]: (_, action) => action.payload,
});

const productsReducerError = createReducer("", {
  [getProductError]: (_, action) => action.payload,
});

export default combineReducers({
  listProducts: productsReducer,
  errors: productsReducerError,
});
