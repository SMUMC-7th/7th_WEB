import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { todoContext, TodoContextProvider } from "../context/todoContext";

function TodoList() {
  const { todos, loading, error } = useContext(todoContext);
  return (
    <Container>
      {loading && <div>로딩중...</div>}
      {error && <div>에러: {error}</div>}
      {todos?.length > 0 &&
        todos.map((todo, _) => {
          return <TodoItem key={todo.id} todo={todo}></TodoItem>;
        })}
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default TodoList;
