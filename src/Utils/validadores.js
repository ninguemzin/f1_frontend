const validarEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (senha) => {
  if (typeof senha === "string" && senha) {
    return senha.length > 6;
  }
};

const validarNome = (nome) => {
  return nome?.toString().length > 2;
};

const validarTelefone = (telefone) => {
  return telefone?.toString().length >= 8;
};

const validarConfirmarSenha = (senha, confirmarSenha) => {
  return validarSenha(senha) && senha === confirmarSenha;
};

export {
  validarEmail,
  validarSenha,
  validarNome,
  validarTelefone,
  validarConfirmarSenha,
};
