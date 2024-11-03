import React from 'react';
import ReactDom from 'react-dom';
import LuckyCards from '../Luckycard/Luckycards';
import * as S from './Modal.style.js';

//import '../../../public/index.html';

import { useEffect, useState } from 'react';

const Modal = ({ onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent>
        <h3>랜덤으로 오늘의 운세를 뽑아보세요!</h3>
        <p>클릭하고 3초뒤에 자동으로 모달이 닫힙니다.</p>
        <LuckyCards onClose={onClose}></LuckyCards>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
