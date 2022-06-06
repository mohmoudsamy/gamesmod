import React from "react";
import ReactDOMClient from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./services/reducers/reducers";

import App from "./components/App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
