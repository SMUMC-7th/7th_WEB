import * as S from "./CartItem.style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { increase, decrease, removeItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, singer, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <S.ItemContainer key={id}>
      <S.ItemBox>
        <img src={img} alt={title} />
        <div>
          <h4>
            {title} | {singer}
          </h4>
          <p>{price}원</p>
        </div>
      </S.ItemBox>
      <S.Button>
        <button onClick={() => dispatch(increase(id))}>
          <IoIosArrowUp />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount == 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <IoIosArrowDown />
        </button>
      </S.Button>
    </S.ItemContainer>
  );
};

export default CartItem;
