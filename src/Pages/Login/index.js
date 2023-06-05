import React, { useState } from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Buton/index";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000//api/login/",
        form
      );
      console.log("response do Login", response.data);
      if (response.data.success) {
        alert("Usuário logado com sucesso");
      }
      setLoading(false);
    } catch (err) {
      alert("Algo deu errado");
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  };
  console.log("Form está válido", validadorInput());

  return (
    <Container
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/342804.jpg")`,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h1>Faça o seu Login 👋</h1>
        <Input
          name="email"
          placeholder={"Digite o seu e-mail"}
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder={"Digite a sua senha"}
          onChange={handleChange}
          type="password"
        />
        <Botao
          type="submit"
          text="Entrar!"
          disabled={loading || !validadorInput()}
        />
        <div>
          <p>Não possui conta?</p>
          <NavLink to="/cadastro">Cadastrar</NavLink>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
