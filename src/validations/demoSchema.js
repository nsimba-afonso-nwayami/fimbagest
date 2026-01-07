import * as yup from "yup";

export const demoSchema = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  mensagem: yup
    .string()
    .required("A mensagem não pode estar vazia")
    .min(10, "A mensagem deve ser mais detalhada (mínimo 10 caracteres)"),
});