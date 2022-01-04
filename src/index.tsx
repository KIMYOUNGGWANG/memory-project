import React from "react";
<<<<<<< HEAD
import ReactDOM, { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DefaultRouter from "Views/common";

declare const module: any;

=======
import ReactDOM from "react-dom";
import App from "./app";
>>>>>>> 5a3da01f9aceea6b264e43272808c39cad07138e
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
<<<<<<< HEAD

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
=======
>>>>>>> 5a3da01f9aceea6b264e43272808c39cad07138e
