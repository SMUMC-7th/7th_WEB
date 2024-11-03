import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyForm = styled.form`
  width: 40%;
  height: 200px;
`;

const MyList = styled.ul`
  width: 40vw;
  height: 50vh;
  overflow-y: auto;
`;

const MyListItem = styled.li`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  span {
    position: relative;
    top: 25px;
  }
`;

function App() {
  const {
    todoList,
    setTodoList,
    inputText,
    setInputText,
    editingId,
    setEditingId,
    editingText,
    setEditingText,
    handleSubmit,
    addTodo,
    removeTodo,
    modifyOnTodo,
    modifyOffTodo,
  } = useContext(TodoContext);
  return (
    // <>
    <Container>
      <MyForm onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button text={"할 일 등록"} bcg={"#fff3cd"}></Button>
      </MyForm>
      <MyList>
        {todoList.map((todo) =>
          // 수정중이 아닌 경우
          todo.id !== editingId ? (
            <MyListItem key={todo.id}>
              <span>
                {todo.id}. {" " + todo.text}
              </span>
              <Button
                text={"삭제"}
                onClick={() => removeTodo(todo.id)}
                bcg={"#ff9676"}
              ></Button>
              <Button
                text={"수정 진행"}
                onClick={() => modifyOnTodo(todo.id, todo.text)}
                bcg={"#d3ff81"}
              ></Button>
            </MyListItem>
          ) : (
            // 수정중인 경우
            <MyListItem key={todo.id}>
              <Input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              ></Input>
              <Button
                text={"삭제"}
                onClick={() => removeTodo(todo.id)}
                bcg={"#ff9676"}
              ></Button>
              <Button
                text={"수정 완료"}
                onClick={() => modifyOffTodo(editingText)}
                bcg={"#55ff58"}
              ></Button>
            </MyListItem>
          )
        )}
      </MyList>
    </Container>
  );
}

export default App;
