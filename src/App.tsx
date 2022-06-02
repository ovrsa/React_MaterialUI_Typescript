import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
      <Router>
        <Routes>
        <Route path={"/products"} element={<ProductPage />} />
        <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
