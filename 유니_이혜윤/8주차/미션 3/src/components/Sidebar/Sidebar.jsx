import * as S from "./Sidebar.style";
import { Link } from "react-router-dom";
import { BiSearch, BiMoviePlay, BiDollarCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <S.Container>
      <Link to={"/search"}>
        <BiSearch />
        찾기
      </Link>
      <Link to={"/category"}>
        <BiMoviePlay />
        영화
      </Link>
      <Link to={"/subscription"}>
        <BiDollarCircle />
        구독
      </Link>
    </S.Container>
  );
};

export default Sidebar;
