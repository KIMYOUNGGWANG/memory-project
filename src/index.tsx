import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient } from "react-query";
import getInitialData from "./context";

const boot = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000,
      },
    },
  });
  await getInitialData(queryClient);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root"),
  );
  reportWebVitals();
};

boot();
