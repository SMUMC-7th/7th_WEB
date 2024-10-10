import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const NavContainer = styled.nav`
  padding: 10px;

  h4 {
    padding-bottom: 10px;
  }

  ul {
    list-style: none;
    font-size: 14px;
  }

  li {
    display: flex;
    cursor: pointer;
    padding-bottom: 2px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <h4>분류 전체보기</h4>
      <ul>
        <Link to="/umc">
          <li>
            <FaAngleRight />
            UMC-WEB
          </li>
        </Link>

        <Link to="ping">
          <li>
            <FaAngleRight />
            티니핑
          </li>
        </Link>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
