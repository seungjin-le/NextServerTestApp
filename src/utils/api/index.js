import axios from "axios";
// import { getSession } from "next-auth/react";

const api = axios.create({
  withCredentials: true,
});

api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response?.status === 419) {
      // 중단된 요청 (에러난 요청)을 새로운 토큰으로 재전송
    }
    return Promise.reject(err);
  }
);

export default api;
