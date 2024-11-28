import * as S from "./CartItem.style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCartStore from "../../store/useCartStore";

const CartItem = ({ id, img, title, singer, price, amount }) => {
  const { increase, decrease, removeItem } = useCartStore();

  return (
    <S.ItemContainer key={id}>
      <S.ItemBox>
        <img src={img} alt={title} />
        <div>
          <h4>
            {title} | {singer}
          </h4>
          <p>₩ {price}원</p>
        </div>
      </S.ItemBox>
      <S.Button>
        <button onClick={() => increase(id)}>
          <IoIosArrowUp />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              removeItem(id);
              return;
            }
            decrease(id);
          }}
        >
          <IoIosArrowDown />
        </button>
      </S.Button>
    </S.ItemContainer>
  );
};

export default CartItem;
