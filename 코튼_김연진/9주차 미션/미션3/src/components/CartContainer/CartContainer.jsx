import * as S from './CartContainer.style';
import CartItem from '../CartItem/CartItem';
import { useCartStore } from '../../features/cart/cartSlice';
import { useModalStore } from '../../features/modal/modalSlice';

const CartContainer = () => {
    const { cartItems, total } = useCartStore();
    const { openModal } = useModalStore();

    return (
        <S.Container>
            <S.Title>당신이 선택한 음반</S.Title>
            <S.Album>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </S.Album>
            <S.Footer>
                <hr />
                <S.TotalPrice>
                    총 가격 <span>₩ {total}</span>
                </S.TotalPrice>
                <S.Button
                    onClick={() => {
                        openModal();
                    }}
                >
                    장바구니 초기화
                </S.Button>
            </S.Footer>
        </S.Container>
    );
};

export default CartContainer;
