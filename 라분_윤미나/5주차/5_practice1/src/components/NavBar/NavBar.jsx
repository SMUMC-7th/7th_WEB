import { Link } from "react-router-dom";
import * as S from "./NavBar.style";
//import { useState } from "react";

const Navbar = () => {
  return (
    <S.Nav>
      <Link to={"/"} style={{ color: "rgb(255, 0, 119)" }}>
        <h2>YONGCHA</h2>
      </Link>
      <div>
        <button>
          <Link to={"/login"} style={{ color: "white", fontsize: "17px" }}>
            로그인
          </Link>
        </button>

        <button>
          <Link to={"/signup"} style={{ color: "white", fontsize: "17px" }}>
            회원가입
          </Link>
        </button>
      </div>
    </S.Nav>
  );
};

export default Navbar;
