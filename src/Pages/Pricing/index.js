import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import {
  FormWrapper,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./styles";

const Pricing = ({ reloadTable }) => {
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [modelo, setModelo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/create/", {
        marca,
        ano,
        modelo,
      });
      console.log(response.data); // Exibe a resposta do backend após a criação do modelo
      reloadTable();
      setMarca("");
      setAno("");
      setModelo("");
      // Realize qualquer outra ação necessária, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      setError("Erro ao criar o modelo."); // Exemplo de tratamento de erro
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </FormWrapper>
    </Layout>
  );
};

export default Pricing;
