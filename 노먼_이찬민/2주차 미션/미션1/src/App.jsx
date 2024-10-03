import { useState } from "react";
import Input from "./../components/Input";
import Button from "./../components/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyForm = styled.form`
  width: 40%;
  height: 200px;
`;

const MyList = styled.ul`
  width: 40vw;
  height: 50vh;
  overflow-y: auto;
`;

const MyListItem = styled.li`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  span {
    position: relative;
    top: 25px;
  }
`;

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "할일 1" },
    { id: 2, text: "할일 2" },
  ]);

  // 입력 문자열
  const [inputText, setInputText] = useState("");

  // 수정 관리
  const [editingId, setEditingId] = useState(0);
  const [editingText, setEditingText] = useState("");

  // console.log
  console.log(inputText, editingId, editingText, todoList);

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
    // <>
    <Container>
      <MyForm onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button text={"할 일 등록"}></Button>
      </MyForm>
      <MyList>
        {todoList.map((todo) =>
          // 수정중이 아닌 경우
          todo.id !== editingId ? (
            <MyListItem key={todo.id}>
              <span>
                {todo.id}. {" " + todo.text}
              </span>
              <Button
                text={"삭제"}
                onClick={() => removeTodo(todo.id)}
              ></Button>
              <Button
                text={"수정 진행"}
                onClick={() => modifyOnTodo(todo.id, todo.text)}
              ></Button>
            </MyListItem>
          ) : (
            // 수정중인 경우
            <MyListItem key={todo.id}>
              <Input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              ></Input>
              <Button
                text={"삭제"}
                onClick={() => removeTodo(todo.id)}
              ></Button>
              <Button
                text={"수정 완료"}
                onClick={() => modifyOffTodo(editingText)}
              ></Button>
            </MyListItem>
          )
        )}
      </MyList>
    </Container>
  );
}

export default App;
