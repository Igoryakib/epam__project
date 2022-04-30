import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducers from "./products/products-reducers";
import boughtProductsReducers from "./boughtProducts/boughtProducts-reducers";

const rootReducer = combineReducers({
    products: reducers,
    boughtProducts: boughtProductsReducers
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