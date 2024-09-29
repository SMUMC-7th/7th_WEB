import { useState } from "react";
import "./todo.css";


function App() {
  // 투두 리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    
  ]);

  const [text, setText] = useState('');

  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // 1. 추가하기
  
  const addTodo = () => {
    if (text.trim().length === 0){
      alert('텍스트를 입력하세요!');
    } else {
      setTodos((prev) => [
        ...prev,
        {id: Math.floor(Math.random() * 100) + 2, task: text }
      ]);
      setText('');
    }
    
  };

  // 2. 삭제하기

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id
    ));
  };

  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => item.id === id ? {...item, task: text} : item)
    );
    setEditingId('');
  };


  return (
    <div className="container">
      <header className="header">
        <h1>ToDoList</h1>
      </header>
      <form className="submitForm" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()} type="submit">할 일 등록</button>
      </form>
      <div className="todoList">
        {todos.map((todo) => (
          <div key={todo.id} className="todos">
            <div className="todo">
              <p className="todo__id">{todo.id}번</p>
              { editingId != todo.id ? (
                <p>{todo.task}</p>
              ) : (
                <input type="text" defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
              ) }
            </div>

            <div className="btnContainer">
              <button id="delete" onClick={() => deleteTodo(todo.id)}>삭제하기</button>
              
              {editingId === todo.id ? (
                <button id="update" onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
              ) : (
                <button id="update" onClick={() => setEditingId(todo.id)}>수정 진행</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
