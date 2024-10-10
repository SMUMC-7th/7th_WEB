import * as S from './sidebar.style'
import { FaSearch } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";

const Navbar = () => {
    return (
        <S.Sidebar>
            <S.StyledLink to={'/search'}> <FaSearch /> 찾기</S.StyledLink>
            <S.StyledLink to={'/category'}><PiFilmSlateFill /> 영화</S.StyledLink>
        </S.Sidebar>
    );
};

export default Navbar;
