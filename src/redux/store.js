import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productsReducers from "./products/products-reducers";
import boughtProductsReducers from "./boughtProducts/boughtProducts-reducers";
import reducers from './reducers';

const rootReducer = combineReducers({
    products: productsReducers,
    boughtProducts: boughtProductsReducers,
    isLoading: reducers
});

const middleware = [
    ...getDefaultMiddleware(),
];


const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV === "development",
});

export {store};