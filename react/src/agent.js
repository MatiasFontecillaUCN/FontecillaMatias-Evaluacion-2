import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const endpoints = {
  create: (name,price,summary,img_url) => requests.post("/producto",{name,price,summary,img_url}),
  read: () => requests.get("/producto"),
  update: (id,name,price,summary,img_url) => requests.put("/producto/"+id,{name,price,summary,img_url}),
  delete: (id) => requests.delete("/producto/"+id),
  
};

const agent = { endpoints };

export default agent;
