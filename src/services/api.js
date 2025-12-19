import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.fimbagest.fimbatec.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
