import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV !== "production") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
} else {
  // @ts-ignore
  ReactGA.initialize(process.env.REACT_APP_GA);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
