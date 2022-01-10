import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SITEMAP } from "Shared/sitemap";
import Home from "./home";
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SITEMAP.MAIN}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
