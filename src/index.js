import React from "react";
import ReactDom from "react-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./components/App";

ReactDom.render(
    <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
    </React.StrictMode>
, document.querySelector('#root'));