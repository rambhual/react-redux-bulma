import "bulma/css/bulma.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HashRouter>
          <App />
        </HashRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
