import * as S from './Modal.style';
import ModalButton from '../ModalButton/ModalButton';

const Modal = ({ children }) => {
    return (
        <S.Container onClick={(e) => {}}>
            <S.Modal>
                {children}
                <ModalButton></ModalButton>
            </S.Modal>
        </S.Container>
    );
};

export default Modal;
