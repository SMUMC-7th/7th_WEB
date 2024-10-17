import React from "react";
import * as S from "./Header.style";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Icon onClick={() => navigate("/")}></S.Icon>
      <S.Title Click={() => navigate("/")}>엄청난 음악 앱</S.Title>
    </S.Container>
  );
}

export default Header;
