import * as N from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <N.Container>
      <N.Logo>
        <h1>
          <Link to={"/"}>YOONCHA</Link>
        </h1>
      </N.Logo>
      <N.Button>
        <Link to={"/login"}>로그인</Link>
        <Link to={"/signup"}>회원가입</Link>
      </N.Button>
    </N.Container>
  );
};

export default Navbar;
