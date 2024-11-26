import { useCarStore, useModalStore } from '../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { CartItem } from '../cartItem/CartItem';
import * as S from './CartContainer.style';

const CartContainer = () => {
  const { cartItems, total } = useCarStore(useShallow((state) => state));
  const openModal = useModalStore((state) => state.openModal);

  return (
    <S.Section>
      <header>
        <h2>음반 장바구니</h2>
      </header>
      {cartItems.length !== 0 ? (
        <S.ItemContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </S.ItemContainer>
      ) : (
        <S.EmptyContainer>
          <h3>장바구니가 비었습니다.</h3>
          <p>좋아하는 음반을 장바구니에 담아보세요!</p>
        </S.EmptyContainer>
      )}
      <S.Footer>
        <hr />
        <S.TotalPriceContainer>
          <h4>총 가격</h4>
          <span>₩ {total}원</span>
        </S.TotalPriceContainer>
        <S.ResetButton
          onClick={() => {
            openModal();
          }}
        >
          장바구니 초기화
        </S.ResetButton>
      </S.Footer>
    </S.Section>
  );
};

export default CartContainer;
