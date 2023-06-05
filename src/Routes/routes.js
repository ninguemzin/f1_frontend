import React from "react";
import Login from "../Pages/Login/index";
import Home from "../Pages/Home/index";
import Products from "../Pages/Products/index";
import Pricing from "../Pages/Pricing/index";
import Blog from "../Pages/Blog/index";
import Cadastro from "../Pages/Cadastro/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Car from "../Pages/Car";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />

        <Route path="/home" element={<Home />}></Route>
        <Route path="/cars" element={<Products />}></Route>
        <Route path="/cars/:id">
          <Route index element={<Car />}></Route>
        </Route>
        <Route path="/sell" element={<Pricing />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
};

export default Routering;
