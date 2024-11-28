/* eslint-disable react/prop-types */
import * as S from './CartItem.style.js';
import { ChevronDown, ChevronUp } from '../../constants/icons.jsx';
import { useCartStore } from '../../features/cart/cartSlice.js';

const CartItem = (props) => {
    const { id, title, singer, price, img, amount } = props;
    const { increase, decrease, removeItem } = useCartStore();

    return (
        <S.Container>
            <img src={img} alt={`${title} 이미지`} />
            <S.Info>
                <S.TitleSinger>
                    <div>{title}</div>|<div>{singer}</div>
                </S.TitleSinger>
                <S.Price>₩ {price}</S.Price>
            </S.Info>
            <S.Buttons>
                <S.Button onClick={() => increase(id)}>
                    <ChevronUp />
                </S.Button>
                <p>{amount}</p>
                <S.Button
                    onClick={() => {
                        if (amount === 1) {
                            removeItem(id);
                            return;
                        }
                        decrease(id);
                    }}
                >
                    <ChevronDown />
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
};

export default CartItem;
