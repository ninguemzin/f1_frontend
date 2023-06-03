import React from "react";
import Login from "../Pages/Login/index";
import Home from "../Pages/Home/index";
import Products from "../Pages/Products/index";
import Pricing from "../Pages/Pricing/index";
import Blog from "../Pages/Blog/index";
import Cadastro from "../Pages/Cadastro/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />

        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
};

export default Routering;
