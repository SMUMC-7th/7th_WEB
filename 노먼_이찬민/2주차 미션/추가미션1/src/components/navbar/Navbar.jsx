import React from "react";
import * as S from "./Navbar.style";

function Navbar() {
  return (
    <S.Container>
      <ul>
        <li>{"-> UMC-WEB"}</li>
        <li>{"-> 백준"}</li>
      </ul>
    </S.Container>
  );
}

export default Navbar;
