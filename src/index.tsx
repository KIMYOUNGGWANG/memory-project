import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import getInitialData from "./context";
import GlobalThemeProvider from "Shared/globalStyle";

const boot = async () => {
  const queryClient = new QueryClient({});
  await getInitialData(queryClient);
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalThemeProvider>
          <App />
        </GlobalThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
  reportWebVitals();
};

boot();
