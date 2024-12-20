import { useCarStore, useModalStore } from '../../store/store';
import * as S from './ModalButton.style';

const ModalButton = () => {
  const clearCart = useCarStore((state) => state.clearCart);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <S.ButtonContainer>
      <S.DeleteButton
        onClick={() => {
          clearCart();
          // 모달 close 상태 연결
          closeModal();
        }}
      >
        삭제
      </S.DeleteButton>
      <S.BackButton
        onClick={() => {
          closeModal();
        }}
      >
        취소
      </S.BackButton>
    </S.ButtonContainer>
  );
};

export default ModalButton;
