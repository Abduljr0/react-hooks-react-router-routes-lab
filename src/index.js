import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  
  <BrowserRouter>
  <Router>
  <App />
</Router>
</BrowserRouter>,
  document.getElementById("root")
);
