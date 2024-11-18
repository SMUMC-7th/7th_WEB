import React, { useContext } from "react";
import { styled } from "styled-components";
import TodoList from "./../../components/TodoList";
import useTodos from "../../hooks/useTodos";
import { todoContext, useTodoContext } from "../../context/todoContext";

function MainPage() {
  const { todos, addTodo, deleteTodo, modifyTodo, loading, error } =
    useContext(todoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const content = e.target[1].value;
    console.log(title, content);
    addTodo({
      title: title,
      content: content,
      checked: false,
    });
  };

  return (
    <Container>
      <Header>
        <h1>⭐️ UMC TODOLIST ⭐️</h1>
      </Header>
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="제목을 입력해주세요" />
        <input type="text" placeholder="내용을 입력해주세요" />
        <button type="submit">✅ TODO 생성</button>
      </FormBox>
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 20px;
`;

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  input {
    width: 600px;
    padding: 10px;
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: #cdf7bd;
    border-radius: 10px;

    &:hover {
      background-color: #b0e081;
    }
  }
`;

export default MainPage;
