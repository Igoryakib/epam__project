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
} from './boughtProducts-actions';

const boughtProductsReducer = createReducer([], {
    [getBoughtProductSuccess]: (_, action) => action.payload,
    [addBoughtProductSuccess]: (state, action) => [action.payload, ...state],
    [deleteBoughtProductSuccess]: (state, action) => state.filter(item => item.id !== action.payload)
});

const boughtProductsReducerErrors = createReducer('', {
    [getBoughtProductError]: (_, action) => action.payload,
    [addBoughtProductError]: (_, action) => action.payload,
    [deleteBoughtProductError]: (_, action) => action.payload
})

export default combineReducers({
    getBoughtProducts: boughtProductsReducer,
    boughtProductsErrors: boughtProductsReducerErrors
})