import { ChevronDown, ChevronUp } from "../../constants/icons";
import useCartStore from "../../store/cartstore";
import * as S from "./CartItem.style";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const { increase, removeItem, decrease } = useCartStore();
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
        <S.Amount_Btn onClick={() => increase(id)}>
          <ChevronUp />
        </S.Amount_Btn>
        <S.Amount>{amount}</S.Amount>
        <S.Amount_Btn
          onClick={() => {
            if (amount === 1) {
              removeItem(id);
              return;
            }
            decrease(id);
          }}
        >
          <ChevronDown />
        </S.Amount_Btn>
      </div>
    </S.Cart_Item>
  );
};

export default CartItem;
