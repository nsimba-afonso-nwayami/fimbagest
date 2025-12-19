import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("O username é obrigatório")
    .matches(
      /^[A-Za-z0-9@.+-_]+$/,
      "Username só pode conter letras, números e @/./+/-/_"
    )
    .min(3, "O username deve ter no mínimo 3 caracteres"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "A senha deve conter letras e números"
    ),
});
