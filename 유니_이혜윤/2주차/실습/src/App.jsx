import { useState } from 'react'
import './App.css'

function App() {
  // 화면에 출력되는 투두리스트
  const [todos, setTodos] = useState([
    {id: 1, task: 'todo 만들기'},
    {id: 2, task: '히연 혜원 혜윤'}
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('내용을 입력하세요!');
    }
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) + 2,
        task: text
      }
    ]);
    setText('');
  };

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((item) => item.id !== id )
    )
  };

  // 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => item.id === id ? {...item, task: text} : item));
    setEditingId('');
  }

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <h1>🍀 Todo List 🍀</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} 
          onChange={(e) =>setText(e.target.value)}/>
        <button onClick={() => addTodo()} type="submit">할 일 등록</button>
      </form>
      <div className='todoList'>
        {todos.map((todo) => (
          <div key={todo.id} style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            {/* 수정 아닌 상태 */}
            {editingId !== todo.id && (
              <div className='list'>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정 중 상태 */}
            {editingId === todo.id && (
              <div className='list'>
                <p>{todo.id}.</p>
                <input defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>

            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>수정완료</button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정</button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
