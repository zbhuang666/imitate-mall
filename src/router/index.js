import React from "react";
import {Provider} from "react-redux"
import Routers from "./router";
import store from "./store";
import ReactDOM from "react-dom";

ReactDOM.render(
    <Provider store={store}>
       <Routers/>
    </Provider>,
    document.getElementById("root")
);