import * as S from './Navbar.style';
import { CartIcon } from '../../constants/icons';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);

    return (
        <S.Container>
            <S.Logo>UMC PlayList</S.Logo>
            <S.ShoppingCart>
                <CartIcon />
                <S.AmountContainer>
                    <S.TotalAmount>{amount}</S.TotalAmount>
                </S.AmountContainer>
            </S.ShoppingCart>
        </S.Container>
    );
};

export default Navbar;
