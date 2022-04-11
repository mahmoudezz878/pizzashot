import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4545" });

export const addOrders = (addOrders) => API.post("/order", addOrders);

export const getProducts = () => API.get("/products");