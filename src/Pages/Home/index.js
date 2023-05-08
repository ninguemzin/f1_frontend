import * as React from "react";
import { Background } from "./styles";
import ResponsiveAppBar from "../../Components/Navbar/navbar";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Background></Background>
    </React.Fragment>
  );
}
