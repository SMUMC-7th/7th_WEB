import { useState } from "react";
import "./todo.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
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
      setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100) + 2, task: text },
      ]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>ToDoList</h1>
      </header>
      <form className="submitForm" onSubmit={handleSubmit}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo} type="submit" text="할 일 등록" />
      </form>
      <div className="todoList">
        {todos.map((todo, index) => (
          <div key={todo.id} className="todos">
            <div className="todo">
              <p className="todo__id">{index + 1}번</p>
              {editingId !== todo.id ? (
                <p>{todo.task}</p>
              ) : (
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              )}
            </div>

            <div className="btnContainer">
              <Button id="delete" onClick={() => deleteTodo(todo.id)} text="삭제하기" />
              {editingId === todo.id ? (
                <Button id="update" onClick={() => updateTodo(editingId, editText)} text="수정 완료" />
              ) : (
                <Button id="update" onClick={() => setEditingId(todo.id)} text="수정 진행" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
