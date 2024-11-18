import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TodoList.style";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null); // 현재 수정 중인 To-Do id
  const [editTitle, setEditTitle] = useState(""); // 수정 중인 제목
  const [editContent, setEditContent] = useState(""); // 수정 중인 내용
  const navigate = useNavigate();

  // todo 생성 - post
  const addTodo = async (title, content) => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/todo", {
        title,
        content,
      });
      console.log(res);
      const newTodo = res.data;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("post 요청 실패", error);
      alert("Todo 작성에 실패했습니다 ㅠㅠ");
    }
  };

  // todo 삭제 - delete
  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/todo/${id}`);
      console.log(res);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("delete 요청 실패", error);
      alert("Todo 삭제에 실패했습니다 ㅠㅠ");
    }
  };

  const startEditing = (id, currentTitle, currentContent) => {
    setEditingId(id);
    setEditTitle(currentTitle);
    setEditContent(currentContent);
  };

  // todo 수정 - patch
  const saveTodo = async (id) => {
    if (!editTitle || !editContent) {
      return alert("제목과 내용을 입력해주세요!");
    }

    try {
      const res = await axios.patch(`http://localhost:3000/todo/${id}`, {
        title: editTitle,
        content: editContent,
      });
      console.log(res);

      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, title: editTitle, content: editContent }
            : todo
        )
      );
      setEditingId(null);
    } catch (error) {
      console.error("patch 요청 실패", error);
      alert("Todo 수정에 실패했습니다 ㅠㅠ");
    }
  };

  return (
    <S.Container>
      <h1>Todo List 🤙🏻</h1>

      <TodoInput
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        addTodo={addTodo}
      />

      <TodoListItem
        todos={todos}
        editingId={editingId}
        setEditingId={setEditingId}
        editTitle={editTitle}
        editContent={editContent}
        setEditTitle={setEditTitle}
        setEditContent={setEditContent}
        saveTodo={saveTodo}
        deleteTodo={deleteTodo}
        navigate={navigate}
        startEditing={startEditing}
      />
    </S.Container>
  );
};

export default TodoList;
