import { useStore } from '../../store/store';
import { CartIcon } from './../../constants/icons';
import * as S from './Navbar.style';

const Navbar = () => {
  const { amount } = useStore((state) => state);

  return (
    <S.Nav>
      <S.Container>
        <h2>♬ UMC PlayList</h2>
        <S.CartContainer>
          <CartIcon />
          <S.CountBedge>{amount}</S.CountBedge>
        </S.CartContainer>
      </S.Container>
    </S.Nav>
  );
};

export default Navbar;
