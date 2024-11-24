import React, { useContext, useState } from "react";
import styled from "styled-components";
import { todoContext } from "../../context/todoContext";
import { useLocation, useNavigate } from "react-router-dom";

function TodoDetailPage() {
  const { state } = useLocation(); // state라는 이름의 객체로 받아짐 -> 구분할
  console.log(state);
  const { title, content, id } = state;
  const { deleteTodo, modifyTodo, loading, error } = useContext(todoContext);

  const [newChecked, setNewChecked] = useState(state.checked);
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
        checked: state.checked,
      };
      modifyTodo(id, newTodo);
    }

    setIsEditing((prev) => !prev);
  };

  const handleDeleteClick = () => {
    deleteTodo(state.id);
  };

  const handleCheckClick = () => {
    modifyTodo(state.id, { ...state, checked: !state.checked });
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
        <input
          checked={newChecked}
          type="checkbox"
          onChange={() => handleCheckClick()}
        />
      </div>
      <div>
        {!isEditing ? (
          <h1>{state.title}</h1>
        ) : (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
        )}
      </div>
      <div>
        {!isEditing ? (
          <div>{state.content}</div>
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
