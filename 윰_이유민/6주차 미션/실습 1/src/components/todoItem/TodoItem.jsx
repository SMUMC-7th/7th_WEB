import * as S from './TodoItem.style';
import Input from '../../components/input/Input';

function TodoItem({
  todo,
  index,
  editingId,
  setEditingId,
  editText,
  setEditText,
  updateTodo,
  deleteTodo,
}) {
  return (
    <S.Todos>
      <S.Todo>
        <S.TodoId>{index + 1}번</S.TodoId>
        {editingId !== todo.id ? (
          <p>{todo.task}</p>
        ) : (
          <Input defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
        )}
      </S.Todo>

      <S.BtnContainer>
        {editingId === todo.id ? (
          <S.UpdateButton onClick={() => updateTodo(editingId, editText)}>완료</S.UpdateButton>
        ) : (
          <S.UpdateButton onClick={() => setEditingId(todo.id)}>수정</S.UpdateButton>
        )}
        <S.DeleteButton onClick={() => deleteTodo(todo.id)}>삭제</S.DeleteButton>
      </S.BtnContainer>
    </S.Todos>
  );
}

export { TodoItem };
