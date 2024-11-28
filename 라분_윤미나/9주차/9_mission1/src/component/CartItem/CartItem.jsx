import { ChevronDown, ChevronUp } from "../../constants/icons";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import * as S from "./CartItem.style";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <S.Cart_Item>
      <img src={img} alt={`${title} 이미지`} />
      <div>
        <h4>
          {title} | {singer}
        </h4>
        <S.Item_Price>{price}원</S.Item_Price>
      </div>
      <div>
        <S.Amount_Btn onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </S.Amount_Btn>
        <S.Amount>{amount}</S.Amount>
        <S.Amount_Btn
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </S.Amount_Btn>
      </div>
    </S.Cart_Item>
  );
};

export default CartItem;
