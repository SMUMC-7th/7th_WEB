import { clearCart } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/ModalSlice';
import * as S from './ModalButton.style';

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <S.ButtonContainer>
      <S.DeleteButton
        onClick={() => {
          dispatch(clearCart());
          // 모달 close 상태 연결
          dispatch(closeModal());
        }}
      >
        삭제
      </S.DeleteButton>
      <S.BackButton
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        취소
      </S.BackButton>
    </S.ButtonContainer>
  );
};

export default ModalButton;
