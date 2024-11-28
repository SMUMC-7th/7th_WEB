import { useState } from 'react'
import './App.css'
import * as S from './styled/styled';
import {useQuery} from '@tanstack/react-query'
import { readTodoList } from './apis/todo';


function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {data: todos, isPending} = useQuery({
    queryFn: () => readTodoList({title}),
    queryKey: ["todos", title],
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
  }
  console.log(todos);
  
  return (
    <>
  <S.Form onSubmit={handleSubmit}>
    <S.Input
      name="title"
      placeholder="제목을 입력해주세요.."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <S.Input
      name="content"
      placeholder="내용을 입력해주세요.."
      value={content} 
      onChange={(e) => setContent(e.target.value)}
    />
    <S.Button type="submit">투두 생성</S.Button>
  </S.Form>

  {isPending ? (
    <div>로딩중입니다</div>
  ) : (
    todos[0]?.map((todo) => {
      console.log(todos,"dd");
      return (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
        </div>
      );
    })
  )}
</>

  )
}

export default App

