import { useTodoContext } from "../context/TodoContext";

const TodoList = () => {
  const {
    text,
    todoList,
    handelAddTodo,
    handleChangeText,
    handleChangeTodo,
    handleDeleteTodo,
  } = useTodoContext();

  return (
    <div>
      <div>
        <input value={text} onChange={handleChangeText} />
        <button onClick={handelAddTodo}>추가</button>
      </div>

      {todoList.map((todo) => (
        <div className="List" key={todo.id}>
          <input
            onChange={() => handleChangeTodo(todo.id)}
            type="checkbox"
            checked={todo.checked}
            id={String(todo.id)}
          />
          <label htmlFor={String(todo.id)}>{todo.text}</label>
          <button
            data-testid={`delete-button-${todo.id}`}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
