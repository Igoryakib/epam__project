import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getBoughtProductRequest,
  getBoughtProductSuccess,
  getBoughtProductError,
  addBoughtProductRequest,
  addBoughtProductSuccess,
  addBoughtProductError,
  deleteBoughtProductRequest,
  deleteBoughtProductSuccess,
  deleteBoughtProductError,
  changeAmountProductsRequest,
  changeAmountProductsSuccess,
  changeAmountProductsError,
} from "./boughtProducts-actions";

const boughtProductsReducer = createReducer([], {
  [getBoughtProductSuccess]: (_, action) => action.payload,
  [addBoughtProductSuccess]: (state, action) => [action.payload, ...state],
  [deleteBoughtProductSuccess]: (state, action) =>
    state.filter((item) => +item.id !== +action.payload),
  [changeAmountProductsSuccess]: (state, action) => {
    state.splice(
      state.find((item, index) => {
        return item.name === action.payload.name ? index : false;
      }),
      1,
      action.payload
    );
    return state;
  },
});

const boughtProductsReducerErrors = createReducer("", {
  [getBoughtProductError]: (_, action) => action.payload,
  [addBoughtProductError]: (_, action) => action.payload,
  [deleteBoughtProductError]: (_, action) => action.payload,
  [changeAmountProductsError]: (_, action) => action.payload,
});

export default combineReducers({
  getBoughtProducts: boughtProductsReducer,
  boughtProductsErrors: boughtProductsReducerErrors,
});
