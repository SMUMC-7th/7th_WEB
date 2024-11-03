import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "할일 1" },
    { id: 2, text: "할일 2" },
  ]);

  // 입력 문자열
  const [inputText, setInputText] = useState("");

  // 수정 관리
  const [editingId, setEditingId] = useState(0);
  const [editingText, setEditingText] = useState("");

  // submit 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  };
  // 1. 추가
  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100 + 2),
      text: text,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };

  // 2. 삭제
  const removeTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 3. 수정
  const modifyOnTodo = (id, text) => {
    // 그 todo id 받아서 editing 등록
    setEditingId(id);
    setEditingText(text);
  };

  const modifyOffTodo = (text) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        return todo.id === editingId ? { ...todo, text: text } : todo;
      })
    );
    setEditingId(0);
    setEditingText("");
  };
  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
