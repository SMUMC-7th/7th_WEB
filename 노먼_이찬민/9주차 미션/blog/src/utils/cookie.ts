import { Cookies } from "react-cookie";
import { authInstance, defaultInstance } from "../apis/axiosInstance";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  // console.log("getCookie", cookies.get(name));
  return cookies.get(name);
};

export const getRefreshToken = async () => {
  return authInstance.post("/v1/auth/refresh");
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
