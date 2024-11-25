import styled from "styled-components";

const ModalBox = styled.div`
  width: 300px;
  height: 200px;

  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

const ModalContent = styled.div`
  margin: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  gap: 20px;

  button {
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 10px;
    margin: 0 5px;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export { ModalBox, ModalContent };
