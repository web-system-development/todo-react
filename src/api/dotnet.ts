import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-mongo-api.azurewebsites.net/api",
});

export default api;
