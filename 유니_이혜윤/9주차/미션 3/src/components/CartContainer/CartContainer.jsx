import * as S from "./CartContainer.style";
import CartItem from "../CartItem/CartItem";
import useCartStore from "../../store/useCartStore";
import useModalStore from "../../store/useModalStore";

const CartContainer = () => {
  const { cartItems, total } = useCartStore();
  const { openModal } = useModalStore();

  return (
    <S.Container>
      <h1>당신이 선택한 음반</h1>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <S.Total>
          <p>총 가격</p>
          <p>₩ {total}원</p>
        </S.Total>
        <S.ClearButton onClick={openModal}>장바구니 초기화</S.ClearButton>
      </footer>
    </S.Container>
  );
};

export default CartContainer;
