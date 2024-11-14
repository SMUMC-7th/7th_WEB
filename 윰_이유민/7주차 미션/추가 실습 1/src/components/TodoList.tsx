import { ChangeEvent, useEffect, useState } from 'react';
import { TTodo } from '../types/todo';
import { getTodoList } from '../apis/todo';

function TodoList() {
  const [text, setText] = useState<string>('');
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const fetchTodo = async () => {
      const result = await getTodoList();
      setTodoList(result);
    };

    fetchTodo();
  }, []);

  // Todo 1. input에 입력한 값을 todoList에 추가하는 함수를 만들기
  const handleAddTodo = () => {
    setTodoList((prev) => [...prev, { id: prev.length + 1, text: text, checked: false }]);
    setText('');
  };

  // Todo 2. 체크박스를 클릭했을 때 해당 todo의 checked 값을 변경하는 함수를 만들기
  const handleChangeChecked = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)),
    );
  };

  // Todo 3. 투두 삭제
  const handleDeleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input value={text} onChange={handleChangeText} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      {todoList.map((todo) => (
        <div style={{ display: 'flex' }} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleChangeChecked(todo.id)}
            id={String(todo.id)}
          />
          <label htmlFor={String(todo.id)}>{todo.text}</label>
          <button
            data-testId={`delete-button-${todo.id}`}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
