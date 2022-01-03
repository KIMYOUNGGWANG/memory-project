import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DefaultRouter from "Views/common";

declare const module: any;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const renderEntry = () => {
  const rootElement = document.getElementById("root");
  render(<DefaultRouter />, rootElement);

  if (module.hot) {
    // module.hot.accept("presentation/routes", () => {
    //   const HotEntryRoute = require("presentation/routes").default;
    //   render(<HotEntryRoute />, rootElement);
    // });
  }
};
reportWebVitals();
