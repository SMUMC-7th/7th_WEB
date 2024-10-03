import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.section`
  position: relative;
  width: 430px;

  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export { ModalOverlay, ModalContent, CloseButton };
