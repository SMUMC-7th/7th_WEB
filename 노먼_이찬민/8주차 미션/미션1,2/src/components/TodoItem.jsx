import React, { useContext, useState } from "react";
import styled from "styled-components";
import { todoContext } from "../context/todoContext";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo }) {
  const { title, content, id } = todo;
  const { deleteMutation, modifyMutation } = useContext(todoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newChecked, setNewChecked] = useState(todo.checked);

  const navigate = useNavigate();

  // 로직
  const handleModifyClick = () => {
    if (isEditing) {
      const modTodo = {
        title: newTitle,
        content: newContent,
        checked: todo.checked,
      };
      modifyMutation.mutate({ id: id, modTodo: modTodo });
    }

    setIsEditing((prev) => !prev);
  };

  const handleDeleteClick = () => {
    deleteMutation.mutate(todo.id);
  };

  const handleCheckClick = () => {
    modifyMutation.mutate(todo.id, { ...todo, checked: !todo.checked });
    setNewChecked(!newChecked);
  };

  return (
    <Container
      onClick={() => {
        // navigate(`/todo/${id}`, { state: todo });
      }}
    >
      <input
        checked={newChecked}
        type="checkbox"
        onChange={() => handleCheckClick()}
      />
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
