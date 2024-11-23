import * as S from "./TodoItem.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo, deleteTodo as deleteTodoAPI } from "../../apis/todo";

const TodoItem = ({
  todo,
  editingId,
  setEditingId,
  editTitle,
  editContent,
  setEditTitle,
  setEditContent,
  navigate,
  startEditing,
}) => {
  const queryClient = useQueryClient();

  // 수정 Mutation
  const { mutate: saveTodo } = useMutation({
    mutationFn: patchTodo,
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
      setEditingId(null);
    },
    onError() {
      alert("Todo 수정에 실패했습니다.");
    },
  });

  // 삭제 Mutation
  const { mutate: deleteTodo } = useMutation({
    mutationFn: deleteTodoAPI,
    onSuccess() {
      queryClient.invalidateQueries(["todos"]);
    },
    onError() {
      alert("Todo 삭제에 실패했습니다.");
    },
  });

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
            <button
              onClick={() =>
                saveTodo({
                  id: todo.id,
                  title: editTitle,
                  content: editContent,
                })
              }
            >
              저장
            </button>
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
            <button onClick={() => deleteTodo({ id: todo.id })}>삭제</button>
          </>
        )}
      </S.TodoButton>
    </S.TodoList>
  );
};

export default TodoItem;
