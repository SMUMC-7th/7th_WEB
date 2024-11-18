import * as S from "./TodoListItem.style";
import TodoItem from "../TodoItem/TodoItem";

const TodoListItem = ({
  todos,
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
    <S.Todo>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          setEditingId={setEditingId}
          editTitle={editTitle}
          editContent={editContent}
          setEditTitle={setEditTitle}
          setEditContent={setEditContent}
          saveTodo={saveTodo}
          deleteTodo={deleteTodo}
          navigate={navigate}
          startEditing={startEditing}
        />
      ))}
    </S.Todo>
  );
};

export default TodoListItem;
