import { Link } from "react-router-dom";
import Container from "./Header.style";
import { SiApplemusic } from "react-icons/si";

const Header = () => {
  return (
    <Link to={"/"} style={{ textDecoration: "none" }}>
      <Container>
        <SiApplemusic size="20px" />
        <p>raboontify</p>
      </Container>
    </Link>
  );
};

export default Header;
