import React from "react";
import Login from "../Pages/Login/index";
// import Cadastro from "../Pages/Cadastro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        {/*<Route path="/cadastrar" element={<Cadastro />} /> */}
        <Route path="/home" element={<h1>Tela Home</h1>} />
      </Routes>
    </Router>
  );
};

export default Routering;
