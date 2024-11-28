import { ChevronDown, ChevronUp } from '../../constants/icons';
import { decrease, increase, removeItem } from '../../features/cart/cartSlice';
import * as S from './CartItem.style';
import { useDispatch } from 'react-redux';

const CartItem = (item) => {
  const { id, title, singer, price, img, amount } = item;

  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.AlbumImg src={img} alt='' />
      <S.TextContainer>
        <S.Info>
          <h4>{title}</h4>
          <p>|</p>
          <p>{singer}</p>
        </S.Info>
        <S.Price>₩ {price}</S.Price>
      </S.TextContainer>
      <S.CountContainer>
        <button onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </S.CountContainer>
    </S.Container>
  );
};

export { CartItem };
