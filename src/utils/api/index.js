import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  withCredentials: true,
});

if (process.env.NODE_ENV !== "development") {
  api.defaults.baseURL = process.env.PUBLIC_URL;
}

api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session && session.token) {
    config.headers["Authorization"] = `Bearer ${session.token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    if (!(res.status === 200 || res.status === 201 || res.status === 204)) throw new Error();
    if (res.data.errors) throw new Error(res.data.errors);
    return res;
  },
  async (err) => {
    if (err.response?.status === 419) {
      // 중단된 요청 (에러난 요청)을 새로운 토큰으로 재전송
      const session = await getSession();
    }
    return Promise.reject(err);
  }
);

export default api;
