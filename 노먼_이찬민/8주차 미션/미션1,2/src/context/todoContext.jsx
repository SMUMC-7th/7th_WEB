import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTodos from "../hooks/useTodos";

export const todoContext = createContext();

// app을 감쌀 프로바이더 jsx 정의
// eslint-disable-next-line react/prop-types
export function TodoContextProvider({ children }) {
  const todoData = useTodos();
  const { todos, addTodo, deleteTodo, modifyTodo, loading, error } = todoData;
  console.log(todos);

  return (
    <todoContext.Provider
      value={{ todos, addTodo, deleteTodo, modifyTodo, loading, error }}
    >
      {children}
    </todoContext.Provider>
  );
}

// context를 useContext에 넣어서 반환값으로 위에서 선언한 value를 불러들임
export function useTodoContext() {
  const context = useContext(todoContext);

  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
