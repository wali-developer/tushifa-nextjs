import axios from "axios";

export const baseUrl = "http://localhost:3000";
const API = axios.create({
  baseURL: `${baseUrl}/api`,
});

export default API;
