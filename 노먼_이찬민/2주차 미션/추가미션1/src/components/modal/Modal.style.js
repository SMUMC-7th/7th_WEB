import styled from "styled-components";
const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: 40vh;
  background-color: white;
  transition: right 0.3s ease; /* 부드러운 슬라이드 애니메이션 */
  display: flex;
  flex-direction: column;
  z-index: 2;
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

export { Modal, Overlay };
