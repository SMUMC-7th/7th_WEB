import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TodoList.style";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import {
  getTodoList,
  postTodo,
  patchTodo,
  deleteTodo,
  searchTodo,
} from "../../apis/todo";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const TodoList = () => {
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [editingId, setEditingId] = useState(null); // 현재 수정 중인 To-Do id
  const [editTitle, setEditTitle] = useState(""); // 수정 중인 제목
  const [editContent, setEditContent] = useState(""); // 수정 중인 내용
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false); // 검색 상태
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // useQuery로 데이터 가져오기
  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos", searchTitle],
    queryFn: () => {
      if (searchTitle && searchTriggered) {
        return searchTodo({ title: searchTitle });
      } else {
        return getTodoList();
      }
    },
  });

  console.log(todos);

  // todo 생성 - post
  const { mutate: addTodo } = useMutation({
    mutationFn: postTodo,
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
      setTitle(""); // 제목 초기화
      setContent(""); // 내용 초기화
    },
    onError(error) {
      console.error("POST 요청 실패:", error);
      alert("Todo 작성에 실패했습니다 ㅠㅠ");
    },
  });

  // todo 삭제 - delete
  const { mutate: deleteTodoById } = useMutation({
    mutationFn: deleteTodo,
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
    },
    onError(error) {
      console.error("DELETE 요청 실패:", error);
      alert("Todo 삭제에 실패했습니다 ㅠㅠ");
    },
  });

  // todo 수정 - patch
  const { mutate: saveTodo } = useMutation({
    patchTodo,
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
      setEditingId(null); // 수정 상태 해제
    },
    onError(error) {
      console.error("PATCH 요청 실패:", error);
      alert("Todo 수정에 실패했습니다 ㅠㅠ");
    },
  });

  // 검색 기능
  const handleSearch = () => {
    setSearchTriggered(true);
  };

  // 전체보기 버튼 클릭 검색어 초기화
  const handleClearSearch = () => {
    setSearchTitle("");
    setSearchTriggered(false);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 가져오는 중 오류가 발생했습니다!</div>;

  return (
    <S.Container>
      <h1>Todo List 🤙🏻</h1>

      <TodoInput
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        addTodo={(title, content) =>
          addTodo({ title, content, checked: false })
        }
      />

      <TodoListItem
        todos={todos}
        editingId={editingId}
        setEditingId={setEditingId}
        editTitle={editTitle}
        editContent={editContent}
        setEditTitle={setEditTitle}
        setEditContent={setEditContent}
        saveTodo={(id) =>
          saveTodo({ id, title: editTitle, content: editContent })
        }
        deleteTodo={(id) => deleteTodoById({ id })}
        navigate={navigate}
        startEditing={(id, title, content) => {
          setEditingId(id);
          setEditTitle(title);
          setEditContent(content);
        }}
      />

      <S.SearchBox>
        <input
          type="text"
          placeholder="검색할 제목을 입력하세요 :)"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)} // 검색어 입력만 처리
        />
        <button onClick={handleSearch}>검색</button>{" "}
        <button onClick={handleClearSearch}>전체보기</button>{" "}
      </S.SearchBox>
    </S.Container>
  );
};

export default TodoList;
