import styled from "styled-components";

const Modal_Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Modal = styled.div`
  position: fixed;
  height: 150px;
  top: 40%;
  left: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

export { Modal, Modal_Container };
