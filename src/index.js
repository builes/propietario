import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Store } from "./redux/store/store";
import { Provider } from "react-redux";
import "leaflet/dist/leaflet.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
