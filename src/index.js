import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as X } from "react-router-dom";
import App from "./a01.js";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <X>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </X>
);
