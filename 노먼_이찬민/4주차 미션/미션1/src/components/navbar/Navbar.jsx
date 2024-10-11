import React from "react";
import * as S from "./Navbar.style";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.LeftBox>
        <section onClick={() => navigate("/")}>SOMEFLIX</section>
      </S.LeftBox>
      <S.RightBox>
        <S.RightBoxButton type={"login"} onClick={() => navigate("/login")}>
          login
        </S.RightBoxButton>
        <S.RightBoxButton type={"signup"} onClick={() => navigate("/signup")}>
          signup
        </S.RightBoxButton>
      </S.RightBox>
    </S.Container>
  );
}

export default Navbar;
