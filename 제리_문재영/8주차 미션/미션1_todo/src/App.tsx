import { useState } from 'react'
import './output.css';
import './App.css'
import styled from 'styled-components';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    
  }
  return (
    <>
    <form
    className='flex flex-col'
    onSubmit={handleSubmit}
    >
      <input 
      className='p-2.5 border border-purple-500 rounded-lg'
      name='title'
      placeholder='제목을 입력해주세요..'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <input 
      className='p-2.5 border border-purple-500 rounded-lg'
      name='content'
      placeholder='내용을 입력해주세요..'
      value={content} 
      onChange={(e) => setContent(e.target.value)}
      />
      <button 
      className='bg-black'
      type='submit'>투두 생성</button>

    </form>
    
    </>
  )
}

export default App

// const Button = styled.button`
//   padding: 10px;
//   border: 1px solid black;
// `