import axios from "axios";
import { API_KEY } from "../api-key";

const apiService = axios.create({
  baseURL: "https://rawg.io/api",
  params: API_KEY,
});

export default apiService;
