import React, { useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import TodoList from "./../../components/TodoList";
import useTodos from "../../hooks/useTodos";
import { todoContext, useTodoContext } from "../../context/todoContext";
import debounce from "lodash/debounce";
import { defaultInstance } from "../../api/axiosInstance";

function MainPage() {
  const url = "http://localhost:3000";
  const [keyword, setKeyword] = useState();
  const [searchTodos, setSearchTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { addMutation } = useContext(todoContext);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const content = e.target[1].value;
    addMutation.mutate({
      title: title,
      content: content,
      checked: false,
    });
  };

  // useRef로 선언해서 상태를 사용하지만, 리렌더링을 유발하지 않도록 함 (키워드의 최신상태 참조, 함수의 재생성방지)
  // const keywordRef = useRef(keyword);
  const debouncedKeywordChange = debounce((newKeyword) => {
    setKeyword(newKeyword);
  }, 1000);

  const handleInputChange = (e) => {
    const newKeyword = e.target.value;
    debouncedKeywordChange(newKeyword);
  };

  return (
    <Container>
      <Header>
        <h1>⭐️ UMC TODOLIST ⭐️</h1>
        <input
          placeholder="원하는 todo 제목을 검색하세요"
          value={keyword}
          onChange={(e) => handleInputChange(e)}
        />
      </Header>
      <FormBox onSubmit={(e) => handleCreateSubmit(e)}>
        <input type="text" placeholder="제목을 입력해주세요" />
        <input type="text" placeholder="내용을 입력해주세요" />
        <button type="submit">✅ TODO 생성</button>
      </FormBox>
      <TodoList />
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

const Header = styled.div`
  padding: 20px;
`;

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  input {
    width: 600px;
    padding: 10px;
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: #cdf7bd;
    border-radius: 10px;

    &:hover {
      background-color: #b0e081;
    }
  }
`;

export default MainPage;
