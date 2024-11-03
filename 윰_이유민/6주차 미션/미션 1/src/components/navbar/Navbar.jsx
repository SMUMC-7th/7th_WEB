import * as S from './Navbar.style.js';
import { NaveBtnContainer } from './navBtnContainer.jsx';

const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo to="/">YUMCHA</S.Logo>
      <NaveBtnContainer />
    </S.Nav>
  );
};

export default Navbar;
