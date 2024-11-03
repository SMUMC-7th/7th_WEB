import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as S from "./Modal.style";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [isOpenCardId, setIsOpenCardId] = useState();
  const [isClick, setIsClick] = useState(false);
  const MODAL_CONTENTS = [
    {
      id: 1,
      content: "대길, 운수가 좋으시네요! 복권 한 장 사보시는 건 어떠신가요?",
    },
    {
      id: 2,
      content: "길, 운수가 조금 좋으시네요! 오늘은 좋은 일이 생길지도?",
    },
    {
      id: 3,
      content: "흉, 운수가 조금 좋지 않네요! 오늘은 힘내봅시다!",
    },
    {
      id: 4,
      content:
        "대흉, 운수가 나쁘네요...! 오늘 하루는 쉬어보시는 게 좋지 않을까요?",
    },
  ];

  const handleClickCard = (id) => {
    !isClick && setIsOpenCardId(id);
    setIsClick(true);
    // 비동기로 실행됨
    setTimeout(() => {
      setIsOpenCardId(null);
      setIsClick(true);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose}></S.Overlay>
      <S.ModalBox>
        <h2>오늘의 운세 🍀</h2>
        <button onClick={onClose}>x</button>
        <S.ModalContent ref={modalRef}>
          {MODAL_CONTENTS.map((item) => {
            return (
              <S.ModalCard
                key={item.id}
                onClick={() => handleClickCard(item.id)}
              >
                {isOpenCardId === item.id ? item.content : item.id}
              </S.ModalCard>
            );
          })}
        </S.ModalContent>
      </S.ModalBox>
    </>,
    document.getElementById("modal-root") // modal-root는 index.html에 있어야 함
  );
};

export default Modal;
