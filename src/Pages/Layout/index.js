import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import { Background } from "./styles";

function Layout({ children }) {
  return (
    <Background>
      <Navbar />
      {children}
    </Background>
  );
}

export default Layout;
