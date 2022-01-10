import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SITEMAP } from "Shared/sitemap";
import LoginPage from "./Home";
const PublicRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SITEMAP.PUBLIC.MAIN}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRouter;
