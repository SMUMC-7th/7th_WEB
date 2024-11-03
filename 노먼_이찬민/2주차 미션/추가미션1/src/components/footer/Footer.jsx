import React from "react";
import * as S from "./Footer.style";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const handleGithubClick = () => {
    window.open("https://github.com/chanminLee2");
  };
  return (
    <S.Container>
      <span onClick={() => handleGithubClick()}>
        <FaGithub />
      </span>
    </S.Container>
  );
}

export default Footer;
