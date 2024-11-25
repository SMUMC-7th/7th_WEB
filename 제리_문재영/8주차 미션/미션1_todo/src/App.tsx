import { useState } from 'react'
import './output.css';
import './App.css'
import * as S from './styled/styled';

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
      <S.Input
      className='p-2.5 border border-purple-500 rounded-lg'
      name='title'
      placeholder='제목을 입력해주세요..'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <S.Input
      className='p-2.5 border border-purple-500 rounded-lg'
      name='content'
      placeholder='내용을 입력해주세요..'
      value={content} 
      onChange={(e) => setContent(e.target.value)}
      />
      <S.Button 
      className='bg-black'
      type='submit'>투두 생성</S.Button>

    </form>
    
    </>
  )
}

export default App

// const Button = styled.button`
//   padding: 10px;
//   border: 1px solid black;
// `