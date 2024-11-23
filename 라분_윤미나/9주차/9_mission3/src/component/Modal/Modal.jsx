import ModalButton from "../ModalButton/ModalButton";
import * as S from "./Modal.style";

const Modal = ({ children }) => {
  console.log("모달 실행");
  return (
    <S.Modal_Container>
      <S.Modal>
        {children}
        <ModalButton />
      </S.Modal>
    </S.Modal_Container>
  );
};

export default Modal;
