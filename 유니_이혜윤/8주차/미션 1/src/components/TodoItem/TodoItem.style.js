import styled from "styled-components";

const TodoList = styled.li`
  margin-bottom: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;

  width: 290px;
  height: 60px;

  border: 1px solid #ccc;
  border-radius: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

const TodoContent = styled.div`
  padding-left: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 13px;
  }

  input {
    width: 100px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const TodoButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  button {
    border: none;
    border-radius: 10px;
    font-size: 13px;
    cursor: pointer;
    width: 50px;
    height: 30px;
  }
`;

const EditBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export { TodoList, TodoContent, TodoButton, EditBox };
