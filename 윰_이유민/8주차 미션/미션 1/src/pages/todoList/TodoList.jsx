import { useState, useEffect } from 'react';
import { Input } from '../../components/Input/Input';
import { Todo } from '../../components/todo/Todo';
import * as S from './TodoList.style';
import useFetchTodo from '../../hooks/useFetchTodo';
import usePostTodo from '../../hooks/usePostTodo';

function TodoList() {
  const { data: todoList, isLoading, isError } = useFetchTodo('/todo');

  return (
    <S.Container>
      <S.InputContainer>
        <Input placeholder={'제목을 입력해주세요.'} />
        <Input placeholder={'내용을 입력해주세요.'} />
        <S.SubmitBtn>Todo 생성</S.SubmitBtn>
      </S.InputContainer>
      <S.TodoList>
        {Array.isArray(todoList[0]) &&
          todoList[0].map((todo) => <Todo todo={todo} key={todo.id} />)}
      </S.TodoList>
    </S.Container>
  );
}

export default TodoList;
