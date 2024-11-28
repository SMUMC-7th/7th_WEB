import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../context/userContext";
import { TUserContextData } from "../context/userContext";

function Navbar() {
  const { isLogin, setIsLogin, username, setUsername }: TUserContextData =
    useContext(userContext);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogin(false);
    navigate("/");
  };

  // 로직
  isLogin && getUsername();

  return (
    <div className="min-w-full min-h-[10vh] flex text-[#cccccc] justify-between items-center">
      <div className="min-h-full flex items-center ml-5">
        <section
          className="text-[30px] text-red-500"
          onClick={() => navigate("/")}
        >
          SOMEFLIX
        </section>
        <div className="ml-5">카테고리</div>
      </div>
      {!isLogin ? (
        <div className="ml-5">
          <button type={"login"} onClick={() => navigate("/login")}>
            login
          </button>
          <button type={"signup"} onClick={() => navigate("/signup")}>
            signup
          </button>
        </div>
      ) : (
        <div>
          {/* <p>{username}님 환영합니다!</p> */}
          <button type={"login"} onClick={() => handleLogout()}>
            logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
