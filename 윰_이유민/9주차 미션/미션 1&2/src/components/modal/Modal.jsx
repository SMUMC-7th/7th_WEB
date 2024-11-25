import ModalButton from '../modalButton/ModalButton';
import * as S from './Modal.style';

const Modal = ({ children }) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        {children}
        <ModalButton />
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
