import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { FormWrapper, FormGroup, Label, Input, Button } from "./styles";

const Pricing = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [km, setKm] = useState("");
  const [cambio, setCambio] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("marca", marca);
      formData.append("modelo", modelo);
      formData.append("ano", ano);
      formData.append("km", km);
      formData.append("cambio", cambio);
      formData.append("image", image);

      const response = await axios.post(
        "http://127.0.0.1:8000/app//",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setMarca("");
      setAno("");
      setModelo("");
      setKm("");
      setCambio("");
      setImage(null);
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
          <FormGroup>
            <Label htmlFor="km">Km:</Label>
            <Input
              type="number"
              id="km"
              value={km}
              onChange={(e) => setKm(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cambio">Cambio:</Label>
            <Input
              type="text"
              id="cambio"
              value={cambio}
              onChange={(e) => setCambio(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Image:</Label>
            <Input type="file" id="image" onChange={handleImageChange} />
          </FormGroup>
          <Button type="submit">Criar Modelo</Button>
        </form>
      </FormWrapper>
    </Layout>
  );
};

export default Pricing;
