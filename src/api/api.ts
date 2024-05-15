import axios from "axios";

const BACKEND = "http://localhost:8081";

export const auth = axios.create({
  baseURL: BACKEND + "/api/v1/auth",
});
