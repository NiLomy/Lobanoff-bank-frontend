import axios from "axios";

const BACKEND = "http://localhost:8080";

export const auth = axios.create({
  baseURL: BACKEND + "core/api/v1/auth",
});
