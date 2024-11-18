import { useState, useEffect } from 'react';
import { Input } from '../../components/Input/Input';
import { Todo } from '../../components/todo/Todo';
import * as S from './TodoList.style';
import useFetchTodo from '../../hooks/useFetchTodo';
import usePostTodo from '../../hooks/usePostTodo';

function TodoList() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // todo 제목 변경 함수
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  // todo 내용 변경 함수
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  // todo post 요청 보내기
  const {
    postTodo,
    isLoading: postLoading,
    isError: postError,
  } = usePostTodo('/todo');

  // 1. 제목 및 내용 작성 후 버튼 클릭 시 투두 추가하기 (api 요청 보내기)
  const todoData = {
    title: title,
    content: content,
    checked: false,
  };

  const handleAddTodo = () => {
    postTodo(todoData);
  };

  // todoList 불러오기
  const { data: todoList, isLoading, isError } = useFetchTodo('/todo');

  return (
    <S.Container>
      <S.InputContainer onSubmit={() => handleAddTodo}>
        <Input
          placeholder={'제목을 입력해주세요.'}
          value={title}
          onChange={handleChangeTitle}
        />
        <Input
          placeholder={'내용을 입력해주세요.'}
          value={content}
          onChange={handleChangeContent}
        />
        <S.SubmitBtn type="submit">Todo 생성</S.SubmitBtn>
      </S.InputContainer>
      <S.TodoList>
        {Array.isArray(todoList[0]) &&
          todoList[0].map((todo) => <Todo todo={todo} key={todo.id} />)}
      </S.TodoList>
    </S.Container>
  );
}

export default TodoList;
