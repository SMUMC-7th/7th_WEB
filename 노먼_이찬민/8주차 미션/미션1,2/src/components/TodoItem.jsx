import React, { useContext, useState } from "react";
import styled from "styled-components";
import { todoContext } from "../context/todoContext";

function TodoItem({ todo }) {
  const { title, content, id } = todo;
  const { deleteTodo, modifyTodo } = useContext(todoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

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
      <input type="checkbox" onClick={() => handleCheckClick()} />
      {!isEditing ? (
        <MainBox>
          <p>{title}</p>
          <p>{content}</p>
        </MainBox>
      ) : (
        <MainBox>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>

          <input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          ></input>
        </MainBox>
      )}
      <ButtonBox>
        {!isEditing ? (
          <button onClick={() => handleModifyClick()}>수정</button>
        ) : (
          <button onClick={() => handleModifyClick()}>수정완료</button>
        )}

        <button onClick={() => handleDeleteClick()}>삭제</button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 70px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #f3d5d5;
`;

const MainBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonBox = styled.div`
  width: 150px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default TodoItem;
