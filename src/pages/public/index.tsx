import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SITEMAP } from "Shared/sitemap";
const PublicRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SITEMAP.MAIN}>
          <Route index element={<>test</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRouter;
