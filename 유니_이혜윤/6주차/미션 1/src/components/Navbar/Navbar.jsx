import * as N from "./Navbar.style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("accessToken");
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const userInfo = async () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const response = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API 응답:", response.data);
        const email = response.data.email;
        // @ 앞부분만 가져오기

        const name = email.split("@")[0];
        console.log("이름", name);

        setName(name);
      } catch (error) {
        console.error("사용자 정보 불러오기 오류", error);

        if (error.response && error.response.status === 401) {
          await refreshAccessToken();
        }
      }
    }
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

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
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        await userInfo(); // 새로운 토큰으로 사용자 정보 다시 요청
      } catch (error) {
        console.error("토큰 재발급 오류", error);
      }
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    // setName(null);
    navigate("/");
  };

  return (
    <N.Container>
      <N.Logo>
        <h1>
          <Link to={"/"}>YOONCHA</Link>
        </h1>
      </N.Logo>
      <N.Button>
        {isLoggedIn ? (
          <>
            <p>{name}님 반갑습니다 🎀</p>
            <button
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/signup"}>회원가입</Link>
          </>
        )}
      </N.Button>
    </N.Container>
  );
};

export default Navbar;
