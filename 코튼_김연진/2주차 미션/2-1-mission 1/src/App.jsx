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
    if (text !== '') {
      setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100) + 2, task: text },
      ]);
    }
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => 
        item.id === id ? { ...item, task: text !== '' ? text : item.task } : item // 수정하지 않은 경우 기존 값을 유지하도록 조건 추가
      )
    );
    setEditingId('');
    setEditText(''); // 수정 완료 후 입력 필드를 초기화
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
          <div className='todolists--item' key={todo.id}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <>
                <div className='todolists--item__info' >
                  <p>{todo.id}. </p>
                  <p> {todo.task}</p>
                </div>
                <div className='todolists--item__buttons'>
                  <Button 
                    text={'수정하기'} 
                    onClick={() => {setEditText(editText || todo.task);  setEditingId(todo.id); }}
                    className="editStart">
                  </Button>
                  <Button 
                    text={'삭제하기'}
                    onClick={() => deleteTodo(todo.id)} className="deleteBtn">
                  </Button>
                </div>
                
              </>
              
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <>
                <div className='todolists--item__info'>
                  <p>{todo.id}.</p>
                  <Input 
                    defaultValue={todo.task} 
                    onChange={(e) => setEditText(e.target.value)} 
                    />
                </div>
                <div className='todolists--item__buttons'>
                  <Button 
                    text={'수정 완료'}
                    onClick={() => updateTodo(editingId, editText)} className="editComplete">
                  </Button>
                  <Button 
                    text={'삭제하기'}
                    onClick={() => deleteTodo(todo.id)} className="deleteBtn">
                  </Button>
                </div>
              </>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
