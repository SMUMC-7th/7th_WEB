import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import * as S from './ModalButton.style';
import { closeModal } from '../../features/modal/modalSlice';

const ModalButton = () => {
    const dispatch = useDispatch();

    return (
        <S.Container>
            <S.YesButton
                onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}
            >
                네
            </S.YesButton>
            <S.NoButton onClick={() => dispatch(closeModal())}>
                아니요
            </S.NoButton>
        </S.Container>
    );
};

export default ModalButton;
