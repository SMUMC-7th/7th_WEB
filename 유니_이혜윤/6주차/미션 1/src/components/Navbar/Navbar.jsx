import * as N from "./Navbar.style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("accessToken");

  useEffect(() => {
    const userInfo = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const response = await axios.get("http://localhost:3000/user/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const email = response.data.email;
          const name = email.split("@")[0];

          console.log("이름", name);
          setName(name);
        } catch (error) {
          console.error("사용자 정보 불러오기 오류", error);
        }
      }
    };
    userInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    setName(null);
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
            <button onClick={handleLogout}>로그아웃</button>
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
