import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { FormWrapper, FormGroup, Label, Input, Button } from "./styles";

const Pricing = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/create/", {
        marca,
        modelo,
        ano,
      });
      console.log(response.data); 
      setMarca("");
      setAno("");
      setModelo("");
   
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="marca">Marca:</Label>
            <Input
              type="text"
              id="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="modelo">Modelo:</Label>
            <Input
              type="text"
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ano">Ano:</Label>
            <Input
              type="number"
              id="ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Criar Modelo</Button>
        </form>
      </FormWrapper>
    </Layout>
  );
};

export default Pricing;
