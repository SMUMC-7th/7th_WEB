import { createContext } from "react";
import { useState } from "react";
import fetchDeleteTodoList from "../hooks/queries/useDeleteTodoList";
import fetchPostTodoList from "../hooks/queries/usePostTodoList";
import fetchUpdateTodoList from "../hooks/queries/useUpdateTodoList";

//전역 상태로 관리해줄 예정!!

export const todoContext = createContext(); //데이터를 담고 있음.

//value의 접근을 허락하도록 우산을 만들어줌
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");
  const [search, setSearch] = useState("");
  const [searchChecked, setSearchChecked] = useState(false);

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //1. 추가하기
  const addTodo = async (title, text) => {
    try {
      const newTodo = await fetchPostTodoList({ title, content: text });
      setTodos((prev) => [
        ...prev, //이전의 값들을 복사
        newTodo,
      ]);
      // setTodos((prev) => {
      //   const newTodos = [...prev];
      //   newTodos[0].push(newTodo);
      //   return;
      // });

      setText("");
      setTitle("");
    } catch (error) {
      console.log("Todo 작성 실패 : ", error);
    }
  };

  //2. 삭제하기
  const deleteTodo = async (id) => {
    try {
      setTodos((prev) => prev.filter((item) => item.id !== id));

      await fetchDeleteTodoList({ id });
      console.log(`Todo ID ${id} 삭제 완료`);
    } catch (error) {
      console.error("삭제 오류 발생:", error);
    }
  };
  //3. 수정하기 (핵심)

  const updateTodo = async (id) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        console.log(`Todo ID ${id} 를 가진 todo가 없음.`);
        return;
      }
      const updatedTodo = {
        title: editTitle,
        content: editText,
        checked: todo.checked,
      };
      const data = await fetchUpdateTodoList({ id, ...updatedTodo });
      setTodos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data } : item))
      );

      console.log(`Todo ID ${id} 수정 완료`);
      setEditingId("");
      setEditTitle("");
      setEditText("");
    } catch (error) {
      console.log("수정 오류 발생: ", error);
    }
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        title,
        setTitle,
        search,
        setSearch,
        searchChecked,
        setSearchChecked,
        editTitle,
        setEditTitle,
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
