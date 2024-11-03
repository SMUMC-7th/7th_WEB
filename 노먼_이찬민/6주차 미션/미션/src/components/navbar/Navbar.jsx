import React, { useEffect, useState } from "react";
import * as S from "./Navbar.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const getAccessToken = async () => {
    const apiRes = await axios.post(
      " http://localhost:3000/auth/token/access ",
      {}, // 두번째 자리는 post의 body 자리
      {
        // 세번째 자리에 헤더 넣기
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    localStorage.setItem("accessToken", apiRes.data.accessToken);
    localStorage.setItem("refreshToken", apiRes.data.refreshToken);
  };

  const getUsername = async () => {
    try {
      const apiRes = await axios.get("http://localhost:3000/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUsername(apiRes.data.email.split("@")[0]); // split해서 [@전, @후]로 email을 나누고 그 중 @전 을 선택
    } catch (error) {
      if (error.status === 401) {
        getAccessToken();
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  // 로직
  accessToken && getUsername();

  return (
    <S.Container>
      <S.LeftBox>
        <section onClick={() => navigate("/")}>SOMEFLIX</section>
      </S.LeftBox>
      {!accessToken ? (
        <S.RightBox>
          <S.RightBoxButton type={"login"} onClick={() => navigate("/login")}>
            login
          </S.RightBoxButton>
          <S.RightBoxButton type={"signup"} onClick={() => navigate("/signup")}>
            signup
          </S.RightBoxButton>
        </S.RightBox>
      ) : (
        <S.RightBox>
          <p>{username}님 환영합니다!</p>
          <S.RightBoxButton type={"login"} onClick={() => handleLogout()}>
            logout
          </S.RightBoxButton>
        </S.RightBox>
      )}
    </S.Container>
  );
}

export default Navbar;
