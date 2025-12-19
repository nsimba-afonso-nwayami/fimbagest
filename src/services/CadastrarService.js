import { api } from "./api";

export const cadastrarService = async (data) => {
  const response = await api.post("contas/register/", data);
  return response.data;
};
