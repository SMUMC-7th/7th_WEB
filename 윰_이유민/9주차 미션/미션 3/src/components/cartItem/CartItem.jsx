import { ChevronDown, ChevronUp } from '../../constants/icons';
import { useStore } from '../../store/store';
import * as S from './CartItem.style';

const CartItem = (item) => {
  const { id, title, singer, price, img, amount } = item;

  const { increase, removeItem, decrease } = useStore((state) => state);

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
        <button onClick={() => increase(id)}>
          <ChevronUp />
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
          <ChevronDown />
        </button>
      </S.CountContainer>
    </S.Container>
  );
};

export { CartItem };
