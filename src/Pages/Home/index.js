import * as React from "react";
import CarMap from "../../Components/CarMap";
import Layout from "../Layout";
import CarInfo from "../../Components/CarInfo/CarInfo";

function Home() {
  return (
    <Layout>
      <CarMap />
      {/* <CarInfo /> */}
    </Layout>
  );
}

export default Home;
