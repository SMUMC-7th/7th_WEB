import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { authInstance, defaultInstance } from "../../api/axiosInstance";
import axios from "axios";

function Header() {
  async function getToken() {
    const apiRes = await authInstance.get("/3/authentication/token/new");
    localStorage.setItem("requestToken", apiRes.data.request_token);
  }

  // 1. reqeust token 허가
  const permissionToken = () => {
    const requestToken = localStorage.getItem("requestToken");
    window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/`;
  };
  // 2. 허가 받은 토큰으로 세션 생성
  const createSession = async () => {
    const requestToken = localStorage.getItem("requestToken");
    const { data } = await authInstance.post("/3/authentication/session/new", {
      request_token: requestToken,
    });
    localStorage.setItem("sessionId", data.session_id);
    window.location.href = "/";
  };

  const handleClickToken = () => {
    getToken();
  };

  const handleClickSession = () => {
    permissionToken();
  };

  useEffect(() => {
    if (!window.location.search) {
      return;
    }

    const url = new URL(window.location);
    const urlParams = url.searchParams;
    if (!urlParams.get("approved")) {
      alert(
        "세션 생성을 위한 중간 토큰이 허가되지 않았습니다, 다시 요청하세요"
      );
    }
    localStorage.setItem("requestToken", urlParams.get("request_token"));
    createSession();
  }, []);

  return (
    <S.Container>
      <S.Logo>영화 장바구니 만들기</S.Logo>
      <S.ButtonBox>
        <button onClick={() => handleClickToken()}>token</button>
        <button onClick={() => handleClickSession()}>session</button>
      </S.ButtonBox>
    </S.Container>
  );
}

export default Header;
