import { useState } from "react";
import styled from "styled-components";
import ReactDom from 'react-dom';
import { luckyCard } from "../mocks/luckyCard";

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    background: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
    width: 330px;
    height: 330px;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    padding: 20px;
    gap: 10px;

    position: relative;

    p {
        font-size: 13px;
    }
`;

const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin: 15px 0;
`;

const Box = styled.div`
    width: 100px;
    height: 100px;

    background: #b1f2ae;
    padding: 20px;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
`;

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-weight: bold;


`;

const Modal = ({ onClose }) => {
    // 처음에는 4칸 모두 클로버로 초기화
    const [boxContent, setBoxContent] = useState(['🍀', '🍀', '🍀', '🍀']);

    const handleBoxClick = (index) => {
        // 내용 복사해서 새로운 배열
        const newContents = [...boxContent];
        // 클릭한 박스를 행운메세지로 변경
        newContents[index] = luckyCard[index].content;

        setBoxContent(newContents);

        // 2초 후에 모달 닫기
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    // 모달 바깥 쪽 클릭해도 모달 닫히게
    const handleContainerClick = (e) => {
        // 클릭한 요소 === 바깥쪽컨테이너 (모달 닫아)
        if(e.target === e.currentTarget) {
            onClose();
        }
    };

    return ReactDom.createPortal(
        <ModalContainer onClick={handleContainerClick}>
            <ModalBox>
                <CloseButton onClick={onClose}>
                    <p>X</p>
                </CloseButton>
                <h3>랜덤으로 오늘의 운세를 뽑아보세요 :D</h3>
                <p>클릭하고 2초 뒤에 모달이 자동으로 닫힙니다.</p>
                <BoxContainer>
                    {boxContent.map((content, index) => (
                        <Box key={index} onClick={() => handleBoxClick(index)}>
                            {content}
                        </Box>
                    ))}
                </BoxContainer>
            </ModalBox>
        </ModalContainer>,
        document.getElementById('modal-root')
    )
}

export default Modal;