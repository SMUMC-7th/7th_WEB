import * as S from './ModalButton.style';
import { useCartStore } from '../../features/cart/cartSlice';
import { useModalStore } from '../../features/modal/modalSlice';
const ModalButton = () => {
    const { clearCart } = useCartStore();
    const { closeModal } = useModalStore();

    return (
        <S.Container>
            <S.YesButton
                onClick={() => {
                    clearCart();
                    closeModal();
                }}
            >
                네
            </S.YesButton>
            <S.NoButton onClick={() => closeModal()}>아니요</S.NoButton>
        </S.Container>
    );
};

export default ModalButton;
