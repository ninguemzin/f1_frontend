import React, { useState } from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Buton/index";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import UserServices from "../../Service/UserService";

const userServices = new UserServices();

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userServices.login(form);
      console.log("response do Login", response);
      if (response === true) {
        alert("Usuario logado com sucesso");
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
  console.log("Form está valido", validadorInput());
  return (
    <Container>
      <Form>
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
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
