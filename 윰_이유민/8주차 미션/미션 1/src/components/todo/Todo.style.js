import { styled } from 'styled-components';

const TodoBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

const ContentBox = styled.div`
  width: 240px;
  display: flex;
  gap: 10px;
`;

const TextContainer = styled.div`
  width: 220px;
  height: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  gap: 10px;
  justify-content: end;
`;

const Button = styled.button`
  width: 85px;
  border-radius: 4px;
  border: none;
  background-color: lightgray;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

export {
  TodoBox,
  ContentBox,
  TextContainer,
  LabelContainer,
  InputContainer,
  BtnContainer,
  Button,
};
