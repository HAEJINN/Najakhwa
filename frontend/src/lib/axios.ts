import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // baseURL: "/api",
  // baseURL: "http://localhost:8080",
  baseURL: "http://j5c201.p.ssafy.io",
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
