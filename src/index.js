import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);