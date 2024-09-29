import { useState } from 'react';
import Button from './components/button'; 
import Input from './components/input'; 
import './App.css'; // CSS 파일을 import

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희두 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setText('');
    setEditingId('');
  };

  return (
    <div className="container"> 
      <h1>React TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
          className='todoAddInput'
        />
        <button type="submit" className='submitBtn'>할 일 등록</button>
      </form>
      <div className='todolists'>
        {todos.map((todo) => (
          <div className='todolists--item' style={{ display: 'flex', gap: '20px', marginTop: '10px' }} key={todo.id}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div className='todolists--item__info' style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}. </p>
                <p> {todo.task}</p>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <div className='todolists--item__info' style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <Input 
                  id={todo.id} 
                  editingId={editingId} 
                  defaultValue={todo.task} 
                  setEditText={setEditText}
                />
              </div>
            )}
            <Button
              id={todo.id}
              editingId={editingId}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              setEditingId={setEditingId}
              editText={editText}
              setEditText={setEditText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
