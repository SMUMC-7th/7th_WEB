import useFetchTodo from '../../hooks/useFetchTodo';
import * as S from './TodoDetails.style';
import { useParams } from 'react-router-dom';

function TodoDetails() {
  const { todoId } = useParams();

  const { data: todo, isLoading, isError } = useFetchTodo(`/todo/${todoId}`);
  console.log(todo);

  const splitDate = (date) => {
    if (date && typeof date === 'string') {
      return date.split('T')[0];
    }
  };

  return (
    <S.DetailContainer>
      <S.Title>{todo.title}</S.Title>
      <S.Content>{todo.content}</S.Content>
      <S.CreateDate>기록일: {splitDate(todo.createdAt)}</S.CreateDate>
      <S.UpdateDate>최근 변경일: {splitDate(todo.updatedAt)}</S.UpdateDate>
      <S.State>상태: {todo.checked ? '완료' : '미완료'}</S.State>
    </S.DetailContainer>
  );
}

export default TodoDetails;
