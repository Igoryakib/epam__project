import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./products-types";

const getProductsRequest = createAction(actionTypes.GET_PRODUCT_REQUEST);
const getProductSuccess = createAction(actionTypes.GET_PRODUCT_SUCCESS);
const getProductError = createAction(actionTypes.GET_PRODUCT_ERROR);

export {
    getProductsRequest,
    getProductSuccess,
    getProductError
};