import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./others/fonts/Montserrat-Regular.ttf";
import "./others/fonts/Outfit-Regular.ttf";
import "./others/fonts/Poppins-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
