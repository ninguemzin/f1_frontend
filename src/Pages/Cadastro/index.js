import React, { useState } from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Buton/index";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Cadastro = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000//api/register/",
        form
      );
      console.log("response do Cadastro", response.data);
      if (response.data.success) {
        setSuccessMessage("Usuário cadastrado com sucesso");
        setForm({ username: "", password: "", email: "" });
      } else if (response.data.error) {
        setError(response.data.error);
      }
    } catch (err) {
      setError(
        "Ocorreu um erro ao processar a solicitação. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => form.username !== "" && form.password;

  return (
    <Container
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/342804.jpg")`,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h1>Cadastre-se 👋</h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
          aria-label="E-mail"
          required
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
          aria-label="Senha"
          required
        />
        <Input
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          onChange={handleChange}
          type="password"
          aria-label="Confirmar Senha"
          required
        />
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <Botao
          type="submit"
          text={loading ? "Carregando..." : "Cadastrar"}
          disabled={loading || !validadorInput()}
        />
        <div>
          <p>
            Já possui conta? <NavLink to="/login">Fazer Login</NavLink>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Cadastro;
