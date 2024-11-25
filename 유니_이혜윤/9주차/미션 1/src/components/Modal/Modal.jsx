import ModalButton from "../ModalButton/ModalButton";
import * as S from "./Modal.style";

const Modal = ({ children }) => {
  return (
    <S.ModalBox>
      <S.ModalContent>
        {children}
        <ModalButton />
      </S.ModalContent>
    </S.ModalBox>
  );
};

export default Modal;
