import axios from "axios";

const BACKEND = "http://localhost:8081";

export const auth = axios.create({
  baseURL: "http://localhost:8081/api/v1/auth",
});

export const currency = axios.create({
  baseURL: "http://localhost:8081/api/v1/currencies",
});

export const accounts = axios.create({
  baseURL: "http://localhost:8081/api/v1/accounts",
});

export const users = axios.create({
  baseURL: "http://localhost:8081/api/v1/users",
});

export const transactions = axios.create({
  baseURL: "http://localhost:8081/api/v1/transactions",
});

export const passports = axios.create({
  baseURL: "http://localhost:8081/api/v1/passports",
});

export const requisites = axios.create({
  baseURL: "http://localhost:8081/api/v1/requisites",
});

export const cards = axios.create({
  baseURL: "http://localhost:8081/api/v1/cards",
});

export const cardInfos = axios.create({
  baseURL: "http://localhost:8081/api/v1/card-info",
});

export const category = axios.create({
  baseURL: "http://localhost:8081/api/v1/category",
});

export const chat = axios.create({
  baseURL: "http://localhost:8082/api/v1/chat/messages/sender",
});
