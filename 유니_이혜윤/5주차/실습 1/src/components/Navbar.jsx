import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8vh;
  background-color: #131517;
`;

const Logo = styled.div`
  font-size: 15px;
  padding: 15px;

  a {
    color: #f2085a;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;

  a {
    border: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #131517;
    color: white;

    font-size: 15px;
    text-decoration: none;

    &:hover {
      background-color: #f2085a;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h1>
          <Link to={"/"}>HYECHA</Link>
        </h1>
      </Logo>
      <Button>
        <Link to={"/login"}>로그인</Link>
        <Link to={"/signup"}>회원가입</Link>
      </Button>
    </Container>
  );
};

export default Navbar;
