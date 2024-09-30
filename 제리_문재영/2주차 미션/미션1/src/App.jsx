import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들어보기'},
    {id: 2, task: '제리 재영'}
  ]);
  
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');
  // console.log(editText)

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0){
      alert('내용입력필수');
      return;
    }
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) +2, task: text}
    ]);
    setText('');
  };


  // 2. 삭제하기
  const deleteTodo = (id) =>{
    // console.log(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };


  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    if (text.trim().length === 0){
      alert('내용입력필수');
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? {...item, task: text} : item))
    );
    setEditingId('');
  };



  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flexBoxC">
      <form onSubmit={handleSubmit} className="header">
        <Input
          type="text"
          value = {text} 
          onChange={(e) =>setText(e.target.value)} />
        <Button onClick={() => addTodo()} buttonName='할 일 등록'></Button>
      </form>
      <div>
        {todos.map((todo, _) => (
          <div key={todo.id} className="flexBoxR taskList">
            {/* 수정 중이 아닐때 */}
            {editingId !== todo.id && (
              <div className="flexBoxR taskBox">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <div className="flexBoxR taskBox">
                <p>{todo.id}.</p>
                <Input
                type = "text"
                defaultValue = {todo.task}
                onChange={(e) => setEditText(e.target.value)}
                />
            </div>
            )}

            <Button onClick={() => deleteTodo(todo.id)} buttonName='삭제하기'></Button>
            {/* editingId !== todo.id 수정이 아닐때 */}
            {/* editingId === todo.id 수정중 일때 */}
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId,editText)} buttonName='수정 완료'></Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)} buttonName='수정 진행'></Button>
            )}
          </div>
        ))}  
      </div>
    </div>
  );
}

export default App
