import * as S from './Navbar.style';
import { CartIcon } from '../../constants/icons';
import { useCartStore } from '../../features/cart/cartSlice';

const Navbar = () => {
    const amount = useCartStore((state) => state.amount);

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
