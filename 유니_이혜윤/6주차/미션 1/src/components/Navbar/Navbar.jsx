import * as N from "./Navbar.style";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import IsLoginContext from "../../context/LoginContext";

const Navbar = () => {
  const { user, isLogin, handleLogout } = useContext(IsLoginContext);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <N.Container>
      <N.Logo>
        <h1>
          <Link to={"/"}>YOONCHA</Link>
        </h1>
      </N.Logo>
      <N.Button>
        {isLogin ? (
          <>
            <p>{user}님 반갑습니다 🎀</p>
            <button onClick={onLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/signup"}>회원가입</Link>
          </>
        )}
      </N.Button>
    </N.Container>
  );
};

export default Navbar;
