import * as S from './Todo.style';
import { useNavigate } from 'react-router-dom';

const Todo = ({ todo }) => {
  const nav = useNavigate();

  const goToDetail = () => {
    nav(`/todo/${todo.id}`);
  };

  return (
    <S.TodoBox>
      <S.ContentBox>
        <input type="checkbox" checked={todo.checked} />
        <S.TextContainer onClick={goToDetail}>
          <label
          // htmlFor={todo.id}
          >
            {todo.title}
          </label>
          <label
          // htmlFor={todo.id}
          >
            {todo.content}
          </label>
        </S.TextContainer>
      </S.ContentBox>
      <S.BtnContainer>
        <button>수정</button>
        <button>삭제</button>
      </S.BtnContainer>
    </S.TodoBox>
  );
};

export { Todo };
