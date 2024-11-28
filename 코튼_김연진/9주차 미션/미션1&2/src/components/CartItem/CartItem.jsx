/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import * as S from './CartItem.style.js';
import {
    increase,
    decrease,
    removeItem,
} from '../../features/cart/cartSlice.js';
import { ChevronDown, ChevronUp } from '../../constants/icons.jsx';
const CartItem = (props) => {
    const { id, title, singer, price, img, amount } = props;
    const dispatch = useDispatch();
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
                <S.Button onClick={() => dispatch(increase(id))}>
                    <ChevronUp />
                </S.Button>
                <p>{amount}</p>
                <S.Button
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease(id));
                    }}
                >
                    <ChevronDown />
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
};

export default CartItem;
