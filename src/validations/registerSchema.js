import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup
    .string()
    .required("O username é obrigatório")
    .matches(
      /^[A-Za-z0-9@.+-_]+$/,
      "Username só pode conter letras, números e @/./+/-/_"
    )
    .min(3, "O username deve ter no mínimo 3 caracteres"),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido"),

  password: yup
  .string()
  .required("A senha é obrigatória")
  .min(8, "A senha deve ter no mínimo 8 caracteres")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
    "A senha deve conter letras e números"
  ),

  confirmPassword: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),

  perfil: yup
    .string()
    .required("O perfil é obrigatório")
    .oneOf(
      ["administrador", "morador", "porteiro", "funcionario"],
      "Selecione um perfil válido"
    ),

  telefone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(/^\d+$/, "Telefone deve conter apenas números")
    .min(9, "Telefone deve ter no mínimo 9 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos"),

  nif: yup
    .string()
    .required("O NIF é obrigatório")
    .matches(/^\d+$/, "NIF deve conter apenas números")
    .length(9, "NIF deve ter exatamente 9 dígitos"),
});
