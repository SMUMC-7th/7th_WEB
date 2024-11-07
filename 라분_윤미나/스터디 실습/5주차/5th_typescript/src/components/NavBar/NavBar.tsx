import { Link } from "react-router-dom";
import * as S from "./NavBar.style";
import { useContext } from "react";
import axios from "axios";
import { loginContext } from "../../context/LoginContext";

const Navbar = () => {
  const {
    isLogin,
    setIsLogin,
    userName,
    setUserName,
    accessToken,
    handleLogout,
  } = useContext(loginContext)!;

  const userInfo = (accessToken: string) => {
    axios
      .get("http://localhost:3000/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const email = response.data.email;
        const nickname = email.split("@")[0];
        setUserName(nickname);

        setIsLogin(true);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
        setIsLogin(false);
      });
  };
  if (accessToken) {
    userInfo(accessToken);
  }
  return (
    <S.Nav>
      <Link to={"/"} style={{ color: "rgb(255, 0, 119)" }}>
        <h2>YONGCHA</h2>
      </Link>
      <S.Nav_Container>
        {isLogin ? (
          <>
            <S.Span>{userName}님 반갑습니다.</S.Span>
            <button onClick={handleLogout}>
              <span>로그아웃</span>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to={"/login"} style={{ color: "white", fontSize: "17px" }}>
                <span>로그인</span>
              </Link>
            </button>

            <button>
              <Link to={"/signup"} style={{ color: "white", fontSize: "17px" }}>
                <span>회원가입</span>
              </Link>
            </button>
          </>
        )}
      </S.Nav_Container>
    </S.Nav>
  );
};

export default Navbar;
