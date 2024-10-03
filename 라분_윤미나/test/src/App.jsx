
import './App.css'
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {id:1, task : "투두 만들어보기"},
    {id:2, task : "미나 라분 로제"}
  ]);
  
  const [text, setText]= useState('');
  const [editingId, setEditingId]=useState('');
  const [editText, setEditText]=useState('');

  //렌더링 방지 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0){
      alert('내용을 입력하세요.');
      return;
    }
    setTodos(prev => [
      ...prev, //이전의 값들을 복사
      {id : Math.floor(Math.random()*100)+2, task : text}
    ]);
    setText('');

  };
  //2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  //3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev)=>
      prev.map((item)=>item.id === id ? {...item,task:text} : item));
    setEditingId('');

  }
  return (
    <section className='box'>
      <p className='title'>UMC TodoList</p>
      
      <form onSubmit={handleSubmit}>
        
        <Input 
          value={text} 
          onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={() => addTodo()} btnText='할 일 등록' type='submit'></Button>
      </form>
      <div className='lists'>
        {todos.map((todo)=> (
          // eslint-disable-next-line react/jsx-key
          <div style={{display:'flex', gap: '20px'}}>
            {/* 수정이 아닐 떄 */}
            {editingId !== todo.id &&(
              <div key={todo.id} style={{display:'flex'}}>
                <p>{todo.id}.</p> 
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id &&(
              <div key={todo.id} style={{display:'flex'}}>
                <p>{todo.id}.</p> 

                <Input 
                  defaultValue={todo.task} 
                  onChange={(e) => setEditText(e.target.value)}></Input>
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)} btnText='삭제하기'></Button>
            
            {editingId === todo.id ? 
              (<Button onClick={() => updateTodo(editingId, editText)} btnText='수정 완료'></Button>)
            : (<Button onClick={() => setEditingId(todo.id)} btnText='수정 진행'></Button>)}
          
          </div>
          
        ))}
      </div>
    </section>
    
  );
}

export default App
