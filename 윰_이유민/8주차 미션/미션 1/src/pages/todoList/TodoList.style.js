import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 4px;
  background-color: orange;
  cursor: pointer;

  &:hover {
    background-color: darkorange;
  }
`;

const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

export { Container, InputContainer, SubmitBtn, TodoList };
