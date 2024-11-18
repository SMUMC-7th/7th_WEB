import * as S from "./TodoItem.style";

const TodoItem = ({
  todo,
  editingId,
  setEditingId,
  editTitle,
  editContent,
  setEditTitle,
  setEditContent,
  saveTodo,
  deleteTodo,
  navigate,
  startEditing,
}) => {
  return (
    <S.TodoList>
      <input type="checkbox" />
      {editingId === todo.id ? (
        <S.EditBox>
          <S.TodoContent>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              type="text"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </S.TodoContent>
          <S.TodoButton>
            <button onClick={() => saveTodo(todo.id)}>저장</button>
            <button onClick={() => setEditingId(null)}>취소</button>
          </S.TodoButton>
        </S.EditBox>
      ) : (
        <S.TodoContent onClick={() => navigate(`/todo/${todo.id}`)}>
          <h5>{todo.title}</h5>
          <p>{todo.content}</p>
        </S.TodoContent>
      )}
      <S.TodoButton>
        {editingId !== todo.id && (
          <>
            <button
              onClick={() => startEditing(todo.id, todo.title, todo.content)}
            >
              수정
            </button>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </>
        )}
      </S.TodoButton>
    </S.TodoList>
  );
};

export default TodoItem;
