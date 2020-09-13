import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Stateprovider } from "./Context/Stateprovider";
import Reducer, { initialState } from "./Context/Reducer";
ReactDOM.render(
  <Stateprovider initialState={initialState} reducer={Reducer}>
    <App />
  </Stateprovider>,
  document.getElementById("root")
);
