import React from "react";
import * as S from "./Navbar.style";

function Navbar(props) {
  const { setCurrentCategory } = props;
  return (
    <S.Container>
      <ul>
        <li onClick={() => setCurrentCategory("awesome")}>{"→ awesome"}</li>
        <li onClick={() => setCurrentCategory("somethings")}>
          {"→ somethings"}
        </li>
      </ul>
    </S.Container>
  );
}

export default Navbar;
