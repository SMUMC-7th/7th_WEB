//import { useDispatch, useSelector } from "react-redux";
import useCartStore from "../../store/cartstore";
import CartItem from "../CartItem/CartItem";
import useModalStore from "../../store/modalstore";
import * as S from "./CartContainer.style";

const CartContainer = () => {
  const { cartItems, total } = useCartStore();
  const { openModal } = useModalStore();

  return (
    <S.Section>
      <header>
        <h2>당신이 선택한 음반</h2>
      </header>
      {cartItems.length === 0 ? (
        <S.P>고객님이 좋아하는 음반을 담아보세요!</S.P>
      ) : (
        <>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <S.Footer>
            <hr />
            <div>
              <h4>총 가격</h4>
              <h4>{total}원</h4>
            </div>
            <button onClick={() => openModal()}>장바구니 초기화</button>
          </S.Footer>
        </>
      )}
    </S.Section>
  );
};

export default CartContainer;
