import * as S from './Navbar.style';
import { NaveBtnContainer } from './NavBtnContainer';

const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo to="/">YUMCHA</S.Logo>
      <NaveBtnContainer />
    </S.Nav>
  );
};

export default Navbar;
