import { createContext, useState, useEffect } from "react";
import axios from "axios";

const IsLoginContext = createContext();

export const IsLoginProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (accessToken) {
      userInfo();
    }
  }, [accessToken]);

  const userInfo = async () => {
    if (accessToken) {
      try {
        const response = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const email = response.data.email;
        const name = email.split("@")[0];
        setUser(name);
        setIsLogin(true); // 로그인 상태로 설정
      } catch (error) {
        console.error("사용자 정보 불러오기 오류", error);
        if (error.response && error.response.status === 401) {
          await refreshAccessToken();
        }
      }
    }
  };

  const refreshAccessToken = async () => {
    if (refreshToken) {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/token/access",
          null,
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        const newAccessToken = response.data.accessToken;
        setAccessToken(newAccessToken);
        localStorage.setItem("accessToken", newAccessToken);
        await userInfo();
      } catch (error) {
        console.error("토큰 재발급 오류", error);
        handleLogout();
      }
    }
  };

  const handleLogout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    setIsLogin(false);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  };

  const handleLogin = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    userInfo();
  };

  return (
    <IsLoginContext.Provider
      value={{ user, isLogin, handleLogout, handleLogin }}
    >
      {children}
    </IsLoginContext.Provider>
  );
};

export default IsLoginContext;
