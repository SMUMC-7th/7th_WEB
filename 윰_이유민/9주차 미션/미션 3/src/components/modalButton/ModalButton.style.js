import { styled } from 'styled-components';

const ButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;

  button {
    width: 80px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  border: 2px solid red;
  background-color: white;
  color: red;

  &:hover {
    border: none;
    background-color: red;
    color: white;
  }
`;

const BackButton = styled.button`
  border: 2px solid #5383e8;
  background-color: white;
  color: #5383e8;

  &:hover {
    border: none;
    background-color: #5383e8;
    color: white;
  }
`;

export { ButtonContainer, DeleteButton, BackButton };
