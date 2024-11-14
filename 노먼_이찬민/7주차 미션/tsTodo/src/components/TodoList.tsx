import React, { useState, ChangeEvent, useEffect } from "react";
import { getTodolist } from "../apis/todo";
import { TTodo } from "../types/todo";

function TodoList() {
  const [text, setText] = useState<string>("");
  const [todolist, setTodolist] = useState<TTodo[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  useEffect((): void => {
    const fetchTodo = async (): Promise<void> => {
      const result = await getTodolist();
      setTodolist(result);
    };

    fetchTodo();
  }, []);

  // 추가
  const handleAddClick = (): void => {
    const newTodo: TTodo = {
      id: todolist.length + 1,
      text,
      checked: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    setText("");
  };

  // checked 값 변경
  const handleCheckTodo = (id: number): void => {
    setTodolist((prev): TTodo[] =>
      prev.map(
        (item): TTodo =>
          item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteTodo = (id: number): void => {
    setTodolist((prev): TTodo[] =>
      prev.filter((todo): boolean => todo.id !== id)
    );
  };
  return (
    <div>
      <div>
        <input value={text} onChange={handleInputChange} />
        <button onClick={(): void => handleAddClick()}>추가</button>
      </div>
      {todolist.map((todo: TTodo) => (
        <>
          <input
            onChange={(): void => handleCheckTodo(todo.id)}
            type="checkbox"
            checked={todo.checked}
            id={String(todo.id)}
          />
          <label htmlFor={String(todo.id)}>{todo.text}</label>
          <button
            data-testid={`delete-button-${todo.id}`}
            onClick={(): void => handleDeleteTodo(todo.id)}
          >
            삭제
          </button>
        </>
      ))}
    </div>
  );
}

export default TodoList;
