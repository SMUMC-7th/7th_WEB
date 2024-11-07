import { createContext } from "react";
import { useState } from "react";

// 데이터를 담고 있음
export const TodoContext = createContext();

// 우산을 만듦
export function TodoContextProvider({ children }) {
  // 화면에 출력되는 투두리스트
  const [todos, setTodos] = useState([
    { id: 1, task: "todo 만들기" },
    { id: 2, task: "Context API 실습" },
    { id: 3, task: "야호야호" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력하세요!");
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
    setEditText("");
  };

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <TodoContext.Provider
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
    </TodoContext.Provider>
  );
}
