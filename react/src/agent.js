import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

axios.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const endpoints = {
  test: (name, password) => requests.post("/Auth/login", { name, password }),
};

const agent = { endpoints };

export default agent;
