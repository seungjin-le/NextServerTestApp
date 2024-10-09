import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (req) => {
  return req;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    return Promise.reject(err.response.data);
  }
);

export default api;
