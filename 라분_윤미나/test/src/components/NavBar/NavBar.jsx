import { Link } from "react-router-dom";
import Nav from "./NavBar.style";
import { useState } from "react";

const Navbar = () => {
  const [isHoveringLogin, setIsHoveringLogin] = useState(false);
  const [isHoveringSignup, setIsHoveringSignup] = useState(false);

  const buttonLoginHover = {
    backgroundColor: isHoveringLogin ? "rgb(255, 0, 119)" : "rgb(25, 25, 25)",
    cursor: "pointer",
  };
  const buttonSignupHover = {
    backgroundColor: isHoveringSignup ? "rgb(255, 0, 119)" : "rgb(25, 25, 25)",
    cursor: "pointer",
  };
  return (
    <Nav>
      <Link to={"/"} style={{ color: "rgb(255, 0, 119)" }}>
        <h2>YONGCHA</h2>
      </Link>
      <div>
        <button
          style={buttonLoginHover}
          onMouseOver={() => setIsHoveringLogin(true)}
          onMouseLeave={() => setIsHoveringLogin(false)}
        >
          <Link to={"/login"} style={{ color: "white", fontSize: "17px" }}>
            로그인
          </Link>
        </button>

        <button
          style={buttonSignupHover}
          onMouseOver={() => setIsHoveringSignup(true)}
          onMouseLeave={() => setIsHoveringSignup(false)}
        >
          <Link to={"/signup"} style={{ color: "white", fontSize: "17px" }}>
            회원가입
          </Link>
        </button>
      </div>
    </Nav>
  );
};

export default Navbar;
