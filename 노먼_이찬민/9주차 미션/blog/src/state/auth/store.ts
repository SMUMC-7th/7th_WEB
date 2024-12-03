import { create } from "zustand";
import { getCookie, removeCookie } from "../../utils/cookie";
import { authInstance, defaultInstance } from "../../apis/axiosInstance";
import { useNavigate } from "react-router";
import { TUser } from "../../types/post";

type TState = {
  userEmail: string;
  isLogin: boolean;
};

type TAction = {
  login: (email: string, password: string) => void;
  logout: () => void;
  loginValidCheck: () => void;
};

function removeCurrCookies() {
  removeCookie("accessToken"); // 쿠키를 삭제
  removeCookie("refreshToken"); // 쿠키를 삭제
}

const loginProcess = async (email: string, password: string) => {
  const resLogin = await defaultInstance.post("/v1/auth/login", {
    email: email,
    password: password,
  });
  return resLogin;
};

export const useAuthStore = create<TState & TAction>((set) => ({
  userEmail: "",
  isLogin: getCookie("accessToken") ? true : false,
  login: (email, password) => {
    try {
      loginProcess(email, password);
      set((state) => ({ isLogin: true }));
    } catch (error) {
      set((state) => ({ isLogin: false }));
    }
  },
  logout: () => {
    removeCurrCookies();
    set((state) => ({ isLogin: false }));
  },
  loginValidCheck: async () => {
    try {
      const resApi: TUser = await authInstance.get("/v1/users/me");
      const { id, email, role } = resApi.data;
      console.log(resApi);
      set((state) => ({ isLogin: true, userEmail: email }));
    } catch (error) {
      // refresh token까지 만료된 경우
      removeCurrCookies();
      set((state) => ({ isLogin: false }));
      // navigate("/login"); // 로그인 페이지로 이동은 호출한 데에서 진행
    }
  },
}));
