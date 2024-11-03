import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  height: 10vh;
  background-color: #f1f0ef;

  display: flex;
  align-items: center;
  padding: 20px;

  border-bottom: 0.5px solid #ddd;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <h3>🍀 혜콩 blog</h3>
      </Link>
    </Container>
  );
};

export default Header;
