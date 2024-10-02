import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Container>
      <S.LeftBox>
        <img src="/logo.webp" />
        <section>엄청난 사이트</section>
      </S.LeftBox>
    </S.Container>
  );
}

export default Header;
