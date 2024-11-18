import React, { useContext, useState } from "react";
import styled from "styled-components";
import { todoContext } from "../../context/todoContext";
import { useNavigate } from "react-router-dom";

function TodoDetailPage({ todo }) {
  const { title, content, id } = todo;
  const { deleteTodo, modifyTodo, loading, error } = useContext(todoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const navigate = useNavigate();

  // 로직
  const handleModifyClick = () => {
    if (isEditing) {
      const newTodo = {
        title: newTitle,
        content: newContent,
        checked: todo.checked,
      };
      modifyTodo(id, newTodo);
    }

    setIsEditing((prev) => !prev);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleCheckClick = () => {
    modifyTodo(todo.id, { ...todo, checked: !todo.checked });
  };

  return (
    <Container>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          뒤로가기
        </button>
      </div>
      <div>
        {!isEditing ? (
          <button onClick={() => handleModifyClick()}>수정</button>
        ) : (
          <button onClick={() => handleModifyClick()}>수정완료</button>
        )}
        <button onClick={() => handleDeleteClick()}>삭제</button>
        <input type="checkbox" />
      </div>
      <div>
        {!isEditing ? (
          <h1>{todo.title}</h1>
        ) : (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
        )}
      </div>
      <div>
        {!isEditing ? (
          <div>{todo.content}</div>
        ) : (
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          ></textarea>
        )}
      </div>
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

export default TodoDetailPage;
