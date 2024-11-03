import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import Container from "./SideBar.style";

const Navbar = () => {
  return (
    <Container>
      <Link
        to={"/search"}
        style={{ display: "flex", color: "white", gap: "10px" }}
      >
        <FaSearch size={"20px"} />
        <div>찾기</div>
      </Link>
      <Link
        to={"/category"}
        style={{ display: "flex", color: "white", gap: "10px" }}
      >
        <BiSolidMoviePlay size={"25px"} />
        <div>영화</div>
      </Link>
    </Container>
  );
};

export default Navbar;
