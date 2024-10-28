import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch, BiMoviePlay } from "react-icons/bi";

const Container = styled.div`
  padding: 20px;

  a {
    display: flex;
    padding-bottom: 10px;
    text-decoration: none;
    color: white;
    gap: 5px;

    cursor: pointer;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Link to={"/search"}>
        <BiSearch />
        찾기
      </Link>
      <Link to={"/category"}>
        <BiMoviePlay />
        영화
      </Link>
    </Container>
  );
};

export default Sidebar;
