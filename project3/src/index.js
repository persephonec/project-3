import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";

var store = legacy_createStore(counter);

ReactDOM.render (
  
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);