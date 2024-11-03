import { useState } from 'react';
import * as S from './TodoList.style';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

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
          <S.Todos key={todo.id}>
            <S.Todo>
              <S.TodoId>{index + 1}번</S.TodoId>
              {editingId !== todo.id ? (
                <p>{todo.task}</p>
              ) : (
                <Input defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
              )}
            </S.Todo>

            <S.BtnContainer>
              <S.DeleteButton onClick={() => deleteTodo(todo.id)}>삭제하기</S.DeleteButton>
              {editingId === todo.id ? (
                <S.UpdateButton onClick={() => updateTodo(editingId, editText)}>
                  수정 완료
                </S.UpdateButton>
              ) : (
                <S.UpdateButton onClick={() => setEditingId(todo.id)}>수정 진행</S.UpdateButton>
              )}
            </S.BtnContainer>
          </S.Todos>
        ))}
      </S.TodoListContainer>
    </S.Container>
  );
}

export { TodoList };
