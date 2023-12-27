import axios from "axios";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://tushifa-nextjs.vercel.app"
    : "http://localhost:3000";
const API = axios.create({
  baseURL: `${baseUrl}/api`,
});

export default API;
