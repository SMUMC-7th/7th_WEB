import styled from "styled-components";

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const TodoList = styled.div`
  width: 150px;
`;

const DeleteBtn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
`;

export { List, CheckBox, TodoList, DeleteBtn };
