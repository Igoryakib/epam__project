import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./boughtProducts-types";

const getBoughtProductRequest = createAction(
  actionTypes.GET_BOUGHT_PRODUCTS_REQUSET
);
const getBoughtProductSuccess = createAction(
  actionTypes.GET_BOUGHT_PRODUCTS_SUCCESS
);
const getBoughtProductError = createAction(
  actionTypes.GET_BOUGHT_PRODUCTS_ERROR
);

const addBoughtProductRequest = createAction(
  actionTypes.ADD_BOUGHT_PRODUCTS_REQUSET
);
const addBoughtProductSuccess = createAction(
  actionTypes.ADD_BOUGHT_PRODUCTS_SUCCESS
);
const addBoughtProductError = createAction(
  actionTypes.ADD_BOUGHT_PRODUCTS_ERROR
);

const deleteBoughtProductRequest = createAction(
  actionTypes.DELETE_BOUGHT_PRODUCTS_REQUSET
);
const deleteBoughtProductSuccess = createAction(
  actionTypes.DELETE_BOUGHT_PRODUCTS_SUCCESS
);
const deleteBoughtProductError = createAction(
  actionTypes.DELETE_BOUGHT_PRODUCTS_ERROR
);

export {
  getBoughtProductRequest,
  getBoughtProductSuccess,
  getBoughtProductError,
  addBoughtProductRequest,
  addBoughtProductSuccess,
  addBoughtProductError,
  deleteBoughtProductRequest,
  deleteBoughtProductSuccess,
  deleteBoughtProductError,
};
