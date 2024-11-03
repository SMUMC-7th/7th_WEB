import styled from "styled-components";
const ModalBox = styled.div`
  position: fixed;
  top: 20%;
  left: 35%;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
  background-color: white;
  z-index: 2;

  button {
    position: relative;
    top: -80px;
    left: 220px;
  }

  h2 {
    position: relative;
    left: 15px;
  }
`;

const ModalContent = styled.div`
  width: 80%;
  height: 70%;
  background: "white";
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  gap: 10px;
`;

const ModalCard = styled.div`
  background-color: #c6f9f1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
`;

export { ModalBox, ModalCard, ModalContent, Overlay };
