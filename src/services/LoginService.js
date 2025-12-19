import { api } from "./api";

export const loginService = async (payload) => {
  const response = await api.post("/contas/login/", payload);
  return response.data;
};
