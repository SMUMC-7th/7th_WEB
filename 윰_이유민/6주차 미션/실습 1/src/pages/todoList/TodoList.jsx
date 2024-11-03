import { useState } from 'react';
import * as S from './TodoList.style';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { TodoItem } from '../../components/todoItem/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('텍스트를 입력하세요!');
    } else {
      setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? { ...item, task: text } : item)));
    setEditingId('');
  };

  return (
    <S.Container>
      <S.Header>
        <h1>ToDoList</h1>
      </S.Header>
      <S.SubmitForm onSubmit={handleSubmit}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo} type="submit" text="할 일 등록" />
      </S.SubmitForm>
      <S.TodoListContainer>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            editingId={editingId}
            setEditingId={setEditingId}
            editText={editText}
            setEditText={setEditText}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </S.TodoListContainer>
    </S.Container>
  );
}

export { TodoList };
