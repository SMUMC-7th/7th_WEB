import { useDispatch, useSelector } from "react-redux";
import * as S from "./CartContainer.style";
import CartItem from "../CartItem/CartItem";
import { openModal } from "../../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((store) => store.cart);
  console.log(cartItems);

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
        <S.ClearButton
          onClick={() => {
            dispatch(openModal());
          }}
        >
          장바구니 초기화
        </S.ClearButton>
      </footer>
    </S.Container>
  );
};

export default CartContainer;
