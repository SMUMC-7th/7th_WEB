import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.header`
  margin: 40px 10px 20px;
`;

const SubmitForm = styled.form`
  width: 600px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  input {
    width: 80%;
  }
`;

const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 10px;
`;

const TodoItem = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
`;

const Todo = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const TodoId = styled.p`
  width: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  > button {
    width: 80px;
    height: 30px;
  }
`;

const DeleteButton = styled.button`
  background-color: white;
  color: #e84057;

  &:hover {
    background-color: #e84057;
    color: white;
  }
`;

const UpdateButton = styled.button`
  color: #484848;

  &:hover {
    background-color: #484848;
    color: white;
  }
`;

export {
  Container,
  Header,
  SubmitForm,
  TodoListContainer,
  TodoItem,
  Todo,
  TodoId,
  BtnContainer,
  DeleteButton,
  UpdateButton,
};
