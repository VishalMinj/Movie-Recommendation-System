import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import HomePage from "../pages/HomePage";
import RecommendationPage from "../pages/RecommendationPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<RecommendationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
