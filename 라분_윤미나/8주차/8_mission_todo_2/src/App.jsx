import { useState } from "react";
import * as S from "./App.style";
import { deleteTodo, getTodoList, patchTodo, postTodo } from "./apis/todo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "./main";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  //console.log("title:", title);
  //console.log("content: ", content);

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      console.log("Todo 생성 성공: ");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log("항상 실행됨.");
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      console.log("Todo 생성 성공: ");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log("항상 실행됨.");
    },
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      console.log("Todo 생성 성공: ");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log("항상 실행됨.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postTodoMutation({ title: title, content: content });
    setTitle("");
    setContent("");
  };

  console.log(todos);

  return (
    <div>
      <h3>Todo 검색</h3>
      <S.Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <S.Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="컨텐츠를 입력해주세요"
        />
        <S.Button type="submit">Todo 생성</S.Button>
      </S.Form>
      {isPending ? (
        <div>로딩중..</div>
      ) : (
        <S.Container>
          {todos[0]?.map((todo) => {
            //console.log(todo);
            return (
              <S.TodoContainer key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.checked}
                  onChange={() =>
                    patchTodoMutation({ id: todo.id, checked: !todo.checked })
                  }
                />
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
                <button onClick={() => deleteTodoMutation({ id: todo.id })}>
                  {" "}
                  삭제하기
                </button>
              </S.TodoContainer>
            );
          })}
        </S.Container>
      )}
    </div>
  );
}

export default App;
