import styled from "styled-components";

const InputTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const TextBar = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
`;

const SubmitButton = styled.input`
  width: 33px;
  height: 33px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  background: pink;
  cursor: pointer;
  &:hover {
    background: rgb(247, 123, 143);
  }
`;

export { InputTodo, TextBar, SubmitButton };
