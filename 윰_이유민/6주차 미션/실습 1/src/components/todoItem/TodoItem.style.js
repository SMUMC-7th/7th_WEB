import styled from 'styled-components';

const Todos = styled.div`
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
  font-weight: bolder;

  button {
    cursor: pointer;
    border: 2px solid lightgray;
    background-color: white;
    border-radius: 14px;
    width: 80px;
    height: 30px;
  }
`;

const DeleteButton = styled.button`
  color: #e84057;

  &:hover {
    background-color: #e84057;
    color: white;
    border: none;
  }
`;

const UpdateButton = styled.button`
  color: #484848;

  &:hover {
    background-color: #484848;
    color: white;
    border: none;
  }
`;

export { Todos, Todo, TodoId, BtnContainer, DeleteButton, UpdateButton };
