import { createContext } from "react";
import { useState } from "react";

//전역 상태로 관리해줄 예정!!

export const todoContext = createContext(); //데이터를 담고 있음.

//value의 접근을 허락하도록 우산을 만들어줌
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "미나 라분 로제" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력하세요.");
      return;
    }
    setTodos((prev) => [
      ...prev, //이전의 값들을 복사
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };
  //2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  //3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        handleSubmit,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}
