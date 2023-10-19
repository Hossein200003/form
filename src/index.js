import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./a01.js";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={"/a"}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
