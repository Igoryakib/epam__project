import { createReducer } from "@reduxjs/toolkit";

import {
  getProductsRequest,
  getProductSuccess,
  getProductError,
} from "./products/products-actions";
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
} from "./boughtProducts/boughtProducts-actions";

const isLoadingReducer = createReducer(false, {
    [getProductsRequest]: (_, action) => true,
    [getBoughtProductRequest]: (_, action) => true,
    [deleteBoughtProductRequest]: (_, action) => true,
    [changeAmountProductsRequest]: (_, action) => true,
    [addBoughtProductRequest]: (_, action) => true,
    [getProductSuccess]: (_, action) => false,
    [getProductError]: (_, action) => false,
    [getBoughtProductSuccess]: (_, action) => false,
    [getBoughtProductError]: (_, action) => false,
    [addBoughtProductSuccess]: (_, action) => false,
    [addBoughtProductError]: (_, action) => false,
    [deleteBoughtProductSuccess]: (_, action) => false,
    [deleteBoughtProductError]: (_, action) => false,
    [changeAmountProductsSuccess]: (_, action) => false,
    [changeAmountProductsError]: (_, action) => false,
});

export default isLoadingReducer;